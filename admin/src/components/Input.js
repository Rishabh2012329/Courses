import React from 'react'

export default function Input({place,val,chg,...otherStyles}) {
    return (
        <div style={{padding:"5px",width:"90%",marginTop:"15px",height:"20px",backgroundColor:"white",...otherStyles}}>
            <input value={val} onChange={(e)=>chg(e.target.value)} style={{border:"none",outline:"none",backgroundColor:"transparent"}} placeholder={place} />
        </div>
    )
}
