import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/AI-Humanoid-Robotics-Books/docs',
    component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs', '07e'),
    routes: [
      {
        path: '/AI-Humanoid-Robotics-Books/docs',
        component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs', 'cb2'),
        routes: [
          {
            path: '/AI-Humanoid-Robotics-Books/docs',
            component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs', 'f2f'),
            routes: [
              {
                path: '/AI-Humanoid-Robotics-Books/docs/intro',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/intro', '647'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module1/',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module1/', 'b22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module1/hands-on-lab',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module1/hands-on-lab', 'e5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module1/python-agents',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module1/python-agents', '3f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module1/ros2-fundamentals',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module1/ros2-fundamentals', 'ee1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module1/urdf-humanoids',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module1/urdf-humanoids', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module2/',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module2/', '9bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module2/gazebo-simulation',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module2/gazebo-simulation', '7eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module2/hands-on-lab',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module2/hands-on-lab', 'c1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module2/sensor-simulation',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module2/sensor-simulation', '7ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module2/unity-rendering',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module2/unity-rendering', '28e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module3/',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module3/', '94d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module3/hands-on-lab',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module3/hands-on-lab', 'eb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module3/isaac-ros',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module3/isaac-ros', 'e06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module3/isaac-sim',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module3/isaac-sim', '16b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module3/nav2',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module3/nav2', '7a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module4/',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module4/', '9ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module4/capstone-project',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module4/capstone-project', '2cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module4/cognitive-planning',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module4/cognitive-planning', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module4/hands-on-lab',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module4/hands-on-lab', '19c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/AI-Humanoid-Robotics-Books/docs/module4/voice-to-action',
                component: ComponentCreator('/AI-Humanoid-Robotics-Books/docs/module4/voice-to-action', 'ca1'),
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
    path: '/AI-Humanoid-Robotics-Books/',
    component: ComponentCreator('/AI-Humanoid-Robotics-Books/', 'a37'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
