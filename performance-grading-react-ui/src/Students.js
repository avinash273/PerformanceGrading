import React, { useState, useEffect } from 'react';
import axios from 'axios';

   function Students() {
     const [data, setData] = useState([]);

     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await axios.get('http://localhost:8080/app/test');
           setData(response.data);
         } catch (error) {
           console.error('Error fetching data:', error);
         }
       };

       fetchData();
     }, []);

     return (
       <>
         {/* Render the data here */}
         {data.map(item => (
            <>
            <div key={item.id}>{item.id}</div>
            <div key={item.id}>{item.name}</div>
            <div key={item.id}>{item.marks}</div>
            </>
         ))}
       </>
     );
   }

   export default Students;