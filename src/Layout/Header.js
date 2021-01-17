import React from 'react'
import RoundButton from '../Components/RoundButton'
import './nav.css'
export default function Header() {
    return (
        <div style={{width:"100%",display:'flex',flexDirection:"row",height:"70vh"}}>
            <div id="h1" style={{width:"50%",height:"100%",backgroundImage:"linear-gradient(to left,purple 30%,purple)",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={{maxWidth:"350px",height:"300px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}>
                    <RoundButton width="290px" height="60px" text="Signup as a Teacher" backgroundColor="orange" fontSize="23px" fontFamily="sans-serif"/>
                    <div style={{color:"white"}}>OR</div>
                    <RoundButton width="290px" height="60px" text="Signup as a Learner" backgroundColor="orange" fontSize="23px" fontFamily="sans-serif"/>
                </div>
            </div>
            <div id="h2" style={{width:"50%",height:"100%",background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6d-LcljQWT0QVqXlX0to_m4bbm6YRKrCHGg&usqp=CAU) center no-repeat",backgroundSize:"cover"}}>

            </div>
        </div>
    )
}
