function getSocSecTax(grossPay){
    return grossPay * 0.062;
}
function getMedicareTax(grossPay){
    return grossPay * 0.0145;
}
function getFederalTax(grossPay, withholdingCode){
    let rate = 0;
    if(withholdingCode == 0){
        rate = 0.23;
    }else if(withholdingCode == 1){
        rate = 0.21;
    }else if(withholdingCode == 2){
        rate = 0.195;
    }else if(withholdingCode == 3){
        rate = 0.185;
    }else if (withholdingCode >= 4){
        rate = 0.18;
        //for each withholding over 4
        over = withholdingCode - 4; // e.g. 6 - 4 = 2
        rate = rate - (over * .005);
    }
    return grossPay * rate;
}
let pay = 750;
let code = 0;
console.log(getSocSecTax(pay), getMedicareTax(pay), getFederalTax(pay, code));

pay = 1550;
code = 2;
console.log(getSocSecTax(pay), getMedicareTax(pay), getFederalTax(pay, code));

pay = 1100;
code = 6;
console.log(getSocSecTax(pay), getMedicareTax(pay), getFederalTax(pay, code));
