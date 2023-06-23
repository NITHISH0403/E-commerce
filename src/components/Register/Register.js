import React from "react";
import './Register.css';
import image from './hire-php-development-services-banner-img-1.webp';

const Register = () => {
    return (
        <>
            <div className="form_container">
                <img src={image} alt="Start To Learn"/>
                <form name="myform">
                    <h1>Register Form</h1><br></br>
                    <ul>
                        <li>
                            <label>NAME</label><br></br>
                            <input type="text"  placeholder="Enter a Name" name="name" id="name" required/>
                            <p id="msg1">*Invalid input</p>
                        </li><br></br>
                        <li>
                            <label>Date Of Birth</label><br></br>
                            <input type="text" placeholder="Enter a DOB" name="dob"/>
                        </li><br></br>
                        <li>
                            <label>Phone No</label><br></br>
                            <input type="text" placeholder="Enter a Number" name="phone" id="phone" required/>
                            <p id="msg2">*Invalid input</p>
                        </li><br></br>
                        <li>
                            <label>Language</label><br></br>
                            <select name="lang" defaultValue="option1">
                                <option value="option1">select</option>
                                <option value="tamil">Tamil</option>
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                            </select> 
                        </li><br></br>
                        <li>
                            <label>Email Id</label><br></br>
                            <input type="text" placeholder="Enter a Mail Id" name="eid"/>
                        </li><br></br>
                        <li>
                            <input type="button" value="SUBMIT" id="button"/>
                        </li><br></br>
                    </ul>
                </form>
            </div>
        </>
    );
}

export default Register;