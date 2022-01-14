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

function Freelances() {
    return (
        <div>
            <h2>Page freelances</h2>
            {freelanceProfiles.map((e, index) => (
                <Card
                    key={`${e.name}-${index}`}
                    label={e.jobTitle}
                    picture={e.picture}
                    title={e.name}
                />
            ))}
        </div>
    );
}

export default Freelances;
