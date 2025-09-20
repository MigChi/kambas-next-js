export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <button id="wd-collapsebtn"> Collapse All </button>
      <button id="wd-viewprogbtn"> View Progress </button>
      <select id = "wd-nodeselc" defaultValue={"PUBLISH-ALL"}>
        <option value={"PUBLISH"}> Publish All </option>
      </select>
      <button id="wd-addmodulebtn"> + Module </button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Intro, Syllabus, Agenda</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
            <li>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full-Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item">Full-Stack Developer - Chapter 2 - Creating User Interfaces with HTML</li>
              </ul>
            </li>
            <li>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li> <br />
        <li className="wd-module">
          <div className="wd-title">Week 2, Lecture 2 - Formating User Interfaces with HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Nelify</li>
              </ul>
            </li>
            <li>
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full-Stack Developer - Chapter 3 - Formating with CSS</li>
                <li className="wd-content-item">Full-Stack Developer - Chapter 4 - Making templates</li>
              </ul>
            </li>
            <li>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to user interface development</li>
                <li className="wd-content-item">Deploying to Nelify</li>
              </ul>
            </li>
          </ul>
        </li> <br />
        <li className="wd-module">
          <div className="wd-title">Week 3, Lecture 3 - Styling pages with CSS</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn what CSS is</li>
                <li className="wd-content-item">Learn how to make your own stylesheets</li>
              </ul>
            </li>
            <li>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS</li>
                <li className="wd-content-item">Custom Stylesheets using CSS</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
