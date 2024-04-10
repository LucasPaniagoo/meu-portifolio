import HTMLlogo from './Badge/logos/html.png';
import CSSlogo from './Badge/logos/css.png';
import JSlogo from './Badge/logos/js.png';
import REACTlogo from './Badge/logos/react.png';
import JAVAlogo from './Badge/logos/java.png';
import Badge from "./Badge";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
`
const ContainerTec = styled.div`
    background-color: ${(props) => props.theme.primary};
    width: 185px;
    height: 98px;
    border-radius: 50px 0 0 50px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.text};
    display: flex;
    justify-content: left;
    align-items: center;
    position: relative;
    left: 40px;
    p{
        margin-left: 20px;
    }
`
const ContainerBadge = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    background-color: ${(props) => props.theme.secundary};
    padding: 14px;
    border-radius: 50px;
    position: relative;
`
const tecnologias = [
    {
        nome: 'HTML',
        logo: HTMLlogo,
        alt: 'Logo HTML'
    },
    {
        nome: 'CSS',
        logo: CSSlogo,
        alt: 'Logo CSS'
    },
    {
        nome: 'JavaScript',
        logo: JSlogo,
        alt: 'Logo JavaScript'
    },
    {
        nome: 'React',
        logo: REACTlogo,
        alt: 'Logo React'
    },
    {
        nome: 'JAVA',
        logo: JAVAlogo,
        alt: 'Logo JAVA'
    }
]
const Tecnologias = () => 
{
    return(
        <Container>
            <ContainerTec><p>Tecnologias</p></ContainerTec>
            <ContainerBadge>
                {tecnologias.map((tecnologia) => <Badge key={tecnologia.nome} src={tecnologia.logo} alt={tecnologia.alt} />)}
            </ContainerBadge>
        </Container>
    )
}

export default Tecnologias;