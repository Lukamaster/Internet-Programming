// JavaScript Document
var phoneNo = prompt("Please Enter a Valid Phone Number");

toString(phoneNo);
var pOperator = phoneNo.charAt(0) + phoneNo.charAt(1) + phoneNo.charAt(2);
for(var i = 0; i < 9; i++) {
    document.write(phoneNo.charAt(i));
    if(i == 2) {
        document.write(" / ");
    }
    if(i == 5) {
        document.write(" - ");
    }
}

if(pOperator == "070" || pOperator == "071" || pOperator == "072") {
    document.write(" - T-mobile");
}
else if(pOperator == "075" || pOperator == "076") {
    document.write(" - One");
}
else {
    document.write(" - Vip");
}