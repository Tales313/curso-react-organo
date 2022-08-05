import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <div className="redes-sociais">
                <img src='/imagens/fb.png' alt="Icone do facebook"/>
                <img src='/imagens/tw.png' alt="Icone do twitter" />
                <img src='/imagens/ig.png' alt="Icone do instagram" />
            </div>
            <div className="organo-icon">
                <img src="/imagens/logo.png" alt="Logo do organo"/>
            </div>
            <div className="creditos">
                Desenvolvido por Alura.
            </div>
        </footer>
    )
}

export default Rodape