import React from 'react'
import CustumInput from './CustumInput'
import {FaGoogle,FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import RoundButton from './RoundButton'

export default function Login({set}) {
    return (
        <div  style={{top:'0',bottom:'0',left:'0',right:'0',position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.35)"}}>
            <div onClick={()=>set(false)} style={{zIndex:"1",top:'0',bottom:'0',left:'0',right:'0',position:"absolute",}}></div>
            
            
            <div style={{zIndex:"3",width:"300px",backgroundColor:"white",borderRadius:"10px",padding:"15px",overflow:"hidden"}}>
                <div style={{width:"100%",display:'flex',flexDirection:'row',justifyContent:"flex-end"}}>
                        <AiOutlineClose  onClick={()=>set(false)} fontSize="20px" />
                </div>
                <CustumInput/>
                <CustumInput/>
                <RoundButton width="100%" height="35px" text="Login" backgroundColor="purple" marginTop="10px"/>
                <div style={{width:"100%",display:'flex',flexDirection:"row",justifyContent:'space-around',alignItems:"center",marginTop:"20px"}}>
                    <FaLinkedinIn fontSize="25px" />
                    <FaGoogle fontSize="25px"/>
                    <FaFacebookF fontSize="25px"/>
                </div>
            </div>
            
        </div>
    )
}
