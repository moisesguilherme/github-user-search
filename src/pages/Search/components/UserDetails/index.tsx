import React from 'react';
import Button from '../../../../core/components/Button';
import { User } from '../../../../core/types/user';
import dayjs from "dayjs";

import "./styles.scss"

type Props = {
    user?: User;
}

const UserDetails = ({ user }: Props) => {

    const formatData = (data:string) => {       
        return dayjs(data, 'YYYY-MM-DD').format('DD/MM/YYYY');
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
                                <h1 className="item-detail item-text"><b>Membro deste:</b>&nbsp;{formatData(String(user?.created_at))}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bottom-bar">
                       <a   
                                
                            href={user?.html_url === undefined ? 'http://www.github.com/' : user?.html_url}
                            target="_blank"
                            rel="noopener noreferrer" 
                        >
                            <Button text="Ver Perfil"  />
                       </a>
                </div>
            </div>
        </>
    )
}


export default UserDetails;