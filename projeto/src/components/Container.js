import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./Home"
import Navbar from "./Navbar"
import Projetos from "./Projetos"
import Perfil from "./Perfil"

import "./styleComponents.css"

export default function ProjetoContainer() {

    return (
        <BrowserRouter>
            <div className="wrapperContainer">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/projetos" component={Projetos} />
                    <Route exact path="/perfil" component={Perfil} />
                </Switch>
            </div>$ git push -u origin main
        </BrowserRouter>
    )
}



