import React from 'react';
import { useParams } from "react-router-dom";
import useProducts from '../Hooks/useProducts';

const ProductDetails = () => {
    const [products, setProducts]= useProducts();
    let {pdID} = useParams();
  
    return (
        <div>
            <h1>hello invoice</h1>
            <h2>Invoice: {pdID}</h2>;
            
            <h1>{products.length}</h1>
        </div>
    );
};

export default ProductDetails;