import  './experience.css';
const Experience = () => {
  return (
    <div>
  <div className="card">
    <h3 className="title">Freelance Web Developer</h3>
    <p className="task">Build and maintain website for clients.
    Collaborated with clients to understand project requirements and deliver high-quality solutions.
    Build Wordpress & E-commerce websites.</p>

    <div className="minmaxContainer">
      <div className="min">
        <p className="minTemp">June 2023</p>
      </div>
      <hr width="10px"/>
      <div className="max">
        <p className="maxTemp">PRESENT</p>
      </div>
    </div>
    <span className="tech">
    <button className="tooltip">
        VueJs
    </button>
    <button className="tooltip">
        React
    </button>
    <button className="tooltip">
        Wordpress
    </button>
    <button className="tooltip">
        E-commerce
    </button>
    </span>
    
  </div>

<br/>
  <div className="card">
  <h3 className="title">Web Developer Intern</h3>

    <p className="task">Developed and maintained website pages and web applications.
    Created React components and integrated them into web applications.
    Collaborated with cross-functional teams to improve website performance and user experience.
    Utilised Python Playwright for end-to-end testing and automation.
    Worked with APIs and queried GraphQL data.
    </p>

    <div className="minmaxContainer">
      <div className="min">
        <p className="minTemp"> June 2022</p>
      </div>
      <hr width="10px"/>
      <div className="max">
        <p className="maxTemp">June 2023</p>
      </div>
    </div>
    <span className="tech">
    <button className="tooltip">
        Tailwind Css
    </button>
    <button className="tooltip">
        React
    </button>
    <button className="tooltip">
        Python
    </button>
    <button className="tooltip">
        Github
    </button>
    </span>
  </div>
    <br/>
  <div className="card">

  <h3 className="title">Computer Technician</h3>

    <p className="task">Diagnosed and repaired computer hardware and software issues.
    Provided troubleshooting support for clients.
    Conducted regular maintenance checks on computer systems to ensure optimal performance and identify potential issues before they escalated.
    Stayed updated on the latest advancements in computer technology and software to better assist clients and enhance the company's service offerings.
    Documented all repairs, installations, and configurations accurately for reference and quality assurance purposes.

    </p>

    <div className="minmaxContainer">
      <div className="min">
        <p className="minTemp"> June 2022</p>
      </div>
      <hr width="10px"/>
      <div className="max">
        <p className="maxTemp">June 2023</p>
      </div>
    </div>
  </div>
    </div> 
  )
}

export default Experience