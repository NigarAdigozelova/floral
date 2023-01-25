import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from 'react-router-dom'

const Add = () => {
    const [product, setProduct] = useState([]);
    const [state, setState] = useState({
      image: "",
      name: "",
      price: "",
    });
    const getData = async () => {
        const res = await axios.get("http://localhost:3002/products");
        setProduct(res.data);
      };
    
      useEffect(() => {
        getData();
      }, []);
    
    // const [id, setId] = useState(undefined);
  
    const addData = (e) => {
        e.preventDefault();
    
        if (!state.image || !state.name || !state.price ) return;
    
        axios.post("http://localhost:3002/products", state);
        getData();
      };
      const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    
      };
    return (
        <div>
            <form style={{ padding: "20px", display: "flex", justifyContent: "center", gap: 10 }} onSubmit={addData}>
                <input style={{ padding: 10 }}
                    name="image"
                    type="url"
                    placeholder="image"
                    onChange={handleChange}
                />
                <input style={{ padding: 10 }}
                    name="name"
                    type="text"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input style={{ padding: 10 }}
                    name="price"
                    type="text"

                    placeholder="price"
                    onChange={handleChange}
                />
                

                <button style={{ padding: "10px 20px", backgroundColor: "green", color: "white", border: "none", borderRadius: 10 }}>add</button>
                <Link style={{textAlign:"center", textDecoration:"none" ,color:"#25715e",fontWeight:800,padding:"10px"}} to="/">Home</Link>
            </form>
            
        </div>
    )
}

export default Add