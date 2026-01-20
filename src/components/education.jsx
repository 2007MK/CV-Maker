function Education({ eduInfo, setEduInfo }) {
  function handleChange(e) {
    const { name, value } = e.currentTarget;
    setEduInfo((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      <h2>Education Info</h2>
      <form>
        <div className="input-group">
          <label htmlFor="schoolName">School Name</label>
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            placeholder="e.g. Harvard University"
            value={eduInfo.schoolName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="studyTitle">Study Title</label>
          <input
            type="text"
            name="studyTitle"
            id="studyTitle"
            placeholder="e.g. B.E. Computer Science Engineering"
            value={eduInfo.studyTitle}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="studyDate">Study Date</label>
          <input
            type="date"
            name="studyDate"
            id="studyDate"
            value={eduInfo.studyDate}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}

export default Education;
