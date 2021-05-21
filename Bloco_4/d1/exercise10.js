let custo = 150
let venda = 0
let imposto = (custo * 0.2)
let lucro = (venda - (custo + imposto))
let mil = (lucro * 1000)

if (custo === 0 | venda ===0) {
    console.log("erro")
}
else {
    console.log(lucro)
    console.log("O lucro da venda de 1000 produtos será de : " + lucro * 1000)
}