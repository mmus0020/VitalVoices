

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CircleLoader } from 'react-spinners';

const SuicideRatesChart = () => {
  const [data, setData] = useState([]);
  const [cachedData, setCachedData] = useState({ withGambling: null, withoutGambling: null });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showGamblingExpenditure, setShowGamblingExpenditure] = useState(false);
  const chartComponentRef = useRef(null);
//   const blinkIntervalRef = useRef(null);

  const fetchData = useCallback(async (includeExpenditure) => {
    try {
      const url = includeExpenditure ? `https://backend-for-tp35-bch2bdcpfuh2fbbf.eastus-01.azurewebsites.net/api/graph/?include_expenditure=true` : `https://backend-for-tp35-bch2bdcpfuh2fbbf.eastus-01.azurewebsites.net/api/graph/`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const result = await response.json();
      return result.map(item => ({
        year: parseInt(item.year),
        Males: parseInt(item.Males),
        Females: parseInt(item.Females),
        difference: parseInt(item.Males) - parseInt(item.Females),
        ...(includeExpenditure && { GamblingExpenditure: Math.round(parseFloat(item.total_expenditure)) })
      })).sort((a, b) => a.year - b.year);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        let newData;
        if (showGamblingExpenditure) {
          if (cachedData.withGambling) {
            newData = cachedData.withGambling;
          } else {
            newData = await fetchData(true);
            setCachedData(prev => ({ ...prev, withGambling: newData }));
          }
        } else {
          if (cachedData.withoutGambling) {
            newData = cachedData.withoutGambling;
          } else {
            newData = await fetchData(false);
            setCachedData(prev => ({ ...prev, withoutGambling: newData }));
          }
        }
        setData(newData);
      } catch (error) {
        console.error('Error loading data:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [showGamblingExpenditure, fetchData, cachedData]);

  const toggleGamblingExpenditure = () => {
    setShowGamblingExpenditure(!showGamblingExpenditure);
  };

  

  if (error) return <div>Error: {error}</div>;
  if (data.length === 0 && !isLoading) return <div>No data available</div>;

  const maxDifference = Math.max(...(data.map(d => Math.abs(d.difference)) || [0]));
//   const maxDiffIndex = data.findIndex(d => Math.abs(d.difference) === maxDifference);

  const options = {
    chart: {
      type: 'line',
      zoomType: 'xy',
      backgroundColor:'#f8f4eb',
      width:1300,
      height:500
    },
    title: {
      text: 'Suicide Rates and Gender Difference'
    },
    xAxis: {
      categories: data.map(item => item.year),
      title: {
        text: 'Year'
      }
    },
    yAxis: [{
      title: {
        text: 'Number of Suicides'
      }
    }, {
      title: {
        text: 'Gambling Expenditure in millions ($)'
      },
      opposite: true
    }],
    tooltip: {
      shared: true,
      formatter: function() {
        let s = '<b>' + this.x + '</b>';
        this.points.forEach(function(point) {
          s += '<br/>' + point.series.name + ': ' + point.y;
          if (point.series.name === 'Difference') {
            s += ' (Males - Females)';
          }
        });
        return s;
      }
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: '12px'
      }
    },
    series: [{
        name: 'Males',
        data: data.map(item => item.Males),
        color: '#0000FF',
        zIndex: 2
      }, {
        name: 'Females',
        data: data.map(item => item.Females),
        color: '#FF69B4',
        zIndex: 2
      }, {
        name: 'Difference',
        data: data.map((item, index) => ({
          y: item.difference,
          color: Highcharts.color(item.difference > 0 ? '#0000FF' : '#FF69B4')
            .setOpacity(Math.abs(item.difference) / maxDifference)
            .get(),
        })),
        type: 'column',
        zIndex: 1,
        states: {
          hover: {
            brightness: 0.3
          }
        }
      }, {
        name: 'Gambling Expenditure',
        data: data.map(item => item.GamblingExpenditure),
        color: 'red',
        yAxis: 1,
        visible: showGamblingExpenditure,
        showInLegend: showGamblingExpenditure,
        zIndex: 4, // Highest z-index to ensure it's on top
        lineWidth: 3, // Make the line thicker for better visibility
        marker: {
          enabled: true,
          radius: 4
        }
      }],
    plotOptions: {
      series: {
        animation: {
          duration: 2500
        },
        point: {
          events: {
            mouseOver: function() {
              if (this.series.name === 'Difference') {
                this.series.chart.series[2].points.forEach(point => {
                  if (point !== this && point.state) {
                    point.setState('');
                  }
                });
              }
            }
          }
        }
      },
      column: {
        grouping: false,
        pointPadding: 0,
        groupPadding: 0,
        borderWidth: 0
      }
    }
  };
  

  return (
    <div style={{ position: 'relative' }}>
         <button onClick={toggleGamblingExpenditure}>
        {showGamblingExpenditure ? 'Hide' : 'Show'} Gambling Expenditure
      </button>
         
      <HighchartsReact 
        highcharts={Highcharts} 
        options={options}
        ref={chartComponentRef}
      />
      {isLoading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <CircleLoader color="#36D7B7" />
        </div>
      )}
     
    </div>
  );
};

export default SuicideRatesChart;