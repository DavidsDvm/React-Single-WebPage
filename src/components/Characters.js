import { useEffect, useState } from 'react';
import React from 'react';

const Characters = (props) => {
    const { repos } = props;

    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;

    return (
        <div className="bg-dark text-white">
            <div className="container">
                <h2 className='list-head'>BD personajes</h2>
                <div class="row row-cols-1 row-cols-sm-2 g-2">
                    {repos.map((repo) => {
                        return (
                            <div key={repo.id} class="col">
                                <div style={{margin: '1% 5% 0 1%'}} class="card shadow-sm card-colors">
                                    <div class="card-header text-center">
                                        <h1>{repo.name}</h1>
                                    </div>

                                    <img style={{margin: 'auto'}} src={repo.img} alt="asd" width="65%" height="225" />
            
                                    <div class="card-body">
                                        <p class="card-text"><b>Ocupacion:</b> {repo.occupation}</p>
                                        <p class="card-text"><b>Fecha de cumpleanos:</b> {repo.birthday}</p>
                                        <p class="card-text"><b>Estado:</b> {repo.status}</p>
                                        <p class="card-text"><b>Apodo:</b> {repo.nickname}</p>
                                        <div class="d-flex flex-row-reverse">
                                            <div style={{marginLeft: 'auto'}} class="btn-group align-items-right">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
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