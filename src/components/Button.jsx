import styled from 'styled-components'

const Button = styled.button`
    background-color: var(--firstColor);
    border: 1px solid var(--secondColor);
    background-color: var(--firstColor);
    color: var(--secondColor);
    cursor: pointer;
    font-size: 1.4em;
    padding: 2px 15px;
    text-transform: var(--textTransformC);
    transition: all .5s ease-in-out;
    &:hover{
        background-color: var(--thirdColor);  
    }
    &:focus {
        outline: none;
    }
`;

export default Button;