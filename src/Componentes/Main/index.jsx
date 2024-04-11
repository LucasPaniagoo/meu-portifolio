import styled from 'styled-components';
import ContainerTemplate from './ContainerTemplate';
import Projetos from './Projetos';

const sobreMim = {
    titulo: 'Sobre Mim',
    destaque: 'Um apaixonado por desenvolvimento',
    texto: 'Sou Lucas Paniago, tenho 21 anos e 6 anos de experiência acadêmica na área de tecnologia.' + 
           'Durante esses anos detive contato com diversos âmbitos da informática, como: redes, desenvolvimento, suporte ao usuário, entre outros.',
}

const Main = () => 
{
    return(
        <main>
            <ContainerTemplate 
                title={sobreMim.titulo}
                titleText={sobreMim.destaque}
                text={sobreMim.texto}
            >
            </ContainerTemplate>
            <ContainerTemplate 
                title={'Projetos em destaque'}
            >
                <Projetos/>
            </ContainerTemplate>
        </main>
    )
}

export default Main;