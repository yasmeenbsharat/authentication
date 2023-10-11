
const loginBtn =document.getElementById('login');


loginBtn.addEventListener('click', function(){
    const password=document.getElementById('password').value;
    const userName =document.getElementById('userName').value;
    if (userName =='' || password ==''){
 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your name or password is empty!! Please enter them ^_^',
      });
     

    }
    
    else {
       userLogin(userName,password);
    }


});
async function  userLogin(userName,password){
    const request = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // username: 'kminchelle',
          // password: '0lelplR',
          username: `${userName}`,
          password: `${password}`,
        })
      });
    const response = await request.json();
    console.log(response);
    if(!response.message){
        localStorage.setItem('token',response.token);
        window.location.href = '../../pages/profile.html';
        console.log(response);
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your name or password is incorrect!! Please try again ^_^',
          });
    }
  
   
 }

let current = null;
document.querySelector('#userName').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#login').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});