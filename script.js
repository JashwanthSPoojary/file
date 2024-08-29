const toggle = document.querySelector('#toggle-button');
const form = document.querySelector('.form');

toggle.addEventListener('click',()=>{
    form.classList.toggle('active');
    if(form.classList.contains('active')){
        form.style.transform = "translateX(-50%)";
        toggle.textContent="Click to login"
    }else{
        form.style.transform = "translateX(0)";
        toggle.textContent="Click to Register";
    }
})