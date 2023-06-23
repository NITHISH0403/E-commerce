import React,{memo} from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            {console.log('footer render')}
            <p id="quotes"><span className="comma">“</span>&nbsp;&nbsp;You don’t understand anything until you learn it more than one way.&nbsp;&nbsp;<span className="comma">”</span> </p>
        </div> 
    );
}

export default memo(Footer);