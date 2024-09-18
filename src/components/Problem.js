import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import GamblingMotivationsCarousel from './infographics';
import RollingNumber from './AnimateNumber';
import './flip_card.css'

const Problem = () => {
  const [isRollingVisible, setIsRollingVisible] = useState(false);
  const [chartOptions, setChartOptions] = useState({});
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showGamblingExpenditure, setShowGamblingExpenditure] = useState(false);

  // Fetch data on component mount or when `showGamblingExpenditure` changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = showGamblingExpenditure
          ? `https://backend-for-tp35-bch2bdcpfuh2fbbf.eastus-01.azurewebsites.net/api/graph/?include_expenditure=true`
          : `https://backend-for-tp35-bch2bdcpfuh2fbbf.eastus-01.azurewebsites.net/api/graph/`;

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        const processedData = result.map(item => ({
          year: parseInt(item.year),
          Males: parseInt(item.Males),
          Females: parseInt(item.Females),
          ...(showGamblingExpenditure && { GamblingExpenditure: Math.round(parseFloat(item.total_expenditure)) }),
        }));
        processedData.sort((a, b) => a.year - b.year);
        setData(processedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [showGamblingExpenditure]);

  // Set chart options after fetching data
  useEffect(() => {
    if (data.length > 0) {
      setChartOptions({
        title: {
          text: 'Suicide Rates and Gambling Expenditure',
        },
        xAxis: {
          categories: data.map(item => item.year),
        },
        series: [
          {
            name: 'Males',
            data: data.map(item => item.Males),
          },
          {
            name: 'Females',
            data: data.map(item => item.Females),
          },
          ...(showGamblingExpenditure
            ? [
                {
                  name: 'Gambling Expenditure',
                  data: data.map(item => item.GamblingExpenditure || 0),
                  type: 'column', // Change type to column for gambling expenditure
                },
              ]
            : []),
        ],
      });
    }
  }, [data, showGamblingExpenditure]);

  return (
    <div className="problem-page">
      <h1>The Problem of Gambling Addiction</h1>
      <p>
        Gambling addiction is a serious issue affecting thousands of young men across Australia.
        With the easy accessibility of online betting platforms, many individuals between the
        ages of 18-35 are facing financial, mental, and emotional hardships.
      </p>
      <p>
        One of the biggest challenges is the stigma associated with seeking help for gambling 
        problems. Many young men feel ashamed or guilty, making it harder for them to reach 
        out to available resources. This stigma, combined with the normalization of gambling 
        in Australian culture, creates a perfect storm of risk factors that lead to addiction.
      </p>
      <p>
        At Vital Voices for Change, we aim to break this stigma and provide a supportive 
        community where young men can find the help and encouragement they need to overcome 
        gambling addiction.
      </p>

      <div className="App">
        {/* Gambling Expenditure Section */}
        <section>
          <h2 className="text-center mb-5 section-header" style={{ fontSize: '2.5em', padding: '10px' }}>
            As per 2021, Gambling losses of{' '}
            <RollingNumber value={1277} duration={2000} isVisible={isRollingVisible} /> per person annually can
            nearly halve the average Australian's annual savings of 4.8%.
          </h2>
          <Container id="charts-breakdown">
            <Row>
              <Col md={7}>
                {isLoading ? (
                  <p>Loading data...</p>
                ) : error ? (
                  <p>Error: {error}</p>
                ) : (
                  <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                )}
              </Col>
              <Col md={5}>
                <h3>Understanding Gambling Expenditure</h3>
                <p align="justify">
                  This chart illustrates the trend in gambling expenditure across different periods in Australia.
                  The data is grouped into 5-year intervals, with 2020 shown separately due to data availability.
                </p>
                <p>Key observations:</p>
                <ul>
                  <li>The gambling expenditure and suicide data for males align on most occasions after 2005.</li>
                  <li>Gaming machines and casinos accounted for a significant proportion in every 5-year period, followed by wagering.</li>
                  <li>Traditional forms of gambling like lotteries remain consistently popular.</li>
                  <li>The 2020 data point may reflect the impact of the COVID-19 pandemic on gambling behaviors.</li>
                </ul>
                <p align="justify">
                  Click on each bar to see a detailed breakdown of expenditure by gambling category for that period.
                  This can help identify shifts in gambling preferences and potential areas of concern for mental health impacts.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Motivation Carousel */}
        <GamblingMotivationsCarousel />
      </div>

      {/* Adding the Gender Disparity Section */}
      <section id="gender-disparity" className="my-5">
        <h2 className="text-center mb-5 section-header" style={{ fontSize: '2.5em', padding: '10px' }}>
          Gender Disparity in Suicide Rates
        </h2>
        <p className="text-center mb-4">
          The graph below illustrates the stark difference in suicide rates between males and females from 1907 to 2022. 
          Click on a legend item to highlight that data series.
        </p>

        {/* Placeholder for Graph */}
        <div style={{ width: '100%', height: 500 }}>
          {/* You can add a graph component here in the future */}
          <p className="text-center">Graph Placeholder</p>
        </div>
      </section>
    </div>
  );
};

export default Problem;
