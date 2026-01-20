function GeneralPreview({ generalInfo }) {
  return (
    <div className="preview-cv-header">
      <h1 className="preview-name">{generalInfo.name}</h1>
      <div className="preview-contact-info">
        {generalInfo.email && <span>{generalInfo.email}</span>}
        {generalInfo.phone && <span> | {generalInfo.phone}</span>}
        {generalInfo.location && <span> | {generalInfo.location}</span>}
      </div>
    </div>
  );
}

export default GeneralPreview;
