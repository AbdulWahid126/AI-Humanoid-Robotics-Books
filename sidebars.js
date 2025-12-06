/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    tutorialSidebar: [
        'intro',
        {
            type: 'category',
            label: 'Module 1: The Robotic Nervous System (ROS 2)',
            items: [
                'module1/index',
                'module1/ros2-fundamentals',
                'module1/python-agents',
                'module1/urdf-humanoids',
                'module1/hands-on-lab',
            ],
        },
        {
            type: 'category',
            label: 'Module 2: The Digital Twin (Gazebo & Unity)',
            items: [
                'module2/index',
                'module2/gazebo-simulation',
                'module2/unity-rendering',
                'module2/sensor-simulation',
                'module2/hands-on-lab',
            ],
        },
        {
            type: 'category',
            label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
            items: [
                'module3/index',
                'module3/isaac-sim',
                'module3/isaac-ros',
                'module3/nav2',
                'module3/hands-on-lab',
            ],
        },
        {
            type: 'category',
            label: 'Module 4: Vision-Language-Action (VLA)',
            items: [
                'module4/index',
                'module4/voice-to-action',
                'module4/cognitive-planning',
                'module4/capstone-project',
                'module4/hands-on-lab',
            ],
        },
    ],
};

export default sidebars;
