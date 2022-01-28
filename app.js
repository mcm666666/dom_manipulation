//1
document.getElementById('container');
//2
document.querySelector('#container')
//3
document.querySelectorAll('.second');
//4
document.querySelector('ol .third');

//5. Give the section with an id of container the text “Hello!”.
const foundDiv = document.querySelector('#container');
foundDiv.innerText ="Hello";

//6. Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');

//7. Remove the class main on the div with a class of footer.
footer.classList.remove('main');

//8. Create a new li element.
let newLi = document.createElement('li');

//9. Give the li the text “four”.
newLi.innerText = 'four';

//10. Append the li to the ul element.
const list = document.querySelector('ul');
list.appendChild(newLi);

//11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
const liInsideOl = document.querySelectorAll('ol li');
for(let i = 0; i < liInsideOl.length; i++) {
    liInsideOl[i].style.backgroundColor = "green";
}

//12. Remove the div with a class of footer
const footer = document.querySelector('.footer');
footer.remove();

