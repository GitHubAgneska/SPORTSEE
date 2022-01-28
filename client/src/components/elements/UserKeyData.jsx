import PropTypes from "prop-types"
import UserKeyDataItem from "./UserKeyDataItem"
import styled from "styled-components"

const Wrapper = styled.div `
    /* border:2px solid green; */
    width:100%;
    height:100%;
    display:flex;
    flex-flow:column nowrap;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        h2 {  
            width: 100%;
            font-size: 0.8rem;
        }
    }
    @media screen and (min-width: 600px) {
        
        justify-content: space-between;
        h2 {
            font-size: 1rem;
            font-weight: 500;
            color: grey;
        }
    }
`;

const UserKeyData = (props) => {
    // console.log('keyData INPARENT', props) // object of objects
    return(
        <Wrapper>
            <h2>Vos stats</h2>
            {Object.keys(props).map(i => (
                <UserKeyDataItem data={props[i]} key= {i} />
            ))}
        </Wrapper>
    )
}
UserKeyData.propTypes = { userKeyData: PropTypes.array }
export default UserKeyData