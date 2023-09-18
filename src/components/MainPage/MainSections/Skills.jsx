
function Skills({refSkills}) {
    return (
        <section className="img-png" ref={refSkills}>
            <h1 className="title-head" >تخصص ها</h1>
            <div className="section section-skill row-item">

                {
                    [...Array(15)].map(item => {
                        return (
                            <div className="skill-item ">
                                <h1>جاوااسکریپت</h1>
                                <h2>متوسط</h2>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    );
}

export default Skills;