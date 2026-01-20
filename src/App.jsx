import "./App.css";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiAccount, mdiBriefcase, mdiGraph, mdiSchool } from "@mdi/js";
import Sections from "./components/section";
import General from "./components/general";
import GeneralPreview from "./components/generalPreview";
import Education from "./components/education";
import EducationPreview from "./components/educationPreview";
import Experience from "./components/experience";
import ExperiencePreview from "./components/experiencePreview";

function App() {
  const sectionsList = [
    {
      id: 0,
      type: "personal",
      icon: mdiAccount,
    },
    {
      id: 1,
      type: "education",
      icon: mdiSchool,
    },
    {
      id: 2,
      type: "Experience",
      icon: mdiBriefcase,
    },
    {
      id: 3,
      type: "Skills",
      icon: mdiGraph,
    },
  ];

  const [selectedSectionId, setSelectedSectionId] = useState(0);

  // General Info
  const [generalInfo, setGeneralInfo] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  // Education
  const [eduInfo, setEduInfo] = useState([
    {
      id: 1,
      schoolName: "",
      studyTitle: "",
      date: "",
    },
    {
      id: 2,
      schoolName: "",
      studyTitle: "",
      date: "",
    },
  ]);

  // Experience
  const [expInfo, setExpInfo] = useState([
    {
      id: 2,
      company: "",
      position: "",
      roles: "",
      startDate: "",
      endDate: "",
    },
  ]);

  // Skills
  const [skillsInfo, setSkillsInfo] = useState([
    {
      id: 3,
      skillName: "",
    },
  ]);

  return (
    <>
      <h1 className="page-title">CV Maker</h1>
      <div className="cv-input-and-preview">
        <div className="input">
          <Sections
            sectionsList={sectionsList}
            selectedSectionId={selectedSectionId}
            setSelectedSectionId={setSelectedSectionId}
          ></Sections>
          <div className="form">
            {selectedSectionId === 0 && (
              <General
                generalInfo={generalInfo}
                setGeneralInfo={setGeneralInfo}
              ></General>
            )}
            {selectedSectionId === 1 && (
              <Education eduInfo={eduInfo} setEduInfo={setEduInfo}></Education>
            )}
            {selectedSectionId === 2 && (
              <Experience
                expInfo={expInfo}
                setExpInfo={setExpInfo}
              ></Experience>
            )}
          </div>
        </div>
        <div className="preview">
          <GeneralPreview generalInfo={generalInfo}></GeneralPreview>
          <EducationPreview eduInfo={eduInfo}></EducationPreview>
          <ExperiencePreview expInfo={expInfo}></ExperiencePreview>
        </div>
      </div>
    </>
  );
}

export default App;
