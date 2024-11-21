const buttons = document.querySelector('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.targer.id ==='grey'){
            body.style.backgroundColor= e.targer.id;
        }
        if(e.targer.id ==='white'){
            body.style.backgroundColor= e.targer.id;
        }
        if(e.targer.id ==='blue'){
            body.style.backgroundColor= e.targer.id;
        }
        if(e.targer.id ==='yellow'){
            body.style.backgroundColor= e.targer.id;
        }

    });
});