let pokemonList = [
    { name: 'Growlithe', height: 0.6, type: ['Fire'] },
    { name: 'Arcanine', height: 1.9, type: ['Fire'] },
    { name: 'Totodile', height: 0.6, type: ['Water'] },
    { name: 'Croconaw', height: 1.1, type: ['Water'] },
    { name: 'Feraligatr', height: 2.3, type: ['Water'] },
    { name: 'Poliwrath', height: 1.3, type: ['Water', 'Fighting'] }
  ];
// loops the whole list of pokemon and then prints them to DOM. Then checks height and prints outs a string based on its size.
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' ' + "Height:" + ' ' + pokemonList[i].height)
  if (pokemonList[i].height < 1.0)
    document.write(" So small!")
  else if (pokemonList[i].height > 1.1)
    document.write(" Wow, that’s big!")
  document.write("<br>");
}