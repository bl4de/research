## Hidden directories and files as a source of sensitive information leaks

Hidden directories, left accidentaly (or not) on the server, might be a very huge source of sensitive data leaks.
There's a lot of hidden directories: source code version systems folders and files (.git, .gitignore, .svn), any of .rc files (.npmrc, package.json, .htaccess), any not standard configuration files with common extensions, like config.json, config.yml, config.xml and many others.

There's a lot of web servers where there's no problem to find such files with a lot of sensitive information. Let's take a look at them in more details.

## Source code version control systems

### Git

Git is "(...)a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency (https://git-scm.com/)". With GitHub.com webservice it's one of the most popular source code version control system right now, especially in opensource world. Also, a lot of companies use its own GitHub-like service (Gitlab - see https://about.gitlab.com/).

#### Folder structure

Newly created Git repository contains some default folder and files, where all information are stored. Here's sample .git folder, with one commit done.

![Empty .git folder structure]
(https://github.com/bl4de/research/blob/master/hidden_directories_leaks/assets/git_directory_structure.png)

Let's take a look at this from security point of view.