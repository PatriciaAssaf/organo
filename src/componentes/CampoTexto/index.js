import './CampoTexto.css'; // Importa o arquivo de estilização do componente CampoTexto

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...` 

      const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

    export default CampoTexto; // Exporta o componente CampoTexto para ser utilizado em outros arquivos 