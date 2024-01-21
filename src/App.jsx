import './App.css'
import FunctionProps from './components/FunctionProps'
function App() {


  const executeFunction = () => {
    console.log("Executing function")
  }

  return (
    <>
    <FunctionProps myFunction={executeFunction}/>
    </>
  )
}

export default App
