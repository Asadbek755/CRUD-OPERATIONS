
import "./student.css"
import { useNavigate } from "react-router-dom"

export const StudentPage = () => {
    const navigate =useNavigate();
    const onBack = () =>{
        navigate(-1)
    }
    return(
       <div className="container" style={{
        backgroundColor:'#E5E5E5'
       }}>
       <div className="sudetnt-page--header">
       <h1>
       Students List
       </h1>
      <div>
      <button className="back--btn" onClick={onBack}>onBack</button>
       <button className="add--btn"> ADD NEW STUDENT</button>
      </div>
       </div>
       </div>   
    )
}