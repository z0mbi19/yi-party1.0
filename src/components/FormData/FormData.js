import React from 'react';


// import { Container } from './styles';

function FormData() {
  return (
    <div className="form-data " >
        <h1>2</h1>
        <h2>Quando?</h2>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                </div>
                <div className="col-sm">
                    <p><strong>QUAIS OS DIAS DE EVENTO?</strong></p>
                </div>
                <div className="col-sm">
                </div>
            </div>
            <div className="row" >
                <div className="col-sm">
                    <input class="form-check-input " type="checkbox" value="" id="Seg"/>
                    <label class="form-check-label" for="Seg">
                        Seg
                    </label>
                </div>
                <div className="col-sm">
                    <input class="form-check-input" type="checkbox" value="" id="Ter"/>
                    <label class="form-check-label" for="Ter">
                        Ter
                    </label>
                </div>
                <div className="col-sm">
                    <input class="form-check-input" type="checkbox" value="" id="Qua"/>
                    <label class="form-check-label" for="Qua">
                        Qua
                    </label>
                </div>
                <div className="col-sm">
                    <input class="form-check-input" type="checkbox" value="" id="Qui"/>
                    <label class="form-check-label" for="Qui">
                        Qui
                    </label>
                </div>
                <div className="col-sm">
                    <input class="form-check-input" type="checkbox" value="" id="Sex"/>
                    <label class="form-check-label" for="Sex">
                        Sex
                    </label>
                </div>
                <div className="col-sm">
                    <input class="form-check-input" type="checkbox" value="" id="Sab"/>
                    <label class="form-check-label" for="Sab">
                        Sáb
                    </label>
                </div>
                <div className="col-sm">
                    <input class="form-check-input" type="checkbox" value="" id="Dom"/>
                    <label class="form-check-label" for="Dom">
                        Dom
                    </label>
                </div>
            </div>
            <div className="row" >
                <table className="table-form-data" >
                    <thead>
                        <tr>
                            <th>Semana</th>
                            <th>Dia</th>
                            <th>Data</th>
                            <th>Horário Início</th>
                            <th>Horário Término</th>
                            <th>Cancelar<br/> data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>SEX</td>
                            <td>
                                <input className="input-date" value="00/00/00"/>
                            </td>
                            <td >
                               <input className="input-hora" type="number" value="00" />:<input className="input-minuto" type="number" value="00"/> 
                            </td>
                            <td >
                               <input className="input-hora" type="number" value="00"/>:<input className="input-minuto" type="number" value="00"/> 
                            </td>
                            <td>
                                <input className="form-check-input" type="checkbox" value="" />
                            </td>
                            <td>
                                <button type="button" className="btn btn-secondary">Add novo horário</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>SÁB</td>
                            <td>
                                <input className="input-date" placeholder="00/00/00"/>
                            </td>
                            <td >
                               <input className="input-hora" type="number" placeholder="00" />:<input className="input-minuto" type="number" placeholder="00"/> 
                            </td>
                            <td >
                               <input className="input-hora" type="number" placeholder="00"/>:<input className="input-minuto" type="number" placeholder="00"/> 
                            </td>
                            <td>
                                <input className="form-check-input" type="checkbox" value="" />
                            </td>
                            <td>
                                <button type="button" className="btn btn-secondary">Add novo horário</button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DOM</td>
                            <td>
                                <input className="input-date" placeholder="00/00/00" value='' />
                            </td>
                            <td >
                               <input className="input-hora" type="number" placeholder="00" />:<input className="input-minuto" type="number" placeholder="00"/> 
                            </td>
                            <td >
                               <input className="input-hora" type="number" placeholder="00"/>:<input className="input-minuto" type="number" placeholder="00"/> 
                            </td>
                            <td>
                                <input className="form-check-input" type="checkbox" value="" />
                            </td>
                            <td>
                                <button type="button" className="btn btn-secondary">Add novo horário</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>SEX</td>
                            <td>
                                <input className="input-date" value="00/00/00"/>
                            </td>
                            <td >
                               <input className="input-hora" type="number" value="00" />:<input className="input-minuto" type="number" value="00"/> 
                            </td>
                            <td >
                               <input className="input-hora" type="number" value="00"/>:<input className="input-minuto" type="number" value="00"/> 
                            </td>
                            <td>
                                <input className="form-check-input" type="checkbox" value="" />
                            </td>
                            <td>
                                <button type="button" className="btn btn-secondary">Add novo horário</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>SÁB</td>
                            <td>
                                <input className="input-date" placeholder="00/00/00"/>
                            </td>
                            <td >
                               <input className="input-hora" type="number" placeholder="00" />:<input className="input-minuto" type="number" placeholder="00"/> 
                            </td>
                            <td >
                               <input className="input-hora" type="number" placeholder="00"/>:<input className="input-minuto" type="number" placeholder="00"/> 
                            </td>
                            <td>
                                <input className="form-check-input" type="checkbox" value="" />
                            </td>
                            <td>
                                <button type="button" className="btn btn-secondary">Add novo horário</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>DOM</td>
                            <td>
                                <input className="input-date" placeholder="00/00/00" value='' />
                            </td>
                            <td >
                               <input className="input-hora" type="number" placeholder="00" />:<input className="input-minuto" type="number" placeholder="00"/> 
                            </td>
                            <td >
                               <input className="input-hora" type="number" placeholder="00"/>:<input className="input-minuto" type="number" placeholder="00"/> 
                            </td>
                            <td>
                                <input className="form-check-input" type="checkbox" value="" />
                            </td>
                            <td>
                                <button type="button" className="btn btn-secondary">Add novo horário</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="check-repetir-evento" >
                <input className="form-check-input" type="checkbox" value="" id="Dom"/>
                <label className="form-check-label" for="Dom">
                    Repetir evento <i className="bi bi-question-circle-fill"></i>
                </label>
            </div>
            <div >
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>Toda semana*</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            Quando parar a repetição?
            <div className="row">
                <div className="col-6" >
                    <select className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>Na data*</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-sm">
                    <input className="form-control" type="date"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FormData;