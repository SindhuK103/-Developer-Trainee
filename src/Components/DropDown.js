// import React from "react";
// import { useEffect, useState } from "react";
// import qs from "qs";
// import axios from "axios";
// import { Container } from "react-bootstrap";
// import Select from "react-select";
// import Orders from "./Orders";


// function DropDown() {
//   const Orderdetails = {
//     id: 0,
//     CustomerId:0,
//     OrderDate: "",
//     RequiredDate: "",
//     Status:0,
//     Comments:"",
//     ShippedDate:"",
// }

//   const dropdown = {
//     selectoptions: [],
//     id:0,
//     Status:"",

//   };

//   const [Orderlist, setOrder] = useState(dropdown);
//   const [Order, setOrder] = useState(Orderdetails);
//   const handledropdown = async () => {
//     const res = await axios.get(
//       "http://localhost:44334/Default1/GetAllOrders"
//     );

//     const data = res.data;
//     const options = data.map((data) => ({
//       value: data.id,
//       label: data.Status,
//     }));

//     setOrder({ selectoptions: options });
//   };

//   const handlechange = (e) => {
//     setOrder({ id: e.value, Status: e.label });
//   };

//   const handleInput = (event) => {
//     setOrder({ ...Orders, [event.target.name]: event.target.value });
//   };

//   const handleAddOrder = async () => {
//     var data = {
//       id: Orders.id,
//       CustomerId: Orders.CustomerId,
//       OrderDate: Orders.OrderDate,
//       RequiredDate: Orders.RequiredDate,
//      // Status: Order.Status,
//       Comments: Orders. Comments,
//       ShippedDate: Orders.ShippedDate
//      };

//     const response = await axios.post(
//       "http://localhost:44334/Default/CreateOrder",
//       qs.stringify(data)
//     );
//     setOrder({
//       id: response.data.Code,
//       CustomerId: response.data.CustomerId,
//       OrderDate: response.data.OrderDate,
//       RequiredDate: response.data.RequiredDate,
//       // Status: Order.Status,
//       Comments: response.data.Comments,
//       ShippedDate: response.data.ShippedDate,
     
//     });

//   };
  
//   return (
//     <div>
//       <Container>
//         <h1>Create Order</h1>
//         <form>
//           <div>
//             <label>id</label>
//              <input
//               type="number"
//               className="form-control"
//               id="id"
//               name="id"
//               placeholder="id"
//               value={Orders.id}
//               onChange={handleInput}
//             ></input> 
//           </div>
//           <div>
//             <label>CustomerId</label>
//             <input
//               type="number"
//               className="form-control"
//               id="CustomerId"
//               name="CustomerId"
//               placeholder="CustomerId"
//               value={Orders.CustomerId}
//               onChange={handleInput}
//             ></input>
//           </div>
//           <div>
//             <label>OrderDate</label>
//             <input
//               type="date"
//               className="form-control"
//               id="OrderDate"
//               name="OrderDate"
//               placeholder="OrderDate"
//               value={Orders.OrderDate}
//               onChange={handleInput}
//             />
//           </div>
//           <div>
//             <label>RequiredDate</label>
//             <input
//               type="date"
//               className="form-control"
//               id="RequiredDate"
//               name="RequiredDate"
//               placeholder="RequiredDate"
//               value={Orders.RequiredDate}
//               onChange={handleInput}
//             />
//           </div>
//           <div>
//             <label>Status</label>
//             <Select
//               options={Orderlist.selectoptions}
//               onChange={handlechange}
//             />
//           </div>
//           <div>
//             <label>Comments</label>
//             <input
//               type="text"
//               className="form-control"
//               id="Comments"
//               name="Comments"
//               placeholder="Comments"
//               value={Orders.Comments}
//               onChange={handleInput}
//             />
//           </div>
//           <div>
//             <label>ShippedDate</label>
//             <input
//               type="date"
//               className="form-control"
//               id="ShippedDate"
//               name="ShippedDate"
//               placeholder="ShippedDate"
//               value={Orders.ShippedDate}
//               onChange={handleInput}
//             />
//           </div>
//           <button
//             onClick={(handleAddOrder, handledropdown)}
//             className="btn btn-primary"
//           >
//             Submit
//           </button>
//         </form>
//         <center>
//           <Link to="/Product" className="btn btn-Secondary">
//             View Orders
//           </Link>
//         </center>
//       </Container>
//     </div>
//   );
// }
// export default DropDown;