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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className="col-demo">
              <Heading as="h1" className="hero__title">
                {siteConfig.title}
              </Heading>
              <p className="hero__subtitle">A swiss army knife engineer with experience in Full Stack Web Development, Robot Programming, 3D programs/simulation, Mechanical Design and Manufacturing</p>
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
        <TabItem value="photos" label="Visual Sample">
          <div style={{ width: '95%', margin: '0 auto', textAlign: 'center' }}>
            <div className="row">
              <div className="col col--3">
                <div className="col-demo"><img src={require('/static/img/homepage/image_0.d6a5e49.1200.png').default} /></div>
              </div>
              <div className="col col--3">
                <div className="col-demo"><img src={require('/static/img/homepage/chrome_COBlSlWXSJ.png').default} /></div>
              </div>
              <div className="col col--3">
                <div className="col-demo"><img src={require('/static/img/homepage/20240329_105107.jpg').default} /></div>
              </div>
              <div className="col col--3">
                <div className="col-demo"><img src={require('/static/img/homepage/chrome_7Dn7QjpHXG.png').default} /></div>
              </div>
            </div>
            <p>My 2024 Robots</p>
            <img src={require('/static/img/homepage/chrome_5o2S3X7q7z.png').default} />
            <p>The Documenation site I created for the Everybot</p>
          </div>
        </TabItem>
        <TabItem value="orange" label="Education & Experience" default>
          <div style={{ width: '95%', margin: '0 auto' }}>
            <div className="row">
              <div className="col col--3 ">
                <h2 style={{ textAlign: 'center' }}>Graduated from the University of Michigan with a Bachelor of Science in Engineering for Computer Science</h2>
                <div style={{ textAlign: 'center' }} className="col-demo"><img src={require('/static/img/homepage/BlockM_Blue_Background.jpg').default} /><br /></div>
              </div>
              <div className="col col--3">
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
                <div style={{ textAlign: 'center' }} className="col-demo"><img src={require('/static/img/homepage/NASA_logo.svg.png').default} /><br /></div>
              </div>
              <div className="col col--3">
                <br />
                <div className="col-demo">
                  <ul>
                    <li>Programmed React based documentation website to host resources for the NASA Robotics Alliance Project's low resource FIRST Robotics Competition (FRC) robot, the Everybot</li>
                    <li>Developed software to automate conversion from Google Docs to Markdown for ease of integral contribution</li>
                    <li>Assisted with the design/manufacturing of the 2024 Everybot and created the public CAD and code</li>
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
              <div className="col col--3">
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
              <div className="col col--3">
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
          </div>
        </TabItem>
        <TabItem value="banana" label="Banana">
          This is a banana 🍌
        </TabItem>
      </Tabs>
      <main>
      </main>
    </Layout >
  );
}
