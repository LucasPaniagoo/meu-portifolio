import styled from 'styled-components';
import ContainerTemplate from './ContainerTemplate';
import Projetos from './Projetos';
import Contatos from './Contatos';

const sobreMim = {
    titulo: 'Bio',
    destaque: 'Minha Jornada na Tecnologia',
    texto: 'Meu interesse por programação se iniciou ainda no ensino médio, o que me motivou a cursar Análise e Desenvolvimento de Sistemas. Como precisei trabalhar desde cedo, iniciei minha jornada profissional na área de suporte técnico, sempre com o objetivo claro de migrar para o desenvolvimento.' + 
           ' Atualmente, concilio trabalho e estudos com foco total em me tornar desenvolvedor. Tenho me dedicado ao backend com Java, além de explorar o frontend com React, HTML, CSS e JavaScript. Mesmo com os desafios, nunca deixei a tecnologia de lado, é nessa área que me encontro e quero crescer.',
}
const HeaderText = styled.h3`
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    margin: 0 40px;
    text-align: center;
    margin-top: 20px;
    color: ${(props) => props.theme.text};
    @media screen and (max-width:430px){
        font-size: 14px;
    }
`
const Paragrafo = styled.p`
        height: fit-content;
        font-family: 'Ubuntu', sans-serif;
        font-size: 17px;
        font-weight: 400;
        line-height: 1.5;
        text-align: justify;
        color: ${(props) => props.theme.text};
        margin: 20px 40px;
        @media screen and (max-width:430px){
        font-size: 12px;
    }
`
const ContainerProjetos = styled.div`
    margin: 30px 0;
`

const Main = () => 
{
    return(
        <main>
            <ContainerTemplate 
                title={sobreMim.titulo}
                secao={'sobreMim'}
            >
                <HeaderText>{ sobreMim.destaque }</HeaderText>
                <Paragrafo>{ sobreMim.texto }</Paragrafo>
            </ContainerTemplate>
            <ContainerTemplate 
                title={'Projetos em destaque'}
                secao={'projetos'}
            >
                <ContainerProjetos> 
                    <Projetos/>
                </ContainerProjetos>
            </ContainerTemplate>
            <ContainerTemplate
                title={'Contatos'}
                secao={'contatos'}
                >
                    <Contatos />
            </ContainerTemplate>
        </main>
    )
}

export default Main;