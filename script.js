const pass=document.querySelector('#password');
const confpass=document.querySelector('#confpassword');

confpass.addEventListener('input',()=>validate());
pass.addEventListener('input',()=>validate());
function validate(){
    if(confpass.value!=pass.value){
        confpass.classList.add('isntvalid');
        //pass.classList.add('isntvalid');
    }
    else{
        confpass.classList.remove('isntvalid');
        //pass.classList.remove('isntvalid');
    }
}