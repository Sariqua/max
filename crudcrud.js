function saveToLocalStorage(event){
    event.preventDefault();
    const name =event.target.username.value;
    const email = event.target.emailId.value;
    const cate = event.target.category.value;

    const Obj ={
        name,
        email,
        cate
    }
    axios.post("https://crudcrud.com/api/5da8aae694394b1e9dbad465f3df7818/AppointmentData",Obj )
        .then((response)=>{
            showNewUserOnScreen(response.data)
            //console.log(response)
        })
        .catch((err)=>{
            document.body.innerHTML = document.body.innerHTML+"<h4>something went wrong</h4>"
            console.log(err)
        })



    // localStorage.setItem(Obj.email,JSON.stringify(Obj))
    //showNewUserOnScreen(Obj)
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/5da8aae694394b1e9dbad465f3df7818/AppointmentData")
    .then((response)=>{
        for(var i=0; i<response.data.length; i++){
        showNewUserOnScreen(response.data[i])
        }
    })
    .catch((error)=>{
            console.log(error)
    })





    /*
    const localStorageObj= localStorage;
    const localStoragekeys=Object.keys(localStorageObj);

    for(var i=0; i<localStoragekeys.length; i++){
        const key =localStoragekeys[i];
        const userDetailsString = localStorageObj[key];
        const userDetailsObj =JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
    */
})

function showNewUserOnScreen(user){
    document.getElementById('email').value='';
    document.getElementById('username').value='';
    document.getElementById('category').value='';

    if(localStorage.getItem(user.email)!==null){
        removeUserFromScreen(user.email)
    }

     const parentNode =document.getElementById('listOfUsers');
     const childHTML=`<li id =${user._id} > ${user.name}-${user.email}
                       <button onclick=deleteUser('${user._id}')> Delete  </button>
                       <button onclick=editUserDetails('${user.email}','${user.name}','${user.cate}','${user._id}')> Edit </button>
                       </li>`

    parentNode.innerHTML =parentNode.innerHTML +childHTML;

}
function editUserDetails(emailId, name, cate, userId){
    document.getElementById('email').value = emailId;
    document.getElementById('username').value= name;
    document.getElementById('category').value= cate;
    deleteUser(userId);
}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/5da8aae694394b1e9dbad465f3df7818/AppointmentData/${userId}`)
    .then((response)=>{
        removeUserFromScreen(userId)
    })
    .catch((err)=>{
        console.log(err)
    })





    //console.log(emailId);
    //localStorage.removeItem(emailId);
    //removeUserFromScreen(emailId);
}

function removeUserFromScreen(userId){
    const parentNode=document.getElementById('listOfUsers');
    const childNodeToBeDeleted =document.getElementById(userId);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
}
