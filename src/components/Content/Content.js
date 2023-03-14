import React from "react";
import './Content.css';

const Content = (props) => {
    const {Items, Add} = props;
    return (
        <>
            <div className="body">
            <h1>Learn to Code</h1>
            <h2>With the world's largest web developer site.</h2>

                {Items.map((Items) => (
                    
                    <div key={Items.id} className="image">
                        <img alt={Items.name} src={Items.image}/>
                        <p className="cost">{Items.cost}</p>
                        <p>{Items.learn}</p>
                        <h3 className="add" onClick={()=>{Add(Items)}}>Add to Cart</h3>
                    </div>
                ))}
            </div> 
        </>
    );
}

export default Content;