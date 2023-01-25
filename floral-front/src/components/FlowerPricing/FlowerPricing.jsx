import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./flowerPricing.scss"

const FlowerPricing = () => {
  const [product, setProduct] = useState([]);
  const [sorted,setSorted]=useState({sorted:"price",reversed:false})

  const sortData=()=>{
    setSorted({sorted:"price",reversed:!sorted.reversed })
    const dataCopy=[...product]
    dataCopy.sort((a,b)=>{
      if(sorted.reversed){
        return a.price-b.price
      }
      return b.price-a.price
    })
    setProduct(dataCopy)
  }
  const getData = async () => {
    const res = await axios.get("http://localhost:3002/products");
    setProduct(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:3002/products/${id}`);
    console.log(id);
    getData();
  };

  // const handleEditClick = (data) => {
  //   setState({ image: data.image, name: data.name, price: data.price });
  //   setId(data.id);
  // };
  return (
    <div className="wrapp-trend">
    <div className="trend-article">
      <p>Devoted to wonderful beauty</p>
      <h1> Flowers Pricing</h1>
      <button className="sort" onClick={sortData}>Sortin price</button>
    </div>
      <div className="test">
       

        <div className="card-wrapper">
          {
            product?.sort((a, b) => a.id - b.id)
              ?.map((products) => (
                <div key={products._id} className="card-item">
                  <Card sx={{ maxWidth: 345 }} >

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <img src={products.image} alt="" />

                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span style={{ margin: 20 }}>{products.name}</span>

                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span style={{ margin: 20 }}>${products.price}</span>

                      </Typography>
                   
                    </CardContent>
                    <CardActions>
                      <button className="trend-btn" style={{ margin: 20 }} onClick={() => deleteData(products._id)}>delete</button>
                    </CardActions>
                  </Card>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default FlowerPricing
