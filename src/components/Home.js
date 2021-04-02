import React from 'react'
import styled from 'styled-components';
import image from '../images/shanif.jpeg'
import './Home.css';
function Home() {
    return (
        <Wrapper className="home">
                <div>
                    <img src={image} alt="" />
                    <p className="heading"> I Am Danish|Full Stack Developer With 2 Years Of Experiance </p>
                </div>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    div{
        color:#fff;
        text-align:center;
        img{
            width:210px;
            height:210px;
            border-radius: 50%;
            border: 3px solid #fff;
        }
        p{
            font-weight:bolder;
            font-size:23px;
        }
    }
    
`
