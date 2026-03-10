
import { Suspense } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/NavBar/PricingOptions/PricingOptions';
import axios from 'axios';
import MarksChart from './components/NavBar/MarksChart/MarksChart';

const pricingOption = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('axios.json');

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

        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>




    </>
  )
}

export default App
