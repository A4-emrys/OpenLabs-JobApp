import styled from "styled-components";

export const CustomHeader = styled.div`

    display: flex;
    justify-content: space-between;
    background-color: rgb(231, 88, 13);
    align-items: center;
    padding: 10px 9px;

    & button{
        border: none;
        border-radius: 5px;
        background: transparent;
        /* font-weight: bold; */
        color: white;
        position: inherit;
        font-size: 1rem;
        padding: 7px 10px;
        cursor: pointer;
        transition: 0.4s all;
        margin: 5px;
    }

    & .postBtn {
        border: solid green;
        background-color: green;
        border-radius: 0em;
        color: white;
        cursor: pointer;
        transition: 0.1s all;
    }
    /* & button span{
        position: absolute;
        background-color: red;
        color: #fff;
        top: 0px;
        right: 1px;
        padding: 2px 5px;
        border-radius: 5px;
        font-size: 0.8em;
    } */

    h1{
        font-size: 1.6rem;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s all;
    }

    & .h1 :hover{
        color: rgb(19, 81, 156);
    }

    & .button :hover{
        color: rgb(19, 81, 156);
        /* font-size: 1.5em; */

    }

    & .postBtn:hover{
        background-color: green;
        color: white;
        border: none;
        font-size: 1.5em;

    }
`