
import { useState } from "react";
import "./App.css";

const jobs = [
  {
    title: "Event Assistant",
    company: "The Event Studio",
    location: "Gulshan, Dhaka",
    time: "Today · 4 PM – 10 PM",
    pay: "৳1,200",
    type: "One-time",
    initials: "ES",
  },
  {
    title: "Social Media Intern",
    company: "Studio Social",
    location: "Dhanmondi, Dhaka",
    time: "Flexible schedule",
    pay: "৳800",
    type: "Part-time",
    initials: "SS",
  },
  {
    title: "Cafe Service Assistant",
    company: "The Daily Brew",
    location: "Banani, Dhaka",
    time: "Tomorrow · 9 AM – 3 PM",
    pay: "৳700",
    type: "Temporary",
    initials: "DB",
  },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#" className="logo">
          shift<span>mate.</span>
        </a>

        <div className="nav-links">
          <a href="#jobs">Find work</a>
          <a href="#how">How it works</a>
          <a href="#business">For businesses</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Log in</button>
          <button className="nav-cta">Get started ↗</button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="announcement">
              <span className="announcement-dot"></span>
              A smarter way to find flexible work
            </div>

            <h1>
              Your free hours,
              <br />
              <span>paid.</span>
            </h1>

            <p className="hero-description">
              Good opportunities shouldn't wait for a full-time
              schedule. Discover flexible shifts that fit your
              life, your skills and your time.
            </p>

            <div className="hero-actions">
              <a href="#jobs" className="primary-btn">
                Explore opportunities ↗
              </a>
              <a href="#how" className="secondary-btn">
                How it works
              </a>
            </div>

            <div className="hero-note">
              Made for students, freelancers and everyone in between.
            </div>
          </div>

          <div className="preview-area">
            <div className="preview-card">
              <div className="preview-header">
                <div>
                  <span className="small-label">YOUR NEXT OPPORTUNITY</span>
                  <h3>Find your next shift.</h3>
                </div>
                <span className="preview-icon">✳</span>
              </div>

              <div className="preview-job">
                <div className="preview-company-icon">E</div>
                <div className="preview-job-info">
                  <strong>Event Crew Member</strong>
                  <span>Event Studio · Gulshan</span>
                </div>
                <span className="verified">✓</span>
              </div>

              <div className="preview-details">
                <div>
                  <span>SHIFT</span>
                  <strong>4 PM – 10 PM</strong>
                </div>
                <div>
                  <span>PAY</span>
                  <strong>৳1,200</strong>
                </div>
              </div>

              <div className="preview-bottom">
                <span>● New opportunity</span>
                <span>View shift ↗</span>
              </div>
            </div>

            <div className="floating-note">
              <span className="floating-check">✓</span>
              <div>
                <strong>Verified opportunities</strong>
                <small>More confidence, less guesswork.</small>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <span>FLEXIBLE WORK</span>
          <span>✳</span>
          <span>REAL OPPORTUNITIES</span>
          <span>✳</span>
          <span>YOUR OWN SCHEDULE</span>
        </section>

        <section className="jobs-section" id="jobs">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE OPPORTUNITY BOARD</span>
              <h2>A shift that fits your life.</h2>
              <p>Explore opportunities and find your next move.</p>
            </div>

            <input
              type="text"
              className="search-input"
              placeholder="Search jobs or locations..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="job-grid">
            {filteredJobs.map((job) => (
              <article className="job-card" key={job.title}>
                <div className="job-card-top">
                  <span className="job-type">{job.type}</span>
                  <span className="job-bookmark">♡</span>
                </div>

                <div className="company-row">
                  <div className="company-avatar">{job.initials}</div>
                  <div>
                    <h3>{job.title}</h3>
                    <p>{job.company}</p>
                  </div>
                </div>

                <div className="job-meta">
                  <span>⌖ {job.location}</span>
                  <span>◷ {job.time}</span>
                </div>

                <div className="job-card-bottom">
                  <div>
                    <strong>{job.pay}</strong>
                    <small>/ shift</small>
                  </div>
                  <button className="view-job">View details ↗</button>
                </div>
              </article>
            ))}

            {filteredJobs.length === 0 && (
              <p className="empty-message">
                No matching opportunities found. Try another search.
              </p>
            )}
          </div>
        </section>

        <section className="how-section" id="how">
          <span className="eyebrow">SIMPLE BY DESIGN</span>
          <h2>Less searching. More doing.</h2>

          <div className="steps-grid">
            <div className="step">
              <span>01</span>
              <h3>Create your profile</h3>
              <p>Show your skills, interests and availability.</p>
            </div>
            <div className="step">
              <span>02</span>
              <h3>Discover your shift</h3>
              <p>Find work that fits your schedule and goals.</p>
            </div>
            <div className="step">
              <span>03</span>
              <h3>Get to work</h3>
              <p>Connect with businesses and start earning.</p>
            </div>
          </div>
        </section>

        <section className="business-section" id="business">
          <div>
            <span className="eyebrow">FOR BUSINESSES</span>
            <h2>Good people. Right when you need them.</h2>
            <p>
              Find reliable people for your next busy day,
              special event or growing team.
            </p>
          </div>
          <button className="business-btn">
            Find your people ↗
          </button>
        </section>
      </main>

      <footer className="footer">
        <a href="#" className="logo footer-logo">
          shift<span>mate.</span>
        </a>
        <p>Make time work for you.</p>
        <small>© 2026 ShiftMate. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
