let blogadd = document.querySelector('.blog-add');

document.querySelector('#blog-btn').onclick = () =>{
    blogadd.classList.toggle('active');
    revadd.classList.remove('active');
    loginForm.classList.remove('active');
}
let revadd = document.querySelector('.review-add');

document.querySelector('#review-btn').onclick = () =>{
    revadd.classList.toggle('active');
    blogadd.classList.remove('active');
    loginForm.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
  blogadd.classList.remove('active');
  revadd.classList.remove('active');
    loginForm.classList.toggle('active');
}


window.onscroll = () =>{
  blogadd.classList.remove('active');
  revadd.classList.remove('active');
    loginForm.classList.remove('active');
}
