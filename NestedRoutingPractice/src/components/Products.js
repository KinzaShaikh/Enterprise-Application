import React from "react";
import list from "./Data";
import { createSearchParams, Link, useSearchParams } from "react-router-dom";

export default function Products(){
    const [serachParams, setSearchParams] = useSearchParams();
    const newParams = createSearchParams();
    newParams.set('color','blue');
    newParams.set('price',200);
    return <>
    <h1>Products</h1>
    <button onClick={()=>{
        serachParams.set('color','red');
        setSearchParams(serachParams);
    }}>Red</button>
    <button onClick={()=>{
        serachParams.set('size','sm')
        setSearchParams(serachParams)
    }}>Small</button>
    
    <ul>
        {list.map(itm =>
            <li>
                <Link to={`/product/${itm.id}`}>{itm.name}</Link>
            </li>
        )}
    </ul>
    </>
}