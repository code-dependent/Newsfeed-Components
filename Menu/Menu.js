/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  */
 function create(element){
   return document.createElement(element);
 }
 function select(element){
   return document.querySelector(element)
 }
 
 function menuCreator(array){
  
  let menu = create('div');
  let menuItem = create('ul');
  menu.classList.add('menu')

  array.forEach(item=>{
    let li = document.createElement('li')
    li.textContent = item;
    menuItem.appendChild(li)
  })

  menu.appendChild(menuItem)
  return menu
 }
//  console.log(menuCreator(menuItems))
  /*

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  */
 
let menu = select('.menu-button')
let menuItem = menuCreator(menuItems)

console.log(menu)



/////////////// JS Event Listener //////////////
//
// function showHide(){

//   menuItem.classList.toggle('menu--open')
//   return menuItem
// }
// menu.addEventListener('click',showHide)


/////////////// JQuery Animation //////////////

//
$(document).ready(function(){
$( 'img' ).click(function() {
  $( 'div.menu' ).fadeToggle();})
});
$('img').click(function(){
  $('div.article').slideToggle('slow')
})


let head = select('body');

/*
  Step 5: return the menu component.


  Step 6: add the menu component to the DOM.
  
*/
head.appendChild(menuItem)