import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <div className="redes-sociais">
                <img src="/curso-react-organo/imagens/fb.png" alt="Icone do facebook"/>
                <img src="/curso-react-organo/imagens/tw.png" alt="Icone do twitter" />
                <img src="/curso-react-organo/imagens/ig.png" alt="Icone do instagram" />
            </div>
            <div className="organo-icon">
                <img src="/curso-react-organo/imagens/logo.png" alt="Logo do organo"/>
            </div>
            <div className="creditos">
                Desenvolvido por Alura.
            </div>
        </footer>
    )
}

export default Rodape