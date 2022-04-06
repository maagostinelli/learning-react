
export function RepositoryItems(props) { //props: propriedades react (toda's são "encapsulados" pelo props)=> equivalente a atributos html
    return (
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acesse o repositório</a>
        </li>
    );
}