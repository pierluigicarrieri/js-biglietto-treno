const kmFee = 0.21;

const journeyLenght = prompt("Hello Sir! Could you please tell us how long your journey will be in kms? (ex. 134.5)");

const userAge = prompt("Hello Sir! Could you please tell us your age in numbers? (ex. 33)");

const trainFeeNoDiscount = journeyLenght * kmFee;

let trainFeeDiscountYoung;

let trainFeeDiscountSenior;

if (userAge >= 18 && userAge < 65) {

    document.getElementById("train-fee").innerHTML = `Your journey today will cost you ${trainFeeNoDiscount} PKRS (pakistan rupees). No discount sorry Sir`;

} else if (userAge < 18) {

    trainFeeDiscountYoung = (trainFeeNoDiscount - ((trainFeeNoDiscount * 20) / 100));
    document.getElementById("train-fee").innerHTML = `Your journey today will cost you ${trainFeeDiscountYoung} PKRS (pakistan rupees). 20% discount on your ticket Sir`;

} else if (userAge >= 65) {

    trainFeeDiscountSenior = (trainFeeNoDiscount - ((trainFeeNoDiscount * 40) / 100));
    document.getElementById("train-fee").innerHTML = `Your journey today will cost you ${trainFeeDiscountSenior} PKRS (pakistan rupees). 40% discount on your ticket Sir`;

}

