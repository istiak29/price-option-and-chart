import './App.css'
import DaisyNav from "./components/DaisyNavBar/DaisyNav";
import NavBar from './components/DaisyNavBar/NavBar/NavBar';
import LineChart from './components/LineChart/LineChart';
import PriceOptions from './components/PriceOptions/PriceOptions';

function App() {
  

  return (
    <>
    <NavBar></NavBar>
    <DaisyNav></DaisyNav>
      <h1 className='text-7xl font-semibold bg-rose-700'>Vite + React</h1>
    <PriceOptions></PriceOptions>

    <LineChart></LineChart>

    </>
  )
}

export default App
