import { useEffect, useState } from 'react'
import "./index.css"

const App = () => {
  const [pokemon, setPokemon] = useState(null)
  const [eggClicked, setClick] = useState(false)


  useEffect(() => {
    fetchPokemon(2)
  }, [])



  const fetchPokemon = async (ID) => {
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
    const response = await request.json()
    setPokemon(response)
  }


  // handleEggClick = () => {
  //   setClick({
  //     pokemon: true
  //   })
  // }

  console.log(pokemon);

  return (
    <>
      <main>
          {/* <img src="https://i.gifer.com/origin/30/305ff766c302230a4cbe848a447e7758.gif" alt="click to egg" onClick={handleEggClick} />  && eggClicked !== false */}
          { pokemon !== null &&
            <div className='card_container'>
              <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
              <h2 className='titre'>🔥 {pokemon.name} 🔥</h2>
              <p className='pt-1'>🔎 Height: {pokemon.height} 🔍</p>
              <p>🔎  Weight: {pokemon.weight} 🔍</p>
              <p>🧬 Types: 🧬</p>
              <ul>{pokemon.types.map((type)=>{
                return <li key={type.slot}>{type.type.name}</li>
               })}</ul>
              <button onClick={() => fetchPokemon(Math.floor(Math.random()*151)+1)}>Show random Pokemon</button>
            </div>
          }
      </main>
    </>
  )
}

export default App