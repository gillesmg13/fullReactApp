import { Link, useParams } from 'react-router-dom';

function Survey() {
    const { questionNumber } = useParams();

    const number = parseInt(questionNumber);
    const previousNumber = number - 1;
    const nextNumber = number + 1;
    return (
        <>
            <div>
                <h1>Questionnaire 📉</h1>
                <h2>Question {questionNumber}</h2>
            </div>
            <Link to={`/survey/${previousNumber}`}>Précédent</Link>

            {number === 50 ? (
                <Link to={`/results`}>Suivant</Link>
            ) : (
                <Link to={`/survey/${nextNumber}`}>Suivant</Link>
            )}
        </>
    );
}

export default Survey;
