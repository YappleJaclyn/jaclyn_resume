import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CSS from "csstype";

type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element;
  style?: CSS.Properties;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Web Development',
    src: require('/static/img/homepage/chrome_5o2S3X7q7z.png').default,
    description: (
      <>
        My passion in web development lies in function and accessibility.I am dedicated to crafting digital experiences that not only look great but also prioritize usability and inclusivity. With a keen eye for detail and a commitment to user-centric design, I strive to create websites that are both visually appealing and easy to navigate for all users, regardless of their abilities or devices.
      </>
    ),
  },
  {
    title: 'Robotics Programming',
    src: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Experience programming over 60 FIRST Robotics Competition robots, Kuka 5 axis arms and countless smaller robots in Java and C++. Through this I have experience with advanced PID controls, autonomous path planning, object detection, simulation, april tag detection and sensor based close loop controls.
      </>
    ),
  },
  {
    title: 'Unity & Blender',
    src: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Experience working in Unity and Blender across several different projects, including an IOS game used to monitor people with pulmonary issues, a 3D VR enviroment that simulated a factory enviroement used to gauge worker comfort around various machines, a machine learning enviroment that trained 5 Axis Kuka arms to avoid workers in a construction enviroment, animations of various FRC components and simulation of swerve FRC robots.
      </>
    ),
  },
];

function Feature({ title, src, description, style }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img style={style} src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomeFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div style={{ maxWidth: '90%', margin: '0 auto' }}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
