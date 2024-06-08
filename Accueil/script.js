let modal = document.getElementById("myModal");
let btn = document.getElementById("button");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    let nom = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    if(nom === '' || nom === null &&
    email === '' || email === null) {
        let errors = document.querySelectorAll('.error');
        errors.forEach(error => {
            error.textContent = 'Veuillez remplir ce champ';
            error.style.color = 'red';
        });
    } else {
        modal.style.display = "block";
        document.getElementById('name').value = '';
        document.getElementById('mail').value = '';
    }   
}
 
span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
 modal.style.display = "none";
}
}


