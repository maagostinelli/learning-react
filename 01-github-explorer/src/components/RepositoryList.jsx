import { RepositoryItems } from "./RepositoryItem";

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Repository List</h1>  
            <ul>
                <RepositoryItems repository="repositorio01"/>
                <RepositoryItems />
                <RepositoryItems />
                <RepositoryItems />
            </ul>
        </section>
    );
}