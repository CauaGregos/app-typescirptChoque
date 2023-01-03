import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './components/Login/login';
import Main from './components/main/main';
export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login"  element={<Login/>}/>
                <Route path="/main"  element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    )
}