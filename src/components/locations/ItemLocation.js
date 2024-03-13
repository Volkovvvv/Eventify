import React from 'react';

const ItemLocation = ({ item }) => {
  return (
    <div>
      {item.map((i, index) => (
        <div>
          <h1>{i.name}</h1>
          <p>{i.address_name}</p>
          {i.external_content.map((i, index) => (
            <img className="img" src={i.main_photo_url} alt="" />
          ))}
        </div>
      ))}
    </div>
  );
};

// const ItemLocation = ({ item }) => {
//   const mainObj = item.map((i) => {
//     return i.external_content;
//   });

//   const a = mainObj.map((i) => {
//     return i.count;
//   });
//   console.log(a);
//   return <div></div>;
// };

export default ItemLocation;
