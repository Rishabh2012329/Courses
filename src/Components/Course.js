import React from 'react'
import {Card} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'

export default function Course() {
    return (
        <Card style={{width:"340px",height:"400px",borderRadius:"8px",overflow:"hidden",boxShadow:"0px 0px 40px rgba(0,0,0,0.5)",marginBottom:"20px",borderBottom:"solid purple 2px"}}>
            <Card varient="top" style={{width:"100%",height:"77%",padding:"0",margin:"0",background:"url(https://miro.medium.com/max/5760/1*NO7-lWtSn291ZnixEXlcTA.png) no-repeat",backgroundSize:"cover",backgroundPosition:"center",}}>
                <div style={{width:"100%",height:"100%",background:"linear-gradient(to bottom,transparent 50%,rgba(0,0,0,0.5))",display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
                    <div style={{width:"95%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <div style={{fontSize:"20px",fontWeight:"700",color:"white"}}>
                            $99
                        </div>
                        <div style={{color:"white",display:"flex",flexDirection:"column",alignItems:'center'}}>
                            <div style={{display:"flex",flexDirection:"row",width:"94px",justifyContent:"space-between",marginBottom:"5px"}}>
                                <FaStar color="yellow"/>
                                <FaStar  color="yellow"/>
                                <FaStar  color="yellow"/>
                                <FaStar  color="yellow"/>
                                <FaStar  color="yellow"/>
                            </div>
                            (1 review)
                        </div>
                    </div>
                </div>
            </Card>
            <Card.Body style={{fontFamily:"sans-serif",padding:"5px"}}>
                <Card.Title style={{fontWeight:"800"}}>JS Course</Card.Title>
                <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px",marginBottom:"25px"}}>
                    <div> <FaGraduationCap style={{marginRight:"10px",fontSize:"22px",color:"grey"}} />Rishabh</div>
                    <div>No. of Students</div>
                </div>
            </Card.Body> 
        </Card>
    )
}
