//npm install

//local import

const initialState = {
  labels: [],
  datasets:[
    {
      label:'',
      data:[],
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ]
    }
  ]
}
const chartData = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_CHART_DATA':
      return Object.assign({}, state, {
        labels: action.labels,
        datasets:[
          {
            label: action.label,
            data: action.data,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      })
    default:
      return state
  }
}

export default chartData;