 //Local Storage
 import { useEffect, useState } from 'react'

const Practice = (props) => {  
    const [name, setName] = useState(() => {
        return localStorage.getItem('name') || '';
    });
    
    useEffect(() => {
        localStorage.setItem('name', name);
    }, [name]);
    
    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <>
        <div>
            <input type='text' value={name} onChange={handleChange} placeholder='Enter your name' />
            <p>Name: {name}</p>
        </div>            
        </>
    );
};
export default Practice;

//Session Storage

// import React, { useState, useEffect } from 'react';

// const Practice = (props) => {
//     const [sessionData, setSessionData] = useState(() => {
//         return sessionStorage.getItem('sessionData') || '';
//       });
    
//       useEffect(() => {
//         sessionStorage.setItem('sessionData', sessionData);
//       }, [sessionData]);
    
//       const handleChange = (event) => {
//         setSessionData(event.target.value);
//       };
    
//       return (
//         <div>
//           <input type="text" value={sessionData} onChange={handleChange} placeholder="Enter session data" />
//           <p>Session Data: {sessionData}</p>
//         </div>
//       );
//     };
// export default Practice;

//Indexed DB Storage

// import React from "react";

// const Practice = (props) => {
//     useEffect(() => {
//         const request = indexedDB.open("MyDatabase", 1);
    
//         request.onerror = (event) => {
//           console.log("Error opening database", event);
//         };
    
//         request.onsuccess = (event) => {
//           const db = event.target.result;
    
//           const transaction = db.transaction(["users"], "readwrite");
//           const store = transaction.objectStore("users");
    
//           // Add data
//           store.add({ id: 1, name: "John Doe", age: 30 });
//         };
    
//         request.onupgradeneeded = (event) => {
//           const db = event.target.result;
//           const store = db.createObjectStore("users", { keyPath: "id" });
//         };
//       }, []);
    
//       return <div>IndexedDB Example - Check Console for Logs</div>;
//     };

//     export default Practice;

    

