import React from 'react';
import style from './Main.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ItemLocation from '../ItemLocation/ItemLocation';
import { setItemsDefault } from '../../redux/locations/slice';
import { setTotalLocations } from '../../redux/pagination/slice';

export const Locations = () => {
  const dispatch = useDispatch();
  const locationItems = useSelector((state) => state.locations.items);
  const searchName = useSelector((state) => state.locations.search);
  const search = `минск ${searchName}`;
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const subwayLocation = useSelector((state) => state.filter.subway);
  const coordinates = useSelector((state) => state.filter.coordinates);
  console.log(search);

  React.useEffect(() => {
    const fetchData = () => {
      const data = axios
        .get(
          `https://catalog.api.2gis.com/3.0/items?q=${search}&page=${currentPage}&page_size=9&sort_point=${coordinates}&subway=${subwayLocation}&fields=items.external_content,items.links,food_service_average_check,items.description,items.schedule,items.comment,items.reviews,items.rubrics,items.flags,items.delivery,rating&key=51191731-9254-4633-861e-a87b5aa4206b`,
        )
        .then((res) => {
          dispatch(setItemsDefault(res.data.result.items));
          dispatch(setTotalLocations(res.data.result.total));
          console.log(res.data.result.items);
        });
    };
    fetchData();
    console.log(subwayLocation);
    console.log(coordinates);
  }, [searchName, currentPage, coordinates, subwayLocation]);

  return (
    <main className={style.locations}>
      {search === 'минск ' ? (
        <div>Нет информации</div>
      ) : (
        locationItems.map((i) => <ItemLocation items={i} />)
      )}
    </main>
  );
};

export default Locations;
