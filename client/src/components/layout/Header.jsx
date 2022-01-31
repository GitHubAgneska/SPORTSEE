import { Link } from 'react-router-dom';
import logo_main from '../../assets/logos/logo_main.png'
import NavMain from './Nav_main'
import styled from 'styled-components'


const StyledHeader = styled.header `
    width: 100%;
    height: 9vh;
    @media screen and (max-width: 600px) {padding-top: 2%;}
    @media screen and (min-width: 600px) {}
    transition: height 0.3s linear;

    display: flex; flex-flow: row nowrap;

    background-color:black;
    z-index:3;
    align-items: center;
`;

const MainLogoWrapper = styled.div`
    width: 12.500vw; // 180px in 1440
    min-width: 90px;
    margin-left: 5%;
}
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