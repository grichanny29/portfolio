import './App.css'

import { Header } from './layout/header/Header';
import {Mainn} from './layout/section/mainn/Mainn';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';
import {Testymony} from './layout/section/testimony/Testymony';
import {Contacts} from './layout/section/contacts/Contacts';
import {Slogan} from './layout/section/slogan/Slogan';
import { Footer} from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
                    <Header/>
			        <Mainn/>
					<Skills/>
				     <Works/>
                     <Testymony/>
                     <Contacts />
                     < Slogan/>
                     < Footer/>
        </div>
    )
}

export default App;
