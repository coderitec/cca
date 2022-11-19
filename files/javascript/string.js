let fname = 'Francis'
let mname = "Chiname"
let fullName = `${fname} ${mname.toUpperCase()} Enemuo`
let quote = `I've been to the mountain ${(new Date().getFullYear())- 2016} years ago`


const heading = document.createElement('h1')
const firstS = document.getElementsByClassName('p1')[0]
heading.setAttribute('class', 'mee')
firstS.appendChild(heading)
heading.textContent = quote

console.log(fullName)