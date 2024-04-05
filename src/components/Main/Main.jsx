import React from 'react';
import style from './Main.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ItemLocation from '../ItemLocation/ItemLocation';
import { setItemsDefault } from '../../redux/locations/slice';
import { setTotalLocations } from '../../redux/pagination/slice';
import { Link } from 'react-router-dom';

export const Locations = () => {
  const dispatch = useDispatch();
  const locationItems = useSelector((state) => state.locations.items);
  const searchName = useSelector((state) => state.locations.search);
  const search = `минск ${searchName}`;
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const subwayLocation = useSelector((state) => state.filter.subway);
  const coordinates = useSelector((state) => state.filter.coordinates);
  const prevSearchName = React.useRef('');

  React.useEffect(() => {
    if (prevSearchName.current !== searchName) {
      prevSearchName.current = searchName;
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://catalog.api.2gis.com/3.0/items?q=${search}&page=${currentPage}&page_size=9&sort_point=${coordinates}&subway=${subwayLocation}&fields=filters,items.external_content,items.links,food_service_average_check,items.attribute_groups,items.context,items.description,items.schedule,items.comment,items.reviews,items.rubrics,items.flags,items.delivery,rating&key=f92b8ff9-6acb-4ec6-b43a-99162354bec2`,
          );
          dispatch(setItemsDefault(response.data.result.items));
          dispatch(setTotalLocations(response.data.result.total));
          console.log(response.data.result.items);
        } catch (error) {
          console.error('Произошла ошибка при загрузке данных', error);
        }
      };
      fetchData();
    }
  }, [searchName, currentPage, coordinates, subwayLocation]);

  return (
    <main className={style.locations}>
      {search === 'минск ' ? (
        <div>Нет информации</div>
      ) : (
        locationItems.map((i) => (
          <Link to={`/location/${i.id}`}>
            <ItemLocation items={i} />
          </Link>
        ))
      )}
    </main>
  );
};

export default Locations;
