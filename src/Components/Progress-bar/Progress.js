import React, { useState }from "react"
import './Progress.css'

function Progress () {
    /*--------SCROLL FUNCTION------*/
    const [update, setUpdate] = useState()

    const updating = ()=>{
        let scrollP = ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100);
        setUpdate(scrollP);
    }
    window.onscroll = updating

    return (
        <div className="progress-container">
            <div className="bar-container" style={{width: update + '%'}}></div>
        </div>
    )
}

export default Progress