import "./Product.css"
export default ({title, description="good product", price, features}) => {
    let isDiscount = price>=900
    let style = {backgroundColor : isDiscount ? "pink" : "wheat"};
    return (                         
        <div className="Product" style={style}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p><span style={{textDecoration:"line-through"}}>Rs. {price+100}</span> Rs. {price}</p>
            {isDiscount && <p>discount of 5%</p>}
            <p>{features.map((item, key)=><li>{item}</li>)}</p>
        </div>
    )
}