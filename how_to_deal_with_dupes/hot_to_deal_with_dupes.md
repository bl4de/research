## How to deal with duplicates

### Intro

If you are Bug Bounty Hunter, you know that feeling, when your report is marked as 'Duplicate'. This moment is like 4th place in the race - you were so close to the podium. So close to Gold, Silver or Bronze. But you've finished with nothing and the only thing left to do for you is to watch medal ceremony from tribune. And cry.

If you are not involved in bug bounty programs, there is quick explanation of what 'Duplicate' means. In bug bounty programs you compete against other hunters in hunting for bugs. Two biggest and most popular bug bounty platforms (HackerOne and Bugcrowd) mantain programs for their clients and allows you to send to those programs something called 'Report' - which is description of security issue you have found with all required information about your finding (what kind of bug, where did you find it, how to reproduce it and, if you know how to do this - how to mitigate).

Program can accept your report, if it's valid, or rejects one if bug you found is not valid, program maintainers can't reproduce it or you found this bug in resource which is 'Out of scope' ('Out of scope' is the way programs mark particular types of vulnerabilities as not potential security issues, or resources like web application or server as something you should not look for bugs there). Typical examples of out of scope issues are CSRF on logout, self XSS with no security impact or lack of specific, security related HTTP headers in server's response.

If you send reports, which are defined as 'Out of scope', those reports likely will end up as 'Not applicable', which has some consequences for researchers (depends on the platform), including loosing reputation points or even disqualification from the program.

If your report is correct (vulnerability you have found exists, you have prepared report with all required information, detailed step-by-step Proof of Concept, is reproducible by the program maintainers and has security impact) - your report will be triaged and resolved. You will gain Reputation points, maybe some nice swag and (in monetary programs) finally get the bounty, which is all what bug bounty hunting is about, right? :)

### 'XXX closed the report and changed the status to Duplicate'  :(

But there is one, very specific situation, when your report is valid (thus, it can't be rejected as 'Not applicable'), you have prepared the best PoC you could, issue is definitely in scope and has significant security impact - in general, everything's going fine and you're already starting to count money you will get. You get notification, your heart starts to beat faster and faster, you open your mailbox and...

{dupe1.png}

Ouch :/

4th place. No medal. You were good, but not good enough. 

The worst feeling bug bounty hunter can feel.

{empty.gif}

If you know that feeling - don't worry, been there, done that. Nobody likes duplicates (or 'dupes' like some researchers call them). Getting duplicates constantly, if you're participating in public programs and comepte against dozens, if not hundreds, of other researchers is a routine. They are also nothing special in private, invite-only programs, where there are not as many researchers, but their level of knowledge and skills allow them to find most of low hanging fruits and not-so-low hanging fruits as well very quickly.

This can be very frustrating and demotivates you from hunting. You're starting to think if all your effort you put in finding the bug you've get dupe for is worth all energy you've put in.

The good news is: yes, it is worth. Every single second you have spent on this bug and report. And here's why.


### Why duplicates aren't that bad or even why they are actually pretty good - for you.

Let's assume sample issue you have found in private program you have been just invited to and ended up with 'Duplicate'. It's RCE (Remote Code Execution) in web application written in Java, run on Tomcat application server in internal network. You have found this issue by exploiting template injection in JSP (Java Server Page) file along with SSRF (Server-Side Request Forgery). 

First thing - ask yourself what you had to do to find this issue. Let's get through, step by step.

1. You had to find out, what software is running on this server.

This requires some basic recon - maybe some basic banner grabbing, maybe something more sophisticated, like port scanning with nmap and -sV option set. You had to use some tools - netcat, nmap, maybe nikto.

2. You had to figure out how website is build

Did you spot JSESSIONID in cookies indictaes that this is Java application? Maybe there was HTTP header set with JSP string in it? Maybe you triggered an error with 404 Not Found standard Tomcat response?

3. You had to actually spot that user input is reflected in JSP file

That was it, right? You figured out that one of user inputs is reflected in HTML output and you realized it has to be processed by the server in some way? How long it took you to craft working exploit and see response from your command you have sent to teh server, like whoami or uname -a? How many blog posts you have to read?

4. Finally, you had to figure out that there is request sent to that internal server, which leads directly to SSRF

The input from JSP file is used in request sent to internal server, behind the firewall. This server is unaccesible form outside, but this particular injection you have just found in JSP file allows you to spot that response comes from something hidden deeper in program's network. If SSRF was something new for you (let's assume that it is true) - an enormous effort had to be put from you to exploit this and turn into fully exploitable RCE. Hours, if not days spent on reading, searching, looking in Hacktivity for similar reports to find out how it can be done.

