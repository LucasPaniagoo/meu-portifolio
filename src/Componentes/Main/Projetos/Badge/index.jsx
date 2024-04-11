import styled from 'styled-components';

const BadgeEstilizado = styled.div`
    width: fit-content;
    background-color: #616161;
    padding: 5px 10px;
    border-radius: 20px;
    margin-right: 5px;
    margin-bottom: 5px;
`
const Texto = styled.p`
    font-family: 'Montserrat', serif;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
`

const Badge = ({ tecnologias }) => 
{
    return(
        <>
            {tecnologias.map((tecnologia, index) => 
            <div key={index}>
                <BadgeEstilizado>
                    <Texto> { tecnologia } </Texto>
                </BadgeEstilizado>
            </div>
            )}
        </>

    )
}

export default Badge;