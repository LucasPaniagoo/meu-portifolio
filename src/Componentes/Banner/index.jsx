import styled from "styled-components";
import Foto from './foto.png';

const BannerEstilizado = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin: 5em 0;
    @media screen and (max-width:884px){
        margin: 3em 1em;
        gap: 50px;
        h1{
            font-size: 48px;
        }
        h2{
            font-size: 36px;
        }
        img{
            width: 25%;
        }
    }
    @media screen and (max-width:430px){
        margin: 20px 0 50px 0;
        gap: 15px;
        h1{
            font-size: 28px;
        }
        h2{
            font-size: 18px;
        }
        img{
            width: 40%;
        } 
    }
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
    width: 400px;
    height: 400;
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