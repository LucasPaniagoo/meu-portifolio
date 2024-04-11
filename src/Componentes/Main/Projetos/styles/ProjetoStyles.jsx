import styled from 'styled-components'

export const Container = styled.div`
    width: 200px;
    height: 250px;
    border-radius: 10px;
`
export const ImagemProjeto = styled.img`
    position: absolute;
    border-radius: 10px;
    opacity: ${(props) => props.$ativo ? 0.5 : 1};
`
export const ContainerDesc = styled.div`
    position: ${(props) => props.$ativo ? 'relative' : 'none'};
    color: #FFFFFF;
    padding: 10px;
`
export const Titulo = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
`
export const Paragrafo = styled.p`
    font-family: 'Montserrat', serif;
    font-size: 12px;
    font-weight: 400;
    margin-top: 10px;
    line-height: 14px;
`
export const ContainerBox = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
`
export const DivEstilizada = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`