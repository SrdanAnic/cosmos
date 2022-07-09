import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


import Icon from '../../image/icon.png';
import Icon2 from '../../image/icon2.png';
import Chart from 'react-apexcharts'


const Dashboard = () => {
    const [series, setSeries] = useState([{
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }, {
        data: [36, 21, 15, 53, 27, 62, 69, 91, 123]
    }]);
    const [option, setOption] = useState({
        chart: {
          height: 250,
          width:350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Weelk01', 'Weelk02', 'Weelk03', 'Weelk04', 'Weelk05', 'Weelk06', 'Weelk07', 'Weelk08', 'Weelk09','week10'],
        },
        yaxis: {
          categories: ['160k', '240k', '320k', '400k', '480k'],
        }
      });
    return (
        <div className='dashboard'>
            <div className='d-flex justify-content-between'>
                <div>
                    <div>
                        <img src={Icon} className='icon' />
                        <span className='ps-3'>Umee</span>
                    </div>
                    <div id="chart" className='chart-card mt-3'>
                        <div className='d-flex justify-content-between'>
                            <div>
                                <div className='strong'>UMEE</div>
                                <p className='fs-small'>Block Time 6,012 ms</p>
                            </div>
                            <div className='btn-custom btn btn-primary'>
                                <span className='fs-12'>Monthly(2021)</span>
                            </div>
                        </div>
                        <Chart options={option} series={series} type="line" height={350} width={550} />
                    </div>

                </div>
                <div>
                    <img src={Icon2} className='icon' />
                    <span className='ps-3'>Validators Graph</span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;