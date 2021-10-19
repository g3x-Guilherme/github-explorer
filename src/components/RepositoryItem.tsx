interface RepositoryItemProps  {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}


export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
    <strong>{props.repository.name}</strong> 
    <p>{props.repository.description}</p>

    

    <a href={props.repository.html_url}>
       <button>Acessar repositório </button>
    </a>
  </li>
  );
}



/* criei uma propriedade repository em RepositoryList, e posso definir algum nome para ele, o react guarda ela no props e eu chamo ela usando props.[name] ou props.[nameobj].[name] */