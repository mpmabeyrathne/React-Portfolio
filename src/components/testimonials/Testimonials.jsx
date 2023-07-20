import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const data = [
  {
    id: 1,
    image: AVTR1,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Similique ducimus repellendus quo repudiandae ab suscipit ad magni laudantium, nobis, velit placeat vero totam cumque veritatis porroquas quaerat minima rerum.",
  },
  {
    id: 2,
    image: AVTR2,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Similique ducimus repellendus quo repudiandae ab suscipit ad magni laudantium, nobis, velit placeat vero totam cumque veritatis porroquas quaerat minima rerum.",
  },
  {
    id: 3,
    image: AVTR3,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Similique ducimus repellendus quo repudiandae ab suscipit ad magni laudantium, nobis, velit placeat vero totam cumque veritatis porroquas quaerat minima rerum.",
  },
  {
    id: 4,
    image: AVTR4,
    name: "Ernest Achiever",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit.Similique ducimus repellendus quo repudiandae ab suscipit ad magni laudantium, nobis, velit placeat vero totam cumque veritatis porroquas quaerat minima rerum.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="div container testimonials_container">
        {data.map(({ id, name, image, review }) => {
          return (
            <article key={id} className="testimonial">
              <div className="client_avatar">
                <img src={image} alt="Avatar one" />
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