5. Last, but not least - you had to write report and put detailed Proof of Concept there

Write a good report is also a part of the whole process. With every report you gain new skills, you actually LEARN how to describe issue you've just found in the way people from the program will understand it well.

It takes a lot of time and a lot of effort. It's not straightforward, it's not just to fill out the template. Every report is unique. And the way to discover the vulnerability, especially more severe like RCE, is unique as well.

And this is what makes every duplicate a good thing:

- it forces you to __learn__. __A lot__. With every bug you found, with every new report you write - your knowledge and skills grow up. __Practice makes the master__. No other words fit here better than this old quote.
- if you exploit something in something which is compeltely new stack for you, __you always win__. You have to master new tools and techniques. Every stack requires different approach and methods to exploit the same category of vulnerabilities. Remote Code Execution exploitation in LAMP (Linux/Apache/MySQL/PHP) stack application is totally different than exploiting the same issue in Node.js or Java application
- you __learn new programming languages__. To be able to exploit RCE in application you have no previous experience with, it requires from you at least basic understanding of language syntax, encoding it uses, how to get readable output - all those things which makes your exploit actually working
- it is very common that you end up with duplicate only to realize that there is another vulnerability right beside the one you have just found. RCE is duplicate? Maybe there is Stored XSS in the same screen, if application does not sanitize user input correctly? Maybe you have just found a way to bypass WAF (Web Application Firewall) because of syntax you have used and it allows you to exploit XSS you couldn't exploit earlier?

Those were technical things. But there are other as well, maybe even more important if you are going to dive into bug bounty and make it your lifestyle:

- you know __you can find very severe vulnerabilities__. You are getting more self-confident. You weren't first, but you need to realize __it does not matter__ really. You could not know that someone else just found the same bug. 

Bug was there and you have found it, exploit it and gain remote code execution in something you have no idea how it works earlier. Remember that bug bounty hunting is almost always a 'black box' in penetration testing methodology - that means you have no idea what's under the hood unless you actually dig into. There are only couple of programs out there, where you can use 'white-box' approach - and there are mostly PHP open source applications where everyone can download the source, run it locally and read the code. Magento (Bugcrowd), WordPress, concrete5 and Phabricator (HackerOne) are the examples, as well as Discourse (Ruby).

It's not your fault when you end up with Duplicate. Remember - your competitors are always better than you (just look on the Leaderboard and compare your position and number of bugs found with them :) ). But if you can find very, very severe bugs in the same fashion like @Mr Hack, @meals, @Geekboy, @mongo, @yappare, @zseano or @mlitchfield - nothing can stop you from heading to the Top!

