import styled from 'styled-components'
import Teste from './imagens/meu-portifolio.png';
import { useState } from 'react';

const Container = styled.div`
    /* background-image: ${(props) => props.imagem}; */
    background-image: url(${Teste});
    width: 200px;
    height: 250px;
    border-radius: 10px;
    &:hover{
        opacity: 0.1;
    }
`
const Titulo = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.theme.text};
    padding: 10px;
    margin-top: 10px;
`
const Paragrafo = styled.p`
    font-family: 'Montserrat', serif;
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.theme.text};
    padding: 0 10px;
`

const Projetos = ({ title, text, tecnologia, imagem}) => 
{
    const [confirma, setConfirma] = useState(true);
    function mudaConteudo()
    {
        setConfirma(!confirma)
    }
    return(
        <Container onMouseEnter={mudaConteudo} onMouseLeave={mudaConteudo}>
            <Titulo hidden={confirma}>
                Telles Tecnologia
            </Titulo>
            <Paragrafo hidden={confirma}>
            Uma concepção de projeto para uma empresa de TI tercerizado em Rondonópolis-MT
            </Paragrafo>
        </Container>
    )
}

export default Projetos;