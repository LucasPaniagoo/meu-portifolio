import logoLight from './logo-light.png';
import logoDark from './logo-dark.png';
import lightMode from './sun.png';
import darkMode from './moon.png';
import styled from 'styled-components';

const HeaderEstilizado = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    a>img{
        width: 100px;
        height: 70px;
        margin-left: 40px;
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

`
const Botao = styled.button`
    border: none;
    background-color: transparent;
    width: 31px;
    margin-right: 40px;
    img{
        width: 30px;
        height: 24px;
        cursor: pointer;
    }
`

const Header = ({ setisDarkTheme, isDarkTheme }) => 
{
    function MudaModo(setisDarkTheme, isDarkTheme)
    {
        setisDarkTheme(!isDarkTheme);
    }
    return(
        <HeaderEstilizado>
           <a href="#">
                <img src={isDarkTheme ? logoDark : logoLight} alt="Logo" /> 
            </a>
           <div>
                <a href="#">
                    <p>Inicio</p>
                </a>
                <a href="#">
                    <p>Sobre Mim</p>
                </a>
                <a href="#">
                    <p>Projetos</p>
                </a>
                <a href="#">
                    <p>Contatos</p>
                </a>
           </div>
           <Botao onClick={() => MudaModo(setisDarkTheme, isDarkTheme)}><img src={isDarkTheme ? lightMode : darkMode} alt="Modo Noturno" /></Botao>
        </HeaderEstilizado>
    )
}

export default Header;