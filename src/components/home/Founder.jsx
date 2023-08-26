import React from 'react';
import {motion} from 'framer-motion'
import me from '../../assets/founder.webp'
const Founder = () => {
    const options = {
        
        initial:{
            x: "-100%",
            opacity: 0,
        },
        whileInView:{
            x: "-0%",
            opacity: 1,
        }
    
    }
    return (
        <>
            <section className='founder'>
                <motion.div {...options}>
                    <img src={me} alt="" height={200} width={200}/>
                    <h3>
                        Mezbah Uddin
                    </h3>
                    <p>Hey, Everyone I am Mezbah Udddin, The founder of MBA Burger Wala. <br />
                        Our Aim is to Create the most tasty burger on planet.
                    </p>
                </motion.div>
            </section>
        </>
    );
};

export default Founder;