import React, { useState, useEffect } from "react";
 import axios from "axios";
 import {Link} from 'react-router-dom';

 

 function Orders() {
   const [data, setData] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
       
       const result = await axios.get("http://localhost:44334/Default1/GetAllOrders");
       setData(result.data.orders);
       console.log(result.data.orders);

     };
     fetchData();
   }, []);

   
   return (
     <div>
       <table className="table">
         <thead>
           <tr>
             <th>id</th>
             <th>CustomerId</th>
             <th>OrderDate</th>
             <th>RequiredDate</th>
             <th>Status</th>
             <th>Comments</th>
             <th>ShippedDate</th>
           </tr>
         </thead>

         <tbody>
           {data.map((item) => (
             
                 <tr key={item.id}>
                 <td>{item.id}</td>
               <td>{item.CustomerId}</td>
               <td>{item.OrderDate}</td>
               <td>{item.RequiredDate}</td>
               <td>{item.Status}</td>
               <td>{item.Comments}</td>
               <td>{item.ShippedDate}</td>
               <td><Link to={"/GetOrderById/" + item.id} 
                className="btn btn-primary"
              > GetOrders</Link></td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 }
 export default Orders;
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()