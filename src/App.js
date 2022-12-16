import './App.css'
import Nabvar from './components/Nabvar/Nabvar'
import Hero from './components/Hero/Hero'
import Form from './components/Form/Form'
import WallectConnect from './components/Providers/Wallet'
function App() {
  return (
    <WallectConnect>
      <Nabvar />
      <Hero />
      <Form />
    </WallectConnect>
  )
}

export default App
