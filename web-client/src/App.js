import './App.css';
import React, { useEffect, useState } from "react";
import conf from './config';

function App() {

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${conf.apiPrefix}/room`);
      let itemList =  await response.json();
      setItemList(itemList)
    }

    fetchData()
  }, [])

  if(itemList.length > 0){
    return (
      <div className="App">
        <header className="App-header">
        {
          itemList.map(i => (
            <div key={i.id}>
              <Item item={i}></Item>
            </div>
          ))
        }    
        </header>
      </div>
    );
  }else{
    return (
      <div className='App-header'>
        NO ITEM !!!
      </div>
    )
  }
}

function Item({item}) {

  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(updateCount, 1000)
    return () => clearInterval(interval);
  }, [])

  const updateCount = async () => {
    const response = await fetch(`${conf.apiPrefix}/room/${item.id}/value`);
    setValue((await response.json()).value);
  };

  if(item){
    return (
      <div>
        <img src={`${conf.imgPrefix}/${item.image}`} className="image"/>
        <div>{item.title}</div>
        <div>{value}</div>
      </div>
    )
  }
}

export default App;
