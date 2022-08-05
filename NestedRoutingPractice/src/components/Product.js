import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import list from "./Data";
export default function Product(){
    const navigate = useNavigate();
   const {id} = useParams();
   return <>
    <h1>Product Detail - {id}</h1>
    <button onClick={()=>{navigate('/')}}>Go Home</button>

    {list.filter(
        itm => itm.id == id
    ).map(
        itm => <h3>{itm.name}</h3>
    )
    }
    </>
}