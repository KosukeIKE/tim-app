import React, { useCallback, useState } from 'react';
// import DisplayScreen from './components/DisplayScreen';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'date-fns';
import { set } from 'date-fns';
import { Lifespan } from './components/index';


// import {Link} from 'react-router-dom';
// import MaterialUIPickers from './components/DisplayScreen';

function App() {

  const [selectedDate, setSelectedDate] = useState(new Date('1997-05-05'));

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Lifespan 
        
        />
      </Container>
    </React.Fragment>
  )

}

export default App;

//引数と関数を子コンポーネントに渡したいときはコールバック関数の使用 or 関数自体をアロー関数に変更することで渡すことができる
//spm とyarn は基本的に同じ動きをします。
//必ず確認してください

