function Test() {
  console.log("testing");
}
Test();
let i = 0;
let c = 0;
const str = "Rolling schope school"
while (i < str.length){
  if(str[i] === "o"){
    c++;
  }
  i++
}
console.log(c);