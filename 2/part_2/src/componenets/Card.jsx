const Card =(props) => {
    console.log(props.user,props.age);
    return(
        <div className="card">
            <h1>{props}</h1>
            <p>Lorem ipsum dolor sit amet.</p>
             
        </div>
    )
}