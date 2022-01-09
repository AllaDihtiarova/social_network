import css from './Button.module.css';

export function Button({ text, onFetchComponent }) {
  return (
    <div>
      <button className={css.button} onClick={onFetchComponent}>
        {text}
      </button>
    </div>
  );
}
