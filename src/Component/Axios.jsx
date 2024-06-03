import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Axios = () => {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [btn1, setBtn1] = useState(false)
  const [btn2, setBtn2] = useState(false)



  // https://jsonplaceholder.typicode.com/posts

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((x) => {
        setData(x.data)
      })
      .catch((err) => {
        console.log(err);
      })

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((x) => {
        setData1(x.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [btn1,btn2])
  return (
    <div>

      {data.map((x) => {
        return (
          <div>
            <span>id:{x.id}</span>
          </div>
        )
      })}
      <button onClick={setBtn1(true)}>btn1</button>
      <button onClick={setBtn2(true)}>btn2</button>


    </div>

  )
}

export default Axios
