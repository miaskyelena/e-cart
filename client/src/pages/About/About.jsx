import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/Bar/SearchBar/SearchBar';
const About = () => {
    return (
        <>
            <SearchBar />
            <div className="container">
                <div className="about-item">
                    <h1>About</h1>
                    <p>
                        This is a full-stack web application built with ReactJS,
                        NodeJS, ExpressJS, and Railway. It is a simple e-commerce
                        application that allows users to browse products, add
                        products to cart, and purchase products. Users can also
                        create and sell their own products. This application is
                        built for educational purposes only.
                    </p>
                    <p>
                        This application is built with love by{' '}
                        <a
                            href="
https://www.linkedin.com/in/kevin-tran-1a3b6b1b7/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Mia Elena
                        </a>
                        .
                    </p>
                    <p>
                        View the source code{' '}
                        <a
                            href=""
                            target="_blank"
                            rel="noreferrer"
                        >
                            here
                        </a>
                        .
                    </p>
                </div>
            </div>

        </>
    );
};

export default About;
