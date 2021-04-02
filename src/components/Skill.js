import React from 'react'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
function Skill() {
    return (
        <Wrapper className="wrapper">
            <div>
                <p className="heading">MY SKILLS</p>
            </div>
            <InnerWrapper className="innerWrapper">
            <div className="wholeProgress">
                <label className="label">Javascript</label>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                </div>
            </div>
            <div className="wholeProgress">
                <label className="label">React js</label>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
            </div>
            <div className="wholeProgress">
                <label className="label">Angular</label>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">65%</div>
                </div>
            </div>
            <div className="wholeProgress">
                <label className="label">Node js</label>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">65%</div>
                </div>
            </div>
            <div className="wholeProgress">
                <label className="label">PHP</label>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
            </div>
            
            </InnerWrapper>
        </Wrapper>
    )
}

export default Skill

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
     padding:20px;
    height: 50vh;
    div{
        height: 40px;
    }
    @media (max-width:770px){
        height: 70vh;
    }
`

const InnerWrapper = styled.div`
     display: grid;
     grid-template-columns: 45% 45%;
     justify-content: space-between;
     align-items:center;
    .label{
        font-weight: bold;
    }
    .wholeProgress{
        margin-top:40px;
    }
    .progress{
         padding:0;
         height:25px;
         align-items: center;
    }

    @media (max-width:770px){
         display: flex;
        flex-direction: column;
        .wholeProgress{
            width:100%;
        }
    }
   
`
