'use strict'

const $yen = document.getElementById('jp-yen');
const $dol = document.getElementById('us-dol');

let rate = 130; //ドル円為替
const url ='http://www.gaitameonline.com/rateaj/getrate'//API

$yen.addEventListener('input',()=>{
    let val = currencyChange($yen.value);
    $dol.value =val;
});

// 通貨変換
function currencyChange(val){
    return Math.floor(val/rate*100)/100;
}

// 為替取得
async function fetchRate(){
    const response = await fetch('rate.json');
    const json = await response.json();
    const datas = json.quotes;
    for (let data of datas){
        if(data.currencyPairCode=='USDJPY'){
            rate=data.bid;
        };
    }
}
fetchRate();