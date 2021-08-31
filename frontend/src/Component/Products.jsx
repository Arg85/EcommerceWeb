import React from 'react'
import Rating from "./Rating"
function Products({name,price,rating,image,caption,numReviews}) {
    return (
        <>
              <div className="gridCard">
                        <img src={image} alt="" />
                        {console.log(image)}
                        <div className="cardBody">
                            <h4>{name}</h4>
                          <Rating rating={rating} caption={caption} numReviews={numReviews}/>
                            <div className="price">
                                <h6>product price:{price} Rs</h6>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Products
