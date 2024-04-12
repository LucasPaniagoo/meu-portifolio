import styled from "styled-components";

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.secundary};
    padding: 20px 0;
    margin-top: 100px;
    p{
        font-family: 'Ubuntu', sans-serif;
        font-size: 14px;
        font-weight: 700;
        text-align: center;
        color: ${(props) => props.theme.text};
    }
`

const Footer = () => {
    return(
        <FooterEstilizado>
            <p>Desenvolvido por Lucas Paniago®</p>
        </FooterEstilizado>
    )
}

export default Footer;