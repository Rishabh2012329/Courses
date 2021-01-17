import React,{useState,useEffect} from 'react'
import NavItem from './NavItem'
import RoundButton from '../Components/RoundButton'
import {FaChevronDown,FaChevronUp} from 'react-icons/fa'
import './nav.css'

export default function Navbar() {
    const [Select,setSelect]=useState({
        Home:true
    })
    const [chevClick,setClick]=useState(true)
    const [show,setshow]=useState(true)
    return (
        <div>
        <div id="navMain" style={{display:'flex',flexDirection:"row",top:'0',right:"0",left:"0",width:"100%",height:"60px",padding:"5px",paddingLeft:"15px",justifyContent:'space-between',backgroundColor:"white",alignItems:"center"}}>
            <img src="https://reptro.xoothemes.com/wp-content/uploads/2018/05/cropped-logo-3.png" style={{width:"120px",marginLeft:"20px"}}/>  
            <div id="navb" style={{display:"flex",width:"390px",justifyContent:"space-between",marginRight:"35px",alignItems:"center"}}>
                <NavItem text="Home" select={Select['Home']} set={setSelect}/>
                <NavItem text="Courses" select={Select['Courses']} set={setSelect}/>
                <NavItem text="Contact" select={Select['Contact']} set={setSelect}/>
                <RoundButton text="Login" width="80px" height="35px" padding="5px" backgroundColor="purple" fontSize="15px" fontWeight="700" fontFamily="sans-serif" />
            </div> 
            
            {chevClick?<FaChevronDown id="chevDown" onClick={(e)=>{
                setshow(false)
                try{
                    document.getElementById('chevDown').classList.add('chevDown')
                }catch(err){
                    console.log(err)
                }   try{
                    document.getElementById('chevDown').addEventListener('animationend',()=>{
                        document.getElementById('chevDown').classList.remove('chevDown')
                        setClick(false)
                    })
                }
                catch(err){
                    console.log(err)
                }
              
                
              
            }} style={{marginRight:"15px"}}/>:<FaChevronUp id="chevUp" onClick={()=>{
                setshow(true)
                try{
                document.getElementById('chevUp').classList.add('chevUp')
                }
                catch(err){
                    console.log(err)
                }
                try{
                document.getElementById('chevUp').addEventListener('animationend',()=>{
                    document.getElementById('chevUp').classList.remove('chevUp')
                    setClick(true)
                })
            }
            
            catch(error){
                console.log(error)
            }
            }
                } style={{marginRight:"15px"}}/>}

           
        </div>
        {!show?<div style={{width:"100%",display:"flex",flexDirection:"column"}}>
                <div style={{width:"100%",padding:"15px",height:"40px",borderTop:"solid rgba(0,0,0,0.25) 1px",display:"flex",flexDirection:"row",alignItems:"center"}}>Home</div>
                <div style={{width:"100%",padding:"15px",height:"40px",borderTop:"solid rgba(0,0,0,0.25) 1px",borderBottom:"solid rgba(0,0,0,0.25) 1px",display:"flex",flexDirection:"row",alignItems:"center"}}>Courses</div>   
                <RoundButton text="Login" width="80px" height="35px" padding="5px" backgroundColor="purple" fontSize="15px" fontWeight="700" fontFamily="sans-serif" margin="10px" />
            </div>:null}
        </div>
    )
}
