import { useEffect, useState } from 'react'

const App = () => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetchPokemon(2)
  }, [])



  const fetchPokemon = async (ID) => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
    const response = await request.json()
    setPokemon(response)
  }

  console.log(pokemon);

  return (
    <>
      <main>
          { pokemon !== null &&
            <div className='card'>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h2>Name: {pokemon.name}</h2>
              <p>height {pokemon.height}</p>
              <p>weight {pokemon.weight}</p>
              <button onClick={() => fetchPokemon(Math.floor(Math.random()*151)+1)}>show random Pokemon</button>
            </div>
          }
      </main>
    </>
  )
}

export default App