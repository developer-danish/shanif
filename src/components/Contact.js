import React from 'react'
import styled from 'styled-components';
function Contact() {
    const submitValue = (e) =>{
        e.preventDefault();
    }
    return (
        <Wrapper>
            <div>
                <p className="heading">CONTACT</p>
            </div>
            <InnerWrapper className="innerWrapper">
                <div className="form">
                    <p className="heading">Drop Me A Message</p>
                    <form>
                        <div className="input">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="textarea">
                             <textarea type="text" placeholder="Message" rows="7" cols="50" /> 
                        </div>
                        <button onClick={submitValue} type="submit">Send Message</button>
                    </form>

                </div>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Contact

const Wrapper = styled.div`
height: 90vh;
padding:10px;
background-color: rgb(202, 222, 223);;
    div{
        height:40px;
    }
`

const InnerWrapper = styled.div`
     display:flex;
     height: 80vh !important;
     justify-content: center;
     align-items: center;
     text-align:center;
    .form{
        width:80%;
        height:80%;
        background-color:#fff;
        padding: 20px;
        padding-top: 40px;
        box-shadow: 1px 7px 9px rgb(229,205,295);
        @media (max-width: 770px){
           height: 90%;
           width: 90%;
        }

        p{
            padding-bottom: 10px;
        }
    }

    form{
        display: flex;
        flex-direction: column;
    }

    button{
        width: 140px;
        margin-top: 200px;
        border: 1px solid darkturquoise;
        padding: 5px;
        border-radius: 2px;
        background-color: darkturquoise;
        color: #fff;
        text-align: start;
        font-weight: bold;

        @media (max-width: 770px){
            margin-top: 230px;
        }
    }

    .input{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        @media (max-width: 770px){
            display: flex;
            flex-direction: column;
        }
    }

    input{
        padding:10px;
        width: 45%;
        outline: none;
        border: 1px solid darkturquoise;
        @media (max-width: 770px){
            width: 100%;
            padding: 10px;
            margin-top: 20px;
        }
    }

    .textarea{
        @media (max-width: 770px){
           margin-top:60px;
        }
    }
    textarea{
        width: 100%;
        padding: 10px;
        outline: none;
        border: 1px solid darkturquoise;
        @media (max-width: 770px){
           margin-top:60px;
        }
    }
`