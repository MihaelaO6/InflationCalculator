function inflationCalculator(){
    let inflationRate = document.querySelector('#inflationRate').value;
    inflationRate = parseFloat(inflationRate);
    let money = document.querySelector('#money').value;
    money = parseFloat(money);

    let years = document.querySelector('#years').value;
    years = parseFloat(years);
    let worth = money + (money*(inflationRate/100));
  //  console.log(worth);
    for(let i = 1; i<years;i++){
        worth += worth*(inflationRate/100);
    }
    console.log(`worth: ${worth}.toFixed(2)`);

    let new_el = document.createElement('div');
    new_el.className = 'new_val';
    new_el.innerText =`${money} e vredat isto kako ${worth} za ${years} godini`;
    document.querySelector('.container').appendChild(new_el);
}
