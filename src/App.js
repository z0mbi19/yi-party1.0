import React, { useState } from "react"

import "./App.css"
import NavMenu from './components/NavMenu/NavMenu'
import FormEvento from './components/FormEvento/FormEvento'
import FormData from './components/FormData/FormData'
import FormLocal from './components/FormLocal/FormLocal'

function App() {
  const [actionMenu, setMenu] = useState("page-menu")
  const onClick = () => {
    if (actionMenu === "page-menu") {
      setMenu("page")
    } else {
      setMenu("page-menu")
    }
  }

  return (
    <div className={actionMenu} >
      <header>
        <nav className="navbar navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              YI Party
              <a className="icon-menu" onClick={onClick} href="#"><i class="bi bi-list"></i></a>
            </a>
            
          </div>
        </nav>
      </header>
      <main className="main-container overflow-auto" >
        <FormEvento />
        <FormData />
        <FormLocal/>
      </main>
      { actionMenu === "page-menu" ? <aside> <NavMenu/> </aside> : null }
      <footer>
        <div className="container" >
          <div className="row" >
            <div className="col-4" >
              <p>Comodicou a minha página?</p>
              <button type="button" class="btn btn-secondary btn-vizualizar">Primary</button>
            </div>
            <div className="col-4" >
              <p>Deixar para publicar mais tarde</p>
              <button type="button" class="btn btn-secondary btn-rascunho">Primary</button>
            </div>
            <div className="col-4" >
              <p>Quero públicá-lo agora!</p>
              <button type="button" class="btn btn-secondary btn-publicar">Primary</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
