import React from 'react';
import style from './Main.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import ItemLocation from '../ItemLocation/ItemLocation';
import { setItemsDefault, setRandomItem } from '../../redux/locations/slice';
import { setTotalLocations } from '../../redux/pagination/slice';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { motion } from 'framer-motion';

export const Locations = () => {
  const dispatch = useDispatch();
  const locationItems = useSelector((state) => state.locations.items);
  const randomItems = useSelector((state) => state.locations.randomItems);
  console.log(randomItems);
  const searchName = useSelector((state) => state.locations.search);
  const search = `минск ${searchName}`;
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const subwayLocation = useSelector((state) => state.filter.subway);
  const coordinates = useSelector((state) => state.filter.coordinates);
  const random = useSelector((state) => state.locations.searchRandom);
  const randomMinsk = `минск ${random}`;

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
          `https://catalog.api.2gis.com/3.0/items?q=${
            random ? randomMinsk : search
          }&page=${currentPage}&page_size=9&sort_point=${coordinates}&subway=${subwayLocation}&fields=filters,items.external_content,items.links,food_service_average_check,items.attribute_groups,items.context,items.description,items.schedule,items.comment,items.reviews,items.rubrics,items.flags,items.delivery,rating&key=d573e674-d968-4dc3-b587-0fdf84108197`,
        );
        console.log(random, 'значение рандом');
        !random
          ? dispatch(setItemsDefault(response.data.result.items))
          : dispatch(setRandomItem(response.data.result.items));
        dispatch(setTotalLocations(response.data.result.total));
      } catch (error) {
        console.error('Произошла ошибка при загрузке данных', error);
      }
    };
    fetchData();
  }, [searchName, currentPage, coordinates, subwayLocation, random]);
  useAuth();
  return (
    <main className={style.locations}>
      {search === 'минск ' ? (
        <div>Нет информации</div>
      ) : randomItems.length === 0 ? (
        locationItems.map((i, index) =>
          i.route_type ? null : (
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
          ),
        )
      ) : randomItems.length === 1 ? (
        <div>К сожаление нет информации</div>
      ) : (
        randomItems
          .map((i, index) =>
            i.route_type ? null : (
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
            ),
          )
          .sort(() => Math.random() - 0.5)
          .slice(0, 1)
      )}
    </main>
  );
};

export default Locations;
