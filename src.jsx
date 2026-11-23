import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const asset = name => import.meta.env.BASE_URL + name
const emails = ['cshi30@jh.edu', 'cshi11503@gmail.com']
const profileLinks = [
  ['GitHub', 'https://github.com/cshi11503'],
  ['LinkedIn', 'https://www.linkedin.com/in/casey-shi-177818277/'],
  ['ACE Lab', 'https://acelab.me.jhu.edu/'],
  ['CV (PDF)', 'https://drive.google.com/file/d/1qsYiNva97b-dBMvG6I0Uuuz-sv9Zva3q/view?usp=sharing'],
]
const paper = 'https://doi.org/10.1109/LSENS.2026.3714994'
const article = 'https://engineering.jhu.edu/case/news/student-engineers-invent-bendable-temperature-sensor-to-avoid-overheated-devices/'
const sensorPhoto = 'https://me.jhu.edu/wp-content/uploads/2026/10/quantum4-1024x682.jpg'
const nav = [['About', 'about'], ['Projects', 'research'], ['Life', 'life']]

function Hero() {
  return <section id="top" className="hero">
    <header className="frame header">
      <a href="#top" className="brand"><span className="brand-mark">CS</span> CASEY SHI</a>
      <nav aria-label="Main navigation">{nav.map(([label, id]) => <a href={'#' + id} key={id}>{label}</a>)}</nav>
    </header>
    <div className="frame hero-body">
      <div className="hero-scene">
        <p className="eyebrow hero-affiliation">JOHNS HOPKINS UNIVERSITY</p>
        <h1>Casey <em>Shi</em></h1>
        <ul className="hero-education">
          <li>M.S.E. in Robotics <span>· Expected Dec 2026</span></li>
          <li>B.S. in Mechanical Engineering, CS minor <span>· May 2026</span></li>
        </ul>
        <img src={asset('casey-extended-branch-espresso.png')} width="1774" height="887" fetchPriority="high" alt="Illustration of Casey and a humanoid robot sitting together on a long mossy branch" />
      </div>
    </div>
  </section>
}
function SensorProjectImage() {
  const [photoUnavailable, setPhotoUnavailable] = useState(false)

  return (
    <figure>
      {photoUnavailable ? (
        <img src={asset('sensor.jpg')} alt="Illustration of a flexible waveguide with a light-emitting core" loading="lazy" />
      ) : (
        <img src={sensorPhoto} alt="The flexible quantum-dot sensor glowing green under UV light" loading="lazy" onError={() => setPhotoUnavailable(true)} />
      )}
      <figcaption>{photoUnavailable ? 'Waveguide illustration' : 'Photo: Will Kirk/JHU'}</figcaption>
    </figure>
  )
}

function App() {
  return <>
    <a className="skip" href="#about">Skip to content</a>
    <Hero />
    <main>
      <section className="frame section about" id="about" aria-labelledby="about-title">
        <figure className="portrait">
          <img src={asset('casey-graduation.jpg')} width="1536" height="2304" loading="lazy" alt="Casey Shi in graduation regalia" />
          <figcaption>Casey Shi · Baltimore, MD</figcaption>
        </figure>
        <div>
          <p className="eyebrow">ABOUT</p><h2 id="about-title">Intelligence in Motion.</h2>
          <p className="body-copy">I'm Casey (Chang) Shi, a combined B.S./M.S.E. student at Johns Hopkins University and a researcher in the Autonomous Control and Exploration (ACE) Lab, advised by Prof. Abhishek Cauligi. My research interests lie at the intersection of robot learning, embodied AI, and control, with a current focus on autonomous aerial robotics.</p>
          <p className="body-copy">With a background in mechanical engineering, robotics, and computer science, I bring an interdisciplinary perspective to research, combining computational methods with hands-on experience in hardware development, experimental validation, and system integration.</p>
          <div className="links">
            {emails.map(email => <a className="text-link" href={'mailto:' + email} key={email}>{email}</a>)}
          </div>
          <div className="links about-links">
            {profileLinks.map(([label, url]) => (
              <a className="button outline" href={url} key={label}>{label}</a>
            ))}
          </div>
        </div>
      </section>
      <section className="research section" id="research" aria-labelledby="research-title"><div className="frame">
        <p className="eyebrow">RESEARCH & ENGINEERING</p><h2 id="research-title">Projects</h2>
        <div className="projects">
          <article className="project"><figure><img src={asset('quadrotor-flight-test.webp')} alt="The custom quadrotor flying low inside a netted indoor test area" loading="lazy" /></figure><div className="project-copy"><p className="eyebrow">ACE LAB · 2025–PRESENT</p><h3>Autonomous quadrotor platform</h3><p>I built and integrated a custom quadrotor platform equipped with PX4 flight control and NVIDIA Jetson onboard computing. My current research focuses on developing a Vision-Language-Action (VLA) framework for zero-shot, goal-conditioned navigation, aiming to generate goal-directed trajectories from a single initial image and a specified target.</p><ul className="tags"><li>PX4</li><li>Jetson</li><li>MPC</li><li>VLA</li></ul></div></article>
          <article className="project"><SensorProjectImage /><div className="project-copy"><p className="eyebrow">JOHNS HOPKINS APL · 2025–2026</p><h3>Flexible quantum-dot optical sensor</h3><p>Our senior design team embedded colloidal quantum dots in a flexible, additively manufactured PDMS waveguide. We validated temperature sensing from 5 to 50 °C with ±1 °C accuracy.</p><div className="links"><a className="text-link" href={paper}>IEEE paper</a><a className="text-link" href={article}>Johns Hopkins feature</a></div></div></article>
        </div>
      </div></section>
      <section className="section life" id="life" aria-labelledby="life-title">
        <div className="frame">
          <div>
            <p className="eyebrow">LIFE</p>
            <h2 id="life-title">Outside the lab.</h2>
            <p className="body-copy">I spent part of undergrad building race cars with student teams at Virginia and Johns Hopkins.</p>
          </div>
          <div className="life-entries">
            <article className="life-card life-card-baja">
              <div className="life-art">
                <img src={asset('blue-jay-racing.png')} width="1371" height="1148" loading="lazy" alt="Illustration of Casey at the wheel of a blue Hopkins Baja buggy" />
              </div>
              <div className="life-copy">
                <p className="eyebrow">BAJA SAE · 2024–2026</p>
                <h3>Blue Jay Racing</h3>
                <p className="body-copy">I worked on chassis design and structural integration with the frame team.</p>
              </div>
            </article>
            <article className="life-card life-card-formula">
              <div className="life-art">
                <img src={asset('virginia-racing.png')} width="1774" height="887" loading="lazy" alt="Illustration of Casey sitting in a blue and orange Virginia Formula SAE race car" />
              </div>
              <div className="life-copy">
                <p className="eyebrow">FORMULA SAE · 2023–2024</p>
                <h3>Virginia Motorsports</h3>
                <p className="body-copy">I helped design and build the high-voltage battery pack for the team’s first electric race car.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
    <footer className="frame"><span>CASEY SHI · BALTIMORE, MD</span><a href="#top">Back to top</a></footer>
  </>
}

createRoot(document.getElementById('root')).render(<App />)
