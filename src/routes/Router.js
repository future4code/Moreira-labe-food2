import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdressPage from "../page/AdressPage/AdressPage";
import CartPage from "../page/CartPage/CartPage";
import EditRecordPage from "../page/EditRecordPage/EditRecordPage";
import FeedPage from "../page/FeedPage/FeedPage";
import LoginPage from "../page/LoginPage/LoginPage";
import ResultPage from "../page/ResultPage/ResultPage";
import SearchPage from "../page/SearchPage/SearchPage";
import SignUpPage from "../page/SignUpPage/SignUp";
import ProfilePage from "../page/ProfilePage/ProfilePage";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import SplashScreen from "../page/SplashScreen/SplashScreen";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/ ">
                    <SplashScreen />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/restaurantes">
                    <FeedPage />
                </Route>
                <Route exact path="/restaurantes/:id">
                    <ResultPage />
                </Route>
                <Route exact path="/cadastro-endereco">
                    <AdressPage />
                </Route>
                <Route exact path="/carrinho">
                    <CartPage />
                </Route>
                <Route exact path="/perfil">
                    <ProfilePage />
                </Route>
                <Route exact path="/edicao-cadastro">
                    <EditRecordPage />
                </Route>
                <Route exact path="/busca">
                    <SearchPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router