window.onload = function () {
  onStart();
}
function onStart(){
    console.log('hello world!')
}
let arr = [1,2,3];
let a = [];
let b = [];
a.push.call(a,arr.forEach(function(x,y){
  return x*y
}));
b.push.call(b,arr.map(function(x,y){
  return x*y;
}))
console.log(a,b);