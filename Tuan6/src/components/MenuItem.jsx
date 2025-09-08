import { useOrder } from "./OrderContext";

function MenuItem({item}){
    const{addToOrder} = useOrder();
    
    return(
        <div className="card">
            <img src={item.image}/>
            <h5>{item.name}</h5>
            <p>{item.mota}</p>
            <p>{item.gia}</p>

            <button className="button" onClick={() => addToOrder(item)}>Them vao gio</button>
        </div>
    );
}

export default MenuItem;