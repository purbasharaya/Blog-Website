import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        Welcome to Blogs Hive, your go-to destination for a buzzing community of writers and readers! At Blogs Hive, we're passionate about fostering creativity, collaboration, and connection through the power of words.
        </p>
        <p>
        Founded on the belief that everyone has a story to share and a unique perspective to offer, Blogs Hive serves as a dynamic platform where individuals from all walks of life can come together to express themselves, engage with diverse ideas, and embark on intellectual journeys.
        </p>
        <p>
        Our mission is to cultivate a vibrant ecosystem where creativity flourishes and voices are amplified. Whether you're an established author, an aspiring writer, or simply a curious reader, there's a place for you in our hive. We embrace diversity in all its forms and celebrate the richness of human experience through our wide range of content.
        </p>
        <p>
        From thought-provoking essays and informative articles to captivating stories and insightful reflections, Blogs Hive offers a cornucopia of content to suit every taste and interest. Explore new perspectives, learn something new, or simply get lost in the immersive world of storytelling—all within the confines of our welcoming hive.
        </p>
        <p>
        But Blogs Hive is more than just a platform for content consumption; it's a vibrant community where meaningful connections are forged and ideas are exchanged. Through our interactive features and engaging discussions, we encourage collaboration, dialogue, and mutual support among our members.
        Whether you're seeking feedback on your latest writing project, looking for inspiration from fellow creatives, or simply craving a sense of belonging, you'll find a warm and welcoming community waiting for you here at Blogs Hive.
        </p>
        <p>
          Are you ready to become a part of our buzzing community? 
          <br></br>
          Become a Bee! Register Now and let your voice be heard!
        </p>
      </div>
    </article>
  );
};

export default About;
