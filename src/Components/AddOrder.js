import React from 'react';
import { useEffect, useState } from 'react';
import qs from 'qs';
import axios from 'axios';

// set data
function AddOrder() {
    const Orderdetails = {
        id: 0,
        CustomerId:0,
        OrderDate: "",
        RequiredDate: "",
        Status:0,
        Comments:"",
        ShippedDate:"",
    }
    //set orderdetails
    const [Order, setOrder] = useState(Orderdetails);
    const handleChange= event => {
    setOrder({ ...Order, [event.target.name]: event.target.value });
    };

    //Creation in submit
        const handleAddOrder = async () => {
        debugger;
        var Orderdata = {
            id: Order.id,
            CustomerId: Order.CustomerId,
            OrderDate: Order.OrderDate,
            RequiredDate: Order.RequiredDate,
            Status: Order.Status,
            Comments: Order. Comments,
            ShippedDate: Order.ShippedDate
        };

        // set url
        const response = await axios.post("http://localhost:44334/Default/CreateOrder", qs.stringify(Orderdata))
        setOrder({
            id: response.Orderdata.id,
            CustomerId:response.Orderdata.CustomerId,
            OrderDate: response.Orderdata. OrderDate,
            RequiredDate: response.Orderdata. RequiredDate,
            Status: response.Orderdata. Status,
            Comments: response.Orderdata.Comments,
            ShippedDate: response.Orderdata.ShippedDate
        });
    };
    return (
        <div>
            <center>
               <h3>Creation of order</h3>
            </center>
                <div className="col-md-3 offset-md-4 mt-5 justify-content-center">
                    <form className="btn btn-outline-info">  
                        <input
                            type="number"
                            className="form-control"
                            id="id"
                            name="id"
                            placeholder="id"
                            autoComplete="on"
                            required
                            value={Order.id}
                            onChange={handleChange}
                        >
                        </input>
                        <input
                            type="number"
                            className="form-control"
                            id="CustomerId"
                            name="CustomerId"
                            placeholder="CustomerId"
                            required
                            autoComplete="on"
                            value={Order.CustomerId}
                            onChange={handleChange}
                        >
                        </input>
                        <input
                            type="date"
                            className="form-control"
                            id="OrderDate"
                            name="OrderDate"
                            placeholder="OrderDate"
                            required
                            autoComplete="on"
                            value={Order.OrderDate}
                            onChange={handleChange}
                         >
                         </input>
                        <input
                            type="date"
                            className="form-control"
                            id="RequiredDate"
                            name="RequiredDate"
                            placeholder="RequiredDate"
                            autoComplete="on"
                            value={Order.RequiredDate}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            className="form-control"
                            id="Status"
                            name="Status"
                            placeholder="Status"
                            autoComplete="on"
                            value={Order.Status}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="form-control"
                            id="Comments"
                            name="Comments"
                            placeholder="Comments"
                            autoComplete="on"
                            value={Order.Comments}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            className="form-control"
                            id="ShippedDate"
                            name="ShippedDate"
                            placeholder="ShippedDate"
                            required
                            autoComplete="on"
                            value={Order.ShippedDate}
                            onChange={handleChange}
                        />
                            
                             {/* <select 
                             value={Order.ShippedDate} 
                              onChange={handleChange} 
      >
                             <option value="/Date(1609439400000)/">/Date(1609439400000)/</option>
                               <option value="/Date(1610303400000)/">/Date(1610303400000)/</option>
                             <option value="/Date(1623004200000/">/Date(1623004200000/</option>
                            </select> */}
                            
                       <button onClick={handleAddOrder} className="btn btn-success">
                        AddOrder
                       </button>
                    </form>
                </div>   
        </div>
    );
 }


export default AddOrder;