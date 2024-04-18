let n1, n2, n3, media, result

n1 = Number(prompt("Digite a nota 1: "))
n2 = Number(prompt("Digite a nota 2: "))
n3 = Number(prompt("Digite a nota 3: "))

media = (n1 + n2 + n3) /3

result = media >= 7 ? "Aprovado" : media < 3 ? "Reprovado" : "Recuperação"
alert(`${result} - Média Final: ${media.toFixed(2)}`)