function ExperiencePreview({ expInfo }) {
  return (
    <div className="preview-section-block">
      <h2>Experience</h2>
      <div className="preview-experience-block">
        <div className="preview-study-block">
          <div className="preview-study-header">
            <span className="preview-school-name">{expInfo.company}</span>
            <span className="preview-study-title">{expInfo.position}</span>
            <p className="preview-entry-description">{expInfo.roles}</p>
          </div>
          <div className="date-group">
            <div className="preview-study-date">
              {expInfo.startDate}{" "}
              {expInfo.endDate
                ? `- ${expInfo.endDate}`
                : expInfo.startDate
                  ? "- Present"
                  : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExperiencePreview;
