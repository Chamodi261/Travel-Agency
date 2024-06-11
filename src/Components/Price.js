import React  from "react";
import '../Styles/price.css';

function Price(){
    return(
        <div className="price">
            <h2>Our Price</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque deserunt beatae ipsum unde, minima aliquid voluptates veniam quos deleniti consequuntur, recusandae eum ut enim cum sed maiores rerum reiciendis!</p>

            <div className="discount">
                <div className="dis_1">
                    <h2>15% </h2>
                    <h3>Off for August</h3>
                </div>

                <div className="dis_2">
                    <h2>12% </h2>
                    <h3>Discount for <br/>
                        Indonesia</h3>
                </div>
                
            </div>
        </div>
    );
}

export default Price;