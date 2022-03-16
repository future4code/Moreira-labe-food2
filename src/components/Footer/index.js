import React from 'react';

import {Container} from './styled'

import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <Container>
                <ul>
                    <li><AiOutlineHome/></li>
                    <li><AiOutlineShoppingCart/></li>
                    <li><AiOutlineUser/></li>
                </ul>
            </Container>
        </>
    );
}

export default Footer;
