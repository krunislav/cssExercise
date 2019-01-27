//primer za alert
//alert("hello");
// Dohvatanje elementa preko id-a
var userElement=document.getElementById("user");
console.log(userElement);
console.log(userElement.innerHTML);

// Dohvatanje elemenata pomocu klase
console.log("Element sa klasom desc: ");
var descElements = document.getElementsByClassName("desc");
console.log("student 1: ");
console.log(descElements[0].innerHTML);
console.log("student 2: ");
console.log(descElements[1].innerHTML);
console.log(descElements[2].innerHTML);


console.log("studenti su: "
+ descElements[0].innerHTML + ", "
+ descElements[1].innerHTML + ", "
+ descElements[2].innerHTML + ", "
);

//Izmena vrednosi
userElement.innerHTML="Milomir";
console.log("Korisnik (id) je:" + userElement.innerHTML);

//Provera da li je korisnik punoletan
//var ageInput=document.getElementById("age").value;
//console.log(ageInput);

function ageVerification(){
//    alert(ageInput);
    var ageInput=document.getElementById("age").value;
    var messageBoxElement= document.getElementById("message-box");
    
    
    if (ageInput >= 18) {
        messageBoxElement.innerHTML= "Korisnik je punoletan";
    }else{
        messageBoxElement.innerHTML= "Korisnik nije punoletan";
    }
}