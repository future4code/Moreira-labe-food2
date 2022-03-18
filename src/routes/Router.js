import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AdressPage from "../page/AdressPage/AdressPage";
import CartPage from "../page/CartPage/CartPage";
import EditProfilePage from "../page/EditProfilePage/EditProfilePage";
import EditAddressPage from "../page/EditAddressPage/EditAddressPage";
import FeedPage from "../page/FeedPage/FeedPage";
import LoginPage from "../page/LoginPage/LoginPage";
import ResultPage from "../page/ResultPage/ResultPage";
import SearchPage from "../page/SearchPage/SearchPage";
import SignUpPage from "../page/SignUpPage/SignUp";
import ProfilePage from "../page/ProfilePage/ProfilePage";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import SplashScreen from "../page/SplashScreen/SplashScreen";

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
              <Route  path="/" element={<SplashScreen/>} />
              <Route  path="/cadastro" element={<SignUpPage/>} />
              <Route  path="/login" element={<LoginPage/>} />
              <Route  path="/restaurantes" element={<FeedPage/>} />
              <Route  path="/restaurantes/:id" element={<ResultPage/>} />
              <Route  path="/cadastro-endereco" element={<AdressPage/>} />
              <Route  path="/carrinho/:id" element={<CartPage/>} />
              <Route  path="/perfil" element={<ProfilePage/>} />
              <Route  path="/editar-cadastro" element={<EditProfilePage/>} />
              <Route  path="/editar-endereco" element={<EditAddressPage/>} />
              <Route  path="/busca" element={<SearchPage/>} />
              <Route  path="*" element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}



