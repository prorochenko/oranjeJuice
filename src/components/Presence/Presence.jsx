import React, { useState, useEffect } from 'react';
import scss from './Presence.module.scss';
import { Element } from 'react-scroll';
import Chart from 'react-google-charts';

export const Presence = () => {
  const [chartKey, setChartKey] = useState(0);

  const handleResize = () => {
    setChartKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const geoData = [
    ['Country', 'Presence from', 'Partners'],
    ['Germany', new Date(2012, 3, 13), 3],
    ['United States', 2021, 4],
    ['Brazil', 2020, 5],
    ['Canada', 2019, 5],
    ['France', 2018, 2],
    ['Ukraine', 2020, 1],
  ];

  const options = {
    colorAxis: { colors: ['#F1AE00', '#F1AE00'] },
    datalessRegionColor: 'white',
    legend: 'none',
    backgroundColor: '#FFF8EA',
    tooltip: { textStyle: { color: '#F1AE00', fontSize: 16 } },
  };

  return (
    <Element name="presence" className={scss.presence}>
      <h2 className={scss.presence__title}>Our presence</h2>
      <p className={scss.presence__description}>
        With a global reach, I&S Juice Farm proudly operates in various corners
        of the world, bringing the goodness of organic orange juice to diverse
        markets and cultures. Explore our international locations and discover
        our commitment to quality and taste.
      </p>

      <Chart
        key={chartKey}
        width={'100%'}
        height={'100%'}
        chartType="GeoChart"
        data={geoData}
        options={options}
        mapsApiKey="YOUR_MAP_API_KEY_GOES_HERE"
        rootProps={{ 'data-testid': '1' }}
      />
    </Element>
  );
};
