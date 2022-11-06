"use strict";

// const tipOne = 5;
// const tipTwo = 10;
// const tipThree = 15;
// const tipFour = 25;
// const tipFive = 50;

// document.querySelector(".ta-one").addEventListener("click", function () {
//   let firstBill = Number(document.querySelector(".bill").value);
//   let numOfPeople = Number(document.querySelector(".people").value);
//   const TipPerPerson = ((firstBill * tipOne) / 100 / numOfPeople).toFixed(2);
//   const total = (firstBill + (firstBill * tipOne) / 100).toFixed(2);
//   const totalPerPerson = (total / numOfPeople).toFixed(2);

//   if (!firstBill || firstBill === 0) {
//     document.querySelector(".for-bill").style.display = "block";

//     document.querySelector(".bill").style.outline = "2px solid #E17457";
//   } else if (!numOfPeople || numOfPeople === 0) {
//     document.querySelector(".for-people").style.display = "block";

//     document.querySelector(".people").style.outline = "2px solid #E17457";
//   } else if (firstBill > 0 && numOfPeople > 0) {
//     document.querySelector(".payment-tip-per-person p").textContent =
//       "$" + TipPerPerson;

//     document.querySelector(".payment-total-per-person p").textContent =
//       "$" + totalPerPerson;

//     document.querySelector(".for-people").style.display = "none";

//     document.querySelector(".people").style.outline = "none";

//     document.querySelector(".for-bill").style.display = "none";

//     document.querySelector(".bill").style.outline = "none";
//   }
// });

// document.querySelector(".ta-two").addEventListener("click", function () {
//   let firstBill = Number(document.querySelector(".bill").value);
//   let numOfPeople = Number(document.querySelector(".people").value);
//   const TipPerPerson = ((firstBill * tipTwo) / 100 / numOfPeople).toFixed(2);
//   const total = (firstBill + (firstBill * tipTwo) / 100).toFixed(2);
//   const totalPerPerson = (total / numOfPeople).toFixed(2);

//   if (!firstBill || firstBill === 0) {
//     document.querySelector(".for-bill").style.display = "block";

//     document.querySelector(".bill").style.outline = "2px solid #E17457";
//   } else if (!numOfPeople || numOfPeople === 0) {
//     document.querySelector(".for-people").style.display = "block";

//     document.querySelector(".people").style.outline = "2px solid #E17457";
//   } else if (firstBill > 0 && numOfPeople > 0) {
//     document.querySelector(".payment-tip-per-person p").textContent =
//       "$" + TipPerPerson;

//     document.querySelector(".payment-total-per-person p").textContent =
//       "$" + totalPerPerson;

//     document.querySelector(".for-people").style.display = "none";

//     document.querySelector(".people").style.outline = "none";

//     document.querySelector(".for-bill").style.display = "none";

//     document.querySelector(".bill").style.outline = "none";
//   }
// });

// document.querySelector(".ta-three").addEventListener("click", function () {
//   let firstBill = Number(document.querySelector(".bill").value);
//   let numOfPeople = Number(document.querySelector(".people").value);
//   const TipPerPerson = ((firstBill * tipThree) / 100 / numOfPeople).toFixed(2);
//   const total = (firstBill + (firstBill * tipThree) / 100).toFixed(2);
//   const totalPerPerson = (total / numOfPeople).toFixed(2);

//   if (!firstBill || firstBill === 0) {
//     document.querySelector(".for-bill").style.display = "block";

//     document.querySelector(".bill").style.outline = "2px solid #E17457";
//   } else if (!numOfPeople || numOfPeople === 0) {
//     document.querySelector(".for-people").style.display = "block";

//     document.querySelector(".people").style.outline = "2px solid #E17457";
//   } else if (firstBill > 0 && numOfPeople > 0) {
//     document.querySelector(".payment-tip-per-person p").textContent =
//       "$" + TipPerPerson;

//     document.querySelector(".payment-total-per-person p").textContent =
//       "$" + totalPerPerson;

//     document.querySelector(".for-people").style.display = "none";

//     document.querySelector(".people").style.outline = "none";

//     document.querySelector(".for-bill").style.display = "none";

//     document.querySelector(".bill").style.outline = "none";
//   }
// });

// document.querySelector(".ta-four").addEventListener("click", function () {
//   let firstBill = Number(document.querySelector(".bill").value);
//   let numOfPeople = Number(document.querySelector(".people").value);
//   const TipPerPerson = ((firstBill * tipFour) / 100 / numOfPeople).toFixed(2);
//   const total = (firstBill + (firstBill * tipFour) / 100).toFixed(2);
//   const totalPerPerson = (total / numOfPeople).toFixed(2);

//   if (!firstBill || firstBill === 0) {
//     document.querySelector(".for-bill").style.display = "block";

//     document.querySelector(".bill").style.outline = "2px solid #E17457";
//   } else if (!numOfPeople || numOfPeople === 0) {
//     document.querySelector(".for-people").style.display = "block";

//     document.querySelector(".people").style.outline = "2px solid #E17457";
//   } else if (firstBill > 0 && numOfPeople > 0) {
//     document.querySelector(".payment-tip-per-person p").textContent =
//       "$" + TipPerPerson;

//     document.querySelector(".payment-total-per-person p").textContent =
//       "$" + totalPerPerson;

//     document.querySelector(".for-people").style.display = "none";

//     document.querySelector(".people").style.outline = "none";

//     document.querySelector(".for-bill").style.display = "none";

