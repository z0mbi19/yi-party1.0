import React from 'react';

// import { Container } from './styles';

function NavMenu() {
    return (
        <div className="menu-nav" >
            <img className="img-perfil" src="https://dstatic.eu/devenet.eu/sites/web/illu/nyancat.jpeg" alt="nyan cat" />
            <h4>Nyan cat</h4>
            <h6>Produtor</h6>
            <hr></hr>
            <i className="bi bi-columns-gap"><br/>Dashbord</i>
            <br/>
            <i className="bi bi-person-fill"><br/>Perfil</i>
        </div>
    );
}

export default NavMenu;