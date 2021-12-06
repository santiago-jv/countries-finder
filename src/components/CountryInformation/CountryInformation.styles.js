import styled from "styled-components";
const CountryContainer = styled.section`
    margin: auto;
    margin-top:3rem;
    display:flex;
    justify-content:space-between;
    width:90%;
    height:fit-content;

    @media (max-width:900px){
        flex-direction:column;
        align-items:center;
    }
    
`
const CountryImage = styled.article`
    width:50%;
    display:flex;
    justify-content:center;
    @media (max-width:900px){
        width:100%;
        margin-bottom:2rem;
    }
`
const Image = styled.img`
    width: 100%;
    max-width:450px;
    height:300px;
    
`
const CountryInfo = styled.article`
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width:900px){
        width:100%;
    }
`
const CountryName = styled.h1`
    color:${props=>props.theme.text};
    font-size:2rem;
`

const CountryDescription = styled.div`

`
const MainDescription = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const PrimaryDescription = styled.div`
    width: 50%;
`
const SecondaryDescription = styled.div`
    width: 50%;
`
const TextContainer = styled.div`
    margin:.3rem 0;
`
const Label = styled.label`
    color:${props=>props.theme.text};
    font-weight:600;
    margin-right:.1em;
    font-size:14px;


`
const Description = styled.p`
    color:${props=>props.theme.text};
    font-size:14px;


`

const BorderCountries = styled.div`
    display:flex;
    align-items:center;
    margin-top:1rem;
`
const ItemsContainer = styled.div`
    display:flex; flex-wrap:wrap;
`
const Item = styled.span`
    margin-left:.5rem;
    background:${props=>props.theme.cardBackground};
    padding:.3rem 1.5rem;
    font-size:11px;
    border-radius:5px;
    color:${props=>props.theme.text};
    
`
export {
    CountryContainer,
    CountryImage,
    Image,
    CountryInfo,
    CountryName,
    CountryDescription,
    MainDescription,
    PrimaryDescription,
    SecondaryDescription,
    Description,
    TextContainer,
    Label,
    BorderCountries,
    Item,
    ItemsContainer
}