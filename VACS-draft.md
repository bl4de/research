## Introduction

We're living in the Net. All our data, communication, money, work, almost everything depends on billions of zeros and ones traveling all around the world in every single second. We're living in information age and there's no doubt it will be changing our lives more and more in the nearest future.

But there's also different story. There are thousands of people trying to steal those data and use them to do bad things. Cybercrime is raising, like never before, and we all should do something to stop this.

Things already started to change. Companies like Google, Yahoo!, Mozilla, Microsoft and many others actively support IT Security community providing Bug Bounty programs, looking for software vulnerabilities and sharing knowledge. Conferences like DefCon, BlackHat, CanSecWest, OWASP AppSec and many others all around the world allow people to learn and share information, experience, tools and even more knowledge.

Couple of years ago, a new popular way to improve IT security emerged. Bug bounty platforms, like HackerOne, BugCrowd, Synack and Cobalt started to attract companies to run their own Bug Bounty programs.

There are hundreds of bug bounty programs running right now with many more to come in the next years. In those programs, thousands of Ethical Hackers, both professional and amateur, young and old, advanced and beginners, men and women, looking for bugs in software, websites, web applications and helping to fix security issues. They are all working for safer web and safer software. They helped to fix tens of thousands security issues so far, providing safer web for all of us.

But unfortunately this is not enough. There are millions of websites and web applications in the Internet right now. And as the recent report from Acunetix points - approximately 55% of 45,000 websites (more than a half of forty five thousands) contain at least one serious vulnerability (XSS, SQLi, Remote Code Execution, Local File Include, Remote File Include). And, what is more important, there's almost 9% more than in 2015.

As 45,000 is a quite big probe, we can assume that this problem exists in larger scale as well.

**This is just a disaster. Couple of weeks ago World Wide Web celebrated its 25th Anniversary. And after 25 years - we're still not able to provide secure websites**


## What is this all about, really?

Information. Why so many websites are still so vulnerable? The reason is relatively simple. I found that **in many cases the problem is that website owner simply don't know about vulnerability in their own website**. And this is one thing we should change as soon as possible.

Let's be honest - in many cases everything starts from relatively simple level. Let's take a look at some examples: 

- outdated software like not patched CMS or online e-commerce engine 
- "selfmade" CMS system with simple SQL Injection, Remote Code Execution or similar high risk vulnerability
- Stored XSS vulnerability allowing to steal website administrator credentials and gain access to admin panel 
- Reflected XSS which allows to inject malware via phishing attack 
- weak credentials for remote server access, easy to bruteforce, dictionary attack or just trivial to guess
- left folders from Git, SVN or any other source version control system repository, which allows to download and read source code
- Local File Include vulnerability giving access to website source code contains database credentials
- administration panels hidden behind "secret" urls or with very weak credentials (again, easy to guess, bruteforce or exploit with dictionary attack)

All vulnerabilities above have couple of things in common:

- they are relatively simple to find and prevent
- they are also **very simple to find by cybercriminals too**
- they are **very easy to exploit**

This is not a rocket science and every day I am surprised I can find any of those listed vulnerabilities in just couple of minutes. I did some experiment recently and started to look for vulnerable websites during my lunch break (~30 mins), based on simple Google dorks. I was able to find from five to even twenty vulnerable websites while eating my sandwich (XSS, SQL Injection and LFI were the Top 3).


When I find problem in my code, I'm resolving it. If it's a security problem, I'm resolving it even faster.

**If I find security problem in someones else code, I'm trying to inform the right person immediately to allow them to fix their code.**

In almost every single case, **the problem is that I don't know who exactly I have to or should to notify**. I dig around, obviously 'Contact' and 'About us' are the first places I go. Sometimes I find email like _info@companyname.com_, if I am lucky it's even better, like _webmaster@companyname.com_


If I find something like this, I send my standard notification email where I introduce myself with my full name and surname, what I do and why I contact. 
Then, I nicely ask about contact information to responsible person which I can provide Proof of Concept of vulnerability, screenshots (if needed) and all technical information about vulnerability I've just found. I do this because I care about web security and I want to help. Really. This is how I can help to make web better and safer place. This is one of many ways I am doing this.

Almost in every case I'm trying to provide sample scenario how vulnerability can be used by cybercriminals (eg. phishing attack or maybe even data breach)

**My notification email to response ratio is about 20 to 1.
Yes, for every twenty emails sent with vulnerability description I'm receiving approximately one response. If any.**

