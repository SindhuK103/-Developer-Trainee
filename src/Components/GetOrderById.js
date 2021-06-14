// import React, { useState, useEffect } from "react";
//  import axios from "axios";


//  function GetOrderById() {
//    const [data, setData] = useState([]);


//    useEffect(() => {
//      const fetchData = async () => {
       
//        const result = await axios.get("http://localhost:44334/Default1/GetOrderById/2");
//        setData(result.data.orders);
//        console.log(result.data.orders);

//      };
//      fetchData();
//    }, []);


//    return (
//      <div>
//        <table className="table">
//          <thead>
//            <tr>
//              <th>CustomerId</th>
//              <th>OrderDate</th>
//              <th>RequiredDate</th>
//              <th>Status</th>
//              <th>Comments</th>
//              <th>ShippedDate</th>
//            </tr>
//          </thead>

//          <tbody>
//            {data.map((item) => (
//              <tr key={item.id}>
//                <td>{item.CustomerId}</td>
//                <td>{item.OrderDate}</td>
//                <td>{item.RequiredDate}</td>
//                <td>{item.Status}</td>
//                <td>{item.Comments}</td>
//                <td>{item.ShippedDate}</td>
//              </tr>
//            ))}
//          </tbody>
//        </table>
//     </div>
     


//    );
//  }
//  export default GetOrderById;


import React, { useState, useEffect } from "react";
import axios from "axios";


const GetOrderById = (props) => {
  let ids = props.match.params.id;
  const [data, setData] = useState([]);

  useEffect(() => {
    const setsData = async () => {
      const result = await axios.get(
        "http://localhost:44334/Default1/GetOrderById/?id=" + ids);
      setData(result.data.orders);
       console.log(result.data.orders);
    };
    setsData();
  }, []);

  return (
    <div>
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
           {data.map((data) => (
              <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.CustomerId}</td>
              <td>{data.OrderDate}</td>
              <td>{data.RequiredDate}</td>
              <td>{data.Status}</td>
              <td>{data.Comments}</td>
              <td>{data.ShippedDate}</td>
            </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  );
          
};
export default GetOrderById;
