import './App.css'

import { Header } from './layout/header/Header';
import { Main } from './layout/header/section/main/Main';
import { Skills } from './layout/header/section/main/skills/Skills';
import { Works } from './layout/header/section/works/Works';


function App() {
    return (
        <div className="App">
           <Header/>
					 <Main/>
					< Skills/>
				<Works/>
        </div>
    )
}

export default App
