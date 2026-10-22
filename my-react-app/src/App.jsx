// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App




import { Routes, Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";



 


function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Divya R</h2>

      <div className="nav-links">
        <button className="theme-btn" onClick={toggleTheme}>
  {theme === 'light' ? ' Dark Mode' : ' Light Mode'}
</button>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/education')}>Education</button>
        <button onClick={() => navigate('/skills')}>Skills</button>
        <button onClick={() => navigate('/projects')}>Projects</button>
        <button onClick={() => navigate('/certifications')}>
          Certifications
        </button>
        <button onClick={() => navigate('/contact')}>Contact</button>
      </div>
    </nav>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home page">
      <p className="welcome">WELCOME TO MY PORTFOLIO</p>
      <h1>Hi, I'm <span>Divya R</span></h1>
      <h2>Computer Science Engineering Student</h2>

      <p>
        I am an aspiring developer interested in web development,
        problem-solving, and learning new technologies.
      </p>

      <button className="main-btn" onClick={() => navigate('/about')}>
        About Me
      </button>

      <button className="main-btn outline"
        onClick={() => navigate('/projects')}>
        View Projects
      </button>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Me</h1>
      <p>
        I am a Computer Science Engineering student at
        S.A. Engineering College, seeking an entry-level
        opportunity in the IT industry.
      </p>
      <p>
        I have basic knowledge of Java, C, Python, HTML,
        CSS, and JavaScript. I enjoy finding errors,
        correcting programs, and improving my technical skills.
      </p>
      <p>
        My goal is to become a junior developer and gain
        practical experience by working on real-world projects.
      </p>
    </div>
  );
}

function Education() {
  return (
    <div className="page">
      <h1>Education</h1>

      <div className="card">
        <h2>B.E. Computer Science and Engineering</h2>
        <p>S.A. Engineering College</p>
        <p>2023 - 2027</p>
        <p>Percentage: 89%</p>
      </div>

      <div className="card">
        <h2>Higher Secondary Certificate (HSC)</h2>
        <p>CGHSS</p>
        <p>2023</p>
        <p>Percentage: 89.16%</p>
      </div>

      <div className="card">
        <h2>Secondary School Leaving Certificate (SSLC)</h2>
        <p>CGHSS</p>
        <p>2021</p>
        <p>Percentage: 100%</p>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="page">
      <h1>My Skills</h1>

      <div className="card">
        <h2>Frontend Development</h2>
        <p>HTML, CSS, JavaScript (Basics), React (Learning)</p>
      </div>

      <div className="card">
        <h2>Programming Languages</h2>
        <p>Java, C, Python (Basics)</p>
      </div>

      <div className="card">
        <h2>Tools</h2>
        <p>Figma, WordPress, Git, GitHub</p>
      </div>

      <div className="card">
        <h2>Database</h2>
        <p>SQL (Basics), MongoDB (Project experience)</p>
      </div>
    </div>
  );
}

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>My Projects</h1>

      <div className="card">
        <h2>Movie Ticket and Snacks Booking</h2>
        <p>
          Developed a website for booking movie tickets
          and snacks using HTML, CSS, and JavaScript.
        </p>
        <p><b>Technologies:</b> HTML, CSS, JavaScript</p>
      </div>

      <div className="card">
        <h2>MobileVerse - Mobile Review Platform</h2>
        <p>
          Developed a MERN stack website for browsing
          smartphones and posting user reviews and ratings.
        </p>
        <p><b>Technologies:</b> React, Node.js, Express, MongoDB</p>
      </div>

      <button className="main-btn"
        onClick={() => navigate('/contact')}>
        Contact Me
      </button>
    </div>
  );
}

function Certifications() {
  return (
    <div className="page">
      <h1>Certifications & Internships</h1>

      <div className="card">
        <ul>
          <li>Infosys Front-End Developer Certification</li>
          <li>
            Career Essentials in Software Development -
            LinkedIn Learning (Microsoft)
          </li>
          <li>AWS Academy Graduate - Cloud Foundations</li>
          <li>Full Stack Java Internship - Approtech R&D Solutions</li>
          <li>WordPress and Figma Internship - Detquel Corp</li>
        </ul>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Me</h1>
      <p>Feel free to contact me for opportunities and collaboration.</p>

      <div className="card">
        <p>
          <b>Email:</b>{' '}
          <a href="mailto:divyaranganadhan8@gmail.com">
            divyaranganadhan8@gmail.com
          </a>
        </p>

        <p>
          <b>Phone:</b> 9345716724
        </p>

        <p>
          <b>LinkedIn:</b>{' '}
          <a
            href="https://www.linkedin.com/in/divya-r-7b16172a4"
            target="_blank"
            rel="noreferrer"
          >
            Visit LinkedIn
          </a>
        </p>

        <p>
          <b>GitHub:</b>{' '}
          <a
            href="https://github.com/divya-0824"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>
        </p>
      </div>
    </div>
  );
}


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <footer>
        <p>© 2026 Divya R | Personal Portfolio</p>
      </footer>
    </>
  );
}



export default App;
