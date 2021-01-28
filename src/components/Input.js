import React from 'react'

export default function Input({place,...otherStyles}) {
    return (
        <div style={{padding:"5px",width:"90%",marginTop:"15px",height:"20px",backgroundColor:"white",...otherStyles}}>
            <input style={{border:"none",outline:"none",backgroundColor:"transparent"}} placeholder={place} />
        </div>
    )
}
