import styled from 'styled-components'
import Teste from './imagens/meu-portifolio.png';
import imgCs2lines from './imagens/cs2-lines.png';
import imgEzlinks from './imagens/ezlinks.png';
import imgTelles from './imagens/telles.png';
import { useState } from 'react';
import Badge from './Badge';

const Container = styled.div`
    width: 200px;
    height: 250px;
    border-radius: 10px;
`
const ImagemProjeto = styled.img`
    position: absolute;
    border-radius: 10px;
    opacity: ${(props) => props.$ativo ? 0.5 : 1};
    
`
const ContainerDesc = styled.div`
    position: ${(props) => props.$ativo ? 'relative' : 'none'};
    color: #FFFFFF;
    padding: 10px;
`
const Titulo = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
`
const Paragrafo = styled.p`
    font-family: 'Montserrat', serif;
    font-size: 12px;
    font-weight: 400;
    margin-top: 10px;
    line-height: 14px;
`
const ContainerBox = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`
const DivEstilizada = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`
const projetosDestaque = 
[
    {
        id: 1,
        nome: 'Meu portifólio',
        imagem: Teste,
        descricao: 'Realizado para expor os projetos e conhecimentos adquiridos até o momento',
        tecnologias: ['React', 'Styled-Components'],
        github: 'https://github.com/LucasPaniagoo/meu-portifolio',
        acesso: '',
        ativo: false
    },
    {
        id: 2,
        nome: 'Telles Tecnologia',
        imagem: imgTelles,
        descricao: 'Uma concepção de projeto para uma empresa de TI tercerizado em Rondonópolis-MT',
        tecnologias: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/LucasPaniagoo/telles-tecnologia',
        acesso: 'https://lucaspaniagoo.github.io/telles-tecnologia/',
        ativo: false
    },
    {
        id: 3,
        nome: 'CS2 Lines',
        imagem: imgCs2lines,
        descricao: 'Crie sua própria line e mostre para os amigos!',
        tecnologias: ['React'],
        github: 'https://github.com/LucasPaniagoo/cs2-lines',
        acesso: 'https://lucaspaniagoo.github.io/cs2-lines/',
        ativo: false
    },
    {
        id: 4,
        nome: 'EZ Links',
        imagem: imgEzlinks,
        descricao: 'Site para disponibilizar todos os links de um criador de conteúdo',
        tecnologias: ['React', 'Styled-Components'],
        github: 'https://github.com/LucasPaniagoo/ezlinks',
        acesso: 'https://ezlinks.vercel.app/',
        ativo: false
    },
]
const Projetos = () => 
{
    const [ativo, setAtivo] = useState(false);
    const mudaAtivo = () => 
    {
        setAtivo(!ativo);
    }

    return(
        <ContainerBox>
            {projetosDestaque.map((projeto) => 
            <div key={projeto.id}>
                <Container onMouseEnter={mudaAtivo} onMouseLeave={mudaAtivo}>
                    <ImagemProjeto $ativo={ativo} src={projeto.imagem} alt="Teste de imagem"/>
                    <ContainerDesc $ativo={ativo}>
                        <Titulo>
                            { projeto.nome }
                        </Titulo>
                        <Paragrafo>
                            { projeto.descricao }
                        </Paragrafo>
                        <DivEstilizada>
                            <Badge tecnologias={projeto.tecnologias} />
                        </DivEstilizada>
                    </ContainerDesc>
                </Container>
            </div>
            )}
        </ContainerBox>

    )
}

export default Projetos;