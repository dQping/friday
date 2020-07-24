import React, { FunctionComponent } from 'react';

import Button, { ButtonSize } from "./components/Button/button"

const App: FunctionComponent = () => {
  return (
    <div className="App">
      This is app page
      <Button className="custom" autoFocus size={ButtonSize.Large} onClick={e => console.log(e)}>this is button</Button>
    </div >
  );
}


export default App;
