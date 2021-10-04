import react, { useState } from 'react';
import './App.scss';
import axios from 'axios';
import cn from 'classnames';
require('dotenv').config();

const App = (props) => {
  const [data, setData] = useState(null);
  const log = console.log;
  const API_KEY = process.env.REACT_APP_API_KEY;

  //onClick 함수
  const onClick = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apikey=${API_KEY}`,
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // axios
  //   .get('https://jsonplaceholder.typicode.com/todos/1')
  //   // .then을 통해 비동기적으로 확인할 수 있다.
  //   // axios.get 함수를 이용해서 파라미터로 전달된 주소에 GET 요청을 해줍니다.
  //   .then((response) => {
  //     setData(response.data);
  //   });

  return (
    <div className={cn('App')}>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
};

export default App;
