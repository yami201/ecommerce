import Home from './components/routes/Home/home.component';
import {Routes , Route,} from 'react-router-dom'
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from './components/routes/authentication/authentication.component';
const Shop = () => {
  return <h1>MAMAK</h1>
}
const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>} />
        <Route path="auth" element={<Authentication/>} />
      </Route>
      
    </Routes>    
  );
}

export default App;
