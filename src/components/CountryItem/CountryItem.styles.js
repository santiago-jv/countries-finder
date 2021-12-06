import styled from "styled-components";
import { styles } from "../../constants";



const Card = styled.article`
    width:90%;
    max-width:250px;
    margin:1rem;
    border-radius:5px;
    background-color:${props=>props.theme.cardBackground};
    box-shadow: 0px 0px 15px -9px #333;
    transition: transform 0.3s ease;
    cursor:pointer;

    &:hover{
        transform:translateY(-15px);
    }

    @media (max-width:500px){
       margin:1rem auto; 
    }
;

`

const CardImage = styled.img`
    width:100%;
    height:150px;
    border-radius:5px 5px 0 0;
`
const CardBody = styled.div`
    padding:1rem;
`

const CardTitle = styled.h2`
    color:${props=>props.theme.text};
    font-size:17px;
`

const CardDescription = styled.div`
    margin-top:1rem;

`

const Description = styled.p`
    color:${props=>props.theme.text};
    font-size:${styles.fontSizeHomePage};

`

export {
    Card,
    CardImage,
    CardBody,
    CardTitle,
    CardDescription,
    Description
}