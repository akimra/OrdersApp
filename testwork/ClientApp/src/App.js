import React from 'react';
import style from './App.module.scss';
import InputForm from './components/InputForm/InputForm';
import "./bootstrap/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import ListData from "./components/ListData/ListData";

const App = () => {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <Menu />
                <div className={style.content}>
                    <Route path="/input" render={() => <InputForm />} />
                    <Route path="/show" render={() => <ListData />} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;