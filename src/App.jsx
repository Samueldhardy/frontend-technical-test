import pokemonLogo from './assets/pokemon-logo.png'

function App() {
  return (
    <div className="flex flex-col items-center gap-8">
      <img src={pokemonLogo} className="w-[300px]" alt="Pokemon" />
      <h1>Code name generator</h1>
    </div>
  )
}

export default App
