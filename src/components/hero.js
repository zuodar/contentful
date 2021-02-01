import React from 'react'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{data.name}</h3>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
