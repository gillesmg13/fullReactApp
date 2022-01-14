import styled from 'styled-components';
import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
];

const CardContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`;

function Freelances() {
    return (
        <div>
            <h2>Page freelances</h2>
            <CardContainer>
                {freelanceProfiles.map((e, index) => (
                    <Card
                        key={`${e.name}-${index}`}
                        label={e.jobTitle}
                        picture={e.picture}
                        title={e.name}
                    />
                ))}
            </CardContainer>
        </div>
    );
}

export default Freelances;
