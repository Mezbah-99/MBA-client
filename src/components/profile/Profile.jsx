import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import me from '../../assets/founder.webp'
import {MdDashboard} from "react-icons/md"

const Profile = () => {
    const options = {
        initial: {
            y: "-100%",
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <div>
            <section className='profile'>
                <main>
                    <motion.img src={me} alt="User" {...options}/>
                    <motion.h5 {...options} transition={{delay: 0.3 }}>Mezbah Uddin</motion.h5>
                    <motion.div {...options} transition={{delay: 0.5 }}>
                        <Link to="/adimin/dashboard" style={{
                            borderRadius: 0,
                            backgroundColor: "rgb(40,40,40)"
                        }}><MdDashboard/> Dashbard</Link>
                    </motion.div>
                    <motion.div 
                        initial={{
                            x: "-100vw",
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        >
                            <Link to="/myorders">Orders</Link>
                        </motion.div>
                        <motion.button
                            initial={{
                                x: "-100vw",
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                            transition={{
                                delay: 0.3
                            }}
                        >Logout</motion.button>
                </main>
            </section>
        </div>
    );
};

export default Profile;