import '.Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
           <div className='icones'> 
                <img src= "/imagens/fb.png" alt="Facebook"/>
                <img src= "/imagens/ig.png" alt="Instagram"/>
                <img src= "/imagens/tw.png" alt="Twitter"/>
            </div>
            <div className='logo'>
                <img src= "/imagens/logo.png" alt="Logo"/>     
            </div>
            <div>
                <span>Desenvolvido por Alura</span>
            </div>
        </footer>
    )
}

export default Rodape;