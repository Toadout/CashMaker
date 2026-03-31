const money = document.getElementById("money");
const button = document.getElementById("pressMe");
const upgradeBtn = document.getElementById("upgMe");
const moneyBoost = document.getElementById("upgradeAmt");
const upgcosttxt = document.getElementById("costUpgrade");
const rebirth = document.getElementById("rebirth");
const multTit = document.getElementById("multTit");
const mult = document.getElementById("mult");
const moneyReqRebirth = document.getElementById("moneyReq");
const amtRebirths = document.getElementById("amtRebirthsNum");
const amtRebirthsTit = document.getElementById("amtRebirthsTit");
let multNum = 1;
let costUpgrade = 10;
let count = 0;
let upgrade = 1;
let allowRebirth = false;
let showMult = false;
let rebirthReq = 10000;
let multMult = 1;

function formatNumber(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // ts wasnt made by me i had to use it cuz when i used toLocaleString it took too long -> lowkey took ts from alien clicker lmao
}

upgradeBtn.onclick = function(){
    if(count >= costUpgrade){
        count = count-costUpgrade;
        costUpgrade*=1.05;
        costUpgrade = Math.round(costUpgrade * 10) / 10;
        upgcosttxt.textContent = formatNumber(costUpgrade);
        upgrade+=1;
        moneyBoost.textContent = upgrade.toFixed(1);
        money.textContent = formatNumber(count.toFixed(1));
    }
}

button.onclick = function(){
    count += Number((upgrade*multNum).toFixed(1));
    count = Math.round(count * 10) / 10;
    money.textContent = formatNumber(count);
    if(count>=rebirthReq && allowRebirth == false){
        rebirth.style.fontSize = "0.5em";
        allowRebirth = true;
    }
}

rebirth.onclick = function(){
    if(count>=10000){
        rebirthReq *= 1.5; // I'm not evil -> jst to u get more overpowered than rebirthreq
        count = 0;
        costUpgrade = 10;
        upgrade = 1;
        multNum += multMult;
        amtRebirthsNum.textContent = multMult;
        multMult += 1;
        rebirth.style.fontSize = "0px";
        rebirthReq = Number(rebirthReq.toFixed(1)); // Fuck man why is js so weird like the number suddenly becomes 0.000,000,000,000,000,009 and i need 2 roundings jst to fix it
        rebirthReq = Math.round(rebirthReq * 10) / 10;
        multNum = Number(multNum.toFixed(1));
        multNum = Math.round(multNum * 10) / 10;
        money.textContent = formatNumber(count);
        moneyBoost.textContent = "1.0"; // It works ok don't judge
        upgcosttxt.textContent = "10.0"; // It works ok don't judge
        costUpgrade.textContent = formatNumber(costUpgrade);
        mult.textContent = formatNumber(multNum);
        moneyReqRebirth.textContent = formatNumber(rebirthReq);
        allowRebirth = false;
        if(showMult===false){
            multTit.style.fontSize = "0.5em";
            amtRebirthsTit.style.fontSize = "0.5em";
        }
    }
}
const amtRebirths = document.getElementById("amtRebirthsNum");
const amtRebirthsTit = document.getElementById("amtRebirthsTit");
let multNum = 1;
let costUpgrade = 10;
let count = 0;
let upgrade = 1;
let allowRebirth = false;
let showMult = false;
let rebirthReq = 10000;
let multMult = 1;

function formatNumber(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // ts wasnt made by me i had to use it cuz when i used toLocaleString it took too long -> lowkey took ts from alien clicker lmao
}

upgradeBtn.onclick = function(){
    if(count >= costUpgrade){
        count = count-costUpgrade;
        costUpgrade*=1.05;
        costUpgrade = Math.round(costUpgrade * 10) / 10;
        upgcosttxt.textContent = formatNumber(costUpgrade);
        upgrade+=1;
        moneyBoost.textContent = upgrade.toFixed(1);
        money.textContent = count.toFixed(1);
    }
}

button.onclick = function(){
    count += Number((upgrade*multNum).toFixed(1));
    count = Math.round(count * 10) / 10;
    money.textContent = formatNumber(count);
    if(count>=rebirthReq && allowRebirth == false){
        rebirth.style.fontSize = "0.5em";
        allowRebirth = true;
    }
}

rebirth.onclick = function(){
    rebirthReq *= 1.1; // I'm not evil -> jst to u get more overpowered than rebirthreq
    count = 0;
    costUpgrade = 10;
    upgrade = 1;
    multNum += (0.2*multMult);
    amtRebirthsNum.textContent = multMult;
    multMult += 1;
    rebirth.style.fontSize = "0px";
    rebirthReq = Number(rebirthReq.toFixed(1)); // Fuck man why is js so weird like the number suddenly becomes 0.000,000,000,000,000,009 and i need 2 roundings jst to fix it
    rebirthReq = Math.round(rebirthReq * 10) / 10;
    multNum = Number(multNum.toFixed(1));
    multNum = Math.round(multNum * 10) / 10;
    money.textContent = formatNumber(count);
    moneyBoost.textContent = "1.0"; // It works ok don't judge
    upgcosttxt.textContent = "10.0"; // It works ok don't judge
    costUpgrade.textContent = formatNumber(costUpgrade);
    mult.textContent = formatNumber(multNum);
    moneyReqRebirth.textContent = formatNumber(rebirthReq);
    allowRebirth = false;
    if(showMult===false){
        multTit.style.fontSize = "0.5em";
        amtRebirthsTit.style.fontSize = "0.5em";
    }
}
