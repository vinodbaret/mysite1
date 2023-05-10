// (1)// dom method - these are acees the html nods
document.title = "new title"
// document.body.style.backgroundColor = "green"


// (2)// access node by using its tag name

//  var x = document.getElementsByName('h1')
//  x[0].style.color = "green"


// (3)accces node by using id 
var y = document.getElementById ('para1')
console.log(y)
y.style.color = "red"
y.style.backgroundColor = "blue"


// (3)accces node by using class
var z = document.getElementsByClassName ('paragraphs')
z[1].style.backgroundColor = "yellow"

// acces the node using quary
document.querySelectorAll('input')[0].style.border = '2px solid red'


// changing content
var x = document.querySelector('#para1')
x.innerHTML  = "change content"

document.querySelector('button').innerText = "push button"


var newh1 = document.createElement('h1')
newh1.innerText = " this is a new aliment add by js"
document.body.appendChild(newh1)