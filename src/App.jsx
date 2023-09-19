/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */

/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */

import pokemonData from "./data.json"
import Pokemon from "./components/Pokemon"

export const App = () => {
  console.log(pokemonData.pokemons)
    return ( <div className ="App"> 
    <h1> pokemon List</h1>
     <ul> {pokemonData.pokemons.map((el) => (<Pokemon key={el.id} name={el.name} types={el.types} /> ))} 
     </ul>
     </div>)}
  