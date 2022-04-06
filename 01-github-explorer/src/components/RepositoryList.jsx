import { useState, useEffect } from "react";
import { RepositoryItems } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]); //useState sempre deve ser iniciado com o tipo de valor q vci receber
    
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []); //recebe função e elementos q "disparam" a função, se vazio, é chamada só uma vez quando elem. é renderizado em tela

    return (
        <section className="repository-list">
            <h1>Repository List</h1>  
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItems repository={repository}/>
                 })}
                
            </ul>
        </section>
    );
}