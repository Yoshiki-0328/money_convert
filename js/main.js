'use strict'

const $yen = document.getElementById('jp-yen');
const $dol = document.getElementById('us-dol');

let rate = 130; //ドル円為替

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
    const json = response.json;
    console.log(json);

}

fetchRate();