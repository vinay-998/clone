const divstyle={
    background:"#756693",
    padding:"10px"

}
let Contact = (props) =>
        <div style={divstyle}>
            <p>
            <span style={{color:"#F79431", fontSize:"20px",fontFamily:"serif"}}> {props.name}</span>

            <span style={{padding:"10px",color:"#F7F7F7"}}>- {props.SongName} : </span>

            <span style={{color:"#004D00"}} >{props.year}</span>
            </p>
        </div>
export default Contact;