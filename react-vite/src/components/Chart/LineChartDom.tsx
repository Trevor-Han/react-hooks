import { Typography } from 'antd'
import { MinusOutlined } from '@ant-design/icons'
import ReactApexChart from 'react-apexcharts'
import LineChart from './configs/lineChart'

function LineChartDom() {
  const { Title, Paragraph } = Typography

  return (
    <>
      <div className='linechart'>
        <div>
          <Title level={5}>Active Users</Title>
          <Paragraph className='lastweek'>
                        than last week <span className='bnb2'>+30%</span>
          </Paragraph>
        </div>
        <div className='sales'>
          <ul>
            <li>{<MinusOutlined />} Traffic</li>
            <li>{<MinusOutlined />} Sales</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className='full-width'
        options={LineChart.state.options}
        series={LineChart.state.series}
        type='area'
        height={350}
        width={'100%'}
      />
    </>
  )
}

export default LineChartDom
