import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'

export default function CourseDetailes(props) {
    const {name} = useParams()
    useEffect(()=>{
        console.log(name)
    })
    return (
        <div>
            <div style={{width:"85%",margin:"auto",padding:"20x",height:"200px",boxShadow:"0px 0px 25px rgba(0,0,0,0.3)",boxSizing:"border-box",borderRadius:"7px",marginTop:"90px",overflow:"visible"}}>
                <h1 style={{marginLeft:"15px",fontWeight:"800"}}>{name} online course</h1>
                <div style={{width:"100%",display:"flex",flexDirection:"row",margin:"25px",marginTop:"30px",marginBottom:"30px"}}>
                    <div style={{width:"25%",borderRight:"solid rgba(0,0,0,0.3) 1px"}}>
                        <div>
                            <div style={{fontWeight:"700"}}>Teacher</div>
                            <div>Rishabh</div>
                        </div>
                    </div>
                    <div style={{width:"25%",borderRight:"solid rgba(0,0,0,0.3) 1px",marginLeft:"15px"}}>
                        <div>
                            <div style={{fontWeight:"700"}}>Cateo</div>
                            <div>webD</div>
                        </div>
                    </div>
                    <div style={{width:"25%",marginLeft:"15px"}}>
                        <div>
                            <div style={{fontWeight:"700"}}>Review</div>
                            <div><div style={{display:"flex",flexDirection:"row",maxWidth:"94px",justifyContent:"space-between",marginTop:"5px"}}>
                                <FaStar  color="darkyellow"/>
                                <FaStar   color="darkyellow"/>
                                <FaStar   color="darkyellow"/>
                                <FaStar  color="darkyellow"/>
                                <FaStar  color="darkyellow"/>
                            </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
