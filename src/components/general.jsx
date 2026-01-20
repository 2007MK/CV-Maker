function General({ generalInfo, setGeneralInfo }) {
  function handleChange(e) {
    const { name, value } = e.currentTarget;
    setGeneralInfo((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <h2>General Info</h2>
      <form>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Harvey Specter"
            value={generalInfo.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. 123@random.com"
            value={generalInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="e.g. +12 1234567890"
            value={generalInfo.phone}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="e.g. Mumbai, India"
            value={generalInfo.location}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}

export default General;
