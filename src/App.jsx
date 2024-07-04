import './App.css';
import DarkBackground from './components/background';
import SplitContainer from './components/container';
import { GitHubIcon, LinkedInIcon } from './components/svg';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <DarkBackground />
      <div className='container'>
        <SplitContainer 
          leftContent={
            <div>
              <h1>Siyasanga Njana</h1>
              <h3>Web Developer</h3>
              <h5>I Build beautiful and interactive websites</h5>
              <div className='icons'>
              <a href="https://github.com/siaLater69" target="_blank">
              <GitHubIcon fill="white" />
              </a>
              <a href="https://www.linkedin.com/in/siyasanga-njana/" target="_blank">
              <LinkedInIcon fill="blue" />
              </a>
              </div>
            </div>
          }
          rightContent={
            <div>
              <About />
              <Experience/>
              <Projects/>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default App;