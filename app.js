try {

    fetch('http://localhost:4331')

    .then((response) => {
        return response.json();
    }).then((jsonParserd) => {
        const divHero = document.querySelector('#herois');

        jsonParserd.data.results.forEach(element => {
            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
            const nameHero = element.name

            createDivHero(srcImage, nameHero, divHero)
        });
        console.log(jsonParserd)
    })

} catch (error) {
    console.error(error)
}




function createDivHero(srcImage, nameHero, divHero) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('h1')
    const img = document.createElement('img')

    textName.textContent = nameHero
    img.src = srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divHero.appendChild(divPai)

    divPai.classList.add("pesornagem");

}