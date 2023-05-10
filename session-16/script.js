// Create a new Node of type "Div"

var containerdiv = document.createElement('div')
containerdiv.classList.add('container')
document.body.appendChild(containerdiv)


// Create Heading with id = "head1" and some TextNode
var head1 = document.createElement('h1')
head1.id = " head1"

// Text Node
var head1text = document.createTextNode('this is my para')
// Text Node to Head Node
head1.appendChild(head1text)

// Connecting Head Node to div Node
containerdiv.appendChild(head1)

// Creating paragraph with id and class and some content
var pnode = document.createElement('p')
pnode.id = "para1"
pnode.classList.add('paragraph')
pnode.innerHTML = 'this is my paragraph'

// COnnect pnode to dive
containerdiv.appendChild(pnode)

var anchornod = document.createElement('a')
anchornod.href = "https://www.google.com/"
anchornod.innerHTML = 'click here'
anchornod.target = "_blank"
 
// containerdiv.appendChild(anchornod)/

// insert Node at specified Level
containerdiv.insertBefore(anchornod,  head1 )

var imagenode = document.createElement('img')
imagenode.src = "https://picsum.photos/200"
containerdiv.appendChild(imagenode)

var ulnod = document.createElement('ul')

var linode1 = document.createElement('li')
linode1.innerHTML = 'cofee'
var linode2 = document.createElement('li')
linode2.innerHTML = 'water'
var linode3 = document.createElement('li')
linode3.innerHTML = 'tea'

ulnod.appendChild(linode1)
ulnod.appendChild(linode2)
ulnod.appendChild(linode3)
 document.body.appendChild(ulnod)

// any content remove
 var para1 = document.querySelector('p')
para1.remove()

// Remove a particular children

// Count how many children are there
var childNodes = ulnod.children.length
console.log(childNodes)

// Remove one child
ulnod.removeChild(ulnod.children[1])







