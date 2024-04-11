import { Container, ImagemProjeto, ContainerBox, Titulo, Paragrafo, ContainerDesc, DivEstilizada } from './styles/ProjetoStyles';
import imgMeuportifolio from './imagens/meu-portifolio.png';
import imgCs2lines from './imagens/cs2-lines.png';
import imgEzlinks from './imagens/ezlinks.png';
import imgTelles from './imagens/telles.png';
import { useState } from 'react';
import Badge from './Badge';

const Projetos = () => 
{
    const [projetosDestaque, setProjetosDestaque] = useState([
        {
            id: 1,
            nome: 'Meu portifólio',
            imagem: imgMeuportifolio,
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
        }
    ])
    const mudaAtivo = (id) => 
    {
        setProjetosDestaque(projetosDestaque.map((projeto) => {
            if (projeto.id == id) 
            {
                projeto.ativo = !projeto.ativo
            }
            return projeto;
        }))
    }

    return(
        <ContainerBox>
            {projetosDestaque.map((projeto) => 
            <div key={projeto.id}>
                <Container onMouseEnter={() => mudaAtivo(projeto.id)} onMouseLeave={() => mudaAtivo(projeto.id)}>
                    <ImagemProjeto src={projeto.imagem} alt="Imagem do Projeto" $ativo={projeto.ativo}/>
                    <ContainerDesc $ativo={projeto.ativo}>
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