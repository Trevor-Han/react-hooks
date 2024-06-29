import { Row, Col, Card, Radio, Table, Upload, Button } from 'antd'
import { ToTopOutlined } from '@ant-design/icons'
import { formProps } from '@/utils'
import { columns, project, data, dataProject } from './tableData.tsx'

function Tables() {
  return (
    <>
      <div className='tabled'>
        <Row gutter={[24, 0]}>
          <Col xs='24' xl={24}>
            <Card bordered={false} className='criclebox tablespace mb-24' title='Authors Table' extra={
              <>
                <Radio.Group defaultValue='a'>
                  <Radio.Button value='a'>All</Radio.Button>
                  <Radio.Button value='b'>ONLINE</Radio.Button>
                </Radio.Group>
              </>
            }
            >
              <div className='table-responsive'>
                <Table columns={columns} dataSource={data} pagination={false} className='ant-border-space'/>
              </div>
            </Card>

            <Card
              bordered={false}
              className='criclebox tablespace mb-24'
              title='Projects Table'
              extra={
                <>
                  <Radio.Group defaultValue='all'>
                    <Radio.Button value='all'>All</Radio.Button>
                    <Radio.Button value='online'>ONLINE</Radio.Button>
                    <Radio.Button value='store'>STORES</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className='table-responsive'>
                <Table columns={project} dataSource={dataProject} pagination={false} className='ant-border-space'/>
              </div>
              <div className='uploadfile pb-15 shadow-none'>
                <Upload {...formProps}>
                  <Button type='dashed' className='ant-full-box' icon={<ToTopOutlined />}>Click to Upload</Button>
                </Upload>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Tables
