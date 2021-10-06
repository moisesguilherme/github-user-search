import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../core/components/Button';
import { User } from '../../../../core/types/user';
import "./styles.scss"

type Props = {
    user?: User;
}

const UserDetails = ({ user }: Props) => {

    const openUserGitHub = (userUrl?: String) => {

        window.location.href = userUrl === undefined ? 'http://www.github.com/' : String(userUrl);
    }

    return (
        <>
            <div className="user-details-table">

                <div className="row">
                    <div className="col">
                        <img className="user-image" src={user?.avatar_url} alt={user?.name} />
                    </div>
                    <div className="col">
                        <div className="user-details-tab">
                            <h1 className="tab-itens">Repositórios públicos: {user?.public_repos}</h1>
                            <h1 className="tab-itens">Seguidores: {user?.followers}</h1>
                            <h1 className="tab-itens">Seguindo: {user?.following}</h1>
                        </div>

                        <div className="user-info-card">

                            <div className="user-info-title">
                                Informações
                            </div>

                            <div className="user-details-info">
                                <h1 className="item-detail item-text"><b>Empresa:</b>&nbsp;{user?.company}</h1>
                                <h1 className="item-detail item-text"><b>Website/Blog:</b>&nbsp;{user?.html_url}</h1>
                                <h1 className="item-detail item-text"><b>Localidade:</b>&nbsp;{user?.location}</h1>
                                <h1 className="item-detail item-text"><b>Membro deste:</b>&nbsp;{user?.created_at}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bottom-bar" onClick={() => openUserGitHub(user?.html_url)}>
                        <Button text="Ver Perfil"  />
                </div>
            </div>
        </>
    )
}


export default UserDetails;