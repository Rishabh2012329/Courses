import React from 'react'
import {FaStar,FaClock,FaUser,FaCheck,FaLanguage,FaChalkboardTeacher} from 'react-icons/fa'

export default function Overview() {
    return (
        <div style={{height:"auto",padding:"15px",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
        <div id="para" style={{width:"65%",paddingRight:"5vw",}}>
        Quiddam vocas oboediens quovis consectetur sequebatur quattuor ponatur aditus veterum

Respondent amet intellegunt habitare officio estne moribus ames extrahenda vivendi solemus optimos harum fruitur legerint

Placet patrocinium interemit vitiosum torquatus vellem non cui metuit valde quic

Paupertas peccetur debeant petitur nec posui murenam don mirum alius infantes agemusque divitem

Nulla viri genere quippe perfectio nostrum contritum hinc callipho lucius ullo incessum irridebat multos iacere

Memoriae ex tribunus amplius inquieta legem esses igitur eae utilitatis germen possim movere epicurei vult.
        </div>
        <div style={{width:"320px",height:"auto",display:"flex",flexDirection:"column",borderLeft:"solid grey 1px"}}>
            <h3 style={{marginLeft:"15px"}}>Course Features</h3>
            <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"15px",borderBottom:"solid grey 1px"}}>
                <div><FaUser style={{marginRight:"10px",color:"purple"}}/> Students</div>
                <div>41 Students</div>
            </div>
            <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"15px",borderBottom:"solid grey 1px"}}>
                <div><FaCheck style={{marginRight:"10px",color:"purple"}}/> max Students</div>
                <div>50</div>
            </div>
            <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"15px",borderBottom:"solid grey 1px"}}>
                <div><FaClock style={{marginRight:"10px",color:"purple"}}/> max duration</div>
                <div>5 week</div>
            </div>
            <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"15px",borderBottom:"solid grey 1px"}}>
                <div><FaLanguage style={{marginRight:"10px",color:"purple"}}/> Language</div>
                <div>English/Hindi</div>
            </div>
            <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"15px",}}>
                <div><FaChalkboardTeacher style={{marginRight:"10px",color:"purple"}}/> type</div>
                <div>Live</div>
            </div>
        </div>
    </div>
    )
}
