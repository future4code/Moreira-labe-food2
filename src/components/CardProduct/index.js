import React, { useContext, useEffect, useState } from "react"
import GlobalStateContext from '../../global/GlobalStateContext';
import {  ButtonAdd, ButtonDel, Li,  ImgProduct, QuantityContainer } from "./styled"

const CardProduct = ({product, openModal}) => {
    const { states, setters } = useContext(GlobalStateContext)
    const [onCart, setOnCart] = useState(0)

    const removeFromCart = (product) => {
        setters.setCart(
            states.cart.filter((prod) => {
                return product.id !== prod.id
            })
        )
        localStorage.setItem("cart", JSON.stringify(states.cart))
        setOnCart(0)
    }

    useEffect(() => {
        states.cart.map((prod) => {
            if (prod.id === product.id) return setOnCart(prod.quantity)
            else return false
        })
    }, [states.cart, product.id])

    return (
        <>
            <Li>
                <ImgProduct src={product.photoUrl} />
            </Li>
            <div>
                <div>
                    <Li style={{ color: "#57B16A", margin: 10 }}>{product.name}</Li>
                    <Li style={{ color: "#000000", opacity: "25%", display: "flex", margin: 10, fontSize: "12px" }}>{product.description}</Li>
                </div>
                <Li>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <strong style={{ margin: 10 }}>R${product.price.toFixed(2)}</strong>
                        {!onCart ? (
                            <ButtonAdd onClick={() => { openModal(product) }}>Adicionar</ButtonAdd>
                        ) : (
                            <ButtonDel onClick={() => removeFromCart(product)}>Excluir</ButtonDel>
                        )}
                         {onCart ? <QuantityContainer>{onCart}</QuantityContainer> : ""}
                    </div>
                </Li>        
            </div>            

        </>
    )
}

export default CardProduct;
