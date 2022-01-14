import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../colors';

const StyledLink = styled(Link)`
    display: inline-block;
    margin-top: 20px;
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${({ $isfulllink }) =>
        $isfulllink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

function Header() {
    return (
        <nav>
            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/survey/42">Questionnaire</StyledLink>
            <StyledLink to="/results">Résultats</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>

            <StyledLink to="/survey/1" $isfulllink={true}>
                Faire le test
            </StyledLink>
        </nav>
    );
}

export default Header;
