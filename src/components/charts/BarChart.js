import React from "react";
import { Bar } from "react-chartjs-2";

export default props => {
  const data = {
    labels: props.data.names,
    datasets: [
      {
        label: 'Goal Difference',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: props.data.difference
      }
    ]
  };
  return (
    <Bar
        data={data}
        width={500}
        height={250}
        options={{
            maintainAspectRatio: true
        }}
    />
  );
};
