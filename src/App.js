import React from 'react';
import Main from './componets/MainComponenet';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configerStore } from './Redux/configerStore';



const store = configerStore();

class App extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>

            <Main />

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
