const form = document.querySelector('form')
// this usecase will give you empty value
// const height= parseIntdocument.querySelector('#height').value);

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height= parseIntdocument.querySelector('#height').value);
    const weight= parseIntdocument.querySelector('#weight').value);
    const results= document.querySelector('#results')

    if(height == '' || height < 0 || isNaN(height)){
        results.innerHTML = 'please give a valid height ${height}';
    }
    
    else if(weight == '' || height < 0 || isNaN(weight)){
        results.innerHTML = 'please give a valid height ${height}';
    }else {
         
    }




})