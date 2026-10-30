import './Badge.css';

function Badge({ text, variant = 'info' }) {
  return <span className={`badge badge-${variant}`}>{text}</span>;
}

export default Badge;
