import React from 'react'
import Context from './Context'
// eslint-disable-next-line no-unused-vars
import SectionAchievements from './SectionAchievements'
// eslint-disable-next-line no-unused-vars
import SectionSkills from './SectionSkills'
const Section = () => {
  return (
    <Context.Provider value={ {} }>
      {/* <SectionAchievements /> */}
      <SectionSkills />
    </Context.Provider>
  )
}

export default Section
