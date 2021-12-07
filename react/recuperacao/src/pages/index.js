import { Div } from './styled';

export default function home() {
    return (
        <Div>
            <div className="container">
                <div className="titulo">
                    Novo
                </div>

                <div className="row">
                    <div className="texto">
                        Nome:
                    </div>

                    <div className="input">
                        <input type="text" placeholder="" ></input>
                    </div>

                    <div className="botao">
                        <button>OK</button>
                    </div>
                </div>

                <div className="row">
                    <div className="titulo">
                        Listar
                    </div>

                    <div className="botao">
                        <button>OK</button>
                    </div>
                </div>

                <div className="tabela">
                    Tabela aqui!
                </div>
            </div>
        </Div>
    );
}