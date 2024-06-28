
import { useState, useEffect } from 'react'

import { Row, Col, Breadcrumb, Badge, Dropdown, Button, List, Avatar, Input, Drawer, Typography, Switch } from 'antd'
import { MenuProps } from 'antd'
import { checkKeyPath, checkTheme } from '@/store/festures/theme.ts'
import { useDispatch, useSelector } from 'react-redux'

import {
  SearchOutlined,
  StarOutlined,
  TwitterOutlined,
  FacebookFilled,
  MoonOutlined,
  DownloadOutlined
} from '@ant-design/icons'

import { NavLink, useNavigate } from 'react-router-dom'
import avtar from '../../assets/images/team-2.jpg'
import { HeaderState } from './loayoutData/HeaderState.ts'
import type { RootState } from '@/store'
import { bell, wifi, credit, clockicon, logsetting, profile, toggler, setting } from './loayoutData/headerData.tsx'

function Header({
  name = '/',
  placement = 'left',
  onPress,
  handleSidenavColor,
  handleSidenavType,
  handleFixedNavbar
}:HeaderState) {
  const { Title, Text } = Typography
  const { algorithm } = useSelector((state:RootState) => state.theme)
  const isDark = algorithm === 'dark'
  const [open, setOpen] = useState(false)
  // const [sidenavType, setSidenavType] = useState('transparent')

  const data = [
    {
      title: 'New message from Sophie',
      description: <>{clockicon(isDark)} 2 days ago</>,

      avatar: avtar
    },
    {
      title: 'New album by Travis Scott',
      description: <>{clockicon(isDark)} 2 days ago</>,

      avatar: <Avatar shape='square'>{ wifi(isDark)}</Avatar>
    },
    {
      title: 'Payment completed',
      description: <>{clockicon(isDark)} 2 days ago</>,
      avatar: <Avatar shape='square'>{credit(isDark)}</Avatar>
    }
  ]

  const items: MenuProps['items'] = [{
    key: '1',
    label: (
      <List
        min-width='100%'
        className='header-notifications-dropdown'
        itemLayout='horizontal'
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar shape='square' src={item.avatar} />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    )

  }]

  useEffect(() => window.scrollTo(0, 0))

  const showDrawer = () => setOpen(true)
  const hideDrawer = () => setOpen(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handelCheckTheme = () => {
    const theme = isDark ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme
    dispatch(checkTheme(theme))
  }

  const historyToSignIn = () => {
    navigate('/sign-in')
    dispatch(checkKeyPath(['sign-in']))
  }
  return (
    <>
      <div className='setting-drwer' onClick={showDrawer}>
        {setting(isDark)}
      </div>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb
            items={[
              { title: <NavLink to='/'>Pages</NavLink> },
              { title: <span style={{ textTransform: 'capitalize' }}> {name.replace('/', '')}</span> }
            ]}
          >
          </Breadcrumb>
          {/* <div className='ant-page-header-heading'>*/}
          {/*  <span className='ant-page-header-heading-title' style={{ textTransform: 'capitalize' }}>{subName.replace('/', '')}</span>*/}
          {/* </div>*/}
        </Col>
        <Col span={24} md={18} className='header-control'>
          <Badge size='small' count={4}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a href=' ' className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>{bell(isDark)}</a>
            </Dropdown>
          </Badge>
          <Button type='link' onClick={showDrawer}>{logsetting(isDark)}</Button>
          <Button type='link' className='sidebar-toggler' onClick={() => onPress?.()}>{toggler(isDark)}</Button>
          <Drawer
            className='settings-drawer'
            mask={true}
            width={360}
            onClose={hideDrawer}
            placement={placement}
            open={open}
          >
            <div className='vertical'>
              <div className='header-top'>
                <Title level={4}>
                  Configurator
                  <Text className='subtitle'>See our dashboard options.</Text>
                </Title>
              </div>

              <div className='sidebar-color'>
                <Title level={5}>Sidebar Color</Title>
                <div className='theme-color mb-2'>
                  <Button type='primary' onClick={() => handleSidenavColor?.('#1890ff')}>1</Button>
                  <Button style={{ backgroundColor: '#52c41a' }} onClick={() => handleSidenavColor?.('#52c41a')}>1</Button>
                  <Button style={{ backgroundColor: '#d9363e' }} onClick={() => handleSidenavColor?.('#d9363e')}>1</Button>
                  <Button style={{ backgroundColor: '#fadb14' }} onClick={() => handleSidenavColor?.('#fadb14')}>1</Button>
                  <Button style={{ backgroundColor: '#111' }} onClick={() => handleSidenavColor?.('#111')}>1</Button>
                </div>

                <div className='sidebarnav-color mb-2'>
                  <Title level={5}>Sidenav Type</Title>
                  <Text>Choose between 2 different sidenav types.</Text>
                  <div className='trans'>
                    <Button onClick={() => { handleSidenavType?.('transparent') }}>TRANSPARENT</Button>
                    <Button onClick={() => { handleSidenavType?.('#fff') }}>WHITE</Button>
                  </div>
                </div>
                <div className='fixed-nav mb-2'>
                  <Title level={5}>Navbar Fixed </Title>
                  <Switch onChange={(e) => handleFixedNavbar?.(e)} />
                </div>
                <div className='ant-docment'>
                  <div>
                    <Button size='large'>{<DownloadOutlined />}FREE DOWNLOAD</Button>
                    <Button size='large' onClick={() => handelCheckTheme()}>{<MoonOutlined/>}SWITCH THEME</Button>
                  </div>
                </div>
                <div className='viewstar'>
                  <a href=''>{<StarOutlined />} Star</a>
                  <a href=''> 190</a>
                </div>

                <div className='ant-thank'>
                  <Title level={5} className='mb-2'>Thank you for sharing!</Title>
                  <div className='social'>
                    <Button>{<TwitterOutlined />}TWEET</Button>
                    <Button>{<FacebookFilled />}SHARE</Button>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
          <span className='btn-sign-in' onClick={historyToSignIn}>
            {profile(isDark)}
            <span>Sign in</span>
          </span>
          <Input className='header-search' placeholder='Type here...' prefix={<SearchOutlined />}/>
        </Col>
      </Row>
    </>
  )
}

export default Header
