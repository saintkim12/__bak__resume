import React, { Fragment, useEffect, useContext } from 'react'
import Context from './Context'

const SectionSkills = () => {
  const {
    ui: { hideDisplayInfo },
    data: { mySkill: { skillGroup: skillGroupList = [], mainSkill: iconSkillList = [], description = [] } }
  } = useContext(Context)
  useEffect(() => hideDisplayInfo(), [])
  return (
    <Fragment>
      <div className="skills_holder">
        { skillGroupList.filter((_, i) => i < 2).map(({ name, description, skills = [] }, i) => (
        <div key={ name } className={`column ${i > 0 ? 'column-add' : 'column'}`}>
          <h2>{ name } skills:</h2>
          <p>{ description }</p>
          <ul className="progress">{ skills.map(({ name, level }) => (
            <li key={ name }><span style={ { width: `${level}%` } }>{ name }</span></li>)) }
          </ul>
        </div>)) }
      </div>
      <ul className="plagin_list">
        { iconSkillList.map(({ name, iconSrc }) => (
        <li key={ name }><a href="#" style={ { background: `url(${iconSrc}) no-repeat 50% 50%` }}>{ name }</a></li>
        )) }
      </ul>
      { description.map((s, i) => (
        <p key={ i }>{ s }</p>
      )) }
    </Fragment>
  )
}

export default SectionSkills
