module.exports = function toReadable (number) {
let oneNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let twentyNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let res = "";
if (number === 0) { res = "zero" }



if (number/100 >= 1) {
res = oneNineteen[Math.floor(number/100)] + " hundred"
if (number%100 === 0) return (res)
else { 
res = res + " "
number -= Math.floor(number/100)*100
}
}

if (number/10 >= 2) {
    res = res + twentyNinety[Math.floor(number/10)]
    if (number%10 !== 0) { res += " " + oneNineteen[number%10] }
    } else if (number/10 >= 1) {
    res += oneNineteen[(number)]
    } else {
    res += oneNineteen[number%10]
    }

return (res)

}
