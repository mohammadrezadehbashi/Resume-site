import { Fragment, useRef } from "react";
import Header from "./Header";
import MAinSections from "./MainSections";
import './mainPage.css';
import './media-query.css';
import Footer from "./Footer";

function MainPage() {

  const refContact = useRef(null);
  const refArticle = useRef(null);
  const refVideos = useRef(null);
  const refSkills = useRef(null);
  const refAboutMe = useRef(null);
  const refDoc = useRef(null);

  const handleClick = (keyRef) => {
    switch (keyRef) {
      case (0):
        refContact.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case (1):
        refArticle.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case (2):
        refVideos.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case (3):
        refSkills.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case (4):
        refAboutMe.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case (5):
        refDoc.current?.scrollIntoView({ behavior: 'smooth' });
        break;

      default:
        break;
    }
  };


  return (
    <div>
      <Header handleClick={handleClick} />

      <MAinSections refContact={refContact}
        refArticle={refArticle}
        refVideos={refVideos}
        refSkills={refSkills}
        refAboutMe={refAboutMe}
        refDoc={refDoc}
      />

      <Footer />
    </div>
  );
}

export default MainPage;