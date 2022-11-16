import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../layout/PageLayout';
import axios from 'axios'

const Home = ({ location: { pathname } }) => {
  if (pathname !== '/') {
    return null;
  }

  axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m').then(resp => {
      console.log(resp.data);
      document.getElementById("weather").innerHTML = JSON.stringify(resp.data);
  });

  return (
    <PageLayout title="Dashboard">
      <h3>Loading API...</h3>
      <p id="weather">Loading...</p>
    </PageLayout>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
