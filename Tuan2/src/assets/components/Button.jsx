export default function Button(icon, color){
    return(
        <>
        <button style={{backgroundColor:color}}>
            <img src={icon}/>
        </button>
        </>
    )
}