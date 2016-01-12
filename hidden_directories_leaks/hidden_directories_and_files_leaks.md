## Hidden directories and files as a source of sensitive information leaks

Hidden directories, left accidentaly (or not) on the server, might be a very huge source of sensitive data leaks.
There's a lot of hidden directories: source code version systems folders and files (.git, .gitignore, .svn), any of .rc files (.npmrc, package.json, .htaccess), any not standard configuration files with common extensions, like config.json, config.yml, config.xml and many others.

There's a lot of web servers where there's no problem to find such files with a lot of sensitive information. Let's take a look at them in more details.

## Source code version control systems

### Git

Git is "(...)a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency (https://git-scm.com/)". With GitHub.com webservice it's one of the most popular source code version control system right now, especially in opensource world. Also, a lot of companies use its own GitHub-like service (Gitlab - see https://about.gitlab.com/).

#### Basic information about Git objects

Newly created Git repository contains some default folder and files, where all information are stored. Here's sample .git folder, with one commit done.

![.git folder structure with single commit]
(https://github.com/bl4de/research/blob/master/hidden_directories_leaks/assets/git_directory_structure.png)	

Let's take a look at this from attacker point of view. Git repository content is written in objects. All of them are stored in .git/objects folder. 

Objects can be one of three types: _commit_, _tree_ and _blob_. 

*_Commit_* is an information about commit, with current tree (folders and files structure) object hash.

*_Tree_* contains information about folders and files structure - and every single folder or file has its own object hash stored in tree object. It might be another tree (folder which is one level down in the folders structure) or file.

*_Blob_* is Git object type where files content are saved. In other way - if you know an object hash of the particular file, you can read content of this file using *git cat-file* command.

When you find .git folder on web server, there's simple way to get content of any file, just by downloading and reading Git objects.


#### Reflecting remote files and folders using local Git repository


To be able to do this, you have to create your own, local dummy .git repository with skeleton folder structure and download Git objects from remote server.

First, create dummy Git folder:

```
$ git init
```

This will initialize empty Git repository with all required files and folders.


#### Retrieving and reading information about objects

To start retrieving information from Git repository, first we have to find starting point. Git saves all information in log file and this file is available at _.git/logs/head_


![.git/logs/file example]
(https://github.com/bl4de/research/blob/master/hidden_directories_leaks/assets/git_logs_head_file.png)


Let's take a look a little bit closer to sample line of this file:

```
0000000000000000000000000000000000000000 07603070376d63d911f608120eb4b5489b507692 
bloorq@gmail.com <bloorq@gmail.com> 1452195279 +0000	commit (initial): index.php initial commit
```

First two strings are object hashes (previous and current commit) - and this is exactly what we are looking for.
As this is the very first commit, first hash contains only 0 (it's dummy one), as second one contains informations about commit.

First we have to create valid path to object. Path contains common path to all objects in repository, which is _.git/objects_ and then there are two parts build from hash - a directory name (first two signs from hash) and filename (rest of it). So to get object identified by hash 07603070376d63d911f608120eb4b5489b507692, we should try to retrieve following url:

_localhost/testapp/.git/objects/07/603070376d63d911f608120eb4b5489b507692_


And - here we are:

![Downloading object file]
(https://github.com/bl4de/research/blob/master/hidden_directories_leaks/assets/download_object_file.png)

Remember - you have to save this file in your dummy Git folder created earlier - this is the simplest way to be able to read content of Git objects. So make sure that you saved it in exactly the same location:

_path-to-your-dummy-git-repository/.git/objects/07/603070376d63d911f608120eb4b5489b507692_

To check the type of object, you can use following command:

```
$ git cat-file -t <hash>
```

To display the content of the object, use this command:

```
$ git cat-file -p <hash>
```

Now, we can check the type and read content of saved object (I'm doing this on original repository on my localhost, but you will get exactly the same result on your machine for any Git repository - the hash is the key :) )

![Execute Git cat-file commands on downloaded object]
(https://github.com/bl4de/research/blob/master/hidden_directories_leaks/assets/git-commands.png)


When you look at commit description, you can find an information about actual tree object hash - as I mentioned earlier, tree contains information about current folder structure. Using the same method as above it's simple to see how it looks like:


![Current repository files structure]
(https://github.com/bl4de/research/blob/master/hidden_directories_leaks/assets/git-commands-2.png)


We're almost home. As you can see, currently there's only one file, _index.php_, and also we know its object hash and type, which is _blob_. And this is what we need to see content of file using the same method as we've used to read content of _commit_ and _tree_ objects before:

![index.php content]
(https://github.com/bl4de/research/blob/master/hidden_directories_leaks/assets/git-commands-3.png)


Voila!

Now it is important to remember that this is content of _index.php_ as it was when commit described by object 07603070376d63d911f608120eb4b5489b507692 was done. If you take a look at log file, you can see that there was second commit (identified by object hash 4db7a14eee2cd3ff529278b75e1653e677fe1d02) and as it is last commit - it contains all last changes - maybe content of _index.php_ differs from what we have seen so far?

Following all steps (read commit content to find tree hash, then read tree to find index.php hash and so on), we will see actual content of _index.php_:

```
bl4de on Rafals-MacBook in /Library/WebServer/Documents/testapp $ git cat-file -p a4215057b6545240452087ad4d015bf9b5b817c5
<?php
echo "Hello testapp!";

$i = 100;
echo "Value of i is $i";

bl4de on Rafals-MacBook in /Library/WebServer/Documents/testapp $ 


```

#### .gitignore file

There's also one thing worth to mention if we've found .git folder abandoned on web server - .gitignore file. The purpose of this file is simple - it is the place where you can define all folders and files which should NOT be commited into repository. So it's the simplest way to spot all content which can not be find in the way described above.


![Sample .gitignore file]
(https://github.com/bl4de/research/blob/master/hidden_directories_leaks/assets/sample-gitignore.png)



## Configuration files

There's a lot of web applications where not all files are saved as files which should be parsed by web server. 
