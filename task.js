let nome = "Cophy";
let xp = 7005;
let nivel = "";

const niveis = [
  { limite: 1000, nome: "Ferro" },
  { limite: 2000, nome: "Bronze" },
  { limite: 6000, nome: "Prata" },
  { limite: 7000, nome: "Ouro" },
  { limite: 8000, nome: "Platina" },
  { limite: 9000, nome: "Ascendente" },
  { limite: 10000, nome: "Imortal" },
  { limite: Infinity, nome: "Radiante" } // Infinity é usado para cobrir qualquer valor acima de 10000
];

for (let i = 0; i < niveis.length; i++) {
  if (xp <= niveis[i].limite) {
    nivel = niveis[i].nome;
    break;
  }
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
