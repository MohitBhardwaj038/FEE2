// id selector
var a =document.getElementById('heading');
a.style.color="red";
a.style.padding="20px";
a.style.backgroundColor="pink";
a.style.border="5px solid black";
a.style.margin="50px";
console.log(a);
console.dir(a);

// get element by class name


var b=document.getElementsByClassName('hero');
console.log(b);
// b[0].style.backgroundColor="green";
// b[2].style.backgroundColor="green";

for(let lists of b){
   lists.style.backgroundColor="yellow";
   lists.style.color="red";
   lists.style.fontweight="bold";
}


// tagname selector 

var c = getelementbyTagname('h2');
c.style.textdecoration="line-through";