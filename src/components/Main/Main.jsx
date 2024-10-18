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
        delay: i * 0.1,
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
          }&page=${currentPage}&page_size=9&sort_point=${coordinates}&subway=${subwayLocation}&fields=filters,items.external_content,items.links,food_service_average_check,items.attribute_groups,items.context,items.description,items.schedule,items.comment,items.reviews,items.rubrics,items.flags,items.delivery,rating&key=ab172678-5dc2-4b42-8dee-37e52e7af50f`,
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
  const filterRandomItems = randomItems.filter(
    (item, index) => !item.route_type && item.subtype !== 'city',
  );
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main style={randomItems.length > 0 ? { paddingTop: 20 } : null} className={style.locations}>
      {search === 'минск ' ? (
        <div>Нет информации</div>
      ) : randomItems.length === 0 ? (
        locationItems.map((i, index) =>
          i.route_type || i.subtype == 'city' ? null : (
            <div style={{ width: windowWidth < 1200 ? '100%' : null }}>
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
            </div>
          ),
        )
      ) : randomItems.length === 1 ? (
        <div>К сожалению нет информации</div>
      ) : (
        filterRandomItems
          .map((i, index) => (
            <Link
              style={randomItems.length === 0 ? { width: '100%' } : { width: '30%' }}
              className="link-wrapper"
              key={i.id}
              to={`/location/${i.id}`}>
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
          .sort(() => Math.random() - 0.5)
          .slice(0, 1)
      )}
    </main>
  );
};

export default Locations;
