
import { Suspense } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/NavBar/PricingOptions/PricingOptions';

const pricingOption = fetch('pricingData.json').then(res => res.json());

function App() {


  return (
    <>

      <header>
        <NavBar></NavBar>
      </header>

      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOptions pricingOption={pricingOption}></PricingOptions>
        </Suspense>
      </main>




    </>
  )
}

export default App
