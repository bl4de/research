# Hidden directories and files as a source of sensitive information about web application

Hidden directories, left accidentally (or not) on the server, might be a very valuable source of sensitive data leaks.
There's a lot of hidden directories: source code version systems folders and files (.git, .gitignore, .svn), any of .rc files (.npmrc, package.json, .htaccess), any not standard configuration files with common extensions, like config.json, config.yml, config.xml and many others.

There's a lot of web servers where there's no problem to find such files with a lot of sensitive information. Let's take a look at them in more details.

# Table of Contents

- [Source code version control systems](#source-code-version-control-systems)
	- [Git] (#git)
- [IDE project files] (#ide-project-files)
	- [JetBrains IntelliJ, PHPStrom, WebStorm] (#jetbrains-ides---intellij-webstorm-phpstorm)
	- [NetBeans] (#netbeans-ide)
	- [ActiveState Komodo IDE] (#activestate-komodo-IDE)
- [Developer Tools configuration files](#developer-tools-configuration-files)


# Source code version control systems

## Git

Git is "(...)a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency (https://git-scm.com/)". With GitHub.com web service it's one of the most popular source code version control system right now, especially in open source world. Also, a lot of companies use its own GitHub-like service (Gitlab - see https://about.gitlab.com/).

### Basic information about Git objects

Newly created Git repository contains some default folder and files, where all information are stored. Here's sample .git folder, with one commit done.

![.git folder structure with single commit]
(assets/git_directory_structure.png)	

Let's take a look at this from attacker point of view. Git repository content is written in objects. All of them are stored in .git/objects folder. 

Objects can be one of three types: _commit_, _tree_ and _blob_. 

*_Commit_* is an information about commit, with current tree (folders and files structure) object hash.

*_Tree_* contains information about folders and files structure - and every single folder or file has its own object hash stored in tree object. It might be another tree (folder which is one level down in the folders structure) or file.

*_Blob_* is Git object type where files content are saved. In other way - if you know an object hash of the particular file, you can read content of this file using *git cat-file* command.

When you find .git folder on web server, there's simple way to get content of any file, just by downloading and reading Git objects. To make sure that .git folder is available just check if you get HTTP 403 response (or similar, but not 404, because it means there's no .git folder on this server or in this location):


![.git repository found on the server]
(assets/how-to-find.png)	



### Reflecting remote files and folders using local Git repository


To be able to do this, you have to create your own, local dummy .git repository with skeleton folder structure and download Git objects from remote server.

First, create dummy Git folder:

```
$ git init
```

This will initialize empty Git repository with all required files and folders.


### Retrieving and reading information about objects

To start retrieving information from Git repository, first we have to find starting point. Git saves all information in log file and this file is available at _.git/logs/head_


![.git/logs/file example]
(assets/git_logs_head_file.png)


Let's take a look a little bit closer to sample line of this file:

```
0000000000000000000000000000000000000000 07603070376d63d911f608120eb4b5489b507692 
bloorq@gmail.com <bloorq@gmail.com> 1452195279 +0000	commit (initial): index.php initial commit
```

First two strings are object hashes (previous and current commit) - and this is exactly what we are looking for.
As this is the very first commit, first hash contains only 0 (it's dummy one), but second one contains informations about commit.

First we have to create valid path to object. Path contains common path to all objects in repository, which is _.git/objects_ and then there are two parts build from hash - a directory name (first two signs from hash) and filename (rest of it). So to get object identified by hash 07603070376d63d911f608120eb4b5489b507692, we should try to retrieve following url:

_localhost/testapp/.git/objects/07/603070376d63d911f608120eb4b5489b507692_


And - here we are - file download popup:

![Downloading object file]
(assets/download_object_file.png)

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
(assets/git-commands.png)


When you look at commit description, you can find an information about actual tree object hash - as I mentioned earlier, tree contains information about current folder structure. Using the same method as above it's simple to see how it looks like:


![Current repository files structure]
(assets/git-commands-2.png)


We're very close. As you can see, currently there's only one file, _index.php_, and also we know its object hash and type, which is _blob_. And this is what we need to see content of file using the same method as we've used to read content of _commit_ and _tree_ objects before (first you have to download object from web server, as described above):

![index.php content]
(assets/git-commands-3.png)


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

### .gitignore file

There's also one thing worth to mention if we've found .git folder abandoned on web server - .gitignore file. The purpose of this file is simple - it is the place where you can define all folders and files which should NOT be committed into repository - but it does not mean that they are not there ;) (there are just not exists as a part of Git repository, that's all). So it's the simplest way to spot all content which can not be find in the way described above.


![Sample .gitignore file]
(assets/sample-gitignore.png)


# IDE project files

IDE (Integrated Development Environment) used by many of developers have one in common - they save project's settings and a lot of additional information in their own files, created for each project separately. If such folder has been left on web server - this is yet another source of information about web application.

Let's take a look a little bit closer and as example we use my favorite JetBrains products (https://www.jetbrains.com/).


## JetBrains IDEs - IntelliJ, WebStorm, PHPStorm


Every project developed with one of JetBrains product creates its own hidden directory, _.idea/_.
This directory contains all information about project, files, directories and IDE settings.



![sample .idea directory]
(assets/idea_tree.png)


One of those files is extremely valuable from Security Researcher point of view. _workspace.xml_ contains a lot of useful information, which allows to enumerate all files and folders, source version control system information and many others.

We spot them step by step:

```xml
<?xml version="1.0" encoding="UTF-8"?>
	(...)
	<component name="FileEditorManager">
	    <leaf>
	      <file leaf-file-name="README.md" pinned="false" current-in-tab="false">
	        <entry file="file://$PROJECT_DIR$/README.md">
				(...)
	</component>
(...)
```
All nodes in _component name="FileEditorManager"_ contains all files and their relative paths (to project's root directory). Simply saying - it's just XML-wrapped result of Bash command _ls_ executed in main project folder :)

If you take a closer look at every _component_ node, you'll find information about used control version system, like in this example:

```xml
  <component name="Git.Settings">
    <option name="UPDATE_TYPE" value="MERGE" />
    <option name="RECENT_GIT_ROOT_PATH" value="$PROJECT_DIR$" />
  </component>
```

Also, there are information about commits and other tasks executed on project files, in node _component name="TaskManager"_:

```xml
(...)
    <task id="LOCAL-00211" summary="change WebSocket port to 1099">
      <created>1436206418000</created>
      <option name="number" value="00211" />
      <option name="project" value="LOCAL" />
      <updated>1436206418000</updated>
    </task>
(...)
```

Another interesting thing might be changes history, stored in _component name="ChangeListManager"_ node:

```xml
	<component name="ChangeListManager">
		(...)
		<change type="DELETED" beforePath="$PROJECT_DIR$/chat/node_modules/socket.io/node_modules/socket.io-adapter/node_modules/debug/Makefile" afterPath="" />
		(...)
	</component>
```

as well as in _component name="editorHistoryManager"_ node:

```xml
(...)
    <entry file="file://$PROJECT_DIR$/public_html/vendor/angular/angular.js">
      <provider selected="true" editor-type-id="text-editor">
        <state vertical-scroll-proportion="0.0">
          <caret line="3233" column="29" selection-start-line="3233" selection-start-column="29" selection-end-line="3233" selection-end-column="29" />
        </state>
      </provider>
    </entry>
(...)

```

If developer used to manage database with integrated DB manager, there are another very interesting files: _dataSources.ids_  where you can find databases structure, _dataSource.xml_, _dataSources.xml_, _dataSources.local.xml_ and _dbnavigator.xml_ contains example information:

```xml
        <database>
          <name value="database_name" />
          <description value="" />
          <database-type value="MYSQL" />
          <config-type value="BASIC" />
          <database-version value="5.7" />
          <driver-source value="BUILTIN" />
          <driver-library value="" />
          <driver value="" />
          <host value="localhost" />
          <port value="3306" />
          <database value="mywebapp" />
          <url-type value="DATABASE" />
          <os-authentication value="false" />
          <empty-password value="false" />
          <user value="root" />
          <password value="cm9vdA==" />   <!-- yes, this is password 'root' after Base64 decode :) -->
        </database>
```

or even more, like _dataSources.local.xml_:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="dataSourceStorageLocal">
    <data-source name="MySQL - mywebapp@localhost" uuid="8681098b-fc96-4258-8b4f-bfbd00012e2b">
      <secret-storage>master_key</secret-storage>
      <user-name>root</user-name>
      <schema-pattern>mywebapp.*</schema-pattern>
      <default-schemas>mywebapp.*</default-schemas>
    </data-source>
  </component>
</project>

```

Everything depends on project itself, used IDE plugins (like debugger, source version control or DB manager). In general, it is worth to take a look around and investigate every _component_ node.


As you can see, this is very interesting source of information. I suggest you to download any JetBrains IDE (they offer 30 days trials of almost every product, even more - you can download IntelliJ Idea Community or PyCharm Community and use it for free), then create sample project, add some folders and files, try to manage Git or SVN, create sample database connection and play around with Database Manager - and then dig into _.idea/_ folder to see what you can find there.


## NetBeans IDE


NetBeans (https://netbeans.org/) is another very popular, free IDE for Java, C/C++, PHP, HTML5 and JavaScript development. Currently supported (and owned) by Oracle, NetBeans becomes an official IDE for Java applications and it's absolutely free and open source.

NetBeans, as JetBrains IDEs, creates its own folder in project's root folder, contains all project settings - _nbproject/_

NetBeans is not as verbose as IntelliJ, PHPStorm or WebStorm, but you can still find some interesting information, which might be helpful when you are looking for particular attack vector against vulnerable web application. _project.xml_ is a good point to start investigating NetBeans project configuration.


![NetBeans project configuration]
(assets/nb_tree.png)


## ActiveState Komodo IDE

Unfortunately, Komodo IDE does not provide any information about project, the only file I've found in directory with project files was short XML file with content below:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- Komodo Project File - DO NOT EDIT -->
<project id="6a2f24b2-0c3d-f44c-bf66-f4341c507a30" kpf_version="5" name="bwapp.komodoproject">
<preference-set idref="6a2f24b2-0c3d-f44c-bf66-f4341c507a30" id="project" preftype="project">
</preference-set>
</project>
```

Filename is created using simple patter: project name, then dot, then 'komodoproject' postfix:

```bash
$ ls -l | grep komodo
-rw-r--r--   1 bl4de  staff    300 Feb  4 23:19 bwapp.komodoproject
```

All project information Komodo IDE stores in folders not accessible from web server - as far as you don't find Local File Include vulnerability, of course - but if you find LFI, I don't think you will have to find Komodo project configuration file anymore ;)


# Miscellaneous developer tools configuration files


There's a lot of configuration files of additional developer tools, which names mostly start with dot and contain a lot of information about used technologies, libraries, some directories not available directly from the browser or even not detectable by tools like DirBuster (http://sourceforge.net/projects/dirbuster/).

Some examples of these tools are _npm_ (https://www.npmjs.com/), linters for JavaScript, like ESlint (http://eslint.org/), Bower package manager (http://bower.io/) and many others.

Let's take a look at sample _bower.json_ file, which contains configuration for Bower and contains list of packages used in web application (frontend side):

```bash
{
  "name": "testapp",
  "version": "2.1.0",
  "authors": [
    "Rafal 'bl4de' Janicki <bloorq@gmail.com>"
  ],
  "description": "test application",
  "main": "index.html",
  "moduleType": [
    "globals"
  ],
  "license": "MIT",
  "dependencies": {
    "angular": "1.4",
    "pure": "~0.5.0",
    "angular-route": "~1.2.26",
    "angular-ui-router": "~0.2.11",
    "angular-bootstrap-datetimepicker": "latest",
    "angular-translate": "~2.6.1"
  },
  "devDependencies": {}
}

```
Maybe more interesting from security point of view is similar file for _Node.js_ or _io.js_ backend application - _package.json_ (if you find the way to read this file from web server, by for example Local File Include error - see https://www.owasp.org/index.php/Testing_for_Local_File_Inclusion for more information about LFI).
As it is a list of server side details - used packages, like database connectors, middleware components and so on - this file could contains a lot of valuable information about potential vulnerable software.

Sample _package.json_ shows, that there's MySQL database used (probably) and some client-server communication via WebSockets:

```bash
{
  "name": "Test application server dependencies",
  "version": "1.0.0",
  "author": "bl4de",
  "dependencies": {
    "socket.io": "^1.3.5",
    "mysql": "^2.9.0"
  }
}
```

There are also files like _.bowerrc_, _.eslintrc_, _.jshintrc_ and similar. As they not contain very sensitive information, there's always a chance that you can find some details about web application architecture, used libraries and/or frameworks, or even some valuable information put in comments. It's always worth to look into if you found them during reconnaissance phase.


# Summary

It is always worth to check if one of mentioned folder exists on the web server. Git repository is just a disaster, as it allows to download source code of web application, as well as IntelliJ IDE project configuration folder.	 If you are suing automated scanners (like DirBuster or similar) it's worth to check if those folders already exists in your dictionary files and add them if they don't.

Happy Hacking! :)



