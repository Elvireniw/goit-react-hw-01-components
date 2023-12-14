import React from 'react';
import css from './Statistic.module.css'

const getRandomHexColor = idx =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

export const Statistics = ({ title, stats }) => {

  return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
            {stats.map((item, idx) => (
                <li key={item.id} id={item.id} index={idx} className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
                    <span className={css.label}>{item.label}</span>
                    <span className={css.percentage}>{item.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
  )
  };