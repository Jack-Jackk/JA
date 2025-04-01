<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jackson Abeyta - Full Stack Developer</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <style>
        /* Base Styles */
        :root {
            --light-blue: rgb(18, 170, 252);
            --neon-white: rgb(255, 255, 255);
            --dark-bg: #000000;
            --text-primary: #ffffff;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', sans-serif;
            background: var(--dark-bg);
            color: var(--text-primary);
            overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            mask-image: linear-gradient(to bottom, 
             rgba(0,0,0,1) 80%, 
             rgba(0,0,0,0) 100%
            );
            -webkit-mask-image: linear-gradient(to bottom, 
             rgba(0,0,0,1) 80%, 
             rgba(0,0,0,0) 100%
            );
        }

        .particle-fade {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20%;
            background: linear-gradient(to bottom, 
                transparent, 
                var(--dark-bg) 80%
            );
            pointer-events: none;
            z-index: 2;
        }

        .hero-content {
            text-align: center;
            z-index: 2;
            opacity: 0;
            animation: fadeInUp 1s 0.5s forwards;
        }

        .hero h1 {
            font-size: 4rem;
            background: linear-gradient(45deg, var(--light-blue), var(--neon-white));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
        }

        .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
        }

        /* Add loading curtain */
        .loading-curtain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--dark-bg);
            z-index: 9999;
            animation: curtainFade 2s ease-out forwards;
        }

        @keyframes curtainFade {
            0% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
        }   

        /* Three.js Canvas */
        .three-canvas {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            opacity: 0;
            animation: canvasFadeIn 2.5s ease-out forwards;
        }

        @keyframes canvasFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Navigation */
        .nav-menu {
            pointer-events: all; /* Ensure clickability */
            position: fixed;
            top: 2rem;
            right: 2rem;
            z-index: 1000;
        }
        .nav-links {
            width: 250px;
            pointer-events: all;
            }

        .nav-links a {
            color: var(--text-primary);
            text-decoration: none;
            font-size: 1.2rem;
        }

        .hamburger {
            width: 30px;
            height: 20px;
            position: relative;
            z-index: 1001; /* Above particle canvas */
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.5rem; }
            .nav-menu { right: 1rem; }
        }
    </style>
    <meta name="description" content="Jackson Abeyta - Full Stack Developer specializing in modern web applications and 3D experiences">
    <meta name="keywords" content="Full Stack Developer, AWS, React, Three.js, Web Development">
