import React, { useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/utils/request';
import Navbar from '../Navbar';
import './styles.scss';


const Search = () => {

    const [search, setSearch] = useState('');
    const [isActive, setIsActive] = useState(false);

    
    const handleOnChance = (event: React.ChangeEvent<HTMLInputElement>) => {

            setSearch(event.target.value);

    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            
            setIsActive(true);
            console.log(">>> vai enviar:", search);

            const gihubUserURL = 'https://api.github.com/users/' + search;

            makeRequest({ url: gihubUserURL, method: 'GET' })
                .then(() => {

                })
    }


    return (

        <div>
            <Navbar />
            <div className="home-content">
                <h1 className="home-title">
                    Encontre um perfil Github
                </h1>

                <form onSubmit={handleSubmit}>
                    <input
                        value={search}
                        onChange={handleOnChance}
                        placeholder="Usuário Github"
                    />
                </form>
                <Button text="Encontrar" />
            </div>


            {isActive && (<div>
                Busca
            </div>)}
        </div>

    );
}
export default Search;