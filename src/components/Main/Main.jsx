import React from 'react';
import style from './Main.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ItemLocation from '../ItemLocation/ItemLocation';
import { setItemsDefault } from '../../redux/locations/slice';
import { setTotalLocations } from '../../redux/pagination/slice';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { motion } from 'framer-motion';

export const Locations = () => {
  const dispatch = useDispatch();
  const locationItems = useSelector((state) => state.locations.items);
  const searchName = useSelector((state) => state.locations.search);
  const search = `минск ${searchName}`;
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const subwayLocation = useSelector((state) => state.filter.subway);
  const coordinates = useSelector((state) => state.filter.coordinates);

  const itemsVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0, y: 100 },
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://catalog.api.2gis.com/3.0/items?q=${search}&page=${currentPage}&page_size=9&sort_point=${coordinates}&subway=${subwayLocation}&fields=filters,items.external_content,items.links,food_service_average_check,items.attribute_groups,items.context,items.description,items.schedule,items.comment,items.reviews,items.rubrics,items.flags,items.delivery,rating&key=6103a4ae-5b0d-4a52-92ad-9002c303b503`,
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
        locationItems.map((i, index) => (
          <Link key={i.id} to={`/location/${i.id}`}>
            <motion.div
              className="item-location"
              variants={itemsVariants}
              initial="hidden"
              animate="visible"
              custom={index}>
              <ItemLocation items={i} />
            </motion.div>
          </Link>
        ))
      )}
    </main>
  );
};

export default Locations;
