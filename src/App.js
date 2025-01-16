import {useState} from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome:'Front-End',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },    
    {
      nome:'Data Science',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },    
    {
      nome:'Devops',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },    
    {
      nome:'UX e Design',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },    
    {
      nome:'Mobile',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },    
    {
      nome:'Inovação e Gestão',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    }        
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
      setColaboradores([...colaboradores, colaborador]);
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado (colaborador)}/>      
      
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
    </div>
  );
}

export default App;
