import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Button from './Button';

const Characters = (props) => {
    const { repos } = props;
    const MySwal = withReactContent(Swal)

    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;

    const btnView = (id) => {
        repos.forEach((repo) => {
            if (repo.char_id == id) {
                MySwal.fire({
                    title: '<br />' + repo.name,
                    html: '<b>Fecha de cumpleanos: </b>' + repo.birthday + '<br>' +
                            '<b>Apodo: </b>' + repo.nickname + '<br>' +
                            '<b>Ocupacion: </b>' + repo.occupation + '<br>' +
                            '<b>Estado: </b>' + repo.status + '<br>' +
                            '<b>Temporadas en las que aparece: </b>' + repo.appearance + '<br>' +
                            '<b>Interpretado por: </b>' + repo.portrayed + '<br>' +
                            '<b>Series en las que aparece: </b>' + repo.category,
                    imageUrl: repo.img,
                    imageWidth: '70%',
                    imageHeight: '100%',
                    imageAlt: 'Image of: ' + repo.name,
                })
            }
        })
        
    }

    return (
        <div className="bg-dark text-white">
            <div className="container">
                <h2 className='list-head'>BD personajes</h2>
                <div className="row row-cols-1 row-cols-sm-2 g-2">
                    {repos.map((repo) => {
                        return (
                            <div key={repo.char_id} className="col">
                                <div style={{margin: '1% 5% 0 1%'}} className="card shadow-sm card-colors">
                                    <div className="card-header text-center">
                                        <h1>{repo.name}</h1>
                                    </div>

                                    <img style={{margin: 'auto'}} src={repo.img} alt="asd" width="30%" height="30%" onClick={() => btnView(repo.char_id)} onMouseEnter={(e) => {e.target.style.cursor = 'pointer'}}/>
            
                                    <div className="card-body">
                                        <p className="card-text"><b>Ocupacion:</b> {repo.occupation}</p>
                                        <p className="card-text"><b>Fecha de cumpleanos:</b> {repo.birthday}</p>
                                        <p className="card-text"><b>Estado:</b> {repo.status}</p>
                                        <p className="card-text"><b>Apodo:</b> {repo.nickname}</p>
                                        <div className="d-flex flex-row-reverse">
                                            <div style={{marginLeft: 'auto'}} className="btn-group align-items-right">
                                                <Button kindClasses='btn btn-sm btn-outline-secondary' text='view' onClick={() => btnView(repo.char_id)}/>
                                                <Button kindClasses='btn btn-sm btn-outline-secondary' text='edit'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Characters;