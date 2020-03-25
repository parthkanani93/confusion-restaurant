import React from 'react';
import Main from './componets/MainComponenet';

import { BrowserRouter } from 'react-router-dom';
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>

          <Main />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
