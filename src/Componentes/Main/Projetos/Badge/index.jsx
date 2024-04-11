import { BadgeEstilizado, DivBadge, Texto } from "../styles/BadgeStyles";

const Badge = ({ tecnologias }) => 
{
    return(
        <DivBadge>
            {tecnologias.map((tecnologia, index) => 
            <div key={index}>
                <BadgeEstilizado>
                    <Texto> { tecnologia } </Texto>
                </BadgeEstilizado>
            </div>
            )}
        </DivBadge>

    )
}

export default Badge;