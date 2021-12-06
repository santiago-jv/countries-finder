import styled from "styled-components";
const OptionsContainer = styled.section`
    width:90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:2rem auto;

    @media (max-width:900px){
        flex-direction:column;
    }
`


export {
    OptionsContainer
}