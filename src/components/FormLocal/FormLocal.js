import React from 'react';

import GoogleMaps from './googleMaps'
// import { Container } from './styles';

function FormLocal() {
    const googleApi = "AIzaSyBEbAD0I_EFbc6H8LD46eyfH6spPEscB_g&q=Space+Needle,Seattle+WA"
  return (
    <div className="FormLocal" >
        <h1  >3</h1>
        <h2 className="item-form-event " >ONDE?</h2>
        <div className="container" >
            <div className="row" >
                <div className="col" >
                    <h3>Cadastrar endereço*</h3>
                    <input class="form-control input-form-loca" type="text" placeholder="CEP" aria-label="default input example"></input>
                    <input class="form-control input-form-loca" type="text" placeholder="Local*" aria-label="default input example"></input>
                    <input class="form-control input-form-loca" type="text" placeholder="Avenida/Rua*" aria-label="default input example"></input>
                    <input class="form-control input-form-loca" type="text" placeholder="Número" aria-label="default input example"></input>
                    <input class="form-control input-form-loca" type="text" placeholder="Complemento" aria-label="default input example"></input>
                    <input class="form-control input-form-loca" type="text" placeholder="Bairro" aria-label="default input example"></input>
                    <select class="form-select input-form-loca" aria-label="Default select example">
                        <option selected>Estado*</option>
                        <option value="1">DF</option>
                        <option value="2">SP</option>
                        <option value="3">RJ</option>
                    </select>
                    <select class="form-select input-form-loca" aria-label="Default select example">
                        <option selected>Cidade**</option>
                        <option value="1">Brasilia</option>
                        <option value="2">São Paulo</option>
                        <option value="3">Rio de Janeiro</option>
                    </select>
                    <input class="form-check-input input-form-loca" type="checkbox" value="" id="maps"/>
                    <label class="form-check-label input-form-loca" for="maps">
                        Vizualizar no Google Maps
                    </label>
                </div>
                <div className="col" >
                    <GoogleMaps/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FormLocal;