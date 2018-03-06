import React, { Component } from 'react'
import { Layout, Icon, Menu} from 'antd'
import '../stylesheets/css/Header.css'
const Header = Layout
const navItems = [{ name: 'Home', icon: 'home' }, { name: 'Recruiting', icon: 'calendar' }, { name: 'About', icon: 'team' }, { name: 'github', icon: 'github' }]
export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.styles = {
      title: {
        fontSize: 25 + 'px'
      },
      item: {
        fontSize: 18 + 'px',
        float: 'right'
      }
    }
  }
  render() {
    return (
      <Header>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['4']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item style={this.styles.title} className="logo"><Icon type='star'/>CTG Recruiting</Menu.Item>
          {navItems.reverse().map((item, index) => {
            return (<Menu.Item key={index + 1} style={this.styles.item}>
              <Icon type={item.icon} />{item.name}
            </Menu.Item>)
          })}
        </Menu>
      </Header>
    )
  }
}