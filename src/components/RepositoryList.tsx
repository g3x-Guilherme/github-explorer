import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";


import '../styles/repositories.scss'

interface Repository {
  name: string;
  description: string;
  html_url: string;

} // preciso definir o html url e description pois a property repository recebe eles do componente filho/repositoryItem


export function RepositoryList() {
  // usando o ts, caso o estado utilize vetores ou obj preciso especifica o type pois ele n sabe do q eh o array ou obj
  // vou colocar no meu estado que ele é um array de repos do tipo string com a function "generic" '<Repository[]>'
  const [repositories, setRepositories] = useState<Repository[]>([]); // sempre que é uma lista eu começo com um " [] " no userState entre ()



// hook useEffect = ela    executa/disparar uma função quando algo acontecer na minha aplicação, "esse algo" pode ser uma variavel que muda ou avisar um api sobre uma mudança de repositorio, ou qualquer outra coisa
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(repositories => setRepositories(repositories))
    .catch(error => console.log("error"))
  }, []);
//  cuidado para não deixar sem o segundo parâmetro, o userEffect entra em loop
// outro erro é atualizar uma variavel dentro do userEffect que a gente ta utilizando como dependencia, pode cair em loop dnv



  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => { 
          return <RepositoryItem key={repository.name} repository={repository} />
        })} 
          
      </ul>
    </section>
  );
}

// sempre que a gente colocar um " map() " a gente precisa colocar no primeiro elemento que vem dentro do map a propriedade key

/*outras formas de fazer primeira{repositories.map(repository =>  return <RepositoryItem repository={repository /> para quando o return so tem uma linha
})}  

segunda {repositories.map(repository => (
    <RepositoryItem repository={repository} />
))}       */

/* caso eu tenha muitos componentes feitos da mesma forma, eu posso fazer ele uma vez no RepositoryItem e chama-lo uma vez pelo nome*/