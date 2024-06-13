
let btn = document.getElementById("button");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function(event) {
    let nom = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    if(nom !== '' &&
    email !== '' ) {
        event.preventDefault();
        let modal = document.getElementById("myModal");
        modal.style.display = "block";

        document.getElementById('name').removeAttribute('required');
        document.getElementById('mail').removeAttribute('required');



        document.getElementById('name').value = '';
        document.getElementById('mail').value = '';

    } 
}
 
span.onclick = function() {
    let modal = document.getElementById("myModal");   
    modal.style.display = "none";

    document.getElementById('name').setAttribute('required', '');
    document.getElementById('mail').setAttribute('required', '');
}

window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target === modal) {
    modal.style.display = "none";
}
}


