import styled from 'styled-components';
import ContainerTemplate from './ContainerTemplate';
import Projetos from './Projetos';
import Contatos from './Contatos';

const sobreMim = {
    titulo: 'Sobre Mim',
    destaque: 'Um apaixonado por desenvolvimento',
    texto: 'Sou Lucas Paniago, tenho 21 anos e 6 anos de experiência acadêmica na área de tecnologia.' + 
           'Durante esses anos detive contato com diversos âmbitos da informática, como: redes, desenvolvimento, suporte ao usuário, entre outros.',
}
const HeaderText = styled.h3`
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    color: ${(props) => props.theme.text};
`
const Paragrafo = styled.p`
        height: fit-content;
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        font-weight: 400;
        text-align: justify;
        color: ${(props) => props.theme.text};
        margin: 20px 40px;
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