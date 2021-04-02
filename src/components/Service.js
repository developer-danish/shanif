import React from 'react'
import styled from 'styled-components';
import cards from "./data/Cards";
import './Service.css';
function Service() {
    return (
        <Wrapper className="wrapper">
            <div>
                <p className="heading">WHAT I DO ?</p>
            </div>
            <InnerWrapper className="innerWrapper">
                {
                   cards.map((item) =>(
                       <Card className="card">
                            <span className="span">{item.icon}</span>
                            <p className="heading">{item.title}</p>
                            <p>{item.details}</p>
                       </Card>
                   ))  
                }
            </InnerWrapper>
        </Wrapper>
    )
}

export default Service

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightcyan;
    div{
        height:40px;
        padding:20px;
    }
    .innerWrapper{
        height: 70vh;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }

    @media (max-width: 770px){
        height:100%;
    }
`

const InnerWrapper = styled.div`
    .card{
        height: 45vh;
        margin-bottom: 10px;
    .heading{
        margin-top:20px;
    }
    }

    @media (max-width: 770px){
        height: auto !important;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Card = styled.div`
    width:27%;
    padding:10px;
    margin:10px;
    text-align:center;
    border:1px solid lightgray;
    background-color:#fff;
    box-shadow: 1px 7px 9px rgb(229,205,295);
    animation: fadeInUp 2s linear;
    animation-delay: 2s;
    
     p{
         font-weight:400;
         font-size:18px;
         margin-top:40px;
     }

     :hover{
         transition: all 1s ease;
         border-bottom:2px solid black;
     }

     @keyframes fadeInUp{
         0%{
             opacity:0;
             transform: translate3d(0, 40px, 0);
         }
         100%{
             opacity:1;
             transform: none;
         }
     }

     @media (max-width: 770px){
         width:100%;
         margin-top:20px;
    }
`