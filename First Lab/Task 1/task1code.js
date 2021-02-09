// JavaScript Document
var threeDigit = prompt("Please enter a three digit number");

if((threeDigit/100) > 1 && (threeDigit/100) < 10) {
    if(Math.trunc(threeDigit/100) == (threeDigit % 100) % 10) {
        
        document.write("Number is a pallindrome");
    }
    else {
        document.write("Number is not a pallindrome");
    }
}
else {
    document.write("Number cannot be verified");
}