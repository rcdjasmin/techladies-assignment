import React from "react";
import myPicture from "../images/it me.JPG";
import '../styles/aboutMe.css';

function AboutMe() {
    return (
      <React.Fragment>

        <h1>Nice to meet you</h1>
        <div className="about-wrapper">
            <div className="about_description">
                <p>Hello there! I'm Celena. I currently work as web designer at TradeGecko.</p>
                <p>My educational background is in multimedia arts and design, but after a few years of working almost exclusively on the design aspect of marketing, UI/UX, and branding,
                I'm now exploring the <em>building</em> part of things. I want to learn how to build usable and beautiful interfaces. This is why I want to be a part of the TechLadies Bootcamp!</p>
                <p>Around this time last year, I attended a couple of TechLadies' Javascript study group sessions. I found these sessions to be
                incredibly useful - not only because I get to work out programming tasks with other people (instead of just pulling my hair out in frustration), but
                because it made me more accountable on my goal to learn.
                </p>
                <p>I hope I can do the same in an even more hands-on setting with the bootcamp. Being able to work on a real-world project for an NGO is an exciting opportunity
                that I wish I can be a part of too.
                </p>
                <p>Outside of design, I spend my free time either trying out a new recipe, doing my nihongo homework, reading, or watching stuff on Netflix.
                When I'm in a good mood, I go to the gym or do yoga. When I'm not, I just lie in bed and lurk in Reddit.
                </p>
            </div>
            <div className="about_image-wrapper">
                <img src={myPicture} alt="me" />
            </div>
        </div>
      </React.Fragment>
    );
  }

export default AboutMe;