import './Card.css';

function Card({ title, children, footer, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;

  return (
    <article className="card">
      {title && <Heading className="card-title">{title}</Heading>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </article>
  );
}

export default Card;