//     document.querySelector(".bill").style.outline = "none";
//   }
// });

// document.querySelector(".ta-five").addEventListener("click", function () {
//   let firstBill = Number(document.querySelector(".bill").value);
//   let numOfPeople = Number(document.querySelector(".people").value);
//   const TipPerPerson = ((firstBill * tipFive) / 100 / numOfPeople).toFixed(2);
//   const total = (firstBill + (firstBill * tipFive) / 100).toFixed(2);
//   const totalPerPerson = (total / numOfPeople).toFixed(2);

//   if (!firstBill || firstBill === 0) {
//     document.querySelector(".for-bill").style.display = "block";

//     document.querySelector(".bill").style.outline = "2px solid #E17457";
//   } else if (!numOfPeople || numOfPeople === 0) {
//     document.querySelector(".for-people").style.display = "block";

//     document.querySelector(".people").style.outline = "2px solid #E17457";
//   } else if (firstBill > 0 && numOfPeople > 0) {
//     document.querySelector(".payment-tip-per-person p").textContent =
//       "$" + TipPerPerson;

//     document.querySelector(".payment-total-per-person p").textContent =
//       "$" + totalPerPerson;

//     document.querySelector(".for-people").style.display = "none";

//     document.querySelector(".people").style.outline = "none";

//     document.querySelector(".for-bill").style.display = "none";

//     document.querySelector(".bill").style.outline = "none";
//   }
// });

// document.querySelector(".custom-tip").addEventListener("input", function () {
//   let firstBill = Number(document.querySelector(".bill").value);
//   let numOfPeople = Number(document.querySelector(".people").value);
//   let customTip = Number(document.querySelector(".custom-tip").value);
//   const TipPerPerson = ((firstBill * customTip) / 100 / numOfPeople).toFixed(2);
//   const total = (firstBill + (firstBill * customTip) / 100).toFixed(2);
//   const totalPerPerson = (total / numOfPeople).toFixed(2);

//   if (!firstBill || firstBill === 0) {
//     document.querySelector(".for-bill").style.display = "block";

//     document.querySelector(".bill").style.outline = "2px solid #E17457";
//   } else if (!numOfPeople || numOfPeople === 0) {
//     document.querySelector(".for-people").style.display = "block";

//     document.querySelector(".people").style.outline = "2px solid #E17457";
//   } else if (firstBill > 0 && numOfPeople > 0) {
//     document.querySelector(".payment-tip-per-person p").textContent =
//       "$" + TipPerPerson;

//     document.querySelector(".payment-total-per-person p").textContent =
//       "$" + totalPerPerson;

//     document.querySelector(".for-people").style.display = "none";

//     document.querySelector(".people").style.outline = "none";

//     document.querySelector(".for-bill").style.display = "none";

//     document.querySelector(".bill").style.outline = "none";
//   }
// });

const billInput = document.querySelector(".bill");
const peopleInput = document.querySelector(".people");
const tips = document.querySelectorAll(".tip-amount");
const customTip = document.querySelector(".custom-tip");

billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
customTip.addEventListener("input", customTipFun);
tips.forEach(function (val) {
  val.addEventListener("click", handleClick);
});

let billValue = 0.0;
let peopleValue = 0;
let tipValue = 0.0;
let customTipValue = 0.0;

function billInputFun() {
  billValue = parseFloat(billInput.value);
  claculateTip()
  if (billValue === 0) {
    document.querySelector(".for-bill").style.display = "block";
    document.querySelector(".bill").style.outline = "2px solid #E17457";
  } else {
    document.querySelector(".for-bill").style.display = "none";
    document.querySelector(".bill").style.outline = "none";
  }
}

function peopleInputFun() {
  peopleValue = parseFloat(peopleInput.value);
  claculateTip()
  if (peopleValue === 0) {
    document.querySelector(".for-people").style.display = "block";
    document.querySelector(".people").style.outline = "2px solid #E17457";
  } else {
    document.querySelector(".for-people").style.display = "none";
    document.querySelector(".people").style.outline = "none";
  }
}

function customTipFun() {
  tipValue = parseFloat(customTip.value / 100);

  claculateTip()
}

document.querySelector('.custom-tip').addEventListener('click', function() {
  tips.forEach(function(val){
    val.classList.remove('active-tip');
  })
})

function handleClick(event) {
  tips.forEach(function (val) {
    val.classList.remove('active-tip');
    customTip.value = '';
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add('active-tip');
      tipValue = parseFloat(val.innerHTML) / 100;
    }
  });
  claculateTip();
}

function claculateTip() {
  if (billValue > 0 && peopleValue > 0) {
    let tipPerPerson = Number((billValue * tipValue) / peopleValue).toFixed(2);
    let totalPerPerson = Number(
      (billValue + billValue * tipValue) / peopleValue
    ).toFixed(2);

    document.querySelector(".payment-tip-per-person p").textContent =
      "$" + tipPerPerson;

    document.querySelector(".payment-total-per-person p").textContent =
      "$" + totalPerPerson;
  }
}

document.querySelector('.reset').addEventListener('click', function () {
  tips.forEach(function(val){
    val.classList.remove('active-tip');
  })

  billInput.value = '';

  billInputFun();

  peopleInput.value = '';

  peopleInputFun()

  customTip.value = '';

  customTipFun();

  document.querySelector(".payment-tip-per-person p").textContent =
  "$" + '0.0';

document.querySelector(".payment-total-per-person p").textContent =
  "$" + '0.0';
})