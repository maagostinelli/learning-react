const repositoryName = "unform"

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Repository List</h1>  
            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>
                    <a href="">Acesse o repositório</a>
                </li>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>
                    <a href="">Acesse o repositório</a>
                </li>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>
                    <a href="">Acesse o repositório</a>
                </li>
            </ul>
        </section>
    );
}