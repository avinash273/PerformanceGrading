import React, {useState, useEffect} from 'react';
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
            <h1>Performance Grading</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Marks</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (

                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.marks}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default Students;