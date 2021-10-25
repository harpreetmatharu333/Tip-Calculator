
function calcTip(){

    let tipAmount= document.getElementById("tipForm").value;
    let billAmount = document.getElementById("billInput").value;
    let numPeople = document.getElementById("numberOfPeople").value;
    let billCard = document.getElementById("bill-card");

    //turn strings into numbers
    let tipAmountNumber = parseFloat(tipAmount);
    let billAmountNumber = parseFloat(billAmount);
    let numPeopleNumber = parseFloat(numPeople);

    //grab elements
    let tip = document.getElementById('tip-p');
    let total = document.getElementById('total-p');

    // calculations
    let tipPerPerson = ((tipAmountNumber/100) * billAmountNumber) / numPeopleNumber ;
    let billPerPerson =  (billAmountNumber + ((tipAmountNumber/100) * billAmountNumber)) / numPeopleNumber ;

    //append content
    if(numPeopleNumber === 0){
      tip.innerHTML = "$" + "Not Applicable";
      total.innerHTML = "$" + "Not Applicable";
    } else {
      tip.innerHTML = "$" + (tipPerPerson).toFixed(2);
      total.innerHTML = "$" + billPerPerson.toFixed(2);
    }


    billCard.style.display = "block";


}
