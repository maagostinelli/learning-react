
export function RepositoryItems(props) { //props: propriedades react (toda's são "encapsulados" pelo props)=> equivalente a atributos html
    return (
        <li>
            <strong>{props.repository}</strong>
            <p>Forms in React</p>
            <a href="">Acesse o repositório</a>
        </li>
    );
}