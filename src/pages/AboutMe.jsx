import aboutMeTools from '../assets/images/aboutMeTools.svg';
function AboutMe(){
    return(
        <div className="text-center pt-20 mx-10 text-white bg-black">
            <p className="text-2xl max-w-[70vw] mx-auto mt-10">I’m Tiba Jasim — a software engineer & data analyst transforming raw data into clear, actionable insights that drive informed decision-making. I specialize in data cleaning, analysis, and visualization.</p>
            <p className="text-lg max-w-[75vw] mx-auto mt-5">building dashboards and reports that uncover trends, optimize performance, and support strategic planning using tools like Python, SQL, Excel, and BI platforms.</p>
            <img src={aboutMeTools} alt="aboutMeTools" className="mx-auto mt-20 w-3/4"/>
        </div>
        )
}
export default AboutMe;