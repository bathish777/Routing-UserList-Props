import React, { useState } from 'react';
import axios from 'axios';

function DummyDataDisplay() {
  const [jsonData, setJsonData] = useState([]);

  const fetchPostData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setJsonData(response.data);
    } catch (error) {
      console.error('Error fetching post data:', error);

    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setJsonData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <h2>Display Dummy JSON Data</h2>
      <button onClick={fetchPostData}>Load Posts</button>
      <button onClick={fetchUserData}>Load Users</button>
      {/* {jsonData && (
        <div>
          <h3>Result:</h3>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )} */}
    {jsonData.map((x)=>{
      return(
        <div>
          <span>{x.id}</span>
          <span>{x.title}</span>

        </div>
      )
    })}
    </div>
  );
}

export default DummyDataDisplay;

