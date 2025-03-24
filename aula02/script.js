// Debugging

// console.log('Aula Js')

// console.info('Mensagem Info')

// console.warn('Warn')

// console.error('Error')

// console.table([{id: 1, tarefa:'Estudar'}])

// console.group('Grupo de logs')
// console.log('1')
// console.log('2')
// console.groupEnd()

// console.time('Timer')
// if(1 != 2) {
//     console.log('1 é diferente de 2')
// }
// console.timeEnd('Timer')

// Comentários: 

// Usando (uma linha) //
/* 
Usando (varias linhas)
/**/

// Variáveis

var antigo = 'Forma antiga'

let valorMutavel = 'Forma nova (mutavel)'

const valorImutavel = 'Forma nova (imutavel)'

// console.log(valorMutavel)

// valorMutavel = 10

// console.log(valorMutavel)

// console.log(valorImutavel)

// valorImutavel = 20

// console.log(valorImutavel)

// Dados Primitivos

let txt = 'Oi'
console.log(txt)
console.log(typeof txt)

let num = 10
console.log(num)
console.log(typeof num)

let boom = false
console.log(boom)
console.log(typeof boom)

let semValor
console.log(semValor)
console.log(typeof semValor)

let nulo = null
console.log(nulo)
console.log(typeof nulo)

let uniqueId = Symbol('id')
console.log(uniqueId)
console.log(typeof uniqueId)

let grandeNumero = 2913921738219319999999999999999n
console.log(grandeNumero)
console.log(typeof grandeNumero)

// Dados Complexos

let tasks = [
    {id: '1', descricao: 'Tarefa 01'},
    {id: '2', descricao: 'Tarefa 02'}, 
    {id: '3', descricao: 'Tarefa 03'}
]

console.log(tasks)

console.log(tasks[1])

console.log(tasks[1]['id'])

console.log(tasks[1]['descricao'])

// [array] {objeto} -> id = nome propriedade -> 1 = valor obj

let hoje = new Date()
console.log(hoje)

let dataFutura = new Date('03-25-2025') // mes dia ano
console.log(dataFutura)

// expressao regular

let pattern = /^[a-z]+$/i
console.log(pattern.test('JavaScript'))

// conversao de tipos

let numero = 42

console.log(typeof (numero))

console.log(typeof (String(numero)))

let texto = 'texto'
console.log(typeof(Number(texto)))
console.log(typeof(parseInt(texto)))
console.log(typeof(parseFloat(texto)))

let textoBoom = 'texto'
console.log(typeof(Boolean(textoBoom)))

let vazio = ''
let cheio = 'oi'

console.log(Boolean(vazio))
console.log(Boolean(cheio))

// operadores aritiméticos

let a = 10
let b = 30

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b) // resto da divisao
console.log(a ** b) // exponenciaçcao

// operadores de incremento e decremento

let contator = 0
let contator02 = 0
console.log(contator)
console.log(contator++) // incrementa so depois que imprime
console.log(contator)

console.log(++contator02) // incrementa primeiro depois indica o valor dele

// operadores de atribuição

let x = 10
console.log(x)

x += 5
console.log(x)

x -= 3
console.log(x)

x *= 2
console.log(x)

x /= 2
console.log(x)

x &= 5
console.log(x)

x **= 5
console.log(x)

// operadores de comparação

console.log(10 == '10') // == valor 
console.log(10 === '10') // === valor + tipagem

console.log(11 != 11)
console.log(11 !== 10)

// operadores lógicos
// && (E)
console.log(true && false)
console.log(1===1 && 1===2)

// || (OU)

console.log(true || false)
console.log(1===1 || 1===2)

// ! negaçao

console.log(!(1 === 1)) // false
console.log(!(1 === 2)) //true