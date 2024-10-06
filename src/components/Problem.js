import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import RollingNumber from './AnimateNumber';
import FlipCardGrid from './FlipCardGrid';
import './flip_card.css';
import './Problem.css'; // Add your custom styles for Problem

const Problem = () => {
  const [chartOptions, setChartOptions] = useState({});
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://backend-for-tp35-bch2bdcpfuh2fbbf.eastus-01.azurewebsites.net/api/graph/`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        const processedData = result.map(item => ({
          year: parseInt(item.year),
          Males: parseInt(item.Males),
          Females: parseInt(item.Females),
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
  }, []);

  // Set chart options after fetching data
  useEffect(() => {
    if (data.length > 0) {
      setChartOptions({
        title: {
          text: 'Gender-Based Suicide Rates Over Time',
        },
        xAxis: {
          categories: data.map(item => item.year),
        },
        series: [
          {
            name: 'Males',
            data: data.map(item => item.Males),
            color: '#ff5e57',
          },
          {
            name: 'Females',
            data: data.map(item => item.Females),
            color: '#3478f7',
          },
        ],
      });
    }
  }, [data]);

  return (
    <div className="problem-page-container">
      {/* Heading Section */}
      <section className="full-width-section heading-section">
        <h1 className="text-center page-heading">Gambling Addiction: An Invisible Struggle</h1>
        <p className="lead text-center page-subtext">
          Gambling addiction is more than a financial struggle. It’s a battle that impacts the mental health and emotional well-being of thousands of young men across Australia.
        </p>
      </section>

      {/* Financial Impact Section */}
      <section className="full-width-section financial-impact-section">
        <h2 className="section-title text-center">Financial Impact of Gambling</h2>
        <p className="text-center section-description">
          Did you know? As of 2021, gambling losses of <strong>${<RollingNumber value={1277} duration={2000} />}</strong> per person annually can nearly halve the average Australian's annual savings of 4.8%.
        </p>
        <Container fluid className="charts-section">
          <Row>
            <Col lg={7} className="chart-container">
              {isLoading ? (
                <p>Loading data...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : (
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
              )}
            </Col>
            <Col lg={5} className="chart-description">
              <h3>Understanding the Financial Impact</h3>
              <p>
                This chart illustrates the trend in gambling expenditure across different periods in Australia. It shows how spending has changed over time, helping identify patterns that link to mental health concerns.
              </p>
              <ul>
                <li>Gambling expenditure and suicide rates for males align closely after 2005.</li>
                <li>Gaming machines and casinos have consistently been top contributors to expenditure.</li>
                <li>Lotteries remain a popular form of gambling, reflecting a trend towards traditional forms.</li>
                <li>The 2020 data point may reflect the unique impact of the COVID-19 pandemic.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Flip Card Grid Section */}
      <section className="full-width-section card-grid-section">
        <FlipCardGrid />
      </section>

      {/* Gender Disparity Section */}
      <section className="full-width-section gender-disparity-section">
        <h2 className="text-center mb-4">Male vs. Female Suicide Rates: The Hidden Toll of Gambling Addiction</h2>
        <p className="text-center mb-4">
          The graph below illustrates the stark difference in suicide rates between males and females from 1907 to 2022. Click on a legend item to highlight that data series.
        </p>
        <div className="full-width-graph">
          <p className="text-center">Graph Placeholder</p>
        </div>
      </section>
    </div>
  );
};

export default Problem;
