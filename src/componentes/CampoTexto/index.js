import './CampoTexto.css'; // Importa o arquivo de estilização do componente CampoTexto

const CampoTexto = () => {
    return (
        <div className="campo-texto">
            <label>Nome:</label>
            <input placeholder='Digite o seu nome'/>
        </div>
              );
    }

    export default CampoTexto; // Exporta o componente CampoTexto para ser utilizado em outros arquivos 