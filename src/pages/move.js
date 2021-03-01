import React, {useEffect} from 'react'
import { useLocation,useHistory,Redirect } from "react-router-dom";
import {db} from '../Firebase/firebase'

export const Move=()=>{
    const location=useLocation();
    useEffect(()=>{
        if(location.pathname=="/"){
              return;
        }
        db.collection("short-urls").doc(location.pathname).get().then((doc)=>{
              if(doc.exists){
                    let url = doc.data().link;
                    let check = "https://";
                    if(url.includes(check)==false){
                          url = check.concat('',url);
                          console.log(url);
                    }
                    window.location.href = url;
              }
              else{
                    alert("invalid")
              }
        })
  },[location])



    return(
    <>
    </>
    )
}