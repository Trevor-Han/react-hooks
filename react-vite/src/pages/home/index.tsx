import { useState } from 'react'
import { Card, Col, Row, Typography, Tooltip, Progress, Upload, message, Button, Timeline, Radio } from 'antd'
import { ToTopOutlined, MenuUnfoldOutlined, RightOutlined } from '@ant-design/icons'
import Paragraph from 'antd/lib/typography/Paragraph'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'

import ava1 from '@/assets/images/logo-shopify.svg'
import ava2 from '@/assets/images/logo-atlassian.svg'
import ava3 from '@/assets/images/logo-slack.svg'
import ava4 from '@/assets/images/logo-spotify.svg'
import ava5 from '@/assets/images/logo-jira.svg'
import ava6 from '@/assets/images/logo-invision.svg'
import team1 from '@/assets/images/team-1.jpg'
import team2 from '@/assets/images/team-2.jpg'
import team3 from '@/assets/images/team-3.jpg'
import team4 from '@/assets/images/team-4.jpg'
import card from '@/assets/images/info-card-1.jpg'
import { HomeIcon } from './Icon.tsx'

import EChart from '@/components/Chart/EChartDom'
import LineChart from '@/components/Chart/LineChartDom'

function Home() {
  const { Title, Text } = Typography
  const [reverse, setReverse] = useState(false)
  const { dollor, profile, heart, cart } = HomeIcon()
  const { color } = useSelector((state:RootState) => state.theme)

  const count = [
    {
      today: 'Today’s Sales',
      title: '$53,000',
      persent: '+30%',
      icon: dollor,
      bnb: 'bnb2'
    },
    {
      today: 'Today’s Users',
      title: '3,200',
      persent: '+20%',
      icon: profile,
      bnb: 'bnb2'
    },
    {
      today: 'New Clients',
      title: '+1,200',
      persent: '-20%',
      icon: heart,
      bnb: 'redtext'
    },
    {
      today: 'New Orders',
      title: '$13,200',
      persent: '10%',
      icon: cart,
      bnb: 'bnb2'
    }
  ]

  const list = [
    {
      img: ava1,
      Title: 'Soft UI Shopify Version',
      bud: '$14,000',
      progress: <Progress percent={60} size='small' />,
      member: (
        <div className='avatar-group mt-2'>
          <Tooltip placement='bottom' title='Ryan Tompson'>
            <img className='tootip-img' src={team1} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Romina Hadid'>
            <img className='tootip-img' src={team2} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Alexander Smith'>
            <img className='tootip-img' src={team3} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Jessica Doe'>
            <img className='tootip-img' src={team4} alt='' />
          </Tooltip>
        </div>
      )
    },
    {
      img: ava2,
      Title: 'Progress Track',
      bud: '$3,000',
      progress: <Progress percent={10} size='small' />,
      member: (
        <div className='avatar-group mt-2'>
          <Tooltip placement='bottom' title='Ryan Tompson'>
            <img className='tootip-img' src={team1} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Romina Hadid'>
            <img className='tootip-img' src={team2} alt='' />
          </Tooltip>
        </div>
      )
    },
    {
      img: ava3,
      Title: 'Fix Platform Errors',
      bud: 'Not Set',
      progress: <Progress percent={100} size='small' status='active' />,
      member: (
        <div className='avatar-group mt-2'>
          <Tooltip placement='bottom' title='Ryan Tompson'>
            <img className='tootip-img' src={team1} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Romina Hadid'>
            <img className='tootip-img' src={team1} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Alexander Smith'>
            <img className='tootip-img' src={team3} alt='' />
          </Tooltip>
        </div>
      )
    },
    {
      img: ava4,
      Title: 'Launch new Mobile App',
      bud: '$20,600',
      progress: <Progress percent={100} size='small' status='active' />,
      member: (
        <div className='avatar-group mt-2'>
          <Tooltip placement='bottom' title='Ryan Tompson'>
            <img className='tootip-img' src={team1} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Romina Hadid'>
            <img className='tootip-img' src={team2} alt='' />
          </Tooltip>
        </div>
      )
    },
    {
      img: ava5,
      Title: 'Add the New Landing Page',
      bud: '$4,000',
      progress: <Progress percent={80} size='small' />,
      member: (
        <div className='avatar-group mt-2'>
          <Tooltip placement='bottom' title='Ryan Tompson'>
            <img className='tootip-img' src={team1} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Romina Hadid'>
            <img className='tootip-img' src={team2} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Alexander Smith'>
            <img className='tootip-img' src={team3} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Jessica Doe'>
            <img className='tootip-img' src={team4} alt='' />
          </Tooltip>
        </div>
      )
    },

    {
      img: ava6,
      Title: 'Redesign Online Store',
      bud: '$2,000',
      progress: (
        <Progress
          percent={100}
          size='small'
          status='exception'
          format={() => 'Cancel'}
        />
      ),
      member: (
        <div className='avatar-group mt-2'>
          <Tooltip placement='bottom' title='Ryan Tompson'>
            <img className='tootip-img' src={team1} alt='' />
          </Tooltip>
          <Tooltip placement='bottom' title='Romina Hadid'>
            <img className='tootip-img' src={team2} alt='' />
          </Tooltip>
        </div>
      )
    }
  ]

  const timelineList = [
    {
      children: <div>
        <Title level={5}>$2,400 - Redesign store</Title>
        <Text>09 JUN 7:20 PM</Text>
      </div>,
      color: 'green'
    },
    {
      children: <div>
        <Title level={5}>New order #3654323</Title>
        <Text>08 JUN 12:20 PM</Text>
      </div>,
      color: 'green'
    },
    {
      children: <div>
        <Title level={5}>Company server payments</Title>
        <Text>04 JUN 3:10 PM</Text>
      </div>
    },
    {
      children: <div>
        <Title level={5}>New card added for order #4826321</Title>
        <Text>02 JUN 2:45 PM</Text>
      </div>
    },
    {
      children: <div>
        <Title level={5}>Unlock folders for development</Title>
        <Text>18 MAY 1:30 PM</Text>
      </div>
    },
    {
      children: <div>
        <Title level={5}>New order #46282344</Title>
        <Text>14 MAY 3:30 PM</Text>
      </div>,
      color: 'gray'
    }
  ]

  const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info:any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }
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
