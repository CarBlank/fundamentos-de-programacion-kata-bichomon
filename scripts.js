/* console.log(document.title);
 */

document.getElementById('gen-1').innerHTML='Generasión 1 Pokimon';

const bg1gen = document.querySelector('.infocard-list')
bg1gen.style.background = 'lightblue'

const urllocal = document.URL
console.log (urllocal)

const dominio = document.domain
console.log (dominio)

const nodoImg = document.querySelectorAll('img')
console.log(nodoImg)

/* const newImg = document.getElementsByTagName('img') */

const newImg = document.querySelectorAll('img')
for (let i = 0 ; i < newImg.length ; i++) {
    /* newImg[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif' */
    newImg[i].setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif')
}

/* function cambiarImg (newGif) {
    for (let i = 0 ; i < newImg.length ; i++) {
        let newGif = 0
        newGif = newImg.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif')
    } 
    return newGif
}

console.log(cambiarImg(newGif))

 */
/* let sumaImpares = 0
for (i = 0 ; i < 10 ; i++) {
    if (i % 2 !== 0)  /* no entiendo bien */
/*     sumaImpares = sumaImpares + i
}
 */
/* function separarPalabras (frase) {
    let palabrasArray = frase.split (' ')
    return palabrasArray
} */

/* function ordenarArray (number) {
    /* return Array.from(String(number)).reverse();
 */
/*     let reverseNumber = number.reverse();
    return reverseNumber
} */




/* function cambiarImg () {
    for 
}

for(int i = 0; i<arr.length; i++){
    if(arr[i] == arr[arr.length-1-i]){
        newImg.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
    }
}
console.log(newImg) */

/*
const bgfly = document.querySelector('.infocard-lg-data.text-muted')
bgfly.style.background = 'red' */