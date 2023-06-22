const showbtn = document.getElementById('show-btn')
const modal = document.getElementById('modal')
const closebtn = document.getElementById('close-btn')
const overlay = document.getElementById('overlay')
 const addHidden = () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
 }
 const removeHidden = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
 }
 showbtn.addEventListener('click', removeHidden)
 closebtn.addEventListener('click', addHidden)
 overlay.addEventListener('click', addHidden)
 document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        addHidden()
    }
 })