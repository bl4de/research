### Intro


If you are JavaScript developer and you are working with Node.js, chances that you've never heard about [npm](https://npmjs.org) are literaly slim. **npm** (Node Package Manager) is a repository, where hundreds of thousands ready-to-use modules for your state-of-the-art Node.js application are just waiting to be downloaded and used as a part of your codebase. node_modules directory in your project grows up exponential along with every new feature you are working on.

Maybe it's even more and **you** develop npm modules as well, giving back your work to the community. That's really fantastic, I always encourage to take a part in open source projects and share your work with the others. Developers build this ecosystem and thanks to them it's amazing.

There are many types of modules doing specifing things. One of those things are **static servers** allow to serve static content from your server directly to your users. They can be used for eg. browsing directories, edit files or they can just work like small CDN for your CSS or images.

If you are an author of such module or you are going to build one, maybe just for your needs, maybe just for the company you work for - security should be a very important factor in your project. Unfortunately, this is not always the case and in this post I present most common security issues in static servers npm modules.

In December 2017, **[Node.js Ecosystem Bug Bounty Program](https://hackerone.com/nodejs-ecosystem)** emerged on **HackerOne** platform. The very first report, opened by Yasin Soliman [@ysx](https://hackerone.com/ysx) was Path Traversal vunlnerability in ```serve-here``` module and since then, this kind of vulnerability (which in most cases leads to Local File Include) is most common.


### Path Traversal and Local File Include

[Path Traversal](https://www.owasp.org/index.php/Path_Traversal), also known as Directory Traversal, is an issue, which allows attacker to go up in directory tree on the remote server, using ```../``` sequence (dot-dot-slash).

This type of vulnerability exists when server uses user input (eg. filename) to build relative (or absolute) path to resource. This leads to several vulnerabilites, like [Local File Inlclusion](https://www.owasp.org/index.php/Testing_for_Local_File_Inclusion). Very dangerous situation occurs when application allows users to upload files. If An attacker is able to change destination path, one is able to upload eg. webshell into the directory accessible in the browser and gain an access to the server.

Let's see how this vulnerability can be exploited in the wild.

Presented code fragment comes from [public](https://www.npmjs.com/package/public) npm module:


```javascript
    var pathname = url.parse(req.url).pathname;
    var filePath = path.join(dir, pathname); // Real file path
    var base = filePath.replace(dir, ''); // Base path for browser link
    var abs = path.resolve(filePath); 
    console.log(new Date().toString(), abs);
    fs.readFile(filePath, function(err, data) {  // <-- vulnerable line
      if (err) {
        (...)
      }
      res.writeHead(200, { 'Content-Type': mime.lookup(filePath) });
      res.end(data);
```

In line marked with ```<-- vulnerable line``` comment, you can see ```fs.readFile()``` call, where ```filePath``` is used as an argument.

```filePath``` is build with ```pathname``` argument read from HTTP request. No sanitization was introduced, so if ```pathname``` contains dot-dot-slash sequence, Path Traversal can be exploited.

When ```public``` was run, nothing could stop attacker from reding content of any file on the server:


```
$ curl -v --path-as-is http://127.0.0.1:8080/../../../../../etc/hosts
```

This issue was fixed by the maintainer. You can read full report on HackerOne here:

[[public] Path Traversal allows to read content of arbitrary files](https://hackerone.com/reports/312918)


Another example of vulnerable code comes from [hekto](https://www.npmjs.com/package/hekto) module. First, let's see how path is read from HTTP request:

```javascript
 let file = path.join(process.cwd(), argDir, this.request.url);
 ```

 Now, ```file``` contains full path to requested resource, starting from current working directory. Next, some logic is implemented, which takes action depends on file extension:

 ```javascript

    if (fs.lstatSync(file).isFile()) {
        this.status = 200;

        if (path.extname(file) == '.html') {
            this.type = 'text/html';
            this.body = fs.createReadStream(file);
        } else if (path.extname(file) == '.css') {
            this.type = 'text/css';
            this.body = fs.createReadStream(file);
        } else {
            const fileBuffer = readChunk.sync(file, 0, 4100);
            const mime = fileType(fileBuffer);

            if (mime) {
                this.type = mime.mime + '; charset=utf-8';
            } else {
                this.type = 'text/plain; charset=utf-8';
            }

            this.body = fs.createReadStream(file);
        }
    }
 ```

 As you can notice, nowhere in the code ```file``` is checked against existence of ```../``` sequence. This again leads to Path Traversal vulnerability and allows attacker to read content of arbitrary files.


Solution implemented by module's maintainer simply checks if ```file``` path "fit" inside current appliaction working directory (if ```../``` sequences are present, ```file``` won't pass this condition):

```javascript

    if (!isPathInside(file, path.join(process.cwd(), argDir))) {
      this.body = 'Bad Request';
      this.status = 400;

      return;
    }
```

```isPathInside``` method comes from 
[path-is-inside](https://www.npmjs.com/package/path-is-inside) module, which is a good choice if you want to prevent your code against this type of issue. As an author explains in his GitHub repository [README](https://github.com/domenic/path-is-inside/blob/master/README.md) - detection of path is not as trivial as it looks like and incorrect implementation of path resolving routine can easily introduce Path Traversal vulnerability in your module.


 You can see the full report on HackerOne here:

 [[hekto] Path Traversal vulnerability allows to read content of arbitrary files](https://hackerone.com/reports/311218)

Here's another variant of this attack scenario.

This time, [serve](https://www.npmjs.com/package/serve) module allows to display directory content directly in the browser:


![](assets/1.png)


Attacker was able to use ```%2d``` and ```%2f``` characters (an ASCII codes of ```.``` and ```/``` respectively) and forces server to display content of directories outside of the application root:

![](assets/2.png)


An issue was [fixed and patch deployed](https://github.com/zeit/serve/pull/316/files) in just 2 days after report was opened. The implementation of fix contains ```decodeUriComponent()``` (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)  JavaScript function, which turns URI encoded characters into their ASCII representation, so ```%2f``` becomes ```/``` and ```%2e``` becomes ```.```. This normalization allows to verify if sequence ```../``` is present in the url and does not allow to bypas protection agains Path Traversal with URI encoding.


You can read full report here:

[[serve] Directory index of arbitrary folder available due to lack of sanitization of %2e and %2f characters in url](https://hackerone.com/reports/307666)



**Remember to always sanitize user input comes from HTTP Request and never use anything which comes from Request directly in code, especially if this code executes calls to the system, like opening and reading files or streams, creating directories and similar methofs from [File System Node.js module](https://nodejs.org/dist/latest-v8.x/docs/api/fs.html)**



### HTML Injection and XSS issues in displayed content



### nodestructor - static Node.js application code analysis tool




### Summary
