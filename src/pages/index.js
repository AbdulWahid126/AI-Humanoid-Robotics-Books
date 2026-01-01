import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ChatWidget from '@site/src/components/ChatWidget';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.heroIcon}>🤖</div>
                    <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
                    <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
                    <div className={styles.heroDescription}>
                        <p>Master the future of robotics with hands-on learning, real-world projects, and cutting-edge AI integration</p>
                    </div>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx('button button--lg', styles.primaryButton)}
                            to="/docs/intro">
                            Start Learning 🚀
                        </Link>
                        <Link
                            className={clsx('button button--lg', styles.secondaryButton)}
                            to="/docs/module4/capstone-project">
                            View Capstone Project
                        </Link>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>4</div>
                            <div className={styles.statLabel}>Modules</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>21</div>
                            <div className={styles.statLabel}>Chapters</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>40+</div>
                            <div className={styles.statLabel}>Hours</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Welcome to ${siteConfig.title}`}
            description="Learn Physical AI and Humanoid Robotics with interactive lessons, hands-on labs, and AI-powered assistance">
            <HomepageHeader />
            <main>
                <HomepageFeatures />

                {/* Course Overview Section */}
                <section className={styles.courseOverview}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>What You'll Learn</h2>
                        <div className={styles.learningPath}>
                            <div className={styles.pathItem}>
                                <div className={styles.pathNumber}>01</div>
                                <h3>ROS 2 Fundamentals</h3>
                                <p>Build the robotic nervous system with nodes, topics, and services</p>
                            </div>
                            <div className={styles.pathItem}>
                                <div className={styles.pathNumber}>02</div>
                                <h3>Digital Twin Simulation</h3>
                                <p>Create photorealistic environments with Gazebo and Unity</p>
                            </div>
                            <div className={styles.pathItem}>
                                <div className={styles.pathNumber}>03</div>
                                <h3>NVIDIA Isaac AI</h3>
                                <p>Leverage GPU-accelerated perception and navigation</p>
                            </div>
                            <div className={styles.pathItem}>
                                <div className={styles.pathNumber}>04</div>
                                <h3>Vision-Language-Action</h3>
                                <p>Build voice-controlled robots with LLM integration</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaContent}>
                            <h2>Ready to Build the Future?</h2>
                            <p>Join thousands of developers learning Physical AI and Humanoid Robotics</p>
                            <Link
                                className={clsx('button button--lg', styles.ctaButton)}
                                to="/docs/intro">
                                Get Started Now →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <ChatWidget />
        </Layout>
    );
}
