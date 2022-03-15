import React from "react"
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSingUp, goToAdress } from "../../routes/coordinator"
import {Link} from 'react-router-dom';
import useForm from "../../hooks/useForm";
import {login} from "../../api";

export default function Login(){

  const [form, onChange, clear] = useForm({email: "", password: ""})
  const navigate = useNavigate()

  const onSubmitForm = (event) => {
      event.preventDefault()
      login(form, clear, navigate)
      console.log(onSubmitForm)
  }

  return (
    <div>endereço
         <form onSubmit={onSubmitForm}>
                        <input 
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            label={"E-mail"}
                            variant={"outlined"}
                            fullWidth
                            margin={"dense"}
                            required
                            type="email"
                        />
                        
                        <input 
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            label={"Senha"}
                            variant={"outlined"}
                            fullWidth
                            margin={"dense"}
                            required
                            type="password"
                        />
                        
                        <button 
                            type={"submit"}
                            margin={"dense"}
                            fullWidth 
                            variant="contained">
                                Entrar
                        </button>

                    </form>
      
    <Link to='/login'>Login</Link>

    </div>


  )

}