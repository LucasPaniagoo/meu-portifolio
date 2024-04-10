import styled from "styled-components";
import Foto from './foto.png';

const BannerEstilizado = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 5em 0;
`
const Titulo = styled.h1`
    font-family: 'JetBrains Mono', sans-serif;
    font-weight: bold;
    font-size: 64px;
    margin: 0;
    color: ${(props) => props.theme.title};
`
const Subtitulo = styled.h2`
    font-family: 'Ubuntu', sans-serif;
    font-weight: bold;
    font-size: 48px;
    margin: 0;
    color: ${(props) => props.theme.title};
`
const Imagem = styled.img`
    width: 288px;
    height: 290;
`
const Banner = () => 
{
    return(
        <BannerEstilizado>
            <div>
                <Titulo>
                    Olá!
                </Titulo>
                <Subtitulo>
                    Sou Lucas Paniago, <br></br> Desenvolvedor WEB
                </Subtitulo>
            </div>
            <Imagem src={Foto} alt="Foto de Lucas Paniago" />
        </BannerEstilizado>
    )
}

export default Banner;