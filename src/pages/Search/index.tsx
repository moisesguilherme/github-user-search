import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { textSpanEnd } from 'typescript';
import Button from '../../core/components/Button';
import { User } from '../../core/types/user';
import { makeRequest } from '../../core/utils/request';
import Navbar from '../Navbar';
import UserDetailsLoader from './components/Loaders/UserDetailsLoader';
import UserDetails from './components/UserDetails';

import './styles.scss';

const Search = () => {

    const [user, setUser] = useState<User>();
    const [search, setSearch] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        console.log(">>> mudou o user:", user);
    }, [user]);

    const handleOnChance = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setIsActive(true);
        setIsLoading(true);
        event.preventDefault();
        const gihubUserURL = 'https://api.github.com/users/' + search;

        makeRequest({ url: gihubUserURL, method: 'GET' })
            .then(response => setUser(response.data))
            .finally(() => setIsLoading(false))
    };

    return (

        <div>
            <Navbar />
            <div className="search-card">
                <div className="form-group">
                    <h1 className="search-title">
                        Encontre um perfil Github
                    </h1>

                    <form className="form-itens" onSubmit={handleSubmit}>
                        <input
                            value={search}
                            onChange={handleOnChance}
                            placeholder="Usuário Github"
                            className="input-text"
                        />

                        <button
                            type="submit"
                            className="btn btn-text"
                        >
                            Encontrar
                        </button>
                    </form>
                </div>
            </div>

            <div className="user-details-container">
                {isActive && (isLoading ? <UserDetailsLoader /> : (
                    <UserDetails user={user} />
                ))
                }
            </div>

        </div>
    );
}

export default Search;