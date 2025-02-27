// Recuperer les champs

let nom = document.getElementById("name");
let cvnom = document.getElementById("pName");

nom.addEventListener("input", function () {
    cvnom.innerText = this.value || "Nom Complet";
});

let age = document.getElementById("age");
let cvage = document.getElementById("pAge");

age.addEventListener("input", function () {
    cvage.innerText = "Âge: "+this.value+" ans" || "Âge: ans";
});

let sexe = document.getElementById("gender");
let cvsexe = document.getElementById("pSex");

sexe.addEventListener("input", function () {
    cvsexe.innerText = "Sexe: "+this.value || "Sexe: ";
});

let poste = document.getElementById("designation");
let cvposte = document.getElementById("pPoste");

poste.addEventListener("input", function () {
    cvposte.innerText = this.value || "Titre du poste";
});

let situation = document.getElementById("status");
let cvsituation = document.getElementById("pStatut");

situation.addEventListener("input", function () {
    cvsituation.innerText = "Situation actuelle: "+this.value || "Situation actuelle: ";
});

let description = document.getElementById("description");
let cvdescription = document.getElementById("pDescription");

description.addEventListener("input", function () {
    cvdescription.innerText = this.value || "...";
});

let email = document.getElementById("email");
let cvemail = document.getElementById("pEmail");

email.addEventListener("input", function () {
    cvemail.innerText = "Email: "+this.value || "Email: ";
});

let tel = document.getElementById("phone");
let cvtel = document.getElementById("pPhone");

tel.addEventListener("input", function () {
    cvtel.innerText = "Téléphone: "+this.value || "Téléphone: ";
});

let adresse = document.getElementById("address");
let cvadresse = document.getElementById("pAddresse");

adresse.addEventListener("input", function () {
    cvadresse.innerText = "Adresse: "+this.value || "Adresse: ";
});

let image = document.getElementById("profile");
let cvimage = document.getElementById("pProfil");

image.addEventListener("change", function (event) {
    let lecteur = new FileReader();
    lecteur.onload = function (e) {
        cvimage.src = e.target.result;
    };
    lecteur.readAsDataURL(event.target.files[0]);
})