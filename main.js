// Variables Storage
let select = document.getElementById('select')
let offering = document.getElementById('inputOffering');
let tithe = document.getElementById('inputTithe')
let expenditures = document.getElementById('expense')
let totalIncomeField = document.getElementById('totalIncome');
let button = document.getElementById('submit');
let headqrt = document.getElementById('headqrts')
let zone = document.getElementById('zone')
let chapter = document.getElementById('chapter')
let unit = document.getElementById('unit')
let unitExpen = document.getElementById('unitExp')
let zoneP = document.getElementById('zoneP')

// button.addEventListener('click', () => {
//   let offeringValue = parseFloat(offering.value);
//   let titheValue = parseFloat(tithe.value);
//   let expendituresValue = parseFloat(expenditures.value);
//   console.log(expendituresValue)
//   if (!isNaN(offeringValue) && !isNaN(titheValue)) {
//     let total = offeringValue + titheValue;
//     totalIncomeField.innerHTML = total;
//     console.log(total);
//     let unitIncome = total * 0.2
//     let unit_expense = unitIncome - expendituresValue
//     headqrt.innerHTML =  total * 0.5
//     zone.innerHTML = total * 0.2
//     chapter.innerHTML = total * 0.1
//     unit.innerHTML = total * 0.2 
// //    Unit substraction from expenditures 
//    //let txt = document.createElement('p').append(` Unit income substracted from expenditures ${unit_expense}`) 
//      unitExpen.innerHTML= unitIncome - expendituresValue
//   } else {
//     console.log('Invalid input');
//   }
  
// });
// Button Event Listener
select.addEventListener('change', ()=>{
  const selectOption = select.value

  if(selectOption === 'Zone'){
    button.addEventListener('click', () => {
      let offeringValue = parseFloat(offering.value);
      let titheValue = parseFloat(tithe.value);
      let expendituresValue = parseFloat(expenditures.value);
      console.log(expendituresValue)
      if (!isNaN(offeringValue) && !isNaN(titheValue)) {
        let total = offeringValue + titheValue;
        totalIncomeField.innerHTML = total;
        console.log(total);
        let unitIncome = total * 0.2
        let unit_expense = unitIncome - expendituresValue
        headqrt.innerHTML =  total * 0.5
        zone.innerHTML = total * 0.2
        chapter.innerHTML = total * 0.1
        unit.innerHTML = total * 0.2 
    //    Unit substraction from expenditures 
       //let txt = document.createElement('p').append(` Unit income substracted from expenditures ${unit_expense}`) 
         unitExpen.innerHTML= unitIncome - expendituresValue
      } else {
        console.log('Invalid input');
      }
      
    });
    console.log('Zone has been selected')
  }else if (selectOption === 'State'){
    button.addEventListener('click', () => {
      let offeringValue = parseFloat(offering.value);
      let titheValue = parseFloat(tithe.value);
      let expendituresValue = parseFloat(expenditures.value);
      console.log(expendituresValue)
      if (!isNaN(offeringValue) && !isNaN(titheValue)) {
        let total = offeringValue + titheValue;
        totalIncomeField.innerHTML = total;
        console.log(total);
        let unitIncome = total * 0.1
        let unit_expense = unitIncome - expendituresValue
        headqrt.innerHTML =  total * 0.3
        zoneP.innerHTML = 40+ '% State'
        zone.innerHTML = total * 0.4
        chapter.innerHTML = total * 0.2
        unit.innerHTML = total * 0.1
    //    Unit substraction from expenditures 
       //let txt = document.createElement('p').append(` Unit income substracted from expenditures ${unit_expense}`) 
         unitExpen.innerHTML= unitIncome - expendituresValue
      } else {
        console.log('Invalid input');
      }
      
    });
    console.log('State has been selected')
  }
  //else{
  //   console.log('Chapter has been selected')
  // }
})