Another problem occurs when I just can't find any contact information on the website. In such cases I start to dig for social media accounts, like Twitter or Facebook and try to reach someone using one, if found.

So far, it's even worse than emails. **Almost nobody responses using this communication channel even if I see that account is active and fresh tweet or post on Facebook appeared online an hour or day earlier**


## Let's summarize problems we found so far

In typical website, either private or corporate, two or three problems occur:

#### Problem number one

I can not find any IT stuff contact information even if this is very big, well known brand (company), except some _webmasters@company.com_ from almost always I did not get any response anyway, so it's totally useless.

#### Problem number two

Nobody really cares about what I found. And this is even bigger problem than the first one, because it is a proof that IT Security is **not important** for website owner and I suppose it's not a problem with their website only but with whole IT infrastructure. Nowadays, where cybercrime is a real threat - it's incomprehensible.

I'ts **stupid**, it's **ignorance**, it's **lack of basic knowledge of security**

#### Problem number three

This one is specific for big companies. 

Internal procedures. Exchange information between departaments. Find the right people to do the right job. 

The truth is that meetings, conference calls, Excel spreadsheets and "Judy from HR has a new boyfriend" in the kitchen - **they all do not resolve any problems**. Information like mine get stuck somewhere between PR, Marketing and this strange guy from IT which nobody knows, because he is quiet and does not go to company Friday Lunches - somewhere in the middle of Big Company Nowhere.



## Vulnerability Alert Contact Standard proposition

In the last couple of years lot of things in security have changed in web browsers and HTML5 specification.

CORS prevents website from JavaScript access from other domains. HTTPS is now forced to be default way to communicate between client and server and HSTS header does its job here. XSS Auditor engines in WebKit/Blink-based browsers defends users against obvious XSS attack vectors. Content Security Policy provides a simple way to define scope for resources like JavaScript, CSS and media external sources as well as rules for executing inline JavaScript code. Cookies become more secure thanks to HTTP Only and Secure flags. 

All the things seemed to be moving to the right direction.

But in case of vulnerability still one thing left to be done - someone has to be notified about one to be aware of it and fix it. So far, the best way to do this is by dedicated contact information provided. LinkedIn's https://security.linkedin.com/vulnerability-disclosure is one of examples. Running bug bounty program on platforms like mentioned earlier HackerOne or BugCrowd is even better.

But we're not talking about such companies.
We're talking about hundreds of thousands of others.


## Technical details of VACS standard


My proposition is to provide **Vulnerability Alert Contact Standard** specification, which will allow to setup contact information **in case of vulnerability report only** in form of standard HTML meta tag or custom server HTTP response header (like X-XSS-Protection), dedicated email address (similar to _abuse@companyname.com_) or any other contact form.

**My idea is something like 112 (or 911 in US) phone number** - if there's something wrong going on, you just pick up the phone and call that number. **VACS should be something you can use when there is something wrong (from security perspective) with the website you're visiting**



### HTTP Respone header

First way to provide VACS contact details is to send dedicated HTTP header in server response.

We already have something similar. This is **Content-Security-Policy-Report-Only** HTTP header and it does exactly what its name points to - in case of violation of Content Security Policy rule this header provides ```report-uri``` property, where report should be sent by the browser.

In the same way VACS header(s) could be provided:

```
HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Vulnerability-Alert-Contact: a.smith@companyname.com
```

To prevent from less sophisticated spam attacks, format of email address in header could be defined in two separate fields:

```
HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Vulnerability-Alert-Contact: a.smith
Vulnerability-Alert-Contact-Domain: companyname.com
```

In this scenario full VACS email address will be:

```
a.smith@companyname.com
```

Domain header also could be simplified just by directive ```same-domain```, which points to website domain:

```
HTTP/1.1 200 OK
Server: Apache-Coyote/1.1
Vulnerability-Alert-Contact: a.smith
Vulnerability-Alert-Contact-Domain: same-domain
```

In this scenario full VACS email address for https://google.com will be composed to following one:

```
a.smith@google.com
```

### HTTP &lt;meta> tag

Another way to provide VACS contact could be implemented as HTML ```<meta>``` tag in ```<head>``` section.

The meaning of this tag is exactly the same as in HTTP header:

```HTML
<html>
<head>
	<title>My Website</title>
	<meta name="Vulnerability-Alert-Contact" content="a.smith"></meta>
	<meta name="Vulnerability-Alert-Contact-Domain" content="companyname.com"></meta>
</head>


<body>
(...)
```

