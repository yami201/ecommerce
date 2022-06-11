import Home from "./components/routes/home.component";
import {Routes , Route,} from 'react-router-dom'
import Navigation from "./components/navigation/navigation.component";
const Shop = () => {
  return <h1>MAMAK</h1>
}
const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>} />
      </Route>
      
    </Routes>    
  );
}

export default App;
