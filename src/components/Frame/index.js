import React from "react"
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb,Icon,Dropdown,Avatar,message } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
// import Icon from '@ant-design/icons';
import { adminRoutes } from '../../routes';
import logo from './logo.jpg';
import './frame.css';
import { clearToken } from '../../utils/auth';
import { Route } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// 过滤路由，只保存isShow的路由
const routes = adminRoutes.filter(route=>route.isShow)
function Index(props) {
  const popMenu = (<Menu 
     onClick={p=>{
      if(p.key=="logOut") {
        clearToken();
        props.history.push("/login");
      } else {
        message.info(p.key);
      }
    }}
    >
    <Menu.Item key='noti'>通知中心</Menu.Item>
    <Menu.Item key='setting'>设置</Menu.Item>
    <Menu.Item key='logOut'>退出</Menu.Item>
  </Menu>);


    return (
        <Layout>
    <Header className="header" style={{backgroundColor:"#003267"}}>
      <div className="logo">

      {/* 删除顶部标签，改为logo */}
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu> */}

      <img src={logo} alt="logo" width="150" height="80"/>
      </div>
      <Dropdown overlay={popMenu}>
        <div>
          <Avatar>U</Avatar>
          <span style={{color:'#f2f5f2'}}>超级管理员</span>
          <Icon type='down'/>
        </div>
      </Dropdown>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          
          {routes.map(route=>{
            return ( 
            <Menu.Item 
                key={route.path}
                onClick={p=>props.history.push(p.key)}
             >
              <Icon type={route.icon}/>
              {route.title}
              </Menu.Item>
              );
          })}

        </Menu>
      </Sider>
      <Layout style={{ padding: '16px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    );
}

export default withRouter(Index);