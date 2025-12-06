import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ceb'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'af1'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '217'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/',
                component: ComponentCreator('/docs/module1/', '31b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/hands-on-lab',
                component: ComponentCreator('/docs/module1/hands-on-lab', '387'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/python-agents',
                component: ComponentCreator('/docs/module1/python-agents', '8b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/ros2-fundamentals',
                component: ComponentCreator('/docs/module1/ros2-fundamentals', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/urdf-humanoids',
                component: ComponentCreator('/docs/module1/urdf-humanoids', '02a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/',
                component: ComponentCreator('/docs/module2/', '860'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/gazebo-simulation',
                component: ComponentCreator('/docs/module2/gazebo-simulation', '7ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/hands-on-lab',
                component: ComponentCreator('/docs/module2/hands-on-lab', '268'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/sensor-simulation',
                component: ComponentCreator('/docs/module2/sensor-simulation', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/unity-rendering',
                component: ComponentCreator('/docs/module2/unity-rendering', '9b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/',
                component: ComponentCreator('/docs/module3/', 'acf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/hands-on-lab',
                component: ComponentCreator('/docs/module3/hands-on-lab', 'c93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/isaac-ros',
                component: ComponentCreator('/docs/module3/isaac-ros', '3b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/isaac-sim',
                component: ComponentCreator('/docs/module3/isaac-sim', '051'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/nav2',
                component: ComponentCreator('/docs/module3/nav2', '449'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/',
                component: ComponentCreator('/docs/module4/', '24f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/capstone-project',
                component: ComponentCreator('/docs/module4/capstone-project', 'af5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/cognitive-planning',
                component: ComponentCreator('/docs/module4/cognitive-planning', '65a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/hands-on-lab',
                component: ComponentCreator('/docs/module4/hands-on-lab', 'ca8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/voice-to-action',
                component: ComponentCreator('/docs/module4/voice-to-action', '5e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
