export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      { path: '/', redirect: '/UserManagement/AccountManagement' },

      // 用户管理router。
      {
        path: '/UserManagement',
        name: 'user_management',
        icon: 'user',
        routes: [
          {
            path: '/UserManagement/AccountManagement',
            name: 'account_management',
            component: './UserManagement/AccountManagement',
          },
          {
            path: '/UserManagement/DefinitionManagement',
            name: 'user_high_definition_management',
            component: './UserManagement/DefinitionManagement',
          },
          {
            path: '/UserManagement/RegionalQuantity',
            name: 'regional_quantity_allocation',
            component: './UserManagement/RegionalQuantity',
          },
          {
            path: '/UserManagement/RegionalAccounts',
            name: 'regional_account_allocation',
            component: './UserManagement/RegionalAccounts',
          },
        ],
      },

      // 系统设置路由。
      {
        path: '/SystemSetup',
        icon: 'setting',
        name: 'setup',
        routes: [
          {
            path: '/SystemSetup/Company',
            name: 'company',
            component: './SystemSetup/Company',
          },
          {
            path: '/SystemSetup/Rule',
            name: 'rule',
            component: './SystemSetup/Rule',
          },
          {
            path: '/SystemSetup/Crime',
            name: 'types_of_crime',
            component: './SystemSetup/Crime',
          },
          {
            path: '/SystemSetup/IPcontrol',
            name: 'ip_segment_control',
            component: './SystemSetup/IPcontrol',
          },
          {
            path: '/SystemSetup/Query',
            name: 'query_reason',
            component: './SystemSetup/Query',
          },
          {
            path: '/SystemSetup/Filter',
            name: 'filter',
            component: './SystemSetup/Filter',
          },
        ],
      },

      // 库管理路由。
      {
        path: '/Library',
        icon: 'table',
        name: 'library',
        routes: [
          {
            path: '/Library/Library',
            name: 'library',
            component: './Library/Library',
          },
          {
            path: '/Library/BlackList',
            name: 'blacklist',
            component: './Library/BlackList',
          },
          {
            path: '/Library/WhiteList',
            name: 'whitelist',
            component: './Library/WhiteList',
          },
          {
            path: '/Library/RedList',
            name: 'redlist',
            component: './Library/RedList',
          },
        ],
      },
      // 数据查询路由。
      {
        path: '/DataQuery',
        name: 'data_query',
        icon: 'profile',
        routes: [
          {
            path: '/DataQuery/HistoricalQuery',
            name: 'historical_record',
            component: './DataQuery/HistoricalQuery',
          },
          {
            path: '/DataQuery/LoginQuery',
            name: 'landing_user',
            component: './DataQuery/LoginQuery',
          },
          {
            path: '/DataQuery/RedListQuery',
            name: 'redlist',
            component: './DataQuery/RedListQuery',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
// export default [
//   // user
//   {
//     path: '/user',
//     component: '../layouts/UserLayout',
//     routes: [
//       { path: '/user', redirect: '/user/login' },
//       { path: '/user/login', component: './User/Login' },
//       { path: '/user/register', component: './User/Register' },
//       { path: '/user/register-result', component: './User/RegisterResult' },
//     ],
//   },
//   // app
//   {
//     path: '/',
//     component: '../layouts/BasicLayout',
//     Routes: ['src/pages/Authorized'],
//     authority: ['admin', 'user'],
//     routes: [
//       // dashboard
//       { path: '/', redirect: '/dashboard/analysis' },
//       {
//         path: '/dashboard',
//         name: 'dashboard',
//         icon: 'dashboard',
//         routes: [
//           {
//             path: '/dashboard/analysis',
//             name: 'analysis',
//             component: './Dashboard/Analysis',
//           },
//           {
//             path: '/dashboard/monitor',
//             name: 'monitor',
//             component: './Dashboard/Monitor',
//           },
//           {
//             path: '/dashboard/workplace',
//             name: 'workplace',
//             component: './Dashboard/Workplace',
//           },
//         ],
//       },
//       // forms
//       {
//         path: '/form',
//         icon: 'form',
//         name: 'form',
//         routes: [
//           {
//             path: '/form/basic-form',
//             name: 'basicform',
//             component: './Forms/BasicForm',
//           },
//           {
//             path: '/form/step-form',
//             name: 'stepform',
//             component: './Forms/StepForm',
//             hideChildrenInMenu: true,
//             routes: [
//               {
//                 path: '/form/step-form',
//                 redirect: '/form/step-form/info',
//               },
//               {
//                 path: '/form/step-form/info',
//                 name: 'info',
//                 component: './Forms/StepForm/Step1',
//               },
//               {
//                 path: '/form/step-form/confirm',
//                 name: 'confirm',
//                 component: './Forms/StepForm/Step2',
//               },
//               {
//                 path: '/form/step-form/result',
//                 name: 'result',
//                 component: './Forms/StepForm/Step3',
//               },
//             ],
//           },
//           {
//             path: '/form/advanced-form',
//             name: 'advancedform',
//             authority: ['admin'],
//             component: './Forms/AdvancedForm',
//           },
//         ],
//       },
//       // list
//       {
//         path: '/list',
//         icon: 'table',
//         name: 'list',
//         routes: [
//           {
//             path: '/list/table-list',
//             name: 'searchtable',
//             component: './List/TableList',
//           },
//           {
//             path: '/list/basic-list',
//             name: 'basiclist',
//             component: './List/BasicList',
//           },
//           {
//             path: '/list/card-list',
//             name: 'cardlist',
//             component: './List/CardList',
//           },
//           {
//             path: '/list/search',
//             name: 'searchlist',
//             component: './List/List',
//             routes: [
//               {
//                 path: '/list/search',
//                 redirect: '/list/search/articles',
//               },
//               {
//                 path: '/list/search/articles',
//                 name: 'articles',
//                 component: './List/Articles',
//               },
//               {
//                 path: '/list/search/projects',
//                 name: 'projects',
//                 component: './List/Projects',
//               },
//               {
//                 path: '/list/search/applications',
//                 name: 'applications',
//                 component: './List/Applications',
//               },
//             ],
//           },
//         ],
//       },
//       {
//         path: '/profile',
//         name: 'profile',
//         icon: 'profile',
//         routes: [
//           // profile
//           {
//             path: '/profile/basic',
//             name: 'basic',
//             component: './Profile/BasicProfile',
//           },
//           {
//             path: '/profile/advanced',
//             name: 'advanced',
//             authority: ['admin'],
//             component: './Profile/AdvancedProfile',
//           },
//         ],
//       },
//       {
//         name: 'result',
//         icon: 'check-circle-o',
//         path: '/result',
//         routes: [
//           // result
//           {
//             path: '/result/success',
//             name: 'success',
//             component: './Result/Success',
//           },
//           { path: '/result/fail', name: 'fail', component: './Result/Error' },
//         ],
//       },
//       {
//         name: 'exception',
//         icon: 'warning',
//         path: '/exception',
//         routes: [
//           // exception
//           {
//             path: '/exception/403',
//             name: 'not-permission',
//             component: './Exception/403',
//           },
//           {
//             path: '/exception/404',
//             name: 'not-find',
//             component: './Exception/404',
//           },
//           {
//             path: '/exception/500',
//             name: 'server-error',
//             component: './Exception/500',
//           },
//           {
//             path: '/exception/trigger',
//             name: 'trigger',
//             hideInMenu: true,
//             component: './Exception/TriggerException',
//           },
//         ],
//       },
//       {
//         name: 'account',
//         icon: 'user',
//         path: '/account',
//         routes: [
//           {
//             path: '/account/center',
//             name: 'center',
//             component: './Account/Center/Center',
//             routes: [
//               {
//                 path: '/account/center',
//                 redirect: '/account/center/articles',
//               },
//               {
//                 path: '/account/center/articles',
//                 component: './Account/Center/Articles',
//               },
//               {
//                 path: '/account/center/applications',
//                 component: './Account/Center/Applications',
//               },
//               {
//                 path: '/account/center/projects',
//                 component: './Account/Center/Projects',
//               },
//             ],
//           },
//           {
//             path: '/account/settings',
//             name: 'settings',
//             component: './Account/Settings/Info',
//             routes: [
//               {
//                 path: '/account/settings',
//                 redirect: '/account/settings/base',
//               },
//               {
//                 path: '/account/settings/base',
//                 component: './Account/Settings/BaseView',
//               },
//               {
//                 path: '/account/settings/security',
//                 component: './Account/Settings/SecurityView',
//               },
//               {
//                 path: '/account/settings/binding',
//                 component: './Account/Settings/BindingView',
//               },
//               {
//                 path: '/account/settings/notification',
//                 component: './Account/Settings/NotificationView',
//               },
//             ],
//           },
//         ],
//       },
//       {
//         component: '404',
//       },
//     ],
//   },
// ];
