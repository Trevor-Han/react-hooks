import { useState } from 'react'
import { Card, Col, Row, Typography, Upload, Button, Timeline, Radio } from 'antd'
import { ToTopOutlined, MenuUnfoldOutlined, RightOutlined } from '@ant-design/icons'
import Paragraph from 'antd/lib/typography/Paragraph'
import { useSelector } from 'react-redux'
import { formProps as uploadProps } from '@/utils'
import type { RootState } from '@/store'

import card from '@/assets/images/info-card-1.jpg'
import { HomeIcon } from './Icon.tsx'

import EChart from '@/components/Chart/EChartDom'
import LineChart from '@/components/Chart/LineChartDom'

function Home() {
  const { Title, Text } = Typography
  const [reverse, setReverse] = useState(false)
  const { count, list, timelineList } = HomeIcon()
  const { color } = useSelector((state:RootState) => state.theme)

  return (
    <>
      <div className='layout-content'>
        <Row className='rowgap-vbox' gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className='mb-24'
            >
              <Card bordered={false} className='criclebox '>
                <div className='number'>
                  <Row align='middle' gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className='icon-box' style={{ background: color }}>{c.icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className='mb-24'>
            <Card bordered={false} className='criclebox h-full'>
              <EChart/>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className='mb-24'>
            <Card bordered={false} className='criclebox h-full'>
              <LineChart/>
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={16} className='mb-24'>
            <Card bordered={false} className='criclebox cardbody h-full'>
              <div className='project-ant'>
                <div>
                  <Title level={5}>Projects</Title>
                  <Paragraph className='lastweek'>
                                      done this month<span className='blue'>40%</span>
                  </Paragraph>
                </div>
                <div className='ant-filtertabs'>
                  <div className='antd-pro-pages-dashboard-analysis-style-salesExtra'>
                    <Radio.Group defaultValue='a'>
                      <Radio.Button value='a'>ALL</Radio.Button>
                      <Radio.Button value='b'>ONLINE</Radio.Button>
                      <Radio.Button value='c'>STORES</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              </div>
              <div className='ant-list-box table-responsive'>
                <table className='width-100'>
                  <thead>
                    <tr>
                      <th>COMPANIES</th>
                      <th>MEMBERS</th>
                      <th>BUDGET</th>
                      <th>COMPLETION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((d, index) => (
                      <tr key={index}>
                        <td>
                          <h6>
                            <img
                              src={d.img}
                              alt=''
                              className='avatar-sm mr-10'
                            />{' '}
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className='text-xs font-weight-bold'>
                            {d.bud}{' '}
                          </span>
                        </td>
                        <td>
                          <div className='percent-progress'>{d.progress}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='uploadfile shadow-none'>
                <Upload {...uploadProps}>
                  <Button
                    type='dashed'
                    block
                    icon={<ToTopOutlined/>}
                  >
                    Click to Upload
                  </Button>
                </Upload>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8} className='mb-24'>
            <Card bordered={false} className='criclebox h-full'>
              <div className='timeline-box'>
                <Title level={5}>Orders History</Title>
                <Paragraph className='lastweek' style={{ marginBottom: 24 }}>
                                  this month <span className='bnb2'>20%</span>
                </Paragraph>

                <Timeline
                  pending='Recording...'
                  className='timelinelist'
                  reverse={reverse}
                  mode='left'
                  items={timelineList}
                />
                <Button
                  type='primary'
                  className='width-100'
                  onClick={() => setReverse(!reverse)}
                >
                  {<MenuUnfoldOutlined/>} REVERSE
                </Button>
              </div>
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} md={12} sm={24} lg={12} xl={14} className='mb-24'>
            <Card bordered={false} className='criclebox h-full'>
              <Row>
                <Col
                  xs={24}
                  md={12}
                  sm={24}
                  lg={12}
                  xl={14}
                  className='mobile-24'
                >
                  <div className='h-full col-content p-20'>
                    <div className='ant-muse'>
                      <Text>Built by developers</Text>
                      <Title level={5}>Muse Dashboard for Ant Design</Title>
                      <Paragraph className='lastweek mb-36'>
                                              From colors, cards, typography to complex elements, you
                                              will find the full documentation.
                      </Paragraph>
                    </div>
                    <div className='card-footer'>
                      <a className='icon-move-right' href=''>
                                              Read More
                        {<RightOutlined/>}
                      </a>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={24}
                  md={12}
                  sm={24}
                  lg={12}
                  xl={10}
                  className='col-img'
                >
                  <div className='ant-cret text-right'>
                    <img src={card} alt='' className='border10'/>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xs={24} md={12} sm={24} lg={12} xl={10} className='mb-24'>
            <Card bordered={false} className='criclebox card-info-2 h-full'>
              <div className='gradent h-full col-content'>
                <div className='card-content'>
                  <Title level={5}>Work with the best</Title>
                  <p>
                                      Wealth creation is an evolutionarily recent positive-sum
                                      game. It is all about who take the opportunity first.
                  </p>
                </div>
                <div className='card-footer'>
                  <a className='icon-move-right' href=''>
                                      Read More
                    <RightOutlined/>
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home
