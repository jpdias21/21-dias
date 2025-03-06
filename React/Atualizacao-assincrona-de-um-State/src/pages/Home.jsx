import './Home.css';
import Botao from '../components/Atoms/Botao'
import withAlert from '../components/HOCs/withAlert'

function App() {
    return (
        <>
            <h1>Olá mundo</h1>
            <Botao withAlert={onClick}/>
        </>
    );
}

export default App;