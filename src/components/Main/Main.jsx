import React from 'react';
import style from './Main.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ItemLocation from '../ItemLocation/ItemLocation';
import { setItemsDefault } from '../../redux/locations/slice';
import { setTotalLocations } from '../../redux/pagination/slice';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

export const Locations = () => {
  const dispatch = useDispatch();
  const locationItems = useSelector((state) => state.locations.items);
  const searchName = useSelector((state) => state.locations.search);
  const search = `минск ${searchName}`;
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const subwayLocation = useSelector((state) => state.filter.subway);
  const coordinates = useSelector((state) => state.filter.coordinates);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://catalog.api.2gis.com/3.0/items?q=${search}&page=${currentPage}&page_size=9&sort_point=${coordinates}&subway=${subwayLocation}&fields=filters,items.external_content,items.links,food_service_average_check,items.attribute_groups,items.context,items.description,items.schedule,items.comment,items.reviews,items.rubrics,items.flags,items.delivery,rating&key=cbff09e3-eace-4237-a0dd-32bae3da2939`,
        );
        dispatch(setItemsDefault(response.data.result.items));
        dispatch(setTotalLocations(response.data.result.total));
      } catch (error) {
        console.error('Произошла ошибка при загрузке данных', error);
      }
    };
    fetchData();
  }, [searchName, currentPage, coordinates, subwayLocation]);
  useAuth();
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
