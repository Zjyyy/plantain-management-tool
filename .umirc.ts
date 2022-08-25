import { defineConfig } from 'umi';

export default defineConfig({
  dva:{
    immer:true,
    hmr:true,
  },
  antd:{
  },
  layout:{
    name:'Plantain Tool',
    local:false,
  },
  routes:[
    { path:'/',component:'@/pages/workbench/workbench',menu:{name:'工作台',icon:'car'}},
    { 
      path:'/rtdb',menu:{name:'实时库管理',icon:'shop'},
      routes:[
        { path:'/rtdb/collector',component:'@/pages/rtdbManager/collector/list',name:'采集器列表'},
        { path:'/rtdb/rtTable',component:'@/pages/rtdbManager/rtTable/list',name:'实时表列表',icon:'barChart'},
        { path:'/rtdb/configurations',component:'@/pages/rtdbManager/configurations',name:'系统配置' },
      ]
    },
    {
      path:'/userManager',menu:{name:'用户管理',icon:'github'},
      routes:[
        {path:'/userManager/list',component:'@/pages/userManager/list',name:'用户列表'}
      ]
    }
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
});
