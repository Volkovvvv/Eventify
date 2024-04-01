import React from 'react';
import './Filter.scss';
import Arrow from '../../assets/img/Arrow';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterCoordinates, setFilterSubway } from '../../redux/filter/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const activityName = useSelector((state) => state.locations.activityName);
  const totalLocations = useSelector((state) => state.pagination.totalLocations);
  const [activeRating, setActiveRating] = React.useState(false);
  const [activeMetro, setActiveMetro] = React.useState(false);
  const [activeMetroBlue, setActiveMetroBlue] = React.useState(false);
  const [activeMetroRed, setActiveMetroRed] = React.useState(false);
  const [checkedDecrease, setCheckedDecrease] = React.useState('');
  const [checkedIncrease, setCheckedIncrease] = React.useState('');
  const [metroBlueList, setMetroBlueList] = React.useState([
    {
      name: 'Малиновка',
      coordinates: '27.474697%2C53.849679',
      subway: '70030076198073042',
      checked: false,
    },
    {
      name: 'Петровщина',
      coordinates: '27.486079%2C53.864641',
      subway: '70030076198072952',
      checked: false,
    },
    {
      name: 'Михалово',
      coordinates: '27.497178%2C53.877104',
      subway: '70030076198072869',
      checked: false,
    },
    {
      name: 'Грушевка',
      coordinates: '27.515336%2C53.88692',
      subway: '70030076198072824',
      checked: false,
    },
    {
      name: 'Институт культуры',
      coordinates: '27.54061%2C53.88557',
      subway: '70030076198072745',
      checked: false,
    },
    {
      name: 'Октябрьская',
      coordinates: '27.562241%2C53.902178',
      subway: '70030076198072634',
      checked: false,
    },
    {
      name: 'Площадь Победы',
      coordinates: '27.575981%2C53.909311',
      subway: '70030076198072563',
      checked: false,
    },
    {
      name: 'Площадь Якуба Коласа',
      coordinates: '27.583998%2C53.915808',
      subway: '70030076198072450',
      checked: false,
    },
    {
      name: 'Площадь Якуба Коласа',
      coordinates: '27.583998%2C53.915808',
      subway: '70030076198072450',
      checked: false,
    },
    {
      name: 'Академия наук',
      coordinates: '27.599158%2C53.921921',
      subway: '70030076198072356',
      checked: false,
    },
    {
      name: 'Парк Челюскинцев',
      coordinates: '27.613688%2C53.924252',
      subway: '70030076198072144',
      checked: false,
    },
    {
      name: 'Московская',
      coordinates: '27.627608%2C53.927921',
      subway: '70030076198072052',
      checked: false,
    },
    {
      name: 'Восток',
      coordinates: '27.65139%2C53.934497',
      subway: '70030076198071962',
      checked: false,
    },
    {
      name: 'Борисовский тракт',
      coordinates: '27.666187%2C53.938617',
      subway: '70030076198071760',
      checked: false,
    },
    {
      name: 'Уручье',
      coordinates: '27.687999%2C53.945416',
      subway: '70030076198071617',
      checked: false,
    },
  ]);
  const [metroRedList, setMetroRedList] = React.useState([
    {
      name: 'Могилевская',
      coordinates: '27.673871%2C53.862066',
      subway: '70030076198067981',
      checked: false,
    },
    {
      name: 'Автозаводская',
      coordinates: '27.648778%2C53.86921',
      subway: '70030076198071875',
      checked: false,
    },
    {
      name: 'Партизанская',
      coordinates: '27.628986%2C53.876055',
      subway: '70030076198072041',
      checked: false,
    },
    {
      name: 'Тракторный завод',
      coordinates: '27.61456%2C53.890002',
      subway: '70030076198072132',
      checked: false,
    },
    {
      name: 'Пролетарская',
      coordinates: '27.586107%2C53.889942',
      subway: '70030076198072205',
      checked: false,
    },
    {
      name: 'Первомайская',
      coordinates: '27.570981%2C53.893874',
      subway: '70030076198072284',
      checked: false,
    },
    {
      name: 'Купаловская',
      coordinates: '27.561848%2C53.90089',
      subway: '70030076198072343',
      checked: false,
    },
    {
      name: 'Молодежная',
      coordinates: '27.523001%2C53.906636',
      subway: '70030076198072481',
      checked: false,
    },
    {
      name: 'Пушкинская',
      coordinates: '27.497588%2C53.909685',
      subway: '70030076198072557',
      checked: false,
    },
    {
      name: 'Спортивная',
      coordinates: '27.479431%2C53.908424',
      subway: '70030076198072609',
      checked: false,
    },
    {
      name: 'Кунцевщина',
      coordinates: '27.453943%2C53.906271',
      subway: '70030076198072637',
      checked: false,
    },
    {
      name: 'Каменная горка',
      coordinates: '27.436646%2C53.906933',
      subway: '70030076198072656',
      checked: false,
    },
  ]);

  const showDropdownRating = () => {
    setActiveRating(!activeRating);
  };
  const showDropdownMetro = () => {
    setActiveMetro(!activeMetro);
  };
  const showDropdownMetroBlue = (e) => {
    e.stopPropagation();
    setActiveMetroBlue(!activeMetroBlue);
  };
  const showDropdownMetroRed = (e) => {
    e.stopPropagation();
    setActiveMetroRed(!activeMetroRed);
  };
  const onClickDecrease = (e) => {
    e.stopPropagation();
    setCheckedDecrease(true);
    setCheckedIncrease(false);
  };
  const onClickIncrease = (e) => {
    e.stopPropagation();
    setCheckedDecrease(false);
    setCheckedIncrease(true);
  };
  const onClickMetro = (coordinates, subway, i) => {
    const newMetroBlueList = metroBlueList.map((item, index) => {
      if (index === i) {
        return { ...item, checked: !item.checked };
      } else {
        return { ...item, checked: false };
      }
    });
    if (newMetroBlueList[i] == i && newMetroBlueList[i].checked == true) {
      newMetroBlueList[i].checked = false;
    }
    setMetroBlueList(newMetroBlueList);
    if (newMetroBlueList[i].checked) {
      dispatch(setFilterCoordinates(coordinates));
      dispatch(setFilterSubway(subway));
    } else {
      dispatch(setFilterCoordinates(''));
      dispatch(setFilterSubway(''));
    }
  };

  return (
    <div className="filter">
      <div className="filterWrapper">
        <div className="filterWrapperInfo">
          <h3>{activityName}</h3>
          <p>Найдено: {totalLocations > 45 ? 45 : totalLocations}</p>
        </div>
        <div className="filterWrapperCategories">
          <button onClick={() => showDropdownRating()}>
            <span>По рейтингу</span>
            <Arrow />
            <div className={activeRating ? 'dropdownRating block' : 'dropdownRating'}>
              <label onClick={(e) => onClickDecrease(e)}>
                <input checked={checkedDecrease} type="checkbox" />
                <span>По убыванию</span>
              </label>
              <label onClick={(e) => onClickIncrease(e)}>
                <input checked={checkedIncrease} type="checkbox" />
                <span>По возрастанию</span>
              </label>
            </div>
          </button>
          <button onClick={() => showDropdownMetro()}>
            <span>Вблизи метро</span>
            <Arrow />
            <div className={activeMetro ? 'dropdownMetro block' : 'dropdownMetro'}>
              <label onClick={(e) => showDropdownMetroBlue(e)} className="dropdownMetro-header ">
                <span>Синяя ветка</span>
                <Arrow />
              </label>
              <div
                className={
                  activeMetroBlue ? 'dropdownMetro-content block' : 'dropdownMetro-content'
                }>
                {metroBlueList.map((item, i) => {
                  return (
                    <label
                      onChange={() => {
                        onClickMetro(item.coordinates, item.subway, i);
                      }}
                      index={i}>
                      <input checked={item.checked} type="checkbox" />
                      <span>{item.name}</span>
                    </label>
                  );
                })}
              </div>
              <label onClick={(e) => showDropdownMetroRed(e)} className="dropdownMetro-header red ">
                <span>Красная ветка</span>
                <Arrow />
              </label>
              <div
                className={
                  activeMetroRed ? 'dropdownMetro-content block' : 'dropdownMetro-content'
                }>
                {metroRedList.map((item, i) => {
                  return (
                    <label index={i}>
                      <input type="checkbox" />
                      <span>{item.name}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </button>
          <button>
            <span>По среднему чеку</span>
            <Arrow />
          </button>
          <button>
            <span>По популярности</span>
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
