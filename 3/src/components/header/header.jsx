import React from 'react'
import styles from './header.module.css'
const header = () => {
  return (
    <div className={styles.header}>
        <h3 >react</h3>
        <button>login</button>
    </div>
  )
}

export default header