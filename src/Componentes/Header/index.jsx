import logoLight from './images/logo-light.png';
import logoDark from './images/logo-dark.png';
import lightMode from './images/sun.png';
import darkMode from './images/moon.png';
import styled from 'styled-components';

const HeaderEstilizado = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    margin: 0 40px;
    a>img{
        width: 100px;
        height: 70px;
    }
    div{
        display: flex;
        justify-content: center;
        gap: 40px;
        a{
            text-decoration: none;
            color: ${(props) => props.theme.nav};
            p{
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
            }
        }
    }
    @media screen and (max-width: 430px){
        display: flex;
        justify-content: space-between;
        margin: 0 20px;
        div{
            display: none;
        }
    }

`
const Botao = styled.button`
    border: none;
    background-color: transparent;
    img{
        margin: 0 5px;
        width: 30px;
        height: 25px;
        cursor: pointer;
    }
    @media screen and (max-width: 430px){

    }
`

const Header = ({ setisDarkTheme, isDarkTheme }) => 
{
    function MudaModo(setisDarkTheme, isDarkTheme)
    {
        setisDarkTheme(!isDarkTheme);
    }
    return(
        <HeaderEstilizado id='header'>
           <a href="#">
                <img src={isDarkTheme ? logoDark : logoLight} alt="Logo" /> 
            </a>
           <div>
                <a href="#sobreMim">
                    <p>Sobre Mim</p>
                </a>
                <a href="#projetos">
                    <p>Projetos</p>
                </a>
                <a href="#contatos">
                    <p>Contatos</p>
                </a>
           </div>
           <Botao onClick={() => MudaModo(setisDarkTheme, isDarkTheme)}><img src={isDarkTheme ? lightMode : darkMode} alt="Modo Noturno" /></Botao>
        </HeaderEstilizado>
    )
}

export default Header;