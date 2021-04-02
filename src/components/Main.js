import React from 'react'
import './Main.css';
import styled from 'styled-components';
import Home from './Home';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './About';
import Service from './Service';
import Skill from './Skill';
import Contact from './Contact';
function Main() {
    return (

        <Wrapper className="Main">
                        <Home />
                        <About />
                        <Service />
                        <Skill />
                        <Contact />
        </Wrapper>

    )
}

export default Main

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    scroll-behavior: smooth;
`
