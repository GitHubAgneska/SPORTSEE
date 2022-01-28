import { Link } from 'react-router-dom';
import logo_main from '../../assets/logos/logo_main.png'
import NavMain from './Nav_main'
import styled from 'styled-components'


const StyledHeader = styled.header `
/* position: fixed; */
    width: 100%;

    @media screen and (max-width: 600px) {height: 7vh;}
    @media screen and (min-width: 600px) {height: 9vh;}
    transition: height 0.3s linear;

    display: flex; flex-flow: row nowrap;

    background-color:black;
    z-index:3;
    align-items: center;

    /*     @media screen and (max-width: 600px) {margin: 8px auto 8px 25px;}
        @media screen and (min-width: 600px) {margin: 15px auto 15px 25px; :0;} */
`;

const MainLogoWrapper = styled.div`
    width: 12.500vw; // 180px in 1440
    min-width: 90px;
`;
const MainLogo = styled.img`
    max-height:60px;  // - 4.167vw; // in viewport 1440
    max-width: 100%;
`

const Header = () => {

    return (

        <StyledHeader>
            <MainLogoWrapper>
                <Link to="/"><MainLogo src={logo_main} alt="main logo" /></Link>
            </MainLogoWrapper>
            <NavMain />
        </StyledHeader>

    )
}
export default Header