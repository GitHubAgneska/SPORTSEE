import { Link } from 'react-router-dom';
import logo_main from '../../assets/logos/logo_main.png'
import NavMain from './Nav_main'
import styled from 'styled-components'

const Wrapper = styled.div `
    width: 100%;
    background-color:black;
    position: fixed; z-index:3;
`;
const StyledHeader = styled.header `
    display: flex; flex-flow: row nowrap;
    align-items: center;
    margin: 15px auto 15px 25px;  // - in viewport 1440
    // margin: 1.042vw auto 1.042vw 1.736vw;
`;
const MainLogoWrapper = styled.div`
    width: 12.500vw; // 180px in 1440
    min-width: 135px;
`;
const MainLogo = styled.img`
    max-height:60px;  // - 4.167vw; // in viewport 1440
    max-width: 100%;
`

const Header = () => {

    return(
        <Wrapper>
            <StyledHeader>
                <MainLogoWrapper>
                    <Link to="/"><MainLogo src={logo_main} alt="main logo" /></Link>
                </MainLogoWrapper>
                <NavMain />
            </StyledHeader>
        </Wrapper>
    )
}
export default Header