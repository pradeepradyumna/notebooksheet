import React from 'react'
import styles from './styles.module.css'

export const Notebook = ({ heading, items }) => {
  return (
    <div className={styles.card}>
      <div className={styles.notebook}>
        <h4 className={styles.notebookp}>{heading}</h4>
        <ul>
          {items.map((item) => (
            <li key={Math.random() * 1000}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
