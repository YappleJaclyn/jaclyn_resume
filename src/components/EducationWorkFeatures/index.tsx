import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CSS from "csstype";

type EduFeature = {
    title: string;
    src: string;
    description: JSX.Element;
    dates: string;
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
        dates: 'Sep 2018 - Dec 2021',
        imgStyle: { width: "90%" }
    },
    {
        title: 'Robotics Intern at NASA',
        src: require('/static/img/homepage/NASA_logo.svg.png').default,
        description: (
            <>
                <div className="col-demo">
                    <ul>
                        <li>Maintained the <a href="https://robotics.nasa.gov/" target="_blank">NASA RAP</a> website using JavaScript, PHP and SQL</li>
                        <li>Created and deployed a React based documentation <a href="https://robonauts-everybot.github.io/Everybot-Docs/" target="_blank">website</a> for the NASA Robonaut's Everybot, a low-resource FIRST Robotics Competition (FRC) robot</li>
                        <li>Developed an automated conversion from Google Docs to Markdown for ease of documentation contribution</li>
                        <li>Designed & manufactured the  Everybot in addition to creation of the public <a href="https://cad.onshape.com/documents/322c7df6642d82ddf075940f/w/8ad012ad66362b6d4f5577e0/e/e921bded1f7315514cafb5a6?renderMode=0&uiState=67c09900f01c7d1213d21fb4" target="_blank">CAD</a> and <a href="https://github.com/Robonauts-Everybot/Everybot-2025-Code" target="_blank">Java robot code</a></li>
                        <li>Built Accessible Modular Onshape CAD document for international FTC (FIRST Tech Challenge) <a href="https://cad.onshape.com/documents/a2212ec4d0ff04ecfa468fab/w/de74c2fa846c84827f4ffeb0/e/a069a0c4d53cbe62662539e1" target="_blank">Everybot</a> student use</li>
                        <li>Volunteered time to create <a href='https://cad.onshape.com/documents/0b2fddf6cbaed8ae6e810a63/w/585256f8e7c40d2046d984c7/e/4320ca0c1560b09ddf06fefd' target="_blank">community swerve generator</a>, which allowed the Everybot to <a href="https://cad.onshape.com/documents/6092fa1a75b6df7bcb1491a8/w/f9d68b609e79b6061a0e1a79/e/e58e73b32e4d959aa141624c" target='_blank'>automatically generate on top of the specified drivetrain</a></li>
                        <li>Published hundreds of pages of technical documentation and several manuals that enabled over 2000 high schools to
                            complete robots</li>
                        <li>Provided support to hundreds of students struggling with logistical and/or technical difficulties in construction of their robots</li>
                        <li> Delivered Data Collection and Analytics for FRC Robot/Drivetrain adoption rates to evaluate community health and necessity for future initiatives</li>
                    </ul>
                </div>
            </>
        ),
        dates: 'Jan 2024 - Present',
        imgStyle: { width: "100%" }
    },
    {
        title: 'Controls Engineering Consultant',
        src: require('/static/img/jobs+experience/dixie.png').default,
        description: (
            <>
                <div className="col-demo">
                    <ul>
                        <li>Designed and implemented sequence for positive pressure mode of Vacuum Seamer machine via PLC controls, completed with safety precautions and Human-Machine Interface</li>
                    </ul>
                </div>
            </>
        ),
        dates: 'Feb 2025 - Present',
        imgStyle: { width: "120%" }
    },
    {
        title: 'Engineering Staff at FIRST in Michigan',
        src: require('/static/img/homepage/download.png').default,
        description: (
            <>
                <div className="col-demo">
                    <ul>
                        <li>Acted, Directed, & Produced 31 hours of technical instruction video</li>
                        <li>Managed parts and material logistics for strict video production schedule</li>
                        <li>Developed resources for Ardunio/Raspberry Pi based robots that taught students how to code robots</li>
                    </ul>
                </div>
            </>
        ),
        dates: 'Aug 2022 - Feb 2023',
        imgStyle: { width: "100%" }
    },
    {
        title: 'Lead Robotics Coordinator at the Michigan Engineering Zone',
        src: require('/static/img/homepage/download (1).png').default,
        description: (
            <>
                <div className="col-demo">
                    <ul>
                        <li>Assisted with the design, fabrication, troubleshooting of electrical issues and programming of autonomous and teleoperated modes in Java and C++ for over 60 robots</li>
                        <li>Proposed and created a technical documentation team to produce guides and workshops for the fundamentals of programming, mechanical, and electrical skills</li>
                        <li>Formed a team to improve the 2022 Everybot documentation, manufactured the Everybot and created a 100 page manual</li>
                        <li>Founded a sub-organization, Z3M, obtained funding for the project through grants and captained the club to complete a robot in three days</li>
                    </ul>
                </div>
            </>
        ),
        dates: 'Sep 2018 - Dec 2022',
        imgStyle: { width: "100%" }
    },
    {
        title: 'Research Assistant at Computational Human Artificial Intelligence (CHAI) Lab',
        src: require('/static/img/homepage/1XOhMGLt_400x400.jpg').default,
        description: (
            <>
                <div className="col-demo">
                    <ul>
                        <li>Developed full stack web based application used to assess and monitor impact of Parkinson’s disease on patient cognitive impairment</li>
                        <li>Designed study to evaluate application effectiveness alongside graduate students and professors</li>
                        <li>Finished prototype which allowed users to provide a template and recorded reading to determine word level speaking errors</li>
                        <li>Created Vue front end for clinicians to correct transcriptions and alignments for continual model improvement</li>
                        <li>Fed Flask backend transcription data into Deepspeech ASR and custom python algorithms to generate accurate transcriptions aligned with the templates </li>
                    </ul>
                </div>
            </>
        ),
        dates: 'May 2021 - Jul 2022',
        imgStyle: { width: "60%" }
    },
    {
        title: 'Research Assistant at Dynamic Project Management Lab',
        src: require('/static/img/homepage/image-22-1024x462.webp').default,
        description: (
            <>
                <div className="col-demo">
                    <ul>
                        <li>Utilized Unity’s ML Agent to develop a VR machine learning environment used to train Kuka 5 axis robot arms for use in a busy construction setting</li>
                    </ul>
                </div>
            </>
        ),
        dates: 'May 2021 - Sep 2021',
        imgStyle: { width: "100%" }
    },
];

function Feature({ title, src, description, imgStyle, dates }: EduFeature) {
    return (
        <div>
            <div className="row">
                <div className="col col--3 ">
                    <h3 style={{ textAlign: 'center', fontSize: '1.2rem' }}>{title}</h3>
                    <div style={{ textAlign: 'center' }} className="col-demo"><div className={styles.imageBox} ><img style={imgStyle} src={src} /></div><br /></div>
                    <div style={{ textAlign: 'center', fontSize: '1.2rem' }}>{dates}</div>
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
        <div style={{ width: '95%', maxWidth: '1440px', margin: '0 auto' }}>
            {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
        </div>
    );
}