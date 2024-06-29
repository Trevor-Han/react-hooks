import { Row, Col, Card, Statistic, Button, List, Descriptions, Avatar } from 'antd'
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons'
import mastercard from '@/assets/images/mastercard-logo.png'
import paypal from '@/assets/images/paypal-logo-2.png'
import visa from '@/assets/images/visa-logo.png'
import { data, wifi, angle, pencil, deletebtn, information, calender, newest, yesterday } from './Icon.tsx'

function Billing() {
  return (
    <>
      <Row gutter={[24, 0]}>
        <Col xs={24} md={16}>
          <Row gutter={[24, 0]}>
            <Col xs={24} xl={12} className='mb-24'>
              <Card
                title={wifi}
                bordered={false}
                className='card-credit header-solid h-ful'
              >
                <h5 className='card-number'>4562 1122 4594 7852</h5>
                <div className='card-footer'>
                  <div className='mr-30'>
                    <p>Card Holder</p>
                    <h6>Jack Peterson</h6>
                  </div>
                  <div className='mr-30'>
                    <p>Expires</p>
                    <h6>11/22</h6>
                  </div>
                  <div className='card-footer-col col-logo ml-auto'>
                    <img src={mastercard} alt='mastercard' />
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={12} xl={6} className='mb-24'>
              <Card bordered={false} className='widget-2 h-full'>
                <Statistic
                  title={
                    <div key='968726665'>
                      <div className='icon'>{angle}</div>
                      <h6>Salary</h6>
                      <p>Belong Interactive</p>
                    </div>
                  }
                  value={'$2,000'}
                  prefix={<PlusOutlined />}
                />
              </Card>
            </Col>
            <Col xs={12} xl={6} className='mb-24'>
              <Card bordered={false} className='widget-2 h-full'>
                <Statistic
                  title={
                    <div key='69898'>
                      <div className='icon'>
                        <img src={paypal} alt='paypal' />
                      </div>
                      <h6>Paypal</h6>
                      <p>Freelance Paymente</p>
                    </div>
                  }
                  value={'$49,000'}
                  prefix={<PlusOutlined />}
                />
              </Card>
            </Col>
            <Col xs={24} className='mb-24'>
              <Card
                className='header-solid h-full ant-card-p-0'
                title={
                  <Row
                    key='8888'
                    gutter={[24, 0]}
                    className='ant-row-flex ant-row-flex-middle'
                  >
                    <Col xs={24} md={12}>
                      <h6 className='font-semibold m-0'>Payment Methods</h6>
                    </Col>
                    <Col xs={24} md={12} className='d-flex'>
                      <Button type='primary'>ADD NEW CARD</Button>
                    </Col>
                  </Row>
                }
              >
                <Row gutter={[24, 0]}>
                  <Col span={24} md={12}>
                    <Card className='payment-method-card'>
                      <img src={mastercard} alt='mastercard' />
                      <h6 className='card-number'>**** **** **** 7362</h6>
                      <Button type='link' className='ant-edit-link'>
                        {pencil}
                      </Button>
                    </Card>
                  </Col>
                  <Col span={24} md={12}>
                    <Card className='payment-method-card'>
                      <img src={visa} alt='visa' />
                      <h6 className='card-number'>**** **** **** 3288</h6>
                      <Button type='link' className='ant-edit-link'>
                        {pencil}
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={24} md={8} className='mb-24'>
          <Card
            key='Invoices'
            bordered={false}
            className='header-solid h-full ant-invoice-card'
            title={[<h6 className='font-semibold m-0' key='968'>Invoices</h6>]}
            extra={[
              <Button type='primary' key='button_697'>
                <span>VIEW ALL</span>
              </Button>
            ]}
          >
            <List
              itemLayout='horizontal'
              className='invoice-list'
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  actions={[<div>{<DownloadOutlined />}<Button type='link'>PDF</Button></div>]}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                  <div className='amount'>{item.amount}</div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={24} md={16} className='mb-24'>
          <Card
            className='header-solid h-full'
            bordered={false}
            title={[<h6 className='font-semibold m-0' key='1256'>Billing Information</h6>]}
          >
            <Row gutter={[24, 24]}>
              {information.map((item) => (
                <Col span={24} key={item.id}>
                  <Card className='card-billing-info' key={item.vat}>
                    <div className='col-info'>
                      <Descriptions title={item.title}>
                        <Descriptions.Item label='Company Name' span={3}>{item.name}</Descriptions.Item>
                        <Descriptions.Item label='Email Address' span={3}>{item.address}</Descriptions.Item>
                        <Descriptions.Item label='VAT Number' span={3}>{item.vat}</Descriptions.Item>
                      </Descriptions>
                    </div>
                    <div className='col-action'>
                      <Button type='link' danger>{deletebtn}DELETE</Button>
                      <Button type='link' className='darkbtn'>{pencil} EDIT</Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
        <Col span={24} md={8} className='mb-24'>
          <Card
            bordered={false}
            className='header-solid h-full  ant-list-yes'
            title={<h6 className='font-semibold m-0'>Your Transactions</h6>}
            extra={
              <p className='card-header-date'>
                {calender}
                <span>23 - 30 March 2021</span>
              </p>
            }
          >
            <List
              header={<h6>NEWEST</h6>}
              className='transactions-list ant-newest'
              itemLayout='horizontal'
              dataSource={newest}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar size='small' className={item.textclass}>
                        {item.avatar}
                      </Avatar>
                    }
                    title={item.title}
                    description={item.description}
                  />
                  <div className='amount'>
                    <span className={item.amountcolor}>{item.amount}</span>
                  </div>
                </List.Item>
              )}
            />

            <List
              className='yestday transactions-list'
              header={<h6>YESTERDAY</h6>}
              itemLayout='horizontal'
              dataSource={yesterday}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar size='small' className={item.textclass}>
                        {item.avatar}
                      </Avatar>
                    }
                    title={item.title}
                    description={item.description}
                  />
                  <div className='amount'>
                    <span className={item.amountcolor}>{item.amount}</span>
                  </div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Billing
