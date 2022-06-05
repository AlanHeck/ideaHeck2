let divDolar = document.getElementById('divDolar')

fetch('https://criptoya.com/api/dolar')
.then(promesa => promesa.json())
.then(({oficial, solidario, mep, ccl, blue, ccb}) => {
    divDolar.innerHTML = `
    <h2>Cotizaciones dolar</h2>
    <p>Oficial: ${oficial}</p>
    <p>Solidario: ${solidario}</p>
    <p>MEP: ${mep}</p>
    <p>CCL: ${ccl}</p>
    <p>Blue: ${blue}</p>
    <p>CCB: ${ccb}</p>
    `
})
.catch(error => console.error(error))