</head>
<body>
    <div class="loading-curtain"></div>
    <!-- Navigation -->
    <nav class="nav-menu">
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <canvas class="three-canvas"></canvas>
        <div class="hero-content">
            <h1>Jackson Abeyta</h1>
            <p class="subtitle">Full Stack Developer & Technical Architect</p>
            <div class="contact-info">
                <p>📧 jackson.abeyta@hotmail.com </p>
            </div>
        </div>
        <div class="scroll-indicator">↓</div>
    </section>

    <section class="section" id="experience">
        <div class="timeline">
            <div class="timeline-line"></div>
            
            <!-- Featured Project -->
            <div class="timeline-card featured">
                <div class="card-content">
                    <div class="card-glow"></div>
                    <h3>🚀 Featured Project: MakerMatch</h3>
                    <p class="date"> Founder/Full Stack Developer | 2022-Present</p>
                    <ul class="achievements">
                        <li>Creating an infrastructure to serve more than 50k customers and creators</li>
                        <li>Implementing algorithms for optimization of user experience</li>
                        <li>Designing a modular, scalable architecture and business model</li>
                    </ul>
                    <div class="tech-stack">
                        <span>Express</span>
                        <span>React</span>
                        <span>PostgresQL</span>
                    </div>
                </div>
            </div>

            <!-- Regular Timeline Items -->
            <div class="timeline-card">
                <div class="card-content">
                    <h3>Junior Developer @ Allwater Marine Group</h3>
                    <p class="date">2024-Present</p>
                    <ul>
                        <li>Led migration from legacy PHP system to NET MAUI stack</li>
                        <li>Learned C#, Azure, and .NET MAUI in order to create a new cross-platform codebase</li>
                        <li>Designed and implemented a clean, modern UI, with a refresh on the information and walkthroughs.</li>
                    </ul>
                </div>
            </div>
            <div class="timeline-card">
                <div class="card-content">
                    <h3>Student @ JRS Coding</h3>
                    <p class="date">May 2024-August 2024</p>
                    <ul>
                        <li>480-Hour Full-Stack Development Immersion Course</li>
                        <li>Gained a certificate of recognition from JRS Coding showing my dedication to learning, growing, and improving my coding skills everyday.</li>
                        <li>Made connections with tons of excellent programmers, and learned how to work in a team development enviroment, using project planning techniques, source control, and daily scrum meetings.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Grid Section -->
    <section class="section" id="skills">
        <h2 class="section-title">Technical Arsenal</h2>
        <div class="skills-grid">
            <div class="skill-card" data-category="frontend">
                <div class="skill-header">
                    <div class="skill-icon">⚛️</div>
                    <h3 class="skill-title">React</h3>
                </div>
                <p class="skill-desc">Advanced component architecture with hooks, Context API, and React Router</p>
            </div>
    
            <div class="skill-card" data-category="cloud">
                <div class="skill-header">
                    <div class="skill-icon">☁️</div>
                    <h3 class="skill-title">AWS</h3>
                </div>
                <p class="skill-desc">EC2, S3, Lambda, and DynamoDB deployment with Terraform infrastructure</p>
            </div>
    
            <div class="skill-card" data-category="backend">
                <div class="skill-header">
                    <div class="skill-icon">🚀</div>
                    <h3 class="skill-title">Node.js</h3>
                </div>
                <p class="skill-desc">High-performance REST/GraphQL APIs with Express and Apollo Server</p>
            </div>
            <div class="skill-card" data-category="3d">
                <div class="skill-header">
                    <div class="skill-icon">🎮</div>
                    <h3 class="skill-title">Three.js</h3>
                </div>
                <p class="skill-desc">WebGL-based 3D visualizations and interactive experiences</p>
            </div>
    
            <div class="skill-card" data-category="database">
                <div class="skill-header">
                    <div class="skill-icon">🗃️</div>
                    <h3 class="skill-title">PostgreSQL</h3>
                </div>
                <p class="skill-desc">Relational database design with query optimization and indexing</p>
            </div>
    
            <div class="skill-card" data-category="web">
                <div class="skill-header">
                    <div class="skill-icon">🌐</div>
                    <h3 class="skill-title">WebGL</h3>
                </div>
                <p class="skill-desc">Low-level graphics programming and shader development</p>
            </div>
        </div>
    </section>

    <style>
        /* Mobile Menu */
    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        background: rgba(10, 10, 15, 0.95);
        backdrop-filter: blur(10px);
        padding: 6rem 2rem;
        transition: right 0.3s ease;
    }

    .nav-active { right: 0; }

    .nav-links li {
        margin: 2rem 0;
        opacity: 0;
        transform: translateX(20px);
    }

    .hamburger .bar {
        display: block;
        width: 25px;
        height: 3px;
        background: var(--light-blue);
        margin: 5px auto;
        transition: all 0.3s ease;
    }

    .toggle .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .toggle .bar:nth-child(2) { opacity: 0; }
    .toggle .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

    /* Performance Optimizations */
    .three-canvas {
        will-change: transform;
        contain: strict;
    }

    /* Final Polish */
    [data-tooltip]::after {
        content: attr(data-tooltip);
        position: absolute;
        background: rgba(0,0,0,0.8);
        color: var(--light-blue);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 0.8rem;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.2s;
    }

    [data-tooltip]:hover::after {
        opacity: 1;
    }
        /* Work Experience Timeline */
        .section {
            padding: 8rem 2rem;
            position: relative;
        }

        .timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
        }

        .timeline-line {
            position: absolute;
            left: 50%;
            width: 4px;
            background: linear-gradient(
                to bottom,
                transparent,
                var(--light-blue),
                transparent
            );
            height: 100%;
        }

        .timeline-card {
            position: relative;
            width: 45%;
            margin: 4rem 0;
            transform: translateY(50px);
            opacity: 0;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .timeline-card:nth-child(odd) {
            left: 55%;
        }

        .timeline-card:nth-child(even) {
            left: 0;
        }

        .card-content {
            background: rgba(15, 15, 25, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 2rem;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.4s;
        }

        .timeline-card:hover .card-content {
            transform: translateZ(20px) rotateX(5deg);
        }

        .featured .card-content {
            border: 2px solid var(--neon-white);
            box-shadow: 0 0 30px rgba(43, 124, 255, 0.477);
        }

        /* Skills Grid */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 2rem;
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 2rem;
        }

        .skill-card {
            background: rgba(15, 15, 25, 0.9);
            border-radius: 15px;
            padding: 2rem;
            min-height: 200px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .skill-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                45deg,
                hsl(var(--hue), 70%, 45%),
                hsl(calc(var(--hue) + 60), 70%, 45%)
            );
            opacity: 0.1;
            z-index: 1;
            transition: opacity 0.3s;
        }

        .skill-card:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 10px 30px rgba(0, 255, 255, 0.15);
        }

        .skill-card:hover::before {
            opacity: 0.2;
        }

        .skill-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .skill-icon {
            font-size: 2rem;
            filter: drop-shadow(0 0 5px rgba(0,255,255,0.5));
        }

        .skill-title {
            font-size: 1.5rem;
            /* Fallback for older browsers */
            color: var(--neon-cyan);
            /* Gradient text with proper vendor prefixes */
            background: linear-gradient(45deg, 
                hsl(var(--hue), 70%, 60%), 
                hsl(calc(var(--hue) + 30), 70%, 60%));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }   

        /* Add hue variables to each skill card */
        .skill-card[data-category="frontend"] { --hue: 180; } /* React */
        .skill-card[data-category="cloud"] { --hue: 210; }    /* AWS */
        .skill-card[data-category="backend"] { --hue: 280; }  /* Node.js */
        .skill-card[data-category="3d"] { --hue: 120; }       /* Three.js */
        .skill-card[data-category="database"] { --hue: 240; } /* PostgreSQL */
        .skill-card[data-category="web"] { --hue: 160; }      /* WebGL */

        .skill-desc {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.95rem;
            line-height: 1.5;
        }

        .skill-tag {
            padding: 1.5rem;
            text-align: center;
            border-radius: 10px;
            background: hsl(var(--hue), 70%, 45%);
            transform-style: preserve-3d;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skill-tag:hover {
            transform: translateY(-5px) translateZ(10px);
            box-shadow: 0 10px 20px rgba(67, 161, 255, 0.506);
        }

        /* Animations */
        .reveal {
            opacity: 1;
            transform: translateY(0);
        }

        .skills-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        
        .skill-card {
            min-height: auto;
            padding: 1.5rem;
        }

        @media (max-width: 1024px) {
            .skills-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .skills-grid {
                grid-template-columns: 1fr;
            }

        @media (max-width: 768px) {
            .timeline-card {
                width: 90%;
                left: 5% !important;
            }
        }
    }
    </style>

     <!-- Education Section -->
     <section class="section" id="education">
        <h2 class="section-title">Education & Certifications</h2>
        <div class="education-grid">
            <div class="education-card">
                <div class="card-content">
                    <h3>🎓 Full Stack Web Development</h3>
                    <p class="institute">Tech University</p>
                    <p class="date">2020-2021</p>
                    <ul class="achievements">
                        <li>Mastered MERN stack architecture</li>
                        <li>98% Final Project Score</li>
                    </ul>
                    <div class="certificate-glow"></div>
                </div>
            </div>
            <!-- More education cards -->
        </div>
    </section>

    <!-- Languages & Hobbies -->
    <section class="section" id="hobbies">
        <div class="two-column">
            <div class="language-progress">
                <h2 class="section-title">Language Proficiency</h2>
    <div class="languages-grid">
        <div class="language-card" data-language="japanese">
            <div class="language-header">
                <div class="language-icon">🇯🇵 - 日本語</div>
                <h3 class="language-title">Japanese</h3>
            </div>
            <div class="progress-container">
                <div class="progress-bar" data-level="85">
                    <div class="progress-fill"></div>
                </div>
                <span class="progress-text">N2 Level</span>
            </div>
        </div>

        <div class="language-card" data-language="french">
            <div class="language-header">
                <div class="language-icon">🇫🇷 - Français</div>
                <h3 class="language-title">French</h3>
            </div>
            <div class="progress-container">
                <div class="progress-bar" data-level="70">
                    <div class="progress-fill"></div>
                </div>
                <span class="progress-text">B2 Level</span>
            </div>
        </div>

        <div class="language-card" data-language="spanish">
            <div class="language-header">
                <div class="language-icon">🇪🇸 - Español</div>
                <h3 class="language-title">Spanish</h3>
            </div>
            <div class="progress-container">
                <div class="progress-bar" data-level="60">
                    <div class="progress-fill"></div>
                </div>
                <span class="progress-text">B1 Level</span>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <footer class="section" id="contact">
        <h2 class="section-title">Let's Connect</h2>
        <form class="contact-form">
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Quantum Message 🚀</button>
        </form>
        <div class="social-links">
            <a href="https://github.com" class="social-link">
                <img src="github-icon.svg" alt="GitHub">
            </a>
            <a href="mailto:contact@jackson.dev" class="social-link">
                <img src="email-icon.svg" alt="Email">
            </a>
        </div>
    </footer>

    <style>
                /* Language Proficiency Styles */
        .languages-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 2rem;
        }

        .language-card {
            background: rgba(15, 15, 25, 0.9);
            border-radius: 15px;
            padding: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .language-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 255, 255, 0.1);
        }

        .language-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .language-icon {
            font-size: 1.8rem;
            filter: drop-shadow(0 0 5px rgba(0,255,255,0.3));
        }

        .language-title {
            font-size: 1.3rem;
            background: linear-gradient(45deg, var(--neon-cyan), var(--neon-magenta));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .progress-container {
            position: relative;
            margin-top: 1rem;
        }

        .progress-bar {
            background: rgba(255, 255, 255, 0.1);
            height: 12px;
            border-radius: 6px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta));
            width: 0;
            transition: width 1s ease;
            border-radius: 6px;
        }

        .progress-text {
            display: block;
            margin-top: 0.5rem;
            font-size: 0.9rem;
            color: var(--neon-cyan);
        }

        @media (max-width: 768px) {
            .languages-grid {
                grid-template-columns: 1fr;
            }
        }
        /* Education Section */
        .education-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 2rem;
        }

        .education-card {
            background: linear-gradient(145deg, #0f0f1a, #1a1a2f);
            border-radius: 15px;
            transform: translateX(-50px);
            opacity: 0;
            transition: all 0.6s ease;
        }

        .education-card.reveal {
            transform: translateX(0);
            opacity: 1;
        }

        /* Progress Bars */
        .progress-bar {
            background: rgba(255,255,255,0.1);
            height: 25px;
            border-radius: 12px;
            margin: 1rem 0;
            overflow: hidden;
            position: relative;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--light-blue), var(--neon-white));
            width: 0;
            transition: width 1s ease;
        }

        /* Hobbies Grid */
        .hobbies-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .hobby-icon {
            width: 80px;
            height: 80px;
            animation: float 3s ease-in-out infinite;
            filter: drop-shadow(0 0 10px rgba(64, 137, 254, 0.46));
        }

        /* Contact Form */
        .contact-form {
            max-width: 600px;
            margin: 2rem auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .contact-form input, 
        .contact-form textarea {
            background: rgba(255,255,255,0.1);
            border: 1px solid var(--light-blue);
            padding: 1rem;
            color: white;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .contact-form button {
            background: linear-gradient(45deg, var(--light-blue), var(--neon-white));
            padding: 1rem 2rem;
            border: none;
            border-radius: 8px;
            transition: transform 0.3s ease;
        }

        /* Social Links */
        .social-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 3rem;
        }

        .social-link img {
            width: 40px;
            height: 40px;
            transition: all 0.3s ease;
        }

        /* Animations */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        @media (max-width: 768px) {
            .two-column {
                flex-direction: column;
                gap: 3rem;
            }
        }
    </style>

    <script>
        // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu
    const navLinks = document.querySelector('.nav-links');
    
    // Fixed mobile menu initialization
    document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-menu')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        }
    });
});

        // Progress Bar Animation
        document.querySelectorAll('.progress-bar').forEach(bar => {
            const level = bar.dataset.level;
            bar.querySelector('.progress-fill').style.width = `${level}%`;
        });

        // Form Handling
        document.querySelector('.contact-form').addEventListener('submit', e => {
            e.preventDefault();
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });
            e.target.reset();
        });

        // Social Link Hover
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.filter = 'drop-shadow(0 0 15px rgba(43, 124, 255,0.7))';
            });
        });

        // Final Three.js Enhancements
        function createGeometryTransition() {
            const geometry = new THREE.IcosahedronGeometry(2, 2);
            const material = new THREE.MeshBasicMaterial({
                color: 0x00ffff,
                wireframe: true,
                transparent: true
            });
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            window.addEventListener('scroll', () => {
                mesh.rotation.x = window.scrollY * 0.001;
                mesh.rotation.y = window.scrollY * 0.002;
            });
        }

        // Initialize remaining components
        window.addEventListener('load', () => {
            createGeometryTransition();
            // Add smooth scroll
            // Add mobile menu functionality
            // Add final polish
        });

        // Three.js Particle System
        let scene, camera, renderer, particles;
        const mouse = { x: 0, y: 0 };

        function initThreeScene() {
            const canvas = document.querySelector('.three-canvas');
            
            // Scene setup
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ 
                canvas, 
                alpha: true,
                antialias: true 
            });
            renderer.setSize(window.innerWidth, window.innerHeight);

            // Initial clear color with alpha
            renderer.setClearColor(0x000000, 0);

            // Particle material with initial zero opacity
            const material2 = new THREE.PointsMaterial({
                size: 0.02,
                color: new THREE.Color().setHSL(0.6, 0.8, 0.7),
                transparent: true,
                opacity: 0 // Start transparent
            });

            // Animate opacity over time
            let fadeProgress = 0;
            const animateFade = () => {
            if(fadeProgress < 1) {
                fadeProgress += 0.008;
                particles.material.opacity = THREE.MathUtils.lerp(0, 0.8, fadeProgress);
                }
            };
            
             // Particle geometry
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(5000 * 3);
            
            for(let i = 0; i < 15000; i += 3) {
                positions[i] = (Math.random() - 0.5) * 10;
                positions[i+1] = (Math.random() - 0.5) * 10;
                positions[i+2] = (Math.random() - 0.5) * 10;
            }
            
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
             // Particle material with fade-in capability
            const material = new THREE.PointsMaterial({
                size: 0.02,
                color: new THREE.Color().setHSL(0.6, 0.8, 0.7),
                transparent: true,
                opacity: 0 // Start fully transparent
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            // Add initial position offset for smoother entrance
            particles.position.z = -10;
            particles.position.y = 5;       
            
            camera.position.z = 5; 
            }

            // Fade animation control
            let fadeProgress = 0;
            const fadeDuration = 10.5; // seconds

            function animateFade(deltaTime) {
                if(fadeProgress < 1) {
                    fadeProgress += deltaTime / fadeDuration;
                    particles.material.opacity = THREE.MathUtils.clamp(fadeProgress, 0, 0.8);
                }
            }

            let clock = new THREE.Clock();

        // Animation Loop
        function animate() {
            const deltaTime = clock.getDelta();

            requestAnimationFrame(animate);
            animateFade(deltaTime);
            
            particles.rotation.x += 0.001;
            particles.rotation.y += 0.001;
            
            // Mouse interaction
            particles.position.z = THREE.MathUtils.lerp(particles.position.z, 0, 0.02);
            particles.position.y = THREE.MathUtils.lerp(particles.position.y, 0, 0.02);

            camera.position.x += (mouse.x - camera.position.x) * 0.05;
            camera.position.y += (-mouse.y - camera.position.y) * 0.05;
            camera.lookAt(scene.position);
        
            renderer.render(scene, camera);
        }

        window.addEventListener('click', () => {
            confetti({
                particleCount: 30,
                angle: 90,
                spread: 45,
                origin: { x: mouse.x, y: Math.abs(mouse.y) }
            });
        });

        // Initialize
        function optimizeParticles() {
            renderer.setPixelRatio(window.devicePixelRatio > 1 ? 1 : 0.75);
            particles.material.size = window.innerWidth < 768 ? 1 : 2;
        }

        window.addEventListener('resize', () => {
            optimizeParticles();
        camera.aspect = window.innerWidth / window.innerHeight;});

        window.addEventListener('load', () => {
            initThreeScene();
            animate();
            
            // Add resize handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        });

         // Scroll Animations
         const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.timeline-card').forEach(card => {
            observer.observe(card);
        });

        // Skills Grid Shuffle
        const skillsGrid = document.querySelector('.skills-grid');
        Array.from(skillsGrid.children).forEach(tag => {
            tag.addEventListener('click', () => {
                const skills = Array.from(skillsGrid.children);
                skills.sort(() => Math.random() - 0.5);
                skillsGrid.innerHTML = '';
                skills.forEach(skill => skillsGrid.appendChild(skill));
            });
        });

        // Parallax Effect
        window.addEventListener('scroll', () => {
            document.querySelectorAll('.timeline-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const translateZ = (window.innerHeight - rect.top) * 0.1;
                card.style.transform = `translateZ(${translateZ}px)`;
            });
        });

        // Mobile Menu
        const hamburger = document.querySelector('.hamburger');
        hamburger.addEventListener('click', () => {
            document.body.classList.toggle('nav-active');
        });

    </script>
</body>
</html>