import styled from "styled-components";

const BadgeEstilizado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 30px;
    background-color: ${(props) => props.theme.badge};
    box-shadow: 5px 5px rgba(0, 0, 0, 0.1)
;
`
const ImagemBadge = styled.img`
    width: 50px;
    height: 50px;
`
const Badge = ({ src, alt}) => 
{
    return(
        <>
                <BadgeEstilizado>
                    <ImagemBadge src={src} alt={alt}/>
                </BadgeEstilizado>
        </>
    )
}

export default Badge;