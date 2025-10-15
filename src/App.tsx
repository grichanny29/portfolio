import './App.css'

import { Header } from './layout/header/Header';
import { Main } from './layout/header/section/main/Main';
import { Skills } from './layout/header/section/main/skills/Skills';


function App() {
    return (
        <div className="App">
           <Header/>
					 <Main/>
					< Skills/>
        </div>
    )
}

export default App
