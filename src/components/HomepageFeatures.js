import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: '🤖 ROS 2 Fundamentals',
        description: (
            <>
                Master the robotic nervous system with ROS 2. Learn nodes, topics,
                services, and actions for building intelligent humanoid robots.
            </>
        ),
    },
    {
        title: '🎮 Digital Twin Simulation',
        description: (
            <>
                Create photorealistic simulations with Gazebo and Unity. Test your
                robots safely before deploying to hardware.
            </>
        ),
    },
    {
        title: '🧠 NVIDIA Isaac AI',
        description: (
            <>
                Leverage NVIDIA Isaac for hardware-accelerated perception, VSLAM,
                and autonomous navigation for bipedal robots.
            </>
        ),
    },
    {
        title: '💬 Vision-Language-Action',
        description: (
            <>
                Build voice-controlled robots with OpenAI Whisper and LLM-based
                cognitive planning for natural human-robot interaction.
            </>
        ),
    },
];

function Feature({ title, description }) {
    return (
        <div className={clsx('col col--3')}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
