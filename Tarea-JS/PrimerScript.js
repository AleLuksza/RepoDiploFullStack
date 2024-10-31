const distancia = prompt('Inique en metros la distancia a destino:', "")

if (distancia <= 1000) {
    document.write('Podés ir a pié.');
} else if (distancia > 1000 && distancia <= 10000) {
    document.write('Sería idóneo que viajaras en bicicleta.');
} else if (distancia > 10000 && distancia <= 30000) {
    document.write('Mejor cargá la sube y tomate un colectivo, siempre y cuando no haya paro.')
} else if (distancia > 30000 && distancia <= 100000) {
    document.write('Vos hacé lo que quieras pero lo mejor sería ir en auto.')
} else {
    document.write('Definitivamente deberías ir en avión.')
}