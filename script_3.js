let answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

const symbole = "#"
const space = " "
const retour_ligne = "\n"

function Pyramide()
{
  let structure = "";
  for (let i =  1; i <= answer; i++)
{
    structure = structure + space.repeat(answer - i) + symbole.repeat(i) + retour_ligne;
  }
  return structure;
}
console.log(Pyramide(answer));