import React from 'react'
import cn from 'classnames'

import styles from './App.modules.scss'

export const App = () => {
  return (
    <div className={styles.header}>
      <h1 className={cn(styles.title, 'title--small')}>Hello from App!</h1>
    </div>
  )
}