The same example with ```same-domain``` directive:

```HTML
<html>
<head>
	<title>My Website</title>
	<meta name="Vulnerability-Alert-Contact" content="a.smith"></meta>
	<meta name="Vulnerability-Alert-Contact-Domain" content="same-domain"></meta>
</head>

<body>
(...)
```


## Why is this so important for me? And should be for you as well?

On 20th of September, Casey Ellis from TechCrunch published very interesting article about vulnerability reporting in medical devices.

Most of his article is focused on those devices, but there are couple of universal thoughts valid for IT Security in general:

> Vulnerability disclosure ethics are an inherently murky area. There are countless vulnerabilities that exist unpatched in software systems,(...)

> Ideally, vulnerabilities are discovered when the vendor learns about them through their own testing or through the help of
> security researchers operating under a “Coordinated Disclosure” or bug bounty model. Other times, vulnerabilities found are 
> kept secret, and used for attack, unbeknownst to the manufacturer or their users. Then there’s what is called “Full 
> Disclosure,” where discovered vulnerabilities are simply disclosed to the public, sometimes before the vendor has had the 
> opportunity to respond. These three scenarios are status quo for disclosure.


(source: https://techcrunch.com/2016/09/20/hacking-for-investor-profit/ by Casey Ellis, TechCrunch)


But more important from my point of view is this fragment:


> Full Disclosure is most frequently chosen out of frustration at a slow response or bad communication by the impacted 
> organization. The risk of Full Disclosure can be mitigated by organizations, firstly by taking whatever steps are necessary 
> to identify and fix vulnerabilities in the first place, then by establishing clear channels and expectations between security 
> researchers and vendors around newly identified ones.


**Full Disclosure is most frequently chosen out of frustration at a slow response or bad communication by the impacted organization** - this is what you can expect when you ignore Security Reseacrher(s) and their reports about vulnerability found in **your software or website**. Full Disclosure menas someone with not the best intentions can easily use vulnerability **against** your company and causes real problems. Money problems. Your money problems.

**The risk of Full Disclosure can be mitigated by organizations, firstly by taking whatever steps are necessary to identify and fix vulnerabilities in the first place...** - that's why Security Reseacrhers and Ethical Hackers send you notifications about vulnerabilities found in your websites, software, network infrastructure and so on. It's like your good neighbour telling you that you left your window open in the morning, when you was leaving your house going to work. What would you do then? Ignore him? Send him a letter with "Thank you!" a week later? 

Or would you rather go back immediately, close the window and say something like "Hey, thanks Joe! Have a nice day, I own you a beer!" or something similar?

**... by establishing clear channels and expectations between security researchers and vendors around newly identified ones**
Again, this is all about this post is.

Communication channel allowing anyone to report vulnerability found in **your** software.


## What we can do today?

Not much to be honest. Beside all websites currently having any type of bug bounty programs or similar, there is nothing called "good practice" to drop somewhere contact information for security issues.

So, **if you are web developer and you care about website you've created**:

- place somewhere in the source code, in comment (it can be even CSS or JavaScript file, but ideally if it will be at the beginning or the end of HTML) email address and short note what is this email for, like in example:

```HTML
	(...)
	<footer>Copyrigth BlaBla 2016</footer>
	<!-- any vulnerability found please report to: a.smith@companyname.com Thank you! -->
</body>
</html>

```



## Thoughts?

If you'd like to talk about my idea, why it's bad (or good, I hope), what should I change, remove or add - just ping me on Twitter (https://twitter.com/_bl4de) or send an email (bloorq (AT) gmail.com).

I'll try to keep this page up-to-date as long as there will be any feedback and reason to do this.

## Resources

Here you can find some links to resources I've mentioned in this writeup. There are not about my idea, but they provide good background to understand the problem and everyone, not only IT Security professionals, should care about web security.


- Acunetix Web Application Vulnerability Report 2016 http://www.acunetix.com/acunetix-web-application-vulnerability-report-2016/
- Acunetix Web Application Vulnerability Report 2015 http://www.acunetix.com/acunetix-web-application-vulnerability-report-2015/
- OWASP Open Web Application Security Project https://www.owasp.org/index.php/Main_Page
- "Hacking for investor profit" by Casey Ellis (TechCrunch, posted on 20th Sept. 2016) https://techcrunch.com/2016/09/20/hacking-for-investor-profit/



