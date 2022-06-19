import { useEffect }from "react"
import {Routes , Route} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { onAuthStateChangedListener, createUserDoc} from './utils/firebase/firebase.utils';

import { setCurrentUser } from "./store/user/user.action"
import Home from './components/routes/Home/home.component';
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from './components/routes/authentication/authentication.component';
import Shop from './components/routes/shop/shop.component';
import Checkout from './components/routes/checkout/checkout.component';



const App = () => {
  const dispatch = useDispatch()
  useEffect( ()=> {
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDoc(user)
        }
        dispatch(setCurrentUser(user))
    })
    return unsubscribe
  },[])
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>} />
        <Route path="auth" element={<Authentication/>} />
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
      
    </Routes>    
  );
}

export default App;
