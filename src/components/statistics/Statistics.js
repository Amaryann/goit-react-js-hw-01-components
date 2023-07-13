import css from "./Statistics.module.css";
import PropTypes from 'prop-types'
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export const Statistics = ({title, stats}) =>{
    return (

<section className={css.statistics}>
  {title && (<h2 className={css.title}>{title}</h2>)}
  <ul className={css.statList}>
    {stats.map((array) => (
          <li
            className={css.item}
            key={array.id}
            style={{backgroundColor: getRandomHexColor()}}
          >
            <span className={css.label}>{array.label}</span>
            <span className={css.percentage}>{array.percentage}%</span>
          </li>
        ))}
  </ul>
</section>

    )
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,

}