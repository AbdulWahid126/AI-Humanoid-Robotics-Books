import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Start Learning 🚀
                    </Link>
                </div>
            </div>
        </header>
    );
}

function Feature({ title, description, icon }) {
    return (
        <div className={clsx('col col--3')}>
            <div className="text--center padding-horiz--md">
                <div className={styles.featureIcon}>{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Welcome to ${siteConfig.title}`}
            description="Learn Physical AI and Humanoid Robotics - From simulation to real-world deployment">
            <HomepageHeader />
            <main>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row">
                            <Feature
                                title="🤖 ROS 2 Fundamentals"
                                description="Master the robotic nervous system - learn ROS 2 nodes, topics, services, and URDF for humanoid robots."
                                icon="🤖"
                            />
                            <Feature
                                title="🎮 Digital Twin Simulation"
                                description="Build realistic simulations with Gazebo and Unity. Simulate physics, sensors, and human-robot interactions."
                                icon="🎮"
                            />
                            <Feature
                                title="🧠 NVIDIA Isaac Platform"
                                description="Leverage AI-powered perception, VSLAM, and navigation for autonomous humanoid movement."
                                icon="🧠"
                            />
                            <Feature
                                title="🗣️ Vision-Language-Action"
                                description="Integrate voice commands and LLMs to create truly intelligent, conversational robots."
                                icon="🗣️"
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.courseOverview}>
                    <div className="container">
                        <h2>Why Physical AI Matters</h2>
                        <p>
                            Humanoid robots are poised to excel in our human-centered world because they share our
                            physical form and can be trained with abundant data from interacting in human environments.
                            This represents a significant transition from AI models confined to digital environments to
                            <strong> embodied intelligence</strong> that operates in physical space.
                        </p>
                        <div className={styles.ctaSection}>
                            <Link
                                className="button button--primary button--lg"
                                to="/docs/intro">
                                Begin Your Journey →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
