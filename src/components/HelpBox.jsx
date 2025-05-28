import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
