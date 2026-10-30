import { useId } from 'react';
import './Input.css';

function Input({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  error = '',
  required = false,
  disabled = false,
}) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      <input
        id={id}
        className={`field-input ${error ? 'field-input-error' : ''}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
      />

      {error && (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
