import Icon from "@mdi/react";

function Sections({ sectionsList, selectedSectionId, setSelectedSectionId }) {
  const list = sectionsList.map((item) => {
    return (
      <div
        id={item.id}
        className={"section" + (item.id === selectedSectionId ? " active" : "")}
        onClick={() => setSelectedSectionId(item.id)}
      >
        <Icon className={"section-icon"} path={item.icon}></Icon>
        <h3 className="section-type">{item.type}</h3>
      </div>
    );
  });

  return <div className="sections">{list}</div>;
}
export default Sections;
