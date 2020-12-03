const dropdown1 = document.querySelector('#dropdown-1');
const dropdown2 = document.querySelector('#dropdown-2');
const dropdown3 = document.querySelector('#dropdown-3');
const dropdown4 = document.querySelector('#dropdown-4');
const dropdown5 = document.querySelector('#dropdown-5');
const sButton = document.querySelector('.navbar-circle')

// add everything in an array to minimize code written with a loop
const arr = [dropdown1, dropdown2, dropdown3, dropdown4, dropdown5];

// add event listener to every dropdown menu
arr.forEach((dropdown) => {

  // add the 'show' class to the specific hovered dropdown menu
  // when cursor enters menu item
  dropdown.addEventListener('mouseenter', (e) => {
    e.target.children[0].classList.add('show')
  })

  // remove the 'show' class from the dropdown menu
  // when cursor leaves menu item
  dropdown.addEventListener('mouseleave', (e) => {
    e.target.children[0].classList.remove('show')
  })

})

// add event listener to style sheet toggler button
sButton.addEventListener('click', () => {
  let styles = document.querySelector('#styles');

  // check what stylesheet is active and toggle it
  styles.attributes.href.value === './portraitStyles.css'
    ? styles.attributes.href.value = './landscapeStyles.css'
    : styles.attributes.href.value = './portraitStyles.css'


})

