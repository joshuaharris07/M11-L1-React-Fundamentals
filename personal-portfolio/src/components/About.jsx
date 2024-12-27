import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
    return (
        <div>
            <section>
                <h2>Background</h2>
                <p>I currently work as an auto claims adjuster and have done that for a few years.
                    I have been looking into becoming a Software Engineer for longer than that, and have finally decided to make the leap.
                I am driven by a love for problem-solving. I have been married for five years and we have a one year-old boy who keeps us on our toes!</p>
            </section>
            
            <div>
                <section>
                    <h2>Career Goals</h2>
                    <p>I aspire to become a Software Engineer working on creating systems and applications.</p>
                </section>
                
                <section>
                    <h2>Personal Interests</h2>
                    <p>I enjoy a good book, getting outdoors and going on adentures, and spening time with my wife, son, and dogs.</p>
                </section>
            </div>

            <section>
                <h2>Eductation</h2>
                <ul className='list-unstyled'>
                    <li>Currently learning in a Software Engineer Bootcamp</li>
                    <li>Graduated from the University of Colorado - Denver in May 2021 with a bachelors in Psychology.</li>
                    <li>Attended Front Range Community College, received an associate's degree and transferred to CU-Denver.</li>
                    <li>Graduated from Westminster High School.</li>
                </ul>
            </section>
        </div>
    );
};

export default About;

