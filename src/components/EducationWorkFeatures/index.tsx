import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CSS from "csstype";

type EduFeature = {
    title: string;
    src: string;
    description: JSX.Element;
    imgStyle?: CSS.Properties;
};

const FeatureList: EduFeature[] = [
    {
        title: 'Bachelor of Science in Engineering (BSE), Computer Science, University of Michigan Ann Arbor',
        src: require('/static/img/homepage/BlockM_Blue_Background.jpg').default,
        description: (
            <>
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
            </>
        ),
        imgStyle: { width: "90%" }
    },
    {
        title: 'Technical Intern at NASA',
        src: require('/static/img/homepage/NASA_logo.svg.png').default,
        description: (
            <>
                <div className="col-demo">
                    <ul>
                        <li>Programmed React based documentation <a href="https://robonauts-everybot.github.io/Everybot-Docs/" target="_blank">website</a> to host resources for the NASA Robotics Alliance Project's low resource FIRST Robotics Competition (FRC) robot, the Everybot</li>
                        <li>Developed software to automate conversion from Google Docs to Markdown for ease of integral documentation contribution</li>
                        <li>Assisted with the design/manufacturing of the <a href="https://www.youtube.com/watch?v=o71nCB5ytRY2024" target="_blank">2024 Everybot</a> Everybot and created the public <a href="https://robonauts-everybot.github.io/Everybot-Docs/" target="_blank">CAD</a> and <a href="https://robonauts-everybot.github.io/Everybot-Docs/" target="_blank">code</a></li>
                        <li>Wrote 100 pages of technical documentation and 150 page manual that enabled 161 high schools complete the robot</li>
                        <li>Informed FIRST of technical mistakes they made with their low resource robot and provided solutions that they implemented</li>
                    </ul>
                </div>
            </>
        ),
        imgStyle: { width: "90%" }
    },
    {
        title: 'Engineering Staff at FIRST in Michigan',
        src: require('/static/img/homepage/download.png').default,
        description: (
            <>
                <div className="col col--7" style={{ fontSize: '1.083rem' }}>
                    <br />
                    <div className="col-demo">
                        <ul>
                            <li>Recruited by FIM to work with NASA's Everybot team based out of the Johnson Space Center</li>
                            <li>Directed 31 hours of instructional videos, frequently appearing on camera as the 2nd set of hands</li>
                            <li>After the 2023 season FIRST created their own version of the Everybot and based many of their resources off my work</li>
                        </ul>
                    </div>
                </div>
            </>
        ),
        imgStyle: { width: "90%" }
    },
    {
        title: 'Lead Robotics Coordinator at the Michigan Engineering Zone',
        src: require('/static/img/homepage/download (1).png').default,
        description: (
            <>
                <div className="col-demo">
                    <ul>
                        <li>Assisted with the design, fabrication, troubleshooting of CAN/electrical issues and programming of autonomous/teleoperated modes in Java and C++ for over 60 person sized robots</li>
                        <li>Identified the need to create a technical documentation team to produce guides and workshops about the fundamentals of programming, mechanical and electrical skills</li>
                        <li>Formed a team to improve the 2022 Everybot documentation, manufactured the Everybot and created a 100 page manual</li>
                        <li>Founded a sub-organization, Z3M, which creates a robot in 3 days; obtained funding for the project through grants and captained the club to a completed robot</li>
                    </ul>
                </div>
            </>
        ),
        imgStyle: { width: "90%" }
    },
    {
        title: 'Research Assistant at Computational Human Artificial Intelligence (CHAI) Lab',
        src: require('/static/img/homepage/1XOhMGLt_400x400.jpg').default,
        description: (
            <>
                <div className="col-demo">
                    <ul>
                        <li>Full stack developer of web based application used to assess and monitor impact of Parkinson’s disease on patient cognitive impairment</li>
                        <li>Designed study to evaluate effectiveness of the application alongside graduate students and a University of Michigan HCI professor</li>
                        <li>Finished prototype which allows users to provide a template and recorded reading to determine word level speaking errors</li>
                        <li>Clinicians make edits at the transcription and alignment phases in the Vue frontend while Flask is used to pass data to Deepspeech ASR and Python algorithms which create accurate initial transcriptions and template to transcript alignments</li>
                    </ul>
                </div>
            </>
        ),
        imgStyle: { width: "90%" }
    },
    {
        title: 'Research Assistant at Dynamic Project Management Lab',
        src: require('/static/img/homepage/image-22-1024x462.webp').default,
        description: (
            <>
                <div className="col-demo">
                    <ul>
                        <li>Utilized Unity's ML Agent to further the development of a VR machine learning environment used to train Kuka 5 axis robot arms to coexist with workers in a construction setting</li>
                    </ul>
                </div>
            </>
        ),
        imgStyle: { width: "90%" }
    },
];

function Feature({ title, src, description, imgStyle }: EduFeature) {
    return (
        <div>
            <div className="row">
                <div className="col col--3 ">
                    <h3 style={{ textAlign: 'center', fontSize: '1.2rem' }}>{title}</h3>
                    <div style={{ textAlign: 'center' }} className="col-demo"><div style={imgStyle}><img src={src} /></div><br /></div>
                </div>
                <div className="col col--7" style={{ fontSize: '1.083rem' }}>
                    <br />
                    <p>{description}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default function EducationWorkFeatures(): JSX.Element {
    return (
        <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
            {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
        </div>
    );
}