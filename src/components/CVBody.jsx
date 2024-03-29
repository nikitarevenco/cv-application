import "../styles/CVBody.css";

export default function CVBody({ sections }) {
  const cvData = Object.entries(sections).map(([sectionName, sectionData]) => {
    const domSection = sectionData.map((section) => {
      const { place, description, period, location, footnote, id, hidden } =
        section;
      if (hidden) {
        return null;
      }
      return (
        <section className="section-content" key={id}>
          <p className="place">{place}</p>
          <p className="description">{description}</p>
          <p className="period">{period}</p>
          <p className="location">{location}</p>
          <p className="footnote">{footnote}</p>
        </section>
      );
    });
    if (domSection.filter((el) => el !== null).length === 0) {
      return null;
    }
    return (
      <article className="experience" key={sectionName}>
        <h1 className="section-name">{sectionName}</h1>
        {domSection}
      </article>
    );
  });

  return <div className="CVBody">{cvData}</div>;
}
