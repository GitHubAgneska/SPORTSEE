import styled from "styled-components"

export const MainWrapper = styled.main`
        border:4px solid yellow;
        width: 90%;
        margin: auto;
        padding-top: 3%;



       /*  height: 93vh; */

        @media screen and (min-width: 600px) {
           /*  position: absolute; */
            /* height: 90%;
                width: 92%;
                margin: 1%; */
           /*  top: 90px;
              left: 120px; */
        }
        @media screen and (max-width: 600px) {
           /*  position: relative; */
           /*  width:100%; */
        }
`;

// user intro
export const SectionA = styled.section`
    border: 2px solid grey;
    margin-bottom:25px;
    @media screen and (max-width: 600px) {width:100%;}
    @media screen and (min-width: 600px) { }
`;

// user keydata
export const SectionB = styled.section`
border: 2px solid yellow;
    @media screen and (max-width: 600px) {width:100%;}

    @media screen and (min-width: 600px) {
        width:20%;
        height:600px;
        float: right;
        &::after {
            content: "";
            display: block;
            clear: both;
        }
    }

`;

// graph activity
export const SectionC = styled.section`
border: 2px solid pink;
background-color:#FBFBFB;
    @media screen and (max-width: 600px) {width:100%;}
    @media screen and (min-width: 600px) {
        height:325px;
        width: 75%; /* width: 57.986vw; 835px  */
        margin-bottom:25px;
    }
`;

// graphs : 3 containers
export const SectionD = styled.section`
border: 5px solid green;
display:flex;
@media screen and (max-width: 600px) {
    width:100%; flex-flow:column nowrap;
    section { width:100%;}
}
@media screen and (min-width: 600px) {
    height:260px;
    width: 75%; /* width: 57.986vw; // 835px */
    flex-flow:row nowrap;
    justify-content: space-between;
    margin-bottom:25px;
}
`;
