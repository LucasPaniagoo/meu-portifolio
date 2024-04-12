import styled from "styled-components"
import ListaContato from "./Contato"

const DivContatos = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    flex-grow: 1;
    margin: 40px 0;
`
const ImagemContato = styled.img`
    width: 60px;
    height: 60px;
`
const LinkContato = styled.a`
    text-decoration: none;
    &:hover{
        transform: scale(1.1);
        transition: 1s;
    }
`
const Contatos = () => 
{
    return(
        <DivContatos>
                <LinkContato href={ListaContato.github.acesso}>
                    <ImagemContato src={ListaContato.github.logo} alt={ListaContato.github.alt}/>
                </LinkContato>
                <LinkContato href={ListaContato.linkedin.acesso}>
                    <ImagemContato src={ListaContato.linkedin.logo} alt={ListaContato.linkedin.alt}/>
                </LinkContato>
                <LinkContato href={ListaContato.email.acesso}>
                    <ImagemContato src={ListaContato.email.logo} alt={ListaContato.email.alt}/>
                </LinkContato>
        </DivContatos>
    )
}

export default Contatos;