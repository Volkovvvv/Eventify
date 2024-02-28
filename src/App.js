import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios
      .get(
        'https://catalog.api.2gis.com/3.0/items?q=минск соборы&page=3&page_size=10&offset=20&fields=items.external_content,items.description,items.schedule,items.comment,items.reviews,items.rubrics,items.flags,items.delivery,rating&key=54a7d73b-0b3f-409c-88c5-11639e5f16f8',
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <div className="Axx"></div>;
}

export default App;
