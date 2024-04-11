import { DivLink, Link, ImgLogo } from '../styles/LinksStyles';
import imgGithub from '../imagens/github.png';
import imgAcesso from '../imagens/acesso.png';

const Links = ({ github, acessoLive}) => 
{
    return(
        <DivLink>
                <Link href={github}>
                    <ImgLogo src={imgGithub} alt='Acesso para o Github'/>
                </Link>
                <Link href={acessoLive}>
                    <ImgLogo src={imgAcesso} alt='Acesso para o projeto'/>
                </Link>
        </DivLink>
    )
}

export default Links;