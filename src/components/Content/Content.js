import React from "react";
import './Content.css';

const Content = ({Items, Add,setCount}) => {
    return (
        <>
            <div class="body">
            <h1>Learn to Code</h1>
            <h2>With the world's largest web developer site.</h2>
                {Items.map((Items) => (
                    <>
                        <div className="image">
                            <img alt={Items.name} src={Items.image}/>
                            <p class="cost">{Items.cost}</p>
                            <p>{Items.learn}</p>
                            <div class="add">
                                <h3 onClick={()=>{Add(Items);setCount((count)=>count+1)}}>Add to Cart</h3>
                            </div>
                        </div>
                    </>
                ))}
            </div> 
        </>
    );
}

export default Content;