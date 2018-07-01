import React from "react";
import { Line } from "react-chartjs-2";

export default props => {
  const data = {
      labels: props.data.names,
      datasets: [
        {
          label: 'Goals for',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(61,104,197,0.4)',
          borderColor: 'rgba(61,104,197,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(61,104,197,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(61,104,197,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: props.data.scored_for
        },
        {
          label: 'Goals agains',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(204,71,40,0.4)',
          borderColor: 'rgba(204,71,40,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(204,71,40,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(204,71,40,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: props.data.scored_against
        },
        {
          label: 'Difference',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(242,157,56,0.4)',
          borderColor: 'rgba(242,157,56,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(242,157,56,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(242,157,56,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: props.data.difference
        },
        {
          label: 'Points',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(70,148,50,0.4)',
          borderColor: 'rgba(70,148,50,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(70,148,50,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(70,148,50,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: props.data.points
        }
      ]
    };
  return (
    <Line
        data={data}
        width={500}
        height={250}
        options={{
            maintainAspectRatio: true
        }}
    />
  );
};
