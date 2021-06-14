import React from 'react';
import { useEffect, useState } from 'react'
import qs from"qs";
import axios from 'axios';

function PutProduct() {
    const productdetails = {
        Code: 0,
        Name: "", 
        Vendar: "",
    }

  
    const [product, setProduct] = useState(productdetails);
    const handleChange= event => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const handleAddProduct = async () => {
        debugger;
        var data = {
            Code: product.Code,
            Name: product.Name,
            Vendar: product.Vendar
        };
        const response = await axios.put("http://localhost:44334/Default1/UpdateProduct", qs.stringify(data));
        // const res = await axios({
        //     method: 'Put',
        //     url: 'http://localhost:44334/Default1/UpdateProduct',
        //      setProduct: {
        //         Code: res.data.Code,
        //         Name: res.data.Name,
        //         Vendar: res.data.Vendar
        //     }
        //   })
    };
    return (
        <div>
            <h2>Update of product</h2>
                <div className="col-md-3 offset-md-4 mt-5 justify-content-center">
                    <form >  
                        <div className="btn btn-outline-info">
                        <input
                            type="number"
                            className="form-control"
                            id="Code"
                            name="Code"
                            placeholder="Code"
                            required
                            value={product.Code}
                            onChange={handleChange}
                        >
                        </input>
                        <input
                            type="text"
                            className="form-control"
                            id="Name"
                            name="Name"
                            placeholder="Name"
                            required
                            value={product.Name}
                            onChange={handleChange}
                        >
                        </input>
                        
                        <input
                            type="text"
                            className="form-control"
                            id="Vendar"
                            name="Vendar"
                            placeholder="Vendar"
                            required
                            value={product.Vendar}
                            onChange={handleChange}
                        />
                       <button onClick={handleAddProduct} className="btn btn-primary">
                        Update
                       </button>
                       </div>
                </form>
            </div>   
        </div>
    );
}

export default PutProduct;