
import { render } from 'react-dom';
import { App } from './app';

render(<App />, document.getElementById('root'));

// quando a gente ta utilizando ts e estamos usando libs de terceiros como "react-dom", algumas delas nao incluem a definição de tipo do ts, logo o ts nao entende como ela funciona