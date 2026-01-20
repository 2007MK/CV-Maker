function EducationPreview({ eduInfo }) {
  return (
    <div className="preview-section-block">
      <h2>Education</h2>
      <div className="preview-study-block">
        <div className="preview-study-header">
          <span className="preview-school-name">{eduInfo.schoolName}</span>
          <span className="preview-study-title">{eduInfo.studyTitle}</span>
        </div>
        <div className="preview-study-date">{eduInfo.studyDate}</div>
      </div>
    </div>
  );
}

export default EducationPreview;
