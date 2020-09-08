import React, { useState } from 'react';
// import Button, { ButtonType, ButtonSize } from './components/Button/button';
// import Alert, { AlertProps } from './components/Alert/alert';
// import BankList from './components/BankList/banklist'
// import Menu from './components/Menu/menu';
// import MenuItem from './components/Menu/menuItem';
import Progress from './components/Progress/Progress';
import Input from './components/Input/input';
import Icon from './components/Icon/icon';
import Divider from './components/Divider/divider';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);


function App() {
  const [currentNumber, setCurrentNumber] = useState(0);
  let timer = setTimeout(() => {
    if(currentNumber === 100) return;
    if (currentNumber === 100) {
      clearTimeout(timer);
      setCurrentNumber(0)
    } else {
      setCurrentNumber(currentNumber+1)
    }
  }, 1000);
  return (
    <div className="App">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
          probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider orientation="left" >Text</Divider>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
          probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
        <Divider orientation="right">
          Left Text
        </Divider>
      </div>
    </div>
  );
}

export default App;
