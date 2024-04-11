import { BadgeEstilizado, Texto } from "../styles/BadgeStyles";

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