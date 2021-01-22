import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {FaStar,FaClock} from 'react-icons/fa'
import {Tab,Tabs,TabContainer} from 'react-bootstrap'
import Overview from './Overview'
import RoundButton from './RoundButton'
import Instructor from './Instructor'
import Reviews from './Reviews'

export default function CourseDetailes(props) {
    const {name} = useParams()
    const [selected,setSelected]=useState({
        O:"solid purple 3px",
        Sel:<Overview/>
    })
    useEffect(()=>{
        console.log(name)
    })

    function clickShow(name,compnent){
        setSelected({
            [name]:'solid purple 3px',
            Sel:compnent
        })
    }
    return (
        <div style={{width:"100%"}}>
            <div style={{width:"85%",margin:"auto",padding:"1.5vw",boxShadow:"0px 0px 25px rgba(0,0,0,0.3)",boxSizing:"border-box",borderRadius:"7px",marginTop:"90px"}}>
                <h1 id="cdh" style={{marginLeft:"15px",fontWeight:"800"}}>{name} online course</h1>
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
                <div style={{maxWidth:"300px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px",marginBottom:"15px"}}>
                    <h3>$99</h3>
                    <RoundButton text="Buy This Course" width="140px" height="50px" backgroundColor="purple"/>
                </div>
            </div>
            <div style={{margin:"auto",marginTop:"40px",width:"85%",marginBottom:"30px",boxShadow:"0px 0px 25px rgba(0,0,0,0.4)",borderRadius:"5px"}}>
            {/* <TabContainer>
                <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                    <Tab eventKey="overview" title={<p style={{borderBottom:"solid purple 1px",hieght:"inherit",padding:".5rem .1rem"}}>Overview</p>}>
                            <Overview/>
                    </Tab>
                </Tabs>
            </TabContainer> */}
            <div style={{width:"100%",height:"50vh",background:"url(https://reptro.xoothemes.com/wp-content/uploads/2018/04/markus-spiske-357131-unsplash-copy-1-1200x560.jpg) center no-repeat",backgroundSize:"cover"}}></div>
            <div style={{width:"100%",display:"flex",flexDirection:"row",borderBottom:"solid rgba(0,0,0,0.3) 1px ",flexWrap:"wrap"}}>
                <div onClick={()=>{
                    clickShow('O',<Overview/>)
                }} style={{width:"auto",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:selected['O'],fontWeight:"700",padding:"5px"}}>
                    Overview
                </div>
                <div onClick={()=>{
                    clickShow('Cirriculum',<Overview/>)
                }} style={{width:"auto",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:selected['Cirriculum']||"",fontWeight:"700",padding:"5px",marginLeft:"10px"}}>
                    Cirruculum
                </div>
                <div onClick={()=>{
                    clickShow('I',<Instructor/>)
                }} style={{width:"auto",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:selected['I']||"",fontWeight:"700",padding:"5px",marginLeft:"10px"}}>
                    Instructor
                </div>
                <div onClick={()=>{
                    clickShow('R',<Reviews/>)
                }} style={{width:"auto",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:selected['R']||"",fontWeight:"700",padding:"5px",marginLeft:"10px"}}>
                    Reviews
                </div>
            </div>
            {selected.Sel}
           </div>
        </div>
    )
}
