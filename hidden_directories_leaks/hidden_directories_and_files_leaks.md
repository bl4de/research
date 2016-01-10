## Hidden directories and files as a source of sensitive information leaks

Hidden directories, left accidentaly (or not) on the server, might be a very huge source of sensitive data leaks.
There's a lot of hidden directories: source code version systems folders and files (.git, .gitignore, .svn), any of .rc files (.npmrc, package.json, .htaccess), any not standard configuration files with common extensions, like config.json, config.yml, config.xml and many others.

There's a lot of web servers where there's no problem to find such files with a lot of sensitive information. Let's take a look at them in more details.

## Source code version control systems

### Git

Git is "(...)a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency (https://git-scm.com/)". With GitHub.com webservice it's one of the most popular source code version control system right now, especially in opensource world. Also, a lot of companies use its own GitHub-like service (Gitlab - see https://about.gitlab.com/).

#### Folder structure

Newly created Git repository contains some default folder and files, where all information are stored. Here's sample .git folder, with one commit done.

![.git folder structure with single commit]
(https://github.com/bl4de/research/blob/master/hidden_directories_leaks/assets/git_directory_structure.png)	

Let's take a look at this from attacker point of view. As we know, all Git repository content is written in objects. All of them are stored in .git/objects folder. 

Objects can be one of three types: commit, tree and blob. 

Commit is an information about commit, with current tree (folders and files structure) object hash.

Tree contains information about folders and files structure - and every single folder or file has its own object hash stored in tree object. It might be another tree (folder which is one level down in the folders structure) or file.

Blob is Git object type where files content are saved. In other way - if you know an object hash of the particular file, you can read content of this file using git cat-file option.


To be able to do this, you have to create your own, local dummy .git folder structure and download Git objects from remote server using following method:

- create dummy Git folder:

*$ git init*

This will initialize empty Git repository with all required files and folders.

- download found Git objects from remote server. Remember to keep valid path to object.

- using following commands you can read all downloaded content as it was on your local machine:

To check the type of object, you can use *git cat-file -f* command.
To display the content of the object, use *git cat-file -p* command. 

In both cases use object hash as an argument.

