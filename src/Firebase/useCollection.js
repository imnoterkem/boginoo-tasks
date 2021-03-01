import React, { useState, useEffect } from 'react'
import {db, firebase} from './firebase'

export const useCollection=(path, docId)=>{

    const [data, setData]=useState([]);

    useEffect(() => {
        db.collection(`${path}/${docId}/links`).orderBy("timestamp").onSnapshot(s=>{
            console.log(s.docs);
            const data=s.docs.map(item=>({...item.data(), r: item.data().link, s:item.data().r}))
            setData(data)
        })

        return () => {}
    }, [db, docId])

    const createDoc=(data)=>{
        let {link, r}=data
        db.collection(`${path}/${docId}/links`).add({...data,  timestamp: firebase.firestore.FieldValue.serverTimestamp()});
        db.doc(`short-urls/${r}`).set({link})
    }

    return {data, createDoc}
}