import React from 'react';
import style from './Main.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ItemLocation from '../ItemLocation/ItemLocation';
import { setItemsDefault } from '../../redux/locations/slice';

export const Locations = () => {
  const dispatch = useDispatch();
  const locationItems = useSelector((state) => state.locations.items);
  const searchName = useSelector((state) => state.locations.search);
  const [totalLocations, settotalLocations] = React.useState(0);
  React.useEffect(() => {
    const fetchData = () => {
      const data = axios
        .get(
          `https://catalog.api.2gis.com/3.0/items?q=${searchName}&page=1&page_size=10&offset=20&fields=items.external_content,food_service_average_check,items.description,items.schedule,items.comment,items.reviews,items.rubrics,items.flags,items.delivery,rating&key=a0297414-6615-4029-b628-bee2db5271f1`,
        )
        .then((res) => {
          dispatch(setItemsDefault(res.data.result.items));
          settotalLocations(res.data.result.total);
        });
    };
    fetchData();
    console.log(locationItems);
  }, [searchName]);
  return (
    <main className={style.locations}>
      {locationItems.map((i) => (
        <ItemLocation items={i} total={totalLocations} />
      ))}
    </main>
  );
};

export default Locations;
