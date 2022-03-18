import React, {useState} from 'react';
import {Container} from './styled'
import { useNavigate } from 'react-router-dom';

import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

const Footer = () => {

    const navigate = useNavigate()
    const pathName = window.location.pathname
    return (
        <>
            <Container>
                <ul>
                    <li className={ '/restaurantes' === pathName ? 'active' : null} onClick={()=> {navigate('/restaurantes')}}><AiOutlineHome/></li>
                    <li className={ '/carrinho' === pathName ? 'active' : null}onClick={()=> {navigate('/carrinho')}}><AiOutlineShoppingCart /></li>
                    <li className={ '/perfil' === pathName ? 'active' : null}onClick={()=> {navigate('/perfil')}}><AiOutlineUser/></li>
                </ul>
            </Container>
        </>
    );
}

export default Footer;
