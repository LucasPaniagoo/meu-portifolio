import styled from "styled-components"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

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
`
const Body = styled.div`
    width: 600px;
    margin-top: 2px;
    background-color: ${(props) => props.theme.secundary};
    display: flex;
    flex-wrap: wrap;
    border-radius: 0 0 20px 20px ;
    h3{
        font-family: 'Ubuntu', sans-serif;
        font-size: 20px;
        font-weight: 700;
        width: 100%;
        text-align: center;
        margin-top: 20px;
        color: ${(props) => props.theme.text};
    }
`
const Paragrafo = styled.p`
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        font-weight: 400;
        text-align: justify;
        color: ${(props) => props.theme.text};
        margin: 20px 40px;
`

const ContainerTemplate = ({ title, titleText = '',  text , children}) => 
{
    return(
        <Section>
            <Head>
                <p>{ title }</p>
            </Head>
            <Body>
                <h3>{ titleText }</h3>
                <Paragrafo>{ text }</Paragrafo>
                {children}
            </Body>
        </Section>
    )
}

export default ContainerTemplate;