Don't think in short term - 'Oh God, it's a dupe! I'm doomed :('. Think in the long term. For every duplicate you get, there are (or will be) two, three, five or ten valid reports. Duplicates are, from their nature, impossible to omit. __Always remember you are not the only one hunting for bugs__. This is especially important in most popular, public programs out there like Yahoo, General Motors, Uber, Shopify or VK.com.

Just look at the numbers of bugs found in those programs. Hundreds, even thousands (like Yahoo). How many of them were accompanied with five, ten or twenty duplicates? Many. It's inevitable.

### How to avoid duplicates. If it's even possible.

Short answer - no, it's not possible due to all reasons I've already explained earlier. But there are some simple methods you can use to at least avoid obvious dupes:

- if you are working on new program (let's say in the first 48 hours after program went out public) - any __low hanging fruit__ like Reflected XSS in 'Search' input, Open Redirect in URL, hardcoded credentials in HTML or JavaScript source, SQL Injection on ID parameter in URL or Local File Include in something like _index.php?include=about/careers.php_ are already reported if you did not spot them in first 5 minutes of program life.

Deal with this. New public program is the most desired thing on any bug bounty platform nowadays. There are more than five thousands active researchers on HackerOne and probably on Bugcrowd as well and public programs don't start very often. For guys without wide choice from private programs to work on - it's the only way to gain Reputation (believe me, I was starting in the same way). So there will be hundreds of them there already. 

Chances that you will be first to spot low hanging fruit is very small.

- if public programs are the only option for you for now, try to find one with the most wide scope as possible

Start from looking at Hacktivity in such program. What types of bugs are the most popular? Which services are most attacked? How many bugs were resolved so far? How many researchers were revarded? When the last bugs were disclosed?

You should look for programs where:

- scope is wide - the best examples for me are so far Yahoo and __General Motors__. Especially second one looks interesting, because literally __everything__ is in scope. I was able to report the weirdest issues I was able to spot, with almost no security impact. Every report I've sent to GM program was triaged and GM Security Team never left any of vulnerability I've found not triaged and resolved.

The result is that for 29 reports I've sent to GM program so far, only 7 were not fully resolved - including __five of them__ which were actually duplicates (plus two closed as 'Informative' without any security impact for GM and Reputation for me). 5 dupes in 29 reports in total, in public program which runs for two years and has about one hundred hunters involved so far is quite good result I think.

- there are many types of reported issues

If program scope contains only one target and almost all reports are Reflected XSS - if you found one, chance that this will be duplicate is bigger than when there are very different types of vulnerabilities, because that means the target is pretty vulnerable and not well developed. If there are many vulnerabilities based on lack of input validation, both on client and server side - try to focus on something more severe.

- if program is very active and there were reports resolved in last couple of days - probably is very popular and many bugs are found on daily basis

That means only one thing - getting duplicate is more likely here tahn in program which has last resolved reports dated in weeks or even months. That could means for example that target is pretty hard to hack, thus has not so many low hanging fruits, requires more work involved to spot vulnerability and vulnerabilities are not that easy to exploit due to WAF, sanitization of user input or stack used to build it - it can be something not as popular as LAMP or Ruby on Rails.

- if you have software developer background, like me - try to focus on programs with open sourced codebase (like for example my favourite concrete5, where I actually reached 2nd position with 12 resolved reports and 4 duplicates) - there are not as many researchers looking for issues in such programs by analyzing source code.

When you have source code in front of your eyes, you are familiar with the language and you know what to look for - chances that you will find something really severe are very high. Also, there are many vulnerabilities which are almost impossible to find in traditional, black-box seacrhing, like nuances in business logic which allows to gain privillege escalation or get code execution because of some old, hidden functionality.


### Get started to like duplicates!

Duplicates are good. Try to like them for all that knowledge you gain from them. They won't harm your Reputation as much as Informative or Not applicable. The last ones is something you have to avoid __always__. It's actually pretty easy:

- read the scope, very carefully.

It's the easiest part. 'Out of scope' means out of scope. Don't even try to report anything shich is included in 'Out of scope' section of program description.

There are some vulnerabilities you maybe found in some resource marked as out of scope but you believe it can hurt program very badly. In such case - try to contact program maintainers directly and ask them if they will consider your finding as valid and will accept it. If yes - don't forget to mention about this in your report. Best thing is to attach mail communication with program team member, where there is clear statement that program will accept your submission. The person you inform about it might not be the same which will investigate your report and it's better (and saves time on both sides and avoid unnecessary closing and reopening report several times) to keep things clear from the beginning.

Besides this one exception - __never, ever report anything which is out of scope__. Just don't. It's a golden rule of your good reputation on bug bounty program.

If you won't follow this rule - you will end up with negative Signal and your reputation will go down very quickly, which in fact ruins all your chances for any invitation to private program in the nearest future.

Last, but not least - every dupe adds 2 points to your Reputation (on HackerOne platform) when original report gets resolved. It's not 7 points as for resolved one, but still something better than 0, isn't it? :)

### Final words

At the moment I'm writting these words, I have 60 reports in total (resolved or triaged and waiting for resolving) where 13 of them are closed as duplicates. But even though they cost me 65 points of Reputation less (13 * 2 instead of 13 * 7) - I've learnt a lot from them. In my dupes there are reports including vulnerabilities like:

- time-based SQL Injection in ASP.NET+MSSQL application (I am not very good at exploiting this stack, so it was good lesson)
- another SQL Injection in ASP.NET application (yeah, it seems I am not very lucky with ASP stack ;) ) - again, it requires a lot of work from me to exploit this one as well
- Stored XSS (couple of them in various programs)
- Reflected XSS including two in 'Search' features (one I've found in Starbucks, about an hour after it went public - classical low hanging fruit found by someone probably in first minutes, it was so obvious that it was impossible to get this not duplicated after the whole hour :D )

I can't even say how much time I've spent on them, how many blog posts I've read. For sure my skills in writting custom tools and exploits in Python were improved. I have to read almost every whitepaper about exploiting SQL Injections in ASP.NET+MSSQL applications available in the whole Internet (I'm pretty familiar with this right now and it will be much easier for me to exploit such vulnerabilities in the future). And I don't know how many new XSS payloads I've used, including reading probably all posts on @Brute's blog (thanks Brute!)


I hope you will look at every single duplicate you'll get in the future in different way, as I've used to. Of course, I wish you not too many of them! But getting duplicates is a part of being Bug Bounty Hunter, like being hit in the face is pretty normal for every boxer in the world :)

Happy Hunting!

bl4de
