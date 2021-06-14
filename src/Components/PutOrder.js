import React from 'react';
import { useEffect, useState } from 'react';
import qs from 'qs';
import axios from 'axios';

// set data
function AddOrder() {
    const Orderdetails = {
        id:0, 
        Comments:"",
    }

    //set orderdetails
    const [Order,setOrder] = useState(Orderdetails);
    const handleChange= event => {
    setOrder({ ...Order, [event.target.id]: event.target.value });
    };

    //Creation in submit
        const HandleAddOrder = async () => {
        debugger;
        var Orderdata = {
            id:Order.id,
            Comments:Order.Comments
        };



        useEffect(() => {
            const fetchData = async () => {
              
         await axios.put('http://localhost:44334/Default1/UpdateOrder',qs.stringify(Orderdata))
       
            };
            fetchData();
          }, []);

    //   const response = await axios.put("http://localhost:44334/Default1/UpdateOrder",qs.stringify(Orderdata))
    //   

    }
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
                            required
                            value={Order.id}
                            onChange={handleChange}
                         >
                        </input>
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
                       <button onClick={HandleAddOrder} className="btn btn-success">
                        UpdateOrder
                       </button>
                    </form>
                </div>   
        </div>
    );
}

export default AddOrder;