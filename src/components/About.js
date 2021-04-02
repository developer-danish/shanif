import React from 'react'
import styled from 'styled-components';
import './About.css';
function About() {
    return (
        <Wrapper className="wrapper" id="about">
            <div>
                <p className="heading">WHO AM I ?</p>
            </div>

            <InnerWrapper className="innerWrapper">
                <div className="firstDiv">
                    <p>I'M Full Stack Developer from Kashmir, India</p>
                    <p>I enjoy taking complex problems and turning them into simple and beutilful interface designs.
                         I also love the logic and structure of coding and always strive to write elegant and efficient code</p>
                </div>
                <div className="secondDiv">

                    <Card>
                        <p className="heading">Personal Information</p>
                        <ul className="collection">
                            <li className="list_title">
                                <span className="title_head">Name:</span>
                                <span className="title_head">Danish Nazir</span>
                            </li>
                            <li className="list_title">
                                <span className="title_head">Email ID:</span>
                                <span className="title_head">danishnazir2001@gmail.com</span>
                            </li>
                            <li className="list_title">
                                <span className="title_head">Age:</span>
                                <span className="title_head">20 Year</span>
                            </li>
                            <li className="list_title">
                                <span className="title_head">Phone:</span>
                                <span className="title_head">6005203360</span>
                            </li>
                            <li className="list_title">
                                <span className="title_head">WhatsApp:</span>
                                <span className="title_head">6005203360</span>
                            </li>
                        </ul>
                    </Card>

                </div>
            </InnerWrapper>

        </Wrapper>
    )
}

export default About

const Wrapper = styled.div`
     display: flex;
     flex-direction: column;
    height: 60vh;
    padding-left:20px;
     div{
         height:40px;
         padding-top:20px;
     }
     padding-bottom:20px;

     @media (max-width: 770px){
        height:600px;
    }

`
const InnerWrapper = styled.div`
    display:grid;
    grid-template-columns: 50% auto;
    align-items: baseline;
    .firstDiv{
        
         letter-spacing: .4px;
         animation-name: 'fadeInLeft';
         animation-duration: 2s;
         animation-delay:1.5s;
         animation-timing-function:linear;
         animation-direction: linear;
    }

    @keyframes fadeInLeft{
        0% {
            opacity: 0;
            transform: translateX(-20px);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media (max-width:770px){
        display:flex;
        flex-direction: column;
        .firstDiv{
            margin-bottom: 30px;
        }
        .secondDiv{
            margin-top:80px;
            text-align: left;

            p{
                margin: 0;
            }
            ul{
                position:absolute;
                left: 0;
            }
            .title_head{
                max-width:190px;
                width:100%;
                display: inline-block;
            }
        }
    }
`
const Card = styled.div`
p{
    margin-left:50px;
    font-weight:500;
    font-size:23px;
}
ul{
    padding-top:20px;
}
    .list_title{
        list-style: none;
        padding:10px;
        display:flex;
    }

    .title_head{
        max-width:110px;
        width:100%;
        display: inline-block;
    }
    
`