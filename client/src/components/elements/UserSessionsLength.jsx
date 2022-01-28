import PropTypes from "prop-types"
import { ResponsiveContainer, LineChart, Line, ReferenceArea, XAxis, Legend, Tooltip} from "recharts"
import styled from "styled-components"

const Wrapper = styled.section`    
    background-color: red;
    padding: 10px 0px;
    height:100%;
    width: 100%;
    
    @media screen and (max-width: 600px) {width:100%;}
    @media screen and (min-width: 600px) {max-width: 30%;}
`;
const CustomTooltipClass = {
    width:"40px",
    height:"30px",
    backgroundColor:"white",
    color:"grey", padding:"5%",textAlign:"center",
    fontSize:"10px", fontWeight:"bold"
} 

const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
           /*  console.log('HERE:', payload) */
        return (
            <div style={CustomTooltipClass}>
                { payload.map( (item) => ( <p key={Math.random()}>{item.payload.sessionLength}mn</p> ))}
            </div>
        );
    }
    return null;
};

const renderLegend = () => {
    return (
        <p style={{color:'white', opacity:'0.7', margin:'0'}}>Durée moyenne des sessions</p>
    );
}

const UserSessionsLength = ({userLengthSessions}) => {
    return (
        <Wrapper>
            <ResponsiveContainer>
                <LineChart 
                    data={userLengthSessions} 
                    width={400} 
                    height={250}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <Legend 
                        verticalAlign="top" 
                        content={renderLegend} 
                    />
                    <XAxis 
                        axisLine={false} 
                        dataKey="day" 
                        tickLine={false} 
                        style={{fill:'white', opacity:'0.7'}} 
                    />
                    <Tooltip content={<CustomTooltip />} /* cursor={{ stroke: 'grey', strokeWidth: 5 }} */  cursor={{height:'100%' }}/>
                    <Line 
                        dataKey="sessionLength"
                        type="natural" 
                        dot={false} 
                        stroke="#fff"
                    />
                    <ReferenceArea 
                        x1={150} 
                        x2={180} 
                        y1={200} 
                        y2={300} 
                        stroke="black" 
                        strokeOpacity={0.3} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}
UserSessionsLength.propTypes = { userLengthSessions: PropTypes.array }
export default UserSessionsLength

