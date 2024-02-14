const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      repostas: [
        "Uma linguagem de programação de servidor",
        "Uma linguagem de marcação",
        "Uma linguagem de programação de alto nível para desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método em JavaScript usado para imprimir algo no console?",
      repostas: [
        "print()",
        "log()",
        "console()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual desses é um tipo de dado em JavaScript?",
      repostas: [
        "Inteiro",
        "Real",
        "Booleano",
      ],
      correta: 2
    },
    {
      pergunta: "Qual símbolo é usado para comentários de linha única em JavaScript?",
      repostas: [
        "//",
        "/* */",
        "<!-- -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      repostas: [
        "Determinar o tipo de um elemento HTML",
        "Retornar o tipo de um dado",
        "Comparar tipos de dados",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma variável em JavaScript?",
      repostas: [
        "new variable",
        "declare var",
        "var, let, ou const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual desses não é um loop em JavaScript?",
      repostas: [
        "while",
        "repeat",
        "for",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para adicionar um novo elemento ao final de um array em JavaScript?",
      repostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "O que faz o método 'document.querySelector()' em JavaScript?",
      repostas: [
        "Seleciona todos os elementos com a classe especificada",
        "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado",
        "Seleciona um elemento pelo seu ID",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
      repostas: [
        "switch",
        "if",
        "do-while",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz') //busca a div que contém o id com esse nome
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalPerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')  
  mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
  
  /*
  const quizItem = template.content.cloneNode(true) //clona o conteudo do template
  quiz.appendChild(quizItem) //colocar o filho(pergunta na tela)
  */
  
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta //modifica o conteúdo
  
      for (let resposta of item.repostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true) //dentro do dl seleciona o dt
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta- ' + perguntas.indexOf(item)) //função pesquisa o indice
        dt.querySelector('input').value = item.repostas.indexOf(resposta) //verifica se o selecionado é o correto
        
        //eventos - interação na tela (criação de uma função)
        dt.querySelector('input').onchange = (event) => {
          // event.target.value (evento selecionado)
          //verifica se o selecionado é a resposta correta
          const estaCorreta = event.target.value == item.correta
           
           corretas.delete(item) //deleta a seleção caso altere a alterar
            if(estaCorreta){
             corretas.add(item)
            }
  
            mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
  
          }      
        
        quizItem.querySelector('dl').appendChild(dt) //vai selecionar o dl e adicionar o dt   
  
      }
      quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem) 
  
  }
  