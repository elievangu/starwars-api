//npm import
import React from 'react';
import { Bar } from 'react-chartjs-2';


//local import

const Chart = ({ chartData }) => {
  
  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
        maintainAspectRatio: true
        }}
      />    
    </div>  
  )
}



export default Chart;