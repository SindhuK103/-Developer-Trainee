import React, { useState, useEffect } from "react";
 import axios from "axios";
 

 function Products() {
     const [data, setData] = useState([]);
     
     useEffect(() => {
     const fetchData = async () => {
       
     const result = await axios.get("http://localhost:44334/Default/GetAllProduct");
     setData(result.data.products);
     console.log(result.data.products);
     };
     fetchData();


    },[data]);// dependency

   return (
     <>
       <table className="table">
         <thead>
           <tr>
             <th>Code</th>
             <th>ProductLineId</th>
             <th>Name</th>
             <th>Scale</th>
             <th>Vendar</th>
             <th>PdtDescription</th>
             <th>QtyInStock</th>
             <th>BuyPrice</th>
             <th>MSRP</th>
           </tr>
         </thead>

         <tbody>
           {data.map((item) => (
             <tr key={item.Code}>
               <td>{item.Code}</td>
               <td>{item.ProductLineId}</td>
               <td>{item.Name}</td>
               <td>{item.Scale}</td>
               <td>{item.Vendar}</td>
               <td>{item.PdtDescription}</td>
               <td>{item.QtyInStock}</td>
               <td>{item.BuyPrice}</td>
               <td>{item.MSRP}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </>
   );
 }
 export default Products;