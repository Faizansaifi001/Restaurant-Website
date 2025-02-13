import React from 'react'
import { review } from '../assets/Data'
import quoteImg from '../assets/Images/quote-img.png'

const Review = () => {
    return (
        <>
          <section className="review" id="review">
            <h1 className="heading">
              customer's <span>review</span>
            </h1>
    
            <div className="box-container">
              {review.map((item, index) => (
                <div className="box" key={index * Math.random()}>
                  <img src={quoteImg} alt="" className="quote" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                    nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                    laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                    minus vel? Nemo.
                  </p>
                  <img src={item.img} className="user" alt="" />
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      );
}

export default Review