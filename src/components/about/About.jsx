import React from 'react';
import { Link } from 'react-router-dom';
import {RiFindReplaceLine} from "react-icons/ri"
import me from "../../assets/founder.webp"
const About = () => {
    return (
        <section className='about'>
            <main>
                <h1>About Us</h1>
                <article>
                    <h4>MBA Burger wala</h4>
                    <p>We are MBA Buger wala. The place for most tasty burgers on the entire earth.</p>
                    <p>Explore the various type of food and burgers. Click below thos see the menu</p>
                    <Link to="/">
                        <RiFindReplaceLine/>
                    </Link>
                </article>
                <div>
                    <h2>Founder</h2>
                    <article>
                        <div>
                            <img src={me} alt="Founder" />
                            <h3>Mezbah Uddin</h3>
                        </div>
                        <p>I am Mezbah uddin, the founder of MBA Burger Wala. Affiliated to Good Taste...</p>
                    </article>
                </div>
            </main>
        </section>
    );
};

export default About;