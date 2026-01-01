import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
    {
        title: '🤖 ROS 2 Fundamentals',
        icon: '⚙️',
        description: (
            <>
                Master the robotic nervous system with ROS 2. Learn nodes, topics,
                services, and actions for building intelligent humanoid robots.
            </>
        ),
        color: '#667eea',
    },
    {
        title: '🎮 Digital Twin Simulation',
        icon: '🌐',
        description: (
            <>
                Create photorealistic simulations with Gazebo and Unity. Test your
                robots safely before deploying to hardware.
            </>
        ),
        color: '#764ba2',
    },
    {
        title: '🧠 NVIDIA Isaac AI',
        icon: '⚡',
        description: (
            <>
                Leverage NVIDIA Isaac for hardware-accelerated perception, VSLAM,
                and autonomous navigation for bipedal robots.
            </>
        ),
        color: '#f093fb',
    },
    {
        title: '💬 Vision-Language-Action',
        icon: '🗣️',
        description: (
            <>
                Build voice-controlled robots with OpenAI Whisper and LLM-based
                cognitive planning for natural human-robot interaction.
            </>
        ),
        color: '#4facfe',
    },
];

function Feature({ title, icon, description, color }) {
    return (
        <div className={clsx('col col--3')}>
            <div className={styles.featureCard} style={{ '--feature-color': color }}>
                <div className={styles.featureIcon}>{icon}</div>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDescription}>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.featuresHeader}>
                    <h2>Comprehensive Curriculum</h2>
                    <p>Everything you need to build advanced humanoid robots</p>
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
