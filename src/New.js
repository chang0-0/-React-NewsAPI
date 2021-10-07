import react, { useState, useCallback } from 'react';
import axios from 'axios';
require('dotenv').config();

const New = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState(null);

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

  <div>
    <div>
      <button onClick={onClick}>불러오기</button>
    </div>
    {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
  </div>;
};

export default New;
