/**
 * Created by bl4de on 27.07.2016.
 */
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


console.log(rStinsVp("c2378574f4fa4a4353d1ab7e2961fd88"));
