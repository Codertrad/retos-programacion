//RESUELTO

const ovejas = [
   { name: 'Noa', color: 'azul' },
   { name: 'Euge', color: 'rojo' },
   { name: 'Navidad', color: 'rojo' },
   { name: 'Ki Na Ma', color: 'rojo' },
   { name: 'AAAAAaaaaa', color: 'rojo' },
   { name: 'Nnnnnnnn', color: 'rojo' }
]

const contarOvejas = (ovejas) => {
   return ovejas.filter(oveja=> oveja.color === 'rojo')
   .filter(oveja => `${oveja.name}`.toLocaleLowerCase().includes('n'))
   .filter(oveja => `${oveja.name}`.toLocaleLowerCase().includes('a'))
}

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)