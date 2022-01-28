import PropTypes from "prop-types"
import UserKeyDataItem from "./UserKeyDataItem"
import styled from "styled-components"

const Wrapper = styled.div `
    /* border:2px solid green; */
    
    width:100%;
    height:100%;
    display:flex;
    @media screen and (max-width: 600px) {flex-flow: row wrap;}
    @media screen and (min-width: 600px) {flex-flow:column nowrap;}

    justify-content: space-between;
`;

const UserKeyData = (props) => {
    // console.log('keyData INPARENT', props) // object of objects
    return(
        <Wrapper>
            {Object.keys(props).map(i => (
                <UserKeyDataItem data={props[i]} key= {i} />
            ))}
        </Wrapper>
    )
}
UserKeyData.propTypes = { userKeyData: PropTypes.array }
export default UserKeyData