import AboutMe from "./AboutMe";
import ArticleMe from "./ArticleMe";
import ContactMe from "./ContactMe";
import Skills from "./Skills";
import VideoMe from "./VideoMe";
import "./mainSections.css"
import "../media-query.css"
import Honors from "./Honors";

function MAinSections({ menu,setMenu,refContact,refArticle,refVideos,refSkills,refAboutMe,refDoc}) {
    return (
        <main onClick={()=>menu===true ? setMenu(false):null}>
            <AboutMe refAboutMe={refAboutMe}/>
            <Skills refSkills={refSkills}/>
            <Honors refDoc={refDoc}/>
            <VideoMe refVideos={refVideos}/>
            <ArticleMe refArticle={refArticle}/>
            <ContactMe refContact={refContact}/>
        </main>
    );
}

export default MAinSections;