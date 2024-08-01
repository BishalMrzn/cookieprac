console.log(document.cookie);
document.cookie="name=Bishal";
document.cookie="name2=Bishal2";
document.cookie="name=B;path=/a;expires=Sat,3 August 2024 3:18:22 GMT "
let key=prompt("Enter your key")
let value=prompt("Enter your value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`

console.log(document.cookie);