import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import Navbar from '../Navbar';
import './styles.scss';

const Home = () => (

    <div>
          <Navbar/>
             <div className="home-content">
                <h1 className="home-title"> 
                    Desafio do Capítulo 3,<br/>
                    Bootcamp DevSuperior
                </h1>
                <h2 className="home-text">
                  Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/>
                  Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br/>
                  Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: <a href="maito:antforfigma@gmail.com" >antforfigma@gmail.com</a>
                </h2>
                
                <Link to="/search">
                    <Button text="Começar"/>
                 </Link>
            </div>
    </div>
);

export default Home;