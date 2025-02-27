import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CSS from "csstype";

type SkillFeature = {
    title: string;
    src: string;
    colType: string;
    imgStyle?: CSS.Properties;
    colStyle?: CSS.Properties;
};


const LanguageList: SkillFeature[] = [
    {
        title: 'C++',
        src: require('/static/img/homepage/C++.png').default,
        colType: 'col col--3',
    },
    {
        title: 'Javascript (HTML, CSS)',
        src: require('/static/img/homepage/JS.png').default,
        colType: 'col col--3',
    },
    {
        title: 'React',
        src: require('/static/img/homepage/React.png').default,
        colType: 'col col--3',
    },
    {
        title: 'Vue.js',
        src: require('/static/img/homepage/Vue.png').default,
        colType: 'col col--3',
    },
    {
        title: 'Python',
        src: require('/static/img/homepage/Python.png').default,
        colType: 'col col--4',
    },
    {
        title: 'Java',
        src: require('/static/img/homepage/Java.webp').default,
        colType: 'col col--4',
    },
    {
        title: 'C#',
        src: require('/static/img/homepage/Csharp.png').default,
        colType: 'col col--4',
    },
];

const ToolList: SkillFeature[] = [
    {
        title: 'Windows',
        src: require('/static/img/homepage/Windows.png').default,
        colType: 'col col--3',
    },
    {
        title: 'Linux',
        src: require('/static/img/homepage/Linux.png').default,
        colType: 'col col--3',
    },
    {
        title: 'GitHub',
        src: require('/static/img/homepage/GitHub.png').default,
        colType: 'col col--3',
    },
    {
        title: 'VS Code',
        src: require('/static/img/homepage/VScode.png').default,
        colType: 'col col--3',
    },
    {
        title: 'Onshape (CAD)',
        src: require('/static/img/homepage/Onshape.png').default,
        colType: 'col col--4',
        colStyle: { marginTop: '25px' }
    },
    {
        title: 'Unity',
        src: require('/static/img/homepage/Unity.png').default,
        colType: 'col col--4',
        colStyle: { marginTop: '25px' }
    },
    {
        title: 'Blender',
        src: require('/static/img/homepage/Blender.png').default,
        colType: 'col col--4',
        colStyle: { marginTop: '25px' }
    },
    {
        title: 'Excel',
        src: require('/static/img/homepage/Excel.webp').default,
        colType: 'col col--4',
        colStyle: { marginTop: '25px' }
    },
    {
        title: 'Anaconda',
        src: require('/static/img/homepage/Anaconda.png').default,
        colType: 'col col--4',
        colStyle: { marginTop: '25px' }
    },
    {
        title: 'LaTeX',
        src: require('/static/img/homepage/LaTex.png').default,
        colType: 'col col--4',
        colStyle: { marginTop: '25px' }
    },
];
const MachineList: SkillFeature[] = [
    {
        title: 'CNC Router',
        src: require('/static/img/homepage/CNC.jpg').default,
        colType: 'col col--4',
        imgStyle: { height: '200px' }
    },
    {
        title: '3D Printer',
        src: require('/static/img/homepage/3DPrint.jpg').default,
        colType: 'col col--4',
        imgStyle: { height: '200px' }
    },
    {
        title: 'Lasers',
        src: require('/static/img/homepage/Laser.jpg').default,
        colType: 'col col--4',
        imgStyle: { height: '200px' }
    },
    {
        title: 'Lathe',
        src: require('/static/img/homepage/Lathe.jpeg').default,
        colType: 'col col--4',
        imgStyle: { height: '200px' }
    },
    {
        title: 'Manual Mill',
        src: require('/static/img/homepage/ManualMill.jpg').default,
        colType: 'col col--4',
        imgStyle: { height: '200px' }
    },
    {
        title: 'Basic Preliminary Manual Machines',
        src: require('/static/img/homepage/Wilson.jpg').default,
        colType: 'col col--4',
        imgStyle: { height: '200px' }
    },
];


function Feature({ title, src, colType, imgStyle, colStyle }: SkillFeature) {
    return (
        <div className={colType} style={colStyle}>
            <img className={styles.imgCSSStyle} style={imgStyle} src={src} />
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
        </div>
    );
}



export default function SkillFeature(): JSX.Element {
    return (
        <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>Languages, Libraries & Frameworks</h1>
            <br></br><br></br>
            <div className="row">
                {LanguageList.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
            <br></br>
            <hr />
            <h1 style={{ textAlign: 'center' }}>Tools</h1>
            <br></br><br></br>
            <div className="row">
                {ToolList.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
            <br></br>
            <hr />
            <h1 style={{ textAlign: 'center' }}>Machinery</h1>
            <br></br><br></br>
            <div className="row">
                {MachineList.map((props, idx) => (
                    <Feature key={idx} {...props} />
                ))}
            </div>
        </div>
    );
}