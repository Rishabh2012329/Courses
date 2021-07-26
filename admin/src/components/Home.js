import React,{useState} from 'react'
import Input from './Input'
import axios from 'axios'

export default function Home() {
    const [topics,settop]=useState([])
    const [topic,settopic]=useState("")
    const [name,setname]=useState("")
    const [In,setIn]=useState("")
    const [dur,setdur]=useState("")
    const [cat,setcat]=useState("")
    const [price,setprice]=useState("")
    const [batchSize,setbat]=useState("")
    const [lang,setlang]=useState("")
    const [overview,setv]=useState("")
    async function sub(){ 
        const obj={
            name,
            Instructor:In,
            overview,
            Features:{
                duration:dur,
                batchSize,
                language:lang,
            },
            cateo:cat,
            price,
            Topics:topics
        }
        fetch('http://localhost:5000/course/postCourses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
       'Access-Control-Allow-Origin':'*'
    },mode:'no-cors',
    body: JSON.stringify(obj)
  }).then((res)=>{
      res.blob().then(function (blb){
          console.log(blb)
      })
  }).then((data)=>{
      console.log(data)
  }).catch(err=>console.log(err))

  axios.post('http://localhost:5000/course/postCourses',obj,{
      mode:'no-cors',
      headers:{
          'Content-Type':'application/json'
      }
  }).then((res)=>{
      console.log(res)
  })
    }

    function add(txt){ 
        if(txt=="")
            return      
        let top=[...topics]
        top.push(txt)
        settop(top)
        settopic("")
    }
    return (
        <div style={{backgroundSize:"cover",display:"flex",justifyContent:'center',alignItems:"center",width:"100%",height:"100%"}}>
            <style>{`body{background:url(https://images3.alphacoders.com/975/thumb-1920-975999.png) no-repeat center;background-size:cover;}`}</style>
            <div style={{width:"400px",height:"auto",padding:"10px",backgroundColor:"rgba(255,255,255,0.9)",boxShadow:"0px 0px 25px rgba(0,0,0,0.5)",display:'flex',flexDirection:"column",alignItems:"center"}}>
                <Input place="name" chg={setname} />               
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Input chg={setIn} place="Instructor" width="45%"/>
                    <Input chg={setdur} place="Duration" width="45%" />
                </div>

                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Input chg={setcat} place="cateo" width="45%"/>
                    <Input chg={setprice} place="price" width="45%" />
                </div>
                
                <textarea onChange={(e)=>setv(e.target.value)} value={overview} style={{width:"90%",marginTop:"15px"}} placeholder="overview" />

                {topics.map((txt,index)=><div style={{marginTop:"10px"}}>
                    {index+1}. {txt}
                </div>)}

                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Input val={topic} chg={settopic}  place="Topic" width="80%"/>
                    <button onClick={()=>add(topic)} style={{border:"none",backgroundColor:"purple",padding:"5px",width:"50px",height:"30px",color:"white",marginTop:"10px"}}>ADD</button>
                </div>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Input chg={setbat} place="batch size" width="45%"/>
                    <Input chg={setlang} place="Language" width="45%" />
                </div>
                <button onClick={()=>sub()} style={{border:"none",backgroundColor:"purple",padding:"5px",width:"90%",height:"30px",color:"white",marginTop:"10px"}}>Submit</button>
            </div>
        </div>  
    )
}
