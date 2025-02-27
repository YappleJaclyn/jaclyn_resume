import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomeFeatures from '../components/HomeFeatures';
import Heading from '@theme/Heading';
import Tabs from '../components/Tabs';
import TabItem from '../components/TabItem';
import EducationWorkFeatures from '../components/EducationWorkFeatures';
import SkillFeature from '../components/SkillFeatures';


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
              <p className="hero__subtitle">A swiss army knife engineer with experience in Full Stack Web Development, Embedded Software, 3D simulation, Computer Vision, Mechanical Design and Manufacturing</p>
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
      description="Swiss Army Knife Engineer">
      <HomepageHeader />
      <Tabs className='tabs--block'>
        <TabItem value="photos" label="Visual Sample">
          <div style={{ width: '95%', margin: '0 auto', textAlign: 'center' }}>
            <h1>2025</h1>
            <br />
            <div className="row">
              <div className="col col--3">
                <div className="col-demo"><img src={require('/static/img/2025/image01.png').default} /></div>
              </div>
              <div className="col col--6">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '90%', height: 'auto' }}><img style={{ width: '100%', height: 'auto', marginLeft: '0.00px', marginRight: '0.00px', marginTop: '-3.25%' }} src={require('/static/img/2025/image (10).png').default} /></div></div>
              </div>
              <div className="col col--3">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '96%', height: 'auto' }}><img style={{ width: '100%', height: 'auto', marginLeft: '0.00px', marginRight: '0.00px', marginTop: '-3.25%' }} src={require('/static/img/2025/image.png').default} /></div></div>
              </div>
            </div>
            <hr />
            <h1>2024</h1>
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
            <br />
            <div className="row">
              <div className="col col--3">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '95%', height: 'auto' }}><img style={{ width: '100%', height: 'auto', marginLeft: '0.00px', marginRight: '0.00px', marginTop: '-3.25%' }} src={require('/static/img/2024/Simplified_Chassis_straightwall_v3 (1).png').default} /></div></div>
              </div>
              <div className="col col--6">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '85%', height: 'auto' }}><img style={{ width: '100%', height: 'auto', marginLeft: '0.00px', marginRight: '0.00px', marginTop: '-3.25%' }} src={require('/static/img/2024/maxresdefault (1).jpg').default} /></div></div>
              </div>
              <div className="col col--3">
                <div className="col-demo"><div style={{ overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)', width: '97.5%', height: 'auto' }}><img style={{ width: '100%', height: 'auto', marginLeft: '0.00px', marginRight: '0.00px', marginTop: '-3.25%' }} src={require('/static/img/2024/image.png').default} /></div></div>
              </div>
            </div>
            <br />
            <br />
            <h1>The Everybot Documentation site</h1>
            <br />
            <img src={require('/static/img/homepage/chrome_5o2S3X7q7z.png').default} />
            <hr />
            <h1>2023</h1>
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
            <h1>2022</h1>
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
          <EducationWorkFeatures></EducationWorkFeatures>
        </TabItem>
        <TabItem value="banana" label="Skills">
          <SkillFeature></SkillFeature>
        </TabItem>
      </Tabs>
      <main>
      </main>
    </Layout >
  );
}
