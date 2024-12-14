import clsx from 'clsx'
import React, { memo } from 'react'
import style from "./index.module.scss"
export default memo(function Homepage() {
  return (
    <div className={clsx(style.container)}>
      Hello
    </div>
  )
})
