import css from './Post.module.css';

export function Post({
  name,
  location,
  avatar,
  text,
  followers,
  views,
  likes,
}) {
  return (
    <div className={css.container}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={css.avatar}
          width="100px"
          height="100px"
        />
        <p className={css.name}>{name}</p>
        <p className={css.location}>{location}</p>
      </div>

      <div className={css.description}>
        <p className={css.text}>{text}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
