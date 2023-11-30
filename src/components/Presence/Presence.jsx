import scss from './Presence.module.scss';
import { Element } from 'react-scroll';
import Chart from 'react-google-charts';

import React from 'react';

const geoData = [
  ['Country', '700'],
  ['Germany', 700],
  ['United States', 700],
  ['Brazil', 700],
  ['Canada', 700],
  ['France', 700],
  ['Ukraine', 700],
];
const options = {
  colorAxis: { colors: ['#F1AE00'] },
  datalessRegionColor: 'white',
  legend: 'none',
  backgroundColor: '#FFF8EA',
};
export const Presence = () => {
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
        width={'100%'}
        height={'100%'}
        chartType="GeoChart"
        data={geoData}
        options={options}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_MAP_API_KEY_GOES_HERE"
        rootProps={{ 'data-testid': '1' }}
      />
    </Element>
  );
};
