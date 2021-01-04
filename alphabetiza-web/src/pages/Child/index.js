import React, { useState, useEffect } from 'react'
import service from '../../service/service';
import { FaCoins } from "react-icons/fa";
import './Child.css';
import Navbar from './Navbar';

export default function Child() {

    const [kid, setKid] = useState({});

    useEffect(() => {
        async function fetchData() {
          const kid = await service.fetchInfo('camilavmp@gmail.com');
          setKid(kid);
        }
        fetchData();
    }, []);

    if (!kid.name)
            return (<div>Loading...</div>);  

    return (
        <div className="kid__container">

          <Navbar />

          <div className="kid__content"> 
            conteudo
          </div>

        </div>
    )
}
