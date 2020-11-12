import List  from "../pages/admin/products/List";
import Index from "../pages/admin/dashboard";
import Login from "../pages/Login";
import Edit from "../pages/admin/products/Edit";
import PageNotFound from "../pages/PageNotFound"
import Icon from '@ant-design/icons';

export const mainRoutes = [{
    path:'/login',
    component:Login
}, {
    path:'/404',
    component:PageNotFound 
}];

export const adminRoutes = [{
    path:'/admin/dashboard',
    isShow:true,
    title:"看板",
    icon:"area-chart",
    component:Index
}, {
    path:'/admin/products',
    component:List,
    isShow:true,
    title:"商品列表",
    icon:"shop",
    exact: true
}, {
    path:'/admin/products/edit',
    isShow:false,
    component:Edit
}];


