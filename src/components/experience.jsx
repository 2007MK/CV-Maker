function Experience({ expInfo, setExpInfo }) {
  function handleChange(e) {
    const { name, value } = e.currentTarget;
    setExpInfo((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      <h2>Education Info</h2>
      <form>
        <div className="input-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="e.g. Google"
            value={expInfo.company}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="e.g. Software Engineer"
            value={expInfo.position}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="roles">Roles/Description</label>
          <textarea
            name="roles"
            id="roles"
            value={expInfo.roles}
            onChange={handleChange}
          ></textarea>
          <div className="input-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={expInfo.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={expInfo.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Experience;
