import React from 'react';
import styles from './LocationDescription.module.scss';
import { Link, useParams } from 'react-router-dom';
import ArrowLeft from '../../assets/img/arrow-left.png';
import Location from '../../assets/img/Location.png';
import Time from '../../assets/img/Time.png';
import Cup from '../../assets/img/Cup.png';
import axios from 'axios';

export const LocationDescription = () => {
  const [location, setLocation] = React.useState();
  const { id } = useParams();
  const attributes = location?.[0]?.attribute_groups;
  console.log(id);
  React.useEffect(() => {
    async function fetchLocations() {
      try {
        const { data } = await axios.get(
          `https://catalog.api.2gis.com/3.0/items/byid?id=${id}&fields=filters,items.external_content,items.links,food_service_average_check,items.attribute_groups,items.context,items.description,items.schedule,items.comment,items.reviews,items.rubrics,items.flags,items.delivery,rating&key=f92b8ff9-6acb-4ec6-b43a-99162354bec2`,
        );

        setLocation(data.result.items);
      } catch (error) {
        alert('Произошла ошибка при загрузке локации');
      }
    }
    fetchLocations();
  }, [id]);
  if (!location) {
    return 'Загрузка';
  }
  console.log(location[0]);
  console.log(
    location[0].attribute_groups.map((i) => {
      console.log(i);
    }),
  );
  attributes.map((item) => {
    item.attributes.map((i) => {
      console.log(i.name);
    });
  });

  return (
    <div className={styles.container}>
      <Link to="/main">
        <div className={styles.back}>
          <span>Вернуться назад</span>
          <img src={ArrowLeft} alt="" />
        </div>
      </Link>
      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <img src={location[0].attribute_groups[0].icon__url} alt="" />
          <h2>{location[0].name}</h2>
          <div className={styles.mainContainerDescr}>
            <button>
              <img src={Location} alt="" />
              <span>Минск, Чюрлениса 1</span>
            </button>
            <button>
              <img src={Time} alt="" />
              <span>17.00 - 22.00</span>
            </button>
          </div>
          <div className={styles.mainContainerLike}>
            <svg
              className={styles.heart}
              width="30"
              height="29"
              viewBox="0 0 20 19"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.07819 0.00958725C5.03912 0.0127832 4.91256 0.027165 4.79694 0.0415469C2.47662 0.3164 0.571935 2.11093 0.107873 4.45837C-0.0999396 5.51304 0.00318542 6.86653 0.37506 8.01068C0.76881 9.21396 1.42975 10.2654 2.55787 11.4815C3.09225 12.0568 3.5485 12.4882 5.03912 13.8305C5.40006 14.1549 5.80162 14.5177 5.92975 14.6375C7.52975 16.1077 8.64069 17.3413 9.59537 18.7076L9.7985 19H10.0047L10.211 18.9984L10.4141 18.6916C11.2844 17.378 12.3079 16.1987 13.8282 14.759C14.1266 14.4745 14.4657 14.1629 15.4329 13.284C16.9266 11.9225 17.6907 11.1379 18.3094 10.3278C19.3141 9.00942 19.8219 7.76619 19.9719 6.24811C20.0016 5.9349 19.9985 5.18545 19.9641 4.91379C19.8001 3.62742 19.2751 2.52161 18.4048 1.63154C17.5344 0.741463 16.4516 0.202943 15.1954 0.0367529C14.8938 -0.00159862 14.2376 -0.00159862 13.9297 0.0367529C12.7844 0.185365 11.7751 0.655172 10.9297 1.43339C10.6313 1.70824 10.2954 2.09975 10.0938 2.40816C10.0469 2.48007 10.0047 2.53919 10.0001 2.53919C9.99537 2.53919 9.95319 2.48007 9.90631 2.40816C9.70475 2.09975 9.36881 1.70824 9.07037 1.43339C8.24069 0.669554 7.24225 0.198149 6.136 0.0479388C5.90787 0.0159792 5.25787 -0.00639256 5.07819 0.00958725Z"
                // fill="#CE9B9B"
              />
            </svg>
          </div>
          <span className={styles.favorites}>В избранное</span>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionInfo}>
          {attributes.map((item) => {
            return (
              <>
                <div className={styles.descriptionInfoContent}>
                  <div className={styles.descriptionInfoLeft}>
                    <span>{item.name}</span>
                  </div>
                  {item.attributes.map((info) => {
                    return (
                      <div className={styles.descriptionInfoRight}>
                        <span>{info.name}</span>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.descriptionInfoFooter}>
          <span>Подробнее</span>
        </div>
      </div>
    </div>
  );
};

export default LocationDescription;
