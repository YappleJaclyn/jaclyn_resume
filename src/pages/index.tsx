import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomeFeatures from '../components/HomeFeatures';
import Heading from '@theme/Heading';
import Tabs from '../components/Tabs';
import TabItem from '../components/TabItem';


import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header style={{ padding: '2rem 2rem' }} className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className="col-demo">
              <Heading as="h1" className="hero__title">
                {siteConfig.title}
              </Heading>
              <p className="hero__subtitle">A swiss army knife engineer with experience in Full Stack Web Development, Robot Programming, 3D programs/simulation, Computer Vision, Mechanical Design and Manufacturing</p>
            </div>
          </div>
          <div className="col col--6">
            <div className="col-demo">
              <img style={{
                maxHeight: '40%',
                width: '40%',
              }} src={require('/static/img/homepage/download20240502163550.png').default} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Jack Ferguson`}
      description="Engineer">
      <HomepageHeader />
      <Tabs className='tabs--block'>
        <TabItem value="photos" label="Visual Sample" default>
          <div style={{ width: '95%', margin: '0 auto', textAlign: 'center' }}>
            <h1>2024 Robots</h1>
            <br />
            <div className="row">
              <div className="col col--3">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '100%', height: 'auto' }}><img style={{ width: '100%', height: 'auto', marginLeft: '0.00px', marginRight: '0.00px', marginTop: '-3.25%' }} src={require('/static/img/homepage/croppedEbot.png').default} /></div></div>
              </div>
              <div className="col col--3">
                <div className="col-demo"><img src={require('/static/img/homepage/chrome_COBlSlWXSJ.png').default} /></div>
              </div>
              <div className="col col--3">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '100%', height: 'auto' }}><img style={{ width: '100%', height: 'auto', marginLeft: '0.00px', marginRight: '0.00px', marginTop: '-3.25%' }} src={require('/static/img/homepage/cropped9176.jpg').default} /></div></div>
              </div>
              <div className="col col--3">
                <div className="col-demo"><img src={require('/static/img/homepage/chrome_7Dn7QjpHXG.png').default} /></div>
              </div>
            </div>
            <hr />
            <h1>The Everybot Documentation site</h1>
            <br />
            <img src={require('/static/img/homepage/chrome_5o2S3X7q7z.png').default} />
            <hr />
            <h1>2023 Robots</h1>
            <br />
            <div className="row">
              <div className="col col--4">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '100%', height: 'auto' }}><img style={{ width: '100%', height: 'auto', marginLeft: '0.00px', marginRight: '0.00px', marginTop: '0.39px' }} src={require('/static/img/homepage/maxresdefault.jpg').default} /></div></div>
              </div>
              <div className="col col--4">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '95%', height: 'auto' }}><img src={require('/static/img/homepage/chrome_o5O6V3eONn.png').default} /></div></div>
              </div>
              <div className="col col--2">
                <div className="col-demo"><img src={require('/static/img/homepage/91762023.jpg').default} /></div>
              </div>
              <div className="col col--2">
                <div className="col-demo"><img src={require('/static/img/homepage/43982023.jpg').default} /></div>
              </div>
            </div>
            <hr />
            <h1>2023 Documents</h1>
            <br />
            <div className='container'>
              <div className="row">
                <div className="col col--6">
                  <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '85%', height: 'auto' }}><img src={require('/static/img/homepage/chrome_CGdApkHa1f.png').default} /></div></div>
                </div>
                <div className="col col--6">
                  <div className="col-demo"><img src={require('/static/img/homepage/chrome_LXKv5Gta1w.png').default} /></div>
                </div>
              </div>
            </div>
            <hr />
            <h1>2022 Robots</h1>
            <br />
            <div className="row">
              <div className="col col--5">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '100%', height: 'auto' }}><img style={{ width: '100%', height: 'auto', marginLeft: '0.00px', marginRight: '0.00px', marginTop: '0.39px' }} src={require('/static/img/homepage/20230109_202524 (2).jpg').default} /></div></div>
              </div>
              <div className="col col--3">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '95%', height: 'auto' }}><img src={require('/static/img/homepage/20220212_155658.jpg').default} /></div></div>
              </div>
              <div className="col col--4">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '80%', height: 'auto' }}><img src={require('/static/img/homepage/chrome_OyITUezMDC.png').default} /></div></div>
              </div>
            </div>
          </div>
        </TabItem>
        <TabItem value="orange" label="Education & Work">
          <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto' }}>
            <div className="row">
              <div className="col col--3 ">
                <h3 style={{ textAlign: 'center' }}>Bachelor of Science in Engineering (BSE), Computer Science, University of Michigan Ann Arbor</h3>
                <div style={{ textAlign: 'center' }} className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '75%', height: 'auto' }}><img src={require('/static/img/homepage/BlockM_Blue_Background.jpg').default} /></div><br /></div>
              </div>
              <div className="col col--3" style={{ fontSize: '14pt' }}>
                <br />
                <div className="col-demo">Relevant coursework:
                  <ul>
                    <li>Data Structures and Algorithms</li>
                    <li>User Interface Development</li>
                    <li>Computer Security</li>
                    <li>Software Design for Accessibility</li>
                    <li>Computer Vision</li>
                    <li>Machine Learning</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col col--3 ">
                <h2 style={{ textAlign: 'center' }}>Technical Intern at NASA</h2>
                <div style={{ textAlign: 'center' }} className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '100%', height: 'auto' }}><img src={require('/static/img/homepage/NASA_logo.svg.png').default} /></div><br /></div>
              </div>
              <div className="col col--7" style={{ fontSize: '14pt' }}>
                <br />
                <div className="col-demo">
                  <ul>
                    <li>Programmed React based documentation <a href="https://robonauts-everybot.github.io/Everybot-Docs/" target="_blank">website</a> to host resources for the NASA Robotics Alliance Project's low resource FIRST Robotics Competition (FRC) robot, the Everybot</li>
                    <li>Developed software to automate conversion from Google Docs to Markdown for ease of integral documentation contribution</li>
                    <li>Assisted with the design/manufacturing of the <a href="https://www.youtube.com/watch?v=o71nCB5ytRY2024" target="_blank">2024 Everybot</a> Everybot and created the public <a href="https://robonauts-everybot.github.io/Everybot-Docs/" target="_blank">CAD</a> and <a href="https://robonauts-everybot.github.io/Everybot-Docs/" target="_blank">code</a></li>
                    <li>Wrote 100 pages of technical documentation and 150 page manual that enabled 161 high schools complete the robot</li>
                    <li>Informed FIRST of technical mistakes they made with their low resource robot and provided solutions that they implemented</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col col--3 ">
                <h2 style={{ textAlign: 'center' }}>Engineering Staff at FIRST in Michigan</h2>
                <div style={{ textAlign: 'center' }} className="col-demo"><img src={require('/static/img/homepage/download.png').default} /><br /></div>
              </div>
              <div className="col col--7" style={{ fontSize: '14pt' }}>
                <br />
                <div className="col-demo">
                  <ul>
                    <li>Recruited by FIM to work with NASA's Everybot team based out of the Johnson Space Center</li>
                    <li>Directed 31 hours of instructional videos, frequently appearing on camera as the 2nd set of hands</li>
                    <li>After the 2023 season FIRST created their own version of the Everybot and based many of their resources off my work</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col col--3 ">
                <h2 style={{ textAlign: 'center' }}>Lead Robotics Coordinator at the Michigan Engineering Zone</h2>
                <div style={{ textAlign: 'center' }} className="col-demo"><img src={require('/static/img/homepage/download (1).png').default} /><br /></div>
              </div>
              <div className="col col--7" style={{ fontSize: '14pt' }}>
                <br />
                <div className="col-demo">
                  <ul>
                    <li>Assisted with the design, fabrication, troubleshooting of CAN/electrical issues and programming of autonomous/teleoperated modes in Java and C++ for over 60 person sized robots</li>
                    <li>Identified the need to create a technical documentation team to produce guides and workshops about the fundamentals of programming, mechanical and electrical skills</li>
                    <li>Formed a team to improve the 2022 Everybot documentation, manufactured the Everybot and created a 100 page manual</li>
                    <li>Founded a sub-organization, Z3M, which creates a robot in 3 days; obtained funding for the project through grants and captained the club to a completed robot</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col col--3 ">
                <h2 style={{ textAlign: 'center' }}>Research Assistant at Computational Human Artificial Intelligence (CHAI) Lab</h2>
                <div style={{ textAlign: 'center' }} className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '60%', height: 'auto' }}><img src={require('/static/img/homepage/1XOhMGLt_400x400.jpg').default} /></div><br /></div>
              </div>
              <div className="col col--7" style={{ fontSize: '14pt' }}>
                <br />
                <div className="col-demo">
                  <ul>
                    <li>Full stack developer of web based application used to assess and monitor impact of Parkinson’s disease on patient cognitive impairment</li>
                    <li>Designed study to evaluate effectiveness of the application alongside graduate students and a University of Michigan HCI professor</li>
                    <li>Finished prototype which allows users to provide a template and recorded reading to determine word level speaking errors</li>
                    <li>Clinicians make edits at the transcription and alignment phases in the Vue frontend while Flask is used to pass data to Deepspeech ASR and Python algorithms which create accurate initial transcriptions and template to transcript alignments</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col col--3 ">
                <h2 style={{ textAlign: 'center' }}>Research Assistant at Dynamic Project Management Lab</h2>
                <div style={{ textAlign: 'center' }} className="col-demo"><img src={require('/static/img/homepage/image-22-1024x462.webp').default} /><br /></div>
              </div>
              <div className="col col--7" style={{ fontSize: '14pt' }}>
                <br />
                <div className="col-demo">
                  <ul>
                    <li>Utilized Unity's ML Agent to further the development of a VR machine learning environment used to train Kuka 5 axis robot arms to coexist with workers in a construction setting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabItem>
        <TabItem value="banana" label="Skills">
          <div style={{ width: '100%', maxWidth: '1600px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>Languages, Libraries & Frameworks</h1>
            <br></br><br></br>
            <div className="row">
              <div className="col col--3 ">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/C++.png').default} />
                <h1 style={{ textAlign: 'center' }}>C++</h1>
              </div>
              <div className="col col--3 ">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/JS.png').default} />
                <h1 style={{ textAlign: 'center' }}>Javascript (HTML, CSS)</h1>
              </div>
              <div className="col col--3 ">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/React.png').default} />
                <h1 style={{ textAlign: 'center' }}>React</h1>
              </div>
              <div className="col col--3 ">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Vue.png').default} />
                <h1 style={{ textAlign: 'center' }}>Vue.js</h1>
              </div>
              <div className="col col--4 ">

                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Python.png').default} />
                <h1 style={{ textAlign: 'center' }}>Python</h1>
              </div>
              <div className="col col--4 ">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Java.webp').default} />
                <h1 style={{ textAlign: 'center' }}>Java</h1>
              </div>
              <div className="col col--4">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Csharp.png').default} />
                <h1 style={{ textAlign: 'center' }}>C#</h1>
              </div>
            </div>
            <br></br>
            <hr />
            <h1 style={{ textAlign: 'center' }}>Tools</h1>
            <br></br><br></br>
            <div className="row">
              <div className="col col--3 ">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Windows.png').default} />
                <h1 style={{ textAlign: 'center' }}>Windows</h1>
              </div>
              <div className="col col--3 ">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/GitHub.png').default} />
                <h1 style={{ textAlign: 'center' }}>GitHub</h1>
              </div>
              <div className="col col--3 ">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Linux.png').default} />
                <h1 style={{ textAlign: 'center' }}>Linux</h1>
              </div>
              <div className="col col--3 ">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Excel.webp').default} />
                <h1 style={{ textAlign: 'center' }}>Excel</h1>
              </div>
              <div className="col col--4 ">

                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/VScode.png').default} />
                <h1 style={{ textAlign: 'center' }}>VS Code</h1>
              </div>
              <div className="col col--4 ">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Anaconda.png').default} />
                <h1 style={{ textAlign: 'center' }}>Anaconda</h1>
              </div>
              <div className="col col--4">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/LaTex.png').default} />
                <h1 style={{ textAlign: 'center' }}>LaTeX</h1>
              </div>
              <div className="col col--4">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Unity.png').default} />
                <h1 style={{ textAlign: 'center' }}>Unity</h1>
              </div>
              <div className="col col--4">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Blender.png').default} />
                <h1 style={{ textAlign: 'center' }}>Blender</h1>
              </div>
              <div className="col col--4">
                <img style={{ width: 'auto', height: '150px' }} src={require('/static/img/homepage/Onshape.png').default} />
                <h1 style={{ textAlign: 'center' }}>Onshape (CAD)</h1>
              </div>
            </div>
            <br></br>
            <hr />
            <h1 style={{ textAlign: 'center' }}>Machinery</h1>
            <br></br><br></br>
            <div className="row">
              <div className="col col--4 ">
                <img style={{ width: 'auto', height: '250px' }} src={require('/static/img/homepage/CNC.jpg').default} />
                <h1 style={{ textAlign: 'center' }}>CNC Router</h1>
              </div>
              <div className="col col--4 ">
                <img style={{ width: 'auto', height: '250px' }} src={require('/static/img/homepage/3DPrint.jpg').default} />
                <h1 style={{ textAlign: 'center' }}>3D Printer</h1>
              </div>
              <div className="col col--4 ">
                <img style={{ width: 'auto', height: '250px' }} src={require('/static/img/homepage/Laser.jpg').default} />
                <h1 style={{ textAlign: 'center' }}>Lasers</h1>
              </div>
              <div className="col col--4 ">
                <img style={{ width: 'auto', height: '250px' }} src={require('/static/img/homepage/Lathe.jpeg').default} />
                <h1 style={{ textAlign: 'center' }}>Lathe</h1>
              </div>
              <div className="col col--4 ">

                <img style={{ width: 'auto', height: '250px' }} src={require('/static/img/homepage/ManualMill.jpg').default} />
                <h1 style={{ textAlign: 'center' }}>Manual Mill</h1>
              </div>
              <div className="col col--4 ">
                <img style={{ width: 'auto', height: '250px' }} src={require('/static/img/homepage/Wilson.jpg').default} />
                <h1 style={{ textAlign: 'center' }}>Basic Preliminary Manual Machines</h1>
              </div>
            </div>
          </div>
        </TabItem>
      </Tabs>
      <main>
      </main>
    </Layout >
  );
}
