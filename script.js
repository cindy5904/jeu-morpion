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
console.log(boxes);


let compt = 0 

for (let td of elemt) {
    td.addEventListener('click', point)
}


function point() {
    if(this.textContent == "")
        if(compt == 0){
            this.textContent = "x"
            console.log('Joueur 1')
        } else {
            this.textContent = "o"
            console.log('Joueur 2')
        }
    
}
