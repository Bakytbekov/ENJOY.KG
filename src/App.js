import React from 'react';
import Routes from './Routes'
import './App.css'
import TodoContextProvider from './context/TopicContext';

const App = () => {
  return (
    <div>
      {/* <Routes /> */}
      <TodoContextProvider>
          <Routes />
        </TodoContextProvider>
    </div>
  );
};

export default App;
