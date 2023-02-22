export const pisto = 100

const hijos = [
  { name: "messi", sePortoBien: true, mesada: 20 },
  { name: "duki", sePortoBien: false, mesada: 0 },
  { name: "lit killah", sePortoBien: false, mesada: 0 },
  { name: "dua lipa", sePortoBien: true, mesada: 40 },
  { name: "emiliano", sePortoBien: true, mesada: 25 },
]

const darPistoAHijo = (hijoName: string, cantidad: number) => {
  const index = hijos.findIndex((hijo) => hijo.name === hijoName)

  const hijosQueSePortaronBien = hijos.filter(
    (hijo) => hijo.sePortoBien === true && hijo.name != hijoName
  )
  const hijosQueSePortaronMal = hijos.filter(
    (hijo) => hijo.sePortoBien === false
  )

  const dinero = 0
  const dineroDeLosqueSePortaronBien = hijosQueSePortaronBien.reduce(
    (previus, curr) => previus + curr.mesada,
    dinero
  )

  const dineroParaDarleAlHijo = pisto - dineroDeLosqueSePortaronBien

  if (cantidad <= dineroParaDarleAlHijo) {
    hijos[index].mesada = cantidad

    const dineroARepartirALosPlebeyos =
      pisto - dineroDeLosqueSePortaronBien - cantidad

    hijos.forEach((hijo) => {
      if (!hijo.sePortoBien)
        hijo.mesada = dineroARepartirALosPlebeyos / hijosQueSePortaronMal.length
    })

    return hijos
  } else {
    return "No ajusta la plata, pida menos"
  }
}

console.log(darPistoAHijo("messi", 30))
console.log(darPistoAHijo("emiliano", 25))
