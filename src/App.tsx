import './App.css'

import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';
import {Testymony} from './layout/section/testimony/Testymony'

function App() {
    return (
        <div className="App">
                    <Header/>
					 <Main/>
					<Skills/>
				     <Works/>
                     <Testymony/>
        </div>
    )
}

export default App
