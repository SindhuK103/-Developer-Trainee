import React from 'react';
import { useEffect, useState } from 'react';
import qs from 'qs';
import axios from 'axios';

function AddProduct() {
    const productdetails = {
        ProductlineId: 0,
        Name: "",
        Scale: 0,
        Vendar: "",
        QtyInStock: 0,
        BuyPrice: 0,
        MSRP: ""
    }

    const [product, setProduct] = useState(productdetails);
    const handleChange= event => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };


    const handleAddProduct = async () => {
        debugger;
        var data = {
            ProductlineId: product.ProductlineId,
            Name: product.Name,
            Scale: product.Scale,
            Vendar: product.Vendar,
            QtyInStock: product.QtyInStock,
            BuyPrice: product.BuyPrice,
            MSRP: product.MSRP
        };
        
        //stringify changes json to js 
        const response = await axios.post("http://localhost:44334/Default/CreateProduct", qs.stringify(data))
        setProduct({
            ProductlineId: response.data.ProductlineId,
            Name: response.data.Name,
            Scale: response.data.Scale,
            Vendar: response.data.Vendar,
            QtyInStock: response.data.QtyInStock,
            BuyPrice: response.data.BuyPrice,
            MSRP: response.data.MSRP
        });
    };
    return (
        <div>
            <h2>Creation of product</h2>
                <div className="col-md-3 offset-md-4 mt-5 justify-content-center">
                    <form >  
                        <div className="btn btn-outline-secondary">
                        
                        <input
                            type="number"
                            className="form-control"
                            id="ProductlineId"
                            name="ProductlineId"
                            placeholder="ProductlineId"
                            value={product.ProductlineId}
                            onChange={handleChange}
                        >
                        </input>
                        <input
                       
                            type="text"
                            className="form-control"
                            id="Name"
                            name="Name"
                            placeholder="Name"
                            value={product.Name}
                            onChange={handleChange}
                    
                        />
                        <input
                            type="number"
                            className="form-control"
                            id="Scale"
                            name="Scale"
                            placeholder="Scale"
                            value={product.Scale}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="form-control"
                            id="Vendar"
                            name="Vendar"
                            placeholder="Vendar"
                            value={product.Vendar}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            className="form-control"
                            id="QtyInStock"
                            name="QtyInStock"
                            placeholder="QtyInStock"
                            value={product.QtyInStock}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            className="form-control"
                            id="BuyPrice"
                            name="BuyPrice"
                            placeholder="BuyPrice"
                            value={product.BuyPrice}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="form-control"
                            id="MSRP"
                            name="MSRP"
                            placeholder="MSRP"
                            value={product.MSRP}
                            onChange={handleChange}
                        />
                       <button onClick={handleAddProduct} className="btn btn-danger">
                        Add
                       </button>

                        {/* <Dropdown>
                       <Dropdown.Toggle variant="success" id="dropdown-basic">
                       Dropdown Button
                       </Dropdown.Toggle>

                       <Dropdown.Menu>
                       <Dropdown.Item href="#/action-1">ProductlineId</Dropdown.Item>
                       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                       </Dropdown.Menu>
                       </Dropdown>   */}
                       </div>
                </form>
            </div>   
        </div>
    );
}
 
export default AddProduct;