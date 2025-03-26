import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import jituanwnehua from '@/views/modules/jituanwnehua/list'
    import jituanwnehuaCollection from '@/views/modules/jituanwnehuaCollection/list'
    import jituanwnehuaLiuyan from '@/views/modules/jituanwnehuaLiuyan/list'
    import news from '@/views/modules/news/list'
    import singleSeach from '@/views/modules/singleSeach/list'
    import xinwen from '@/views/modules/xinwen/list'
    import xinwenCollection from '@/views/modules/xinwenCollection/list'
    import xinwenLiuyan from '@/views/modules/xinwenLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryJituanwnehua from '@/views/modules/dictionaryJituanwnehua/list'
    import dictionaryJituanwnehuaCollection from '@/views/modules/dictionaryJituanwnehuaCollection/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionarySingleSeach from '@/views/modules/dictionarySingleSeach/list'
    import dictionaryXinwen from '@/views/modules/dictionaryXinwen/list'
    import dictionaryXinwenCollection from '@/views/modules/dictionaryXinwenCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJituanwnehua',
        name: '文化类型',
        component: dictionaryJituanwnehua
    }
    ,{
        path: '/dictionaryJituanwnehuaCollection',
        name: '收藏表类型',
        component: dictionaryJituanwnehuaCollection
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionarySingleSeach',
        name: '单页数据类型',
        component: dictionarySingleSeach
    }
    ,{
        path: '/dictionaryXinwen',
        name: '新闻类型',
        component: dictionaryXinwen
    }
    ,{
        path: '/dictionaryXinwenCollection',
        name: '收藏表类型',
        component: dictionaryXinwenCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/jituanwnehua',
        name: '集团文化',
        component: jituanwnehua
      }
    ,{
        path: '/jituanwnehuaCollection',
        name: '集团文化收藏',
        component: jituanwnehuaCollection
      }
    ,{
        path: '/jituanwnehuaLiuyan',
        name: '集团文化留言',
        component: jituanwnehuaLiuyan
      }
    ,{
        path: '/news',
        name: '公告通知',
        component: news
      }
    ,{
        path: '/singleSeach',
        name: '单页数据',
        component: singleSeach
      }
    ,{
        path: '/xinwen',
        name: '集团新闻',
        component: xinwen
      }
    ,{
        path: '/xinwenCollection',
        name: '集团新闻收藏',
        component: xinwenCollection
      }
    ,{
        path: '/xinwenLiuyan',
        name: '集团新闻留言',
        component: xinwenLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
