console.log('Hello world')

let titulo = 'Aprender JavaScript'

console.log(`Título é: ${titulo} e tem ${titulo.length} caractéres.`)

console.log(`Título é: ${titulo} e seu caracter é ${titulo[1]} .`)

// Ultimo caracter
console.log(`Título é: ${titulo} e seu ultimo caracter é ${titulo[titulo.length - 1]} .`)

// Onde se inicia tal coisa
console.log(`Título é: ${titulo} e a palavra 'JavaScript' inicia na posição: ${titulo.indexOf('JavaScript')} .`)

// Está presente? ==> Considera um trecho da palavra
console.log(`JavaScript está presente? ${titulo.includes('JavaScript')} .`)

// Começa com algo específico
console.log(`Começa com aprender? ${titulo.startsWith('Aprender')} .`)
