import React from "react";

function ResumePage({
    personalData,
    skillset,
    education,
    workExperience,
    activeTheme
}) {
    const isAiStyled = activeTheme !== 'default';

    // Component for a single experience/education item
    const ExperienceItem = ({ title, subtitle, date, dateTo }) => (
        <div className="experience-item">
            <div className="item-header">
                <span className="item-title">{title}</span>
                <span className="item-dates">{date}{dateTo && ` to ${dateTo}`}</span>
            </div>
            <span className="item-subtitle">{subtitle}</span>
        </div>
    );

    // The default, single-column layout
    const DefaultLayout = () => (
        <>
            <header className="resume-header">
                <h1>{personalData.name} {personalData.familyName}</h1>
                <div className="contact-info">
                    <span>{personalData.dateOfBirth}</span>
                    <span>{personalData.phoneNumber}</span>
                </div>
            </header>
            <section className="resume-section">
                <h2>Skills</h2>
                <div className="skills-container">
                    {skillset.map((skill, index) => (
                        skill.name && <span key={index} className="skill-tag">{skill.name}: {skill.level}</span>
                    ))}
                </div>
            </section>
            <section className="resume-section">
                <h2>Work Experience</h2>
                <div className="experience-list">
                    {workExperience.map((exp, index) => (
                        <ExperienceItem key={index} title={exp.jobTitle} subtitle={exp.companyName} date={exp.startDate} dateTo={exp.endDate} />
                    ))}
                </div>
            </section>
            <section className="resume-section">
                <h2>Education</h2>
                <div className="experience-list">
                    {education.map((edu, index) => (
                        <ExperienceItem key={index} title={edu.titleOfStudy} subtitle={edu.schoolName} date={edu.dateOfStudy} />
                    ))}
                </div>
            </section>
        </>
    );

    // The new, two-column "AI" layout
    const AiLayout = () => (
        <>
            <header className="resume-header">
                <h1>{personalData.name} {personalData.familyName}</h1>
            </header>
            <main className="resume-main-content">
                <aside className="resume-sidebar">
                    <section className="resume-section">
                        <h2>Contact</h2>
                        <div className="contact-details">
                            <span>{personalData.phoneNumber}</span>
                            <span>{personalData.dateOfBirth}</span>
                        </div>
                    </section>
                    <section className="resume-section">
                        <h2>Skills</h2>
                        <div className="skills-container">
                            {skillset.map((skill, index) => (
                                skill.name && <span key={index} className="skill-tag">{skill.name}</span>
                            ))}
                        </div>
                    </section>
                </aside>
                <div className="resume-body">
                    <section className="resume-section">
                        <h2>Work Experience</h2>
                        <div className="experience-list">
                            {workExperience.map((exp, index) => (
                                <ExperienceItem key={index} title={exp.jobTitle} subtitle={exp.companyName} date={exp.startDate} dateTo={exp.endDate} />
                            ))}
                        </div>
                    </section>
                    <section className="resume-section">
                        <h2>Education</h2>
                        <div className="experience-list">
                            {education.map((edu, index) => (
                                <ExperienceItem key={index} title={edu.titleOfStudy} subtitle={edu.schoolName} date={edu.dateOfStudy} />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );

    return (
        <div className="resume-preview-container">
            <div className={`resume-sheet ${activeTheme}`}>
                {isAiStyled ? <AiLayout /> : <DefaultLayout />}
            </div>
        </div>
    );
}

export default ResumePage;