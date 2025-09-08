import { useEffect, useState } from "react";
import NewItem from "./NewItem";
import './NewItem.css'
export default function CenterItem() {
    const url = 'https://67c845c30acf98d07085c1c0.mockapi.io/id';
    const [arr, setArr] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setArr(data); 
            } catch (error) {
                console.error("Error fetching data:", error); 
            }
        };

        fetchData();  
    }, []); 

    return (
        <div className="list-container">
            <ul>
                {arr.map((e) => (
                    <li key={e.id}> 
                        <NewItem id={e.id} name={e.name} image={e.image} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
