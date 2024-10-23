import React from 'react'


export default function nav() {
  return (
    <div className="bg-image" >
        <header>
        <nav>
            <div class="logo">Credennz</div>
            <div class="hamburger" id="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul id="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#company">Company</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact" class="contact-btn">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="h-hero">
            <div class="hd">
                <img src="/img/ss1.png" alt="Graph Icon" class="graph-icon graph-icon-1" />
                <img src="/img/ss2.png" alt="Graph Icon" class="graph-icon graph-icon-2" />
                <h2>HELPING YOU WITH</h2>
                <h1>AI and Tech</h1>
                <p>Specializing in crafting data-driven outputs and tech <br />development solutions</p>
                <button class="cta-btn">Get Quote </button>
            </div>
        </section>
        <section class="services">
            <div class="service-card">
                <img src="/img/ss3.png" alt="Search Icon" class="service-icon"/>
                <h3>Lorem Ipsum</h3>
                <p>Maximize Visibility and Conversions with Precision-targeted Ads through Our Expert Paid Search Campaigns.</p>
                <a href="#" class="learn-more">Learn more →</a>
            </div>
            <div class="service-card">
                <img src="/img/ss4.png" alt="Chart Icon" class="service-icon" />
                <h3>Lorem Ipsum</h3>
                <p>Gain Insights and Track Performance with Robust Analytics and Reporting.</p>
                <a href="#" class="learn-more">Learn more →</a>
            </div>
            <div class="service-card">
                <img src="/img/ss4.png" alt="Social Media Icon" class="service-icon" />
                <h3>Lorem Ipsum</h3>
                <p>Amplify Reach with Strategic Paid Social Media Advertising.</p>
                <a href="#" class="learn-more">Learn more →</a>
            </div>
        </section>
    </main>

    </div>
  )
}
