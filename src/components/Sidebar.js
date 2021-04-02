import React, { useState } from 'react'
import styled from "styled-components";
import image from "../images/developer.png";
import './Sidebar.css';
import { data } from './data/Data';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import CloseIcon from '@material-ui/icons/Close';
//import { BrowserRouter as Router, Link } from "react-router-dom";
function Sidebar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(window.innerWidth <= 967 ? true : false);
    const [sidebar, setSidebar] = useState(false);
    const handleClick = () => {
        setClick(!click);
        setSidebar(!sidebar);
    }

    const showDefault = () => {
        setSidebar(!sidebar);
    }

    const showButton = () => {
        if (window.innerWidth <= 967) {
            setButton(true);
        } else {
            setButton(false);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>

            {button ? <div onClick={handleClick}>
                {click ? <CloseIcon className="div" /> : <ViewHeadlineIcon className="div" />}
            </div> : null}

            <Wrapper className={sidebar ? 'nav-sidebar active' : 'nav-sidebar'}>
                <ProfileContainer className="profile-container">
                    <Profile>
                        <img src={image} alt="" />
                        <p>Developer Danish</p>
                    </Profile>
                    <Elements>
                        {
                            data.map((item) => (
                                <Element>
                                    <a key={item.index} onClick={showDefault} href={item.path}>{item.title}</a>
                                </Element>

                            ))
                        }

                    </Elements>
                    <Bottom>
                        <p>© Copyright 2021</p>
                        <p>Designed and Developed by Danish</p>
                    </Bottom>
                </ProfileContainer>
            </Wrapper>
        </>
    )
}

export default Sidebar

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid lightgray;
    height: 100vh;
    background-color: #f2f3f7;
    z-index: 99;
    /* position: fixed;
    top: 0;
    left: 0;
    bottom: 0; */
`
const ProfileContainer = styled.div`

`

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-top: 40px; */
    img{
         width: 100%;
    }
    p{
        font-weight: 500;
        font-size: 21px;
        padding-top: 20px;
    }
`

const Elements = styled.div`
    padding-top:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 `
const Element = styled.div`
      padding-top: 15px;
      cursor: pointer;
      transition: all 1s ease;
      list-style: none;

      a{
          text-decoration: none;
      }
      :hover{
          transform: translate(0,2px);
          color: #2c98f0;
          border-bottom: 1px solid #2c98f0;
      }
`

const Bottom = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding:5px;
    padding-top:90px;
    text-align:center;
   
`
