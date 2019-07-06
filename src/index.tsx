import React from 'react';
import ReactDOM from 'react-dom';
import './scss-style.scss';

function App(): JSX.Element {
  return (
    <div className="scss-style">
      <p>Hello React</p>
    </div>
  );
}

export default App;

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);
