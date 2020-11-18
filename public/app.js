try {

    fetch('http://localhost:4331')

    .then((response) => {
        return response.json();
    }).then((jsonParserd) => {
        const divHero = document.querySelector('#herois');

        jsonParserd.data.results.forEach(element => {
            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
            const nameHero = element.name

            createDivHero(srcImage, nameHero, divHero, )
        });
        console.log(jsonParserd)
    })

} catch (error) {
    console.error(error)
}




function createDivHero(srcImage, nameHero, ) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('h1')
    const img = document.createElement('img')
    const hero = document.querySelector('#herois')

    textName.textContent = nameHero
    img.src = srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    hero.appendChild(divPai)

    divPai.classList.add("pesornagem");
    img.classList.add("image-hero")
    textName.classList.add("name-hero")

}






/* ===MODAL===*/
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('#herois')

for (let card of cards) {
    card.addEventListener("click", function() {
        modalOverlay.classList.add("active")
        const imgId = card.getAttribute('image-hero');
        const cardName = card.querySelector('.name-hero').querySelector('h1').textContent;
        modalOverlay.querySelector('img').src = `${imgId}`;
        modalOverlay.querySelector('.name-hero').textContent = cardName;
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector('img').src = "";
})