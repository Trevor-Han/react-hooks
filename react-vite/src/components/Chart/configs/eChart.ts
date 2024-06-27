import React from 'react'

class EChart extends React.Component<null, {series: Array<any>, options:any}> {
  constructor(props?: any) {
    super(props)
    this.state = {
      series: [
        {
          name: 'Sales',
          data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
          color: '#fff'
        }
      ],
      options: {
        chart: {
          type: 'bar',
          width: '100%',
          height: 'auto',

          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 5
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['transparent']
        },
        grid: {
          show: true,
          borderColor: '#ccc',
          strokeDashArray: 2
        },
        xaxis: {
          categories: [
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct'
          ],
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
              colors: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff'
              ]
            }
          }
        },
        yaxis: {
          labels: {
            show: true,
            align: 'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
              colors: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff'
              ]
            }
          }
        },

        tooltip: {
          y: {
            formatter: function(val: string | number) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      }
    }
  }
}
export default new EChart()
