// const btn= document.querySelector('.btn');

// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').getElementsByClassName.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.item').lastElementChild.innerHTML = '<h1> Hello </h1>';
// });
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');

myForm.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(nameInput.value== ''|| emailInput.value== ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(()=>msg.remove(), 3000)
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode('${nameInput.value}: ${emailInput.value}'));
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.name.value;
    const email = event.email.value;
   // const phoneNumber = event.MobileNumber.value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
   // localStorage.setItem('phoneNumber', MobileNumber);

}