## Burp Suite and Chromium setup how-to

This is quick how-to presents my way to configure Chromium web browser to work with Burp Suite HTTP Proxy.

### Why Chromium

As a full time, Full Stack Web Developer I use Chromium-based browsers and runtimes (Chromium, Chrome, Opera, node) all the time in my daily work. I found Developer Tools build in all of those products the most easy, flexible and powerful developer tools ever.  

Also, Chrome Developer Tools team constantly works on various improvements and big community ships a lot of plugins, which are easy to install and can be easily integrate into Chrome Developer Tools panels. Plugins are available for such frameworks like Angular or React (to name a few) - for web developer they are very useful tools, but not only for them.

From web application security researcher point of view, those browsers have one big disadvantage. There is no simple way to set up Burp as proxy just for them, not for the whole system.

Actually only one browser allows you to do that and it's Firefox, first choice for many penetration testers because of easy way to set up Burp as proxy just for Firefox using Network/Advanced settings. 

Unfortunately, Firefox is very slow and its developer tools are far less advanced than in Chromium/Chrome/Opera.

Solution for this was to create simple console script with couple of additional options. I'm using this script not only to run Chromium with proxy set to Burp, but also to disable XSS Auditor while testing website or web application for XSS vulnerabilities.

But let's start from Burp Suite first.

## Set up Burp Suite

Burp Suite Free Edition is one of the best tool any not professional penetration tester, bug hunter or web application security eager (like me) can get (Thanks Portswigger!!!).

You can download Burp Suite from this url:

https://portswigger.net/burp/download.html

After installation run Burp Suite and go to Proxy->Options tab and in Proxy Listeners set up your local address and port you want to use (it can be any available port above 1024 well known ports, 8080 is just set by default)

![Proxy settings]
(assets/proxy1.png)

If you are not familiar with Burp - 'Getting Started With Burp Suite' is likely the best place you can start from:

https://portswigger.net/burp/help/suite_gettingstarted.html


### Set up Chromium

Chromium, web browser based on Blink HTML engine and V8 JavaScript engine (used also by Chrome, Opera and node projects) can be downloaded from here:

https://download-chromium.appspot.com/

Builds are available for all major platforms (OSX, Linux, Android and Windows)

![Chromium download page]
(assets/chromium.png)

As you can see, there is always the newest build available. That's fine, because we don't want to use Chromium as our main web browser or even for testing web applications for our clients (if you're web developer you are already aware of this, aren't you? ;) )

What we want is the newest compilation of Chromium Developer Tools to be able to use it while doing our web application penetration testing or bug bounty stuff.

When you run Chromium, you can open its Developer Tools just by clicking F12 on Windows and Linux or CMD+ALT+i on OSX:

![CDT]
(assets/dt1.png)

There are plenty of options available and what I recommend is just to go to this website:

https://developer.chrome.com/devtools

You can find there everything you will need to become familiar with Chromium Developer Tools.

### Run Chromium with Burp Suite as HTTP Proxy

Now, when we have both Chromium and Burp set up, it's time to run them as one, perfect web application killing machine :)

Here is my Bash script I am using to run Chromium using Burp as proxy:

```bash
#!/bin/bash
#
# see available options:
# http://peter.sh/experiments/chromium-command-line-switches/
#
# 8080 - is a standard port for Burp
# To disable XSS Auditor in Chromium simply put 0 as second argument, 1eaves XSS Auditor enabled
#

echo
echo "Usage: chromium [port] [enable xss Auditor]"
echo " example:"
echo " $ chromium 8080 1 - runs Chromium listening on 8080 and XSS Auditor enabled"

# default settings
xss_auditor=""
port=""

if [ $1 -ne 80 ]; then
	port="--proxy-server=127.0.0.1:$1"
fi

if [ $2 == 0 ]; then
	xss_auditor="--disable-xss-auditor"
fi

echo "[+] running ./Chromium $port $xss_auditor"

# update those lines to your system specific path:
cd /Applications/Chromium.app/Contents/MacOS
./Chromium $port $xss_auditor

```

Depends on operating system you are using and path to directory where you have installed Chromium you have to modify last two lines (go to directory with Chromium and run Chromium with chosen options).

There are two options available in this script (of course you can modify it as you want).

First, you may want to pass port number for proxy. So, if you set up Proxy listener port in Burp as 9999, this is the value you have to put in script as the first argument.

Second one is a flag to disable Chromium XSS Auditor. XSS Auditor is a build in XSS prevention tool in all Chromium based browsers (Chromium, Chrome and Opera) and it prevents user from some of less sophisticated XSS payloads.

From penetration tester or bug bounty hunter point of view it's nice to have an option to disable this prevention. In script above, if you pass 0 - you disable XSS Auditor, any other value leaves it enabled.

Here's sample of complete command to run Chromium with proxy litening on 8080 port and XSS Auditor disabled (```chromium``` is name of script I am using):

```bash
$ chromium 8080 0

Usage: chromium [port] [enable xss Auditor]
 example:
 $ chromium 8080 1 - runs Chromium listening on 8080 and XSS Auditor enabled
[+] running ./Chromium --proxy-server=127.0.0.1:8080 --disable-xss-auditor
```

## Summary

Of course if you are not a fan of console scripts, Bash and all this stuff, you can still run Chromium with all those features (proxy, XSS Auditor disabled) simply by running this command:

```
path_to_chromium_folder/Chromium --proxy-server=127.0.0.1:8080 --disable-xss-auditor
```

There are a lot of other options which can be set while running Chromium. One of the best list of them I found is on this website:

http://peter.sh/experiments/chromium-command-line-switches/


If you have any questions just ping me on Twitter (https://twitter.com/_bl4de) or send me an email to bloorq[at]gmail[dot]com.

Happy hacking!!!

Rafal 'bl4de' Janicki


