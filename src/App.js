import React from 'react';
import './App.css';




// Import Components
import {ButtonAppBar} from './Components/Header/Header'
import {CenteredGrid} from './Components/Main_Body/Main_body'
import {GlobalData} from './StatesAndReducer/GlobalData'
function App() {
  return (
    <div className="App">
      <section className='top-Bar'>
        <ButtonAppBar></ButtonAppBar>
      </section>
      <GlobalData>
        <CenteredGrid>
        </CenteredGrid>
      </GlobalData>
    </div>
  );
}

export default App;
