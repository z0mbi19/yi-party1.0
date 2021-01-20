import React from 'react';

// import { Container } from './styles';

function FormEvento() {
    return (
        <div className="form-evento" >
            <h1>1</h1>
            <h2 className="item-form-event" >NOME E IMAGEM DO EVENTO</h2>
            <h3 className="form-evento-item" >Nome do evento*</h3>
            <input className="input-form-event form-control" />
            <h3 className="form-evento-item" >Incluir banner ou logo</h3>
            <button className="btn btn-outline-secondary" > Escolha arquivo </button>
            <div>
                <p className="caixa-logo" >
                    A imagem escolhida deve estar em formato JPG, GIF, ou PNG e ter no 
                    máximo 2MB. A dimensão recomendada é de 1200 x 444 pixels. Imagens 
                    com altura ou largura diferentes destas podem ser redimensionadas.
                </p>
            </div>
        </div>
    );
}

export default FormEvento;