Tentando criar um projeto a partir de uma ideia do Gemini.

16/06/25 - Apliquei uma lógica simples para encontrar o aluno destaque (maior nota).
Percebi que a maior nota não tratava empates. Refatorei o código para primeiro encontrar o valor da nota mais alta e depois filtrar todos os alunos que tinham aquela nota e imprimir isso no console.
Depois, percebi que um aluno com nota baixa não deveria ser destaque, então adicionei uma condição para que a nota máxima fosse igual ou superior a 7, logo, se não houvesse aluno que atendesse à essa nota, ninguém seri aluno destaque.