import styled from "styled-components";

export const BannerStyle = styled.div`

height: 80vh;
    width: 100%;
    background-color: grey;
    position: relative;
    background: url(./img/OpenLab.jpg) center/cover no-repeat;


    & .img{
        /* width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden; */
    }


    & .landing-text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: rgb(247, 247, 249, 0.7);
        width:60%;
        padding-top: 70px;
        padding-bottom: 70px;
        text-align: center;
    
        
    }

    & .landing-text button{
        background-color: transparent;
        padding: 10px;
        font-size: 1.4em;
        border: solid green;
        transition: 0.4s all;

    }

    & .landing-text button:hover{
        background-color: green;
        color: white;
    }
    
    /* & .hero {
        min-height: calc(100vh - 60px);
        background: url(./img/hero-bcg.jpeg) center/cover no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    } */
`