import logo from './logo.svg';
import './App.css';
import Orders from './Components/Orders';
import Products from './Components/Products';
import Header from './Components/Header';
import Addproduct from './Components/AddProduct';
import AddOrder from './Components/AddOrder';
import PutProduct from './Components/PutProduct';
import PutOrder from './Components/PutOrder';
import GetOrderById from './Components/GetOrderById';
import Put from './Components/Product';
//import DropDown from './Components/DropDown';
import {Route,Switch} from 'react-router-dom';



function App(){
  return(
     <div> 
      <Header/>
      <Switch>
      <Route path="/" exact component={Orders}/>
      <Route path="/Products" component={Products}/>
      <Route path="/AddProduct" component={Addproduct}/>
      <Route path="/AddOrder"  component={AddOrder}/>
      <Route path="/PutProduct" component={PutProduct}/>
      <Route path="/PutOrder" component={PutOrder}/>
      <Route path="/GetOrderById/:id" component={GetOrderById} />
      <Route path="/Put" component={Put} />
      {/* <Route path="/DropDown" component={DropDown}/> */}
     </Switch>
    </div>
  );
}



export default App;
