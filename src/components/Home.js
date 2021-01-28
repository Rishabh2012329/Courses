import React,{useState} from 'react'
import Input from './Input'

export default function Home() {
    const [topics,settop]=useState([])
    function add(){
        
        let top=[...topics]
        top.push("HI")
        settop(top)
    }
    return (
        <div style={{backgroundSize:"cover",display:"flex",justifyContent:'center',alignItems:"center",width:"100%",height:"100%"}}>
            <style>{`body{background:url(https://images3.alphacoders.com/975/thumb-1920-975999.png) no-repeat center;background-size:cover;}`}</style>
            <div style={{width:"400px",height:"auto",padding:"10px",backgroundColor:"rgba(255,255,255,0.9)",boxShadow:"0px 0px 25px rgba(0,0,0,0.5)",display:'flex',flexDirection:"column",alignItems:"center"}}>
                <Input place="name" />
                <Input place="cateo" />
                <Input place="Instructor"/>
                <textarea style={{width:"90%",marginTop:"15px"}} placeholder="overview" />
                {topics.map((txt)=><div style={{marginTop:"10px"}}>
                    {txt}
                </div>)}
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Input place="Topic" width="80%"/>
                    <button onClick={()=>add()} style={{border:"none",backgroundColor:"purple",padding:"5px",width:"50px",height:"30px",color:"white",marginTop:"10px"}}>ADD</button>
                </div>
            </div>
        </div>  
    )
}
