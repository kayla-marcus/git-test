import './App.css'
import image from './assets/kayla-rollerskating.png';

function App() {

  return (
    <>
      <h1>Weclome to the Git Test!!!</h1>
      <p className="read-the-docs">
        Lorem ipsum dolor amet ipsum consectur dolor delian fectur ipsum et al sum.
      </p>
      <img src={image} width={"400px"}/>
      <img className='image' src={image} width={"400px"}/>
    </>
  )
}

export default App
