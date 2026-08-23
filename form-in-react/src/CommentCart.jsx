export default ({comment}) => {
    let style = {border:"1px solid pink", marign:"10px 0", padding:"5px"}
    return(
        <div style={style}>
            <h3>@{comment.username}</h3>
            <p>{comment.remarks}</p>
            <h3>rating:{comment.rating}</h3>
        </div>
    )
}