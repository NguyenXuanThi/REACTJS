
export default function NewItem({id, name,image}){

    return (
        <div>
            <img height ='150px' width ='200px' src={image} alt="" />
            <h3>{name}</h3>
            <p>{id}</p>
        </div>
    )
      
}



