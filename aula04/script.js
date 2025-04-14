// // let nome = enzo
// // console.log(nome)
// // ========================================================================================================
// // // const saudar = function(nome){
// // //     return `Meu nome é ${nome}`
// // // }

// // // console.log(saudar('Daniel'))

// 
// function criarTarefa(titulo, descricao, prioridade, concluida) {

//     if (!titulo || !descricao || !prioridade || !concluida){
//         console.error('VOCÊ PRECISA INDICAR TODOS OS PARÂMETROS!')

//         return false
//     }
//     return {
//         id: Date.now(),
//         titulo,
//         descricao,
//         prioridade,
//         concluida,
//         criada: new Date()
//     }
// }

// const tarefa = criarTarefa('Estudar função')

// console.log(tarefa)


// function calcularEstatisticas(numeros) {
//     let soma = 0;
//     let min = numeros[0];
//     let max = numeros[0];
    
//     // Itera pelo array para acumular a soma e atualizar os valores de min e max
//     for (let i = 0; i < numeros.length; i++) {
//       soma += numeros[i];
//       if (numeros[i] < min) {
//         min = numeros[i];
//       }
//       if (numeros[i] > max) {
//         max = numeros[i];
//       }
//     }
    
//     const media = soma / numeros.length;
    
//     // Retorna os resultados em um objeto
//     return { soma, media, min, max };
//   }
  
//   const resultados = calcularEstatisticas([5, 10, 15, 20, 25]);
//   console.log(resultados);

// const sub = function (a, b) {
//     return a - b
// }

// Usar quando for apenas em uma unica linha
// const subArrow = (a, b) => a - b

// console.log(subArrow(20, 4))

// const num = [1, 2, 3, 4, 5]

// // const dobrar = num.map(n => n * 2)

// const dobrar = num.map(n => {
//     if (n === 3) {
//         return n * 2
//     } else {
//         return n
//     }
// })

// console.log(dobrar)

// (function() {
//     const a = 1
//     const b = 2

//     console.log(a + b)
// })()

// // Função que recebe um array e um callback para filtrar os elementos
// function filtrarTarefas(tarefas, callback) {
//     return tarefas.filter(callback);
//   }
  
//   const tarefas = [
//     { id: 1, titulo: "Estudar JS", concluida: false },
//     { id: 2, titulo: "Implementar TaskMaster", concluida: true }
//   ];
//   const concluidas = filtrarTarefas(tarefas, t => t.concluida);
//   const pendentes = filtrarTarefas(tarefas, t => !t.concluida);

//   console.log("Tarefas concluidas:", concluidas);
//   console.log("Tarefas pendentes:", pendentes);

//   function filtrarTarefas(tarefas) {
//     return tarefas.filter(t => !t.concluida);
//   }
  
//   const tarefas = [
//     { id: 1, titulo: "Estudar JS", concluida: false },
//     { id: 2, titulo: "Implementar TaskMaster", concluida: true }
//   ];
//   const pendentes = filtrarTarefas(tarefas);
//   console.log("Tarefas pendentes:", pendentes);

// Função recursiva que calcula o fatorial de um número
function fatorial(n) {
    if (n === 0 || n === 1) return 1;  // Caso base
    return n * fatorial(n - 1);        // Chamada recursiva
  }
  console.log("Fatorial de 5:", fatorial(5));