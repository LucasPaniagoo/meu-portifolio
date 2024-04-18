import styled from "styled-components"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    @media screen and (max-width:430px){
        width: 330px;
        margin: 50px auto auto auto;
    }
`
const Head = styled.div`
    width: 600px;
    height: 50px;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: ${(props) => props.theme.primary};
    border-radius: 20px 20px 0 0 ;
    p{
        font-family: 'Ubuntu', sans-serif;
        font-size: 20px;
        font-weight: 700;
        color: ${(props) => props.theme.text};
        margin-left: 40px;
    }
    @media screen and (max-width:430px){
        width: 330px;
        p{
        font-size: 16px;
    }
    }
`
const Body = styled.div`
    width: 600px;
    height: fit-content;
    margin-top: 2px;
    background-color: ${(props) => props.theme.secundary};
    display: flex;
    flex-wrap: wrap;
    border-radius: 0 0 20px 20px ;
    @media screen and (max-width:430px){
        width: 330px;
    }

`
const ContainerTemplate = ({ title, children, secao}) => 
{
    return(
        
        <Section id={secao}>
            <Head>
                <p>{ title }</p>
            </Head>
            <Body>
                {children}
            </Body>
        </Section>
    )
}

export default ContainerTemplate;