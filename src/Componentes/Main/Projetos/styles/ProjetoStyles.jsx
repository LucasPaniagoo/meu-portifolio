import styled from 'styled-components'

export const Container = styled.div`
    width: 200px;
    height: 250px;
    border-radius: 10px;
    transform: ${(props) => props.$ativo ? 'scale(1.1)' : 'none'};
    transition: 0.5s;
`
export const ImagemProjeto = styled.img`
    border-radius: 10px;
    /* opacity: ${(props) => props.$ativo ? 0.5 : 1}; */
`
export const ContainerDesc = styled.div`
    /* position: ${(props) => props.$ativo ? 'relative' : 'none'}; */
    width: 200px;
    height: 250px;
    display: ${(props) => props.$ativo ? 'block' : 'none'};
    background-color: rgb(0, 0, 0, 0.5);
    position: relative;
    border-radius: 10px;
    bottom: 253px;
    color: #FFFFFF;
`
export const Titulo = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 10px 0 10px;
`
export const Paragrafo = styled.p`
    font-family: 'Montserrat', serif;
    font-size: 12px;
    font-weight: 400;
    margin-top: 10px;
    line-height: 14px;
    padding: 0 10px;
`
export const ContainerBox = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`
export const DivEstilizada = styled.div`
    margin-top: 10px;
    padding: 10px;
`