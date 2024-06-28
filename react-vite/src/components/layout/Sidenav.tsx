import { useEffect } from 'react'
import { Menu, Button, MenuProps } from 'antd'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { checkKeyPath, checkColor } from '@/store/festures/theme.ts'
import type { RootState } from '@/store'
import { dashboard, tables, billing, rtl, profile, signin, signup } from './loayoutData/sidenavIcon.tsx'

function Sidenav({ color }:any) {
  const { keyPath } = useSelector((state:RootState) => state.theme)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const page = pathname.replace('/', '')

  type MenuItem = Required<MenuProps>['items'][number];

  const items: MenuItem[] = [
    {
      key: 'dashboard',
      label: <NavLink to='/dashboard'>
        <span className='icon' style={{ background: page === 'dashboard' ? color : '' }}>{dashboard(color)}</span>
        <span className='label'>Dashboard</span>
      </NavLink>
    },
    {
      key: 'tables',
      label: <NavLink to='/tables'>
        <span className='icon' style={{ background: page === 'tables' ? color : '' }}>{tables(color)}</span>
        <span className='label'>Tables</span>
      </NavLink>
    },
    {
      key: 'billing',
      label: <NavLink to='/billing'>
        <span className='icon' style={{ background: page === 'billing' ? color : '' }}>{billing(color)}</span>
        <span className='label'>Billing</span>
      </NavLink>
    },
    {
      key: 'rtl',
      label: <NavLink to='/rtl'>
        <span className='icon' style={{ background: page === 'rtl' ? color : '' }}>{rtl(color)}</span>
        <span className='label'>RTL</span>
      </NavLink>
    },
    // {
    //   key: '5',
    //   label: 'Account Pages'
    // },
    {
      key: 'profile',
      label: <NavLink to='/profile'>
        <span className='icon' style={{ background: page === 'profile' ? color : '' }}>{profile(color)}</span>
        <span className='label'>Profile</span>
      </NavLink>
    },
    {
      key: 'sign-in',
      label: <NavLink to='/sign-in'>
        <span className='icon'>{signin(color)}</span>
        <span className='label'>Sign In</span>
      </NavLink>
    },
    {
      key: 'sign-up',
      label: <NavLink to='/sign-up'>
        <span className='icon'>{signup(color)}</span>
        <span className='label'>Sign Up</span>
      </NavLink>
    }
  ]

  useEffect(() => {
    dispatch(checkColor(color))
  })
  const handelClickMenuItem: MenuProps['onClick'] = ({ keyPath }) => {
    dispatch(checkKeyPath(keyPath))
  }

  return (
    <>
      <div className='brand'>
        <img src={logo} alt='' />
        <span>Muse Dashboard</span>
      </div>
      <hr />
      <Menu mode='inline' items={items} onClick={handelClickMenuItem} selectedKeys={keyPath} defaultOpenKeys={['dashboard']}/>
      <div className='aside-footer'>
        <div className='footer-box' style={{ background: color }}>
          <span className='icon' style={{ color }}>{dashboard(color)}</span>
          <h6>Need Help?</h6>
          <p>Please check our docs</p>
          <Button type='primary' className='ant-btn-sm ant-btn-block'>DOCUMENTATION</Button>
        </div>
      </div>
    </>
  )
}

export default Sidenav
