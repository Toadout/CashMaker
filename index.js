const money = document.getElementById("money");
const button = document.getElementById("pressMe");
const upgradeBtn = document.getElementById("upgMe");
const moneyBoost = document.getElementById("upgradeAmt");
const upgcosttxt = document.getElementById("costUpgrade");
const rebirth = document.getElementById("rebirth");
const multTit = document.getElementById("multTit");
const mult = document.getElementById("mult");
let multNum = 1;
let costUpgrade = 10;
let count = 0;
let upgrade = 1;
let allowRebirth = false;
let showMult = false;


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
    if(count>=10000 && allowRebirth == false){
        rebirth.style.fontSize = "0.5em";
        allowRebirth = true;
    }
}

rebirth.onclick = function(){
    count = 0;
    costUpgrade = 10;
    upgrade = 1;
    multNum += 0.2;
    rebirth.style.fontSize = "0px";
    money.textContent = formatNumber(count);
    costUpgrade.textContent = formatNumber(costUpgrade);
    if(showMult===false){
        multTit.style.fontSize = "0.5em";
    }
    mult.textContent = multNum;
    allowRebirth = false;
}
