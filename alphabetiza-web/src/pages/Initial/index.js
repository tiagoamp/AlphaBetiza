import React from 'react';
import './Initial.css';
import { Link } from "react-router-dom";
import { FaUsersCog, FaSmileWink } from "react-icons/fa";

export default function Initial() {
    return (
        <div className="sign_boxes">            

            <div className="sign_provisorio">
                <h2>Acessar como Responsável</h2>
                <FaUsersCog className="fa-3x"/>
                <Link to="/admin">Responsável</Link>
            </div> 

            <div className="sign_provisorio">
                <h2>Acessar como Criança</h2>
                <FaSmileWink  className="fa-3x" />
                <Link to="/kids">Crianças</Link>
            </div>     

            { /* TODO: Implementar versão com autenticação e cadastro */ }

        </div>
    )
}


// function Signin() {
    
//     const [emailSignin, setEmailSignin] = useState("");
//     const [senhaSignin, setSenhaSignin] = useState("");

//     const submitFormHandler = (e) => {
//         e.preventDefault();
//         console.log('IMPLEMENTAR!!!');
//     }

//     return (
//         <div className="signin">
//             <h2>Acessar</h2>
//             <form onSubmit={submitFormHandler}>
//                 <input type="email" name="emailSignin" placeholder="email@email.com.br" 
//                     value={emailSignin} onChange={e => setEmailSignin(e.target.value)} />
//                 <input type="password" name="senhaSignin" 
//                     value={senhaSignin} onChange={e => setSenhaSignin(e.target.value)} />
//                 <input type="submit" value="Acessar" />
//             </form>            
//         </div>
//     )
// }

// function Signup() {
//     return (
//         <div className="signup">
//             <h2>Cadastrar-se</h2>
//             <span>TO DO: Implementar</span>
//         </div>
//     )
// }