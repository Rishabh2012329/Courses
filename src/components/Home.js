import React from 'react'
import Input from './Input'

export default function Home() {
    return (
        <div style={{backgroundSize:"cover",display:"flex",justifyContent:'center',alignItems:"center",width:"100%",height:"100%"}}>
            <style>{`body{background:url(https://images3.alphacoders.com/975/thumb-1920-975999.png) no-repeat center;background-size:cover;}`}</style>
            <div style={{width:"400px",height:"400px",padding:"10px",backgroundColor:"rgba(255,255,255,0.9)",boxShadow:"0px 0px 25px rgba(0,0,0,0.5)",display:'flex',flexDirection:"column",alignItems:"center"}}>
                <Input/>
                <Input/>
                <Input/>
            </div>
        </div>  
    )
}
