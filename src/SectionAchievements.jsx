import React, { Fragment, useContext, useEffect } from 'react'
import Timeline from './Timeline'
import Context from './Context'

const SectionAchievements = () => {
  const { ui: { showDisplayInfo } } = useContext(Context)
  useEffect(() => showDisplayInfo(), [])
  return (
    <Fragment>
      <h2>Here are my biggest achievements</h2>
      <Timeline />
    </Fragment>
  )
}

export default SectionAchievements
