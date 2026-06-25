import "./SectionTitle.css";

const SectionTitle = ({
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <div
      className={`section-title ${align}`}
    >
      {subtitle && (
        <span>
          {subtitle}
        </span>
      )}

      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;