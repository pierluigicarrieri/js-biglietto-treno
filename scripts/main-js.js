const kmFee = 0.21;

// Next 2 variables ask user (via prompts) lenght of journey and age

const journeyLenght = prompt("Hello Sir! Could you please tell us how long your journey will be in kms? (ex. 134.5)");

const userAge = prompt("Hello Sir! Could you please tell us your age in numbers? (ex. 33)");

// "trainFeeNoDiscount" calculates the basis ticket fee

const trainFeeNoDiscount = journeyLenght * kmFee;

// Discounts % declared as variables, so a later change can be easier/more intutitive

const trainDiscountYoung = 20;

const trainDiscountSenior = 40;

// if...else control structure implements main algorithm

if (userAge >= 18 && userAge < 65) {

    document.getElementById("train-fee").innerHTML = `Your journey today will cost you ${trainFeeNoDiscount.toFixed(2)} £ (british pounds). Sorry Sir, but there is no discount today for you`;

} else if (userAge < 18) {

    const trainFeeDiscountYoung = (trainFeeNoDiscount - ((trainFeeNoDiscount * trainDiscountYoung) / 100));
    document.getElementById("train-fee").innerHTML = `Your journey today will cost you ${trainFeeDiscountYoung.toFixed(2)} £ (british pounds). Congratulations! 20% discount on your ticket Sir`;

} else if (userAge >= 65) {

    const trainFeeDiscountSenior = (trainFeeNoDiscount - ((trainFeeNoDiscount * trainDiscountSenior) / 100));
    document.getElementById("train-fee").innerHTML = `Your journey today will cost you ${trainFeeDiscountSenior.toFixed(2)} £ (british pounds). Congratulations! 40% discount on your ticket Sir`;

} /* Above algorithm could be more efficent (no automatic variables, 
no "else if" but just ""...else" in the last block), chose to put in all 
the above because no memory-performance constrains allow for more clarity */

