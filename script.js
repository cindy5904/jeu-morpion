// var dataa =document.querySelectorAll(".case")
// console.log(dataa);

// for(let data1 of dataa) {
//     data1.addEventListener('click', check)
// }

// var click = 0

// function check(){
//     console.log(this.dataset.class)
//     click++
//     if (click % 2 == 0){
//         this.textContent = "x"
//     } else {
//         this.textContent = "o"
//     }
// }
var elemt = document.getElementsByClassName('case');
elemt = document.querySelectorAll('.case');
console.log(elemt);
let tab = ["", "", "", "", "", "","", "",""];

let compt = 0 

for (let td of elemt) {
    td.addEventListener('click', point)
}


function point() {
    if(this.textContent == "")
        if(compt %2 == 0){
            this.textContent = "X"
            tab.splice(this.dataset.class, 1, "X");
            console.log('Joueur 1')
        } else {
            this.textContent = "O"
            tab.splice(this.dataset.class, 1, "O");
            console.log('Joueur 2')
        }
        compt++
        if(tab[0] == tab[1] && tab[2] == tab[1] && tab[0] !="") {
            console.log("Vous avez gagné 😉")
        } else if (tab[3] == tab[4] && tab[5] == tab[4] && tab[3] != "" ) {
            console.log("Vous avez gagné 😉")
        }  else if (tab[6] == tab[7] && tab[8] == tab[7] && tab[6] != "" ) {
            console.log("Vous avez gagné :-)")
        }  else if (tab[0] == tab[3] && tab[6] == tab[3] && tab[0] != "" ) {
            console.log("Vous avez gagné :-)")
        }  else if (tab[1] == tab[4] && tab[7] == tab[4] && tab[1] != "" ) {
            console.log("Vous avez gagné :-)")
        }  else if (tab[2] == tab[5] && tab[8] == tab[5] && tab[2] != "" ) {
            console.log("Vous avez gagné :-)")
        }  else if (tab[0] == tab[4] && tab[8] == tab[4] && tab[0] != "" ) {
            console.log("Vous avez gagné :-)")
        }  else if (tab[2] == tab[4] && tab[6] == tab[4] && tab[2] != "" ) {
            console.log("Vous avez gagné :-)")
        } else if (!tab.includes('')){
            alert('Match Nul')
        }
}
