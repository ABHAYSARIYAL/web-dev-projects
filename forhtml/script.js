let a = prompt("Hey what is your age?");
a = Number.parseInt(a)
if(a<0){
  alert("not a valid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("you are a kid and you can think of driving of driving after 18");
}
else{
  alert("you can drive now");
}
console.log("done")

//using ternary operator
alert("you can", a<18? "not drive" : "drive");

// using switch age
let age = prompt("what is your age?")
switch(age){
  case '12':
    alert("your age is 12")
    break
  case '13':
    alert("your age is 13")
    break
  default:
    alert("you are out ot age")
    
}