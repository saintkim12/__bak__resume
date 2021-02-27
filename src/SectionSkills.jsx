import React, { useState, Fragment, useEffect } from 'react'

const SectionSkills = () => {
  const [skillGroupList, setSkillGroupList] = useState([])
  const [iconSkillList, setIconSkillList] = useState([])
  useEffect(() => {
    Promise.resolve({
      data: {
        skillGroup: [{
          name: 'Graphic',
          description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
          skills: [
            { name: 'Photoshop', level: 70 },
            { name: 'Illustrator', level: 60 },
            { name: 'InDesign', level: 80 },
            { name: 'Flash', level: 20 }
          ]
        },
        {
          name: 'Development',
          description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis. Perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
          skills: [
            { name: 'html', level: 70 },
            { name: 'Wordpress', level: 70 },
            { name: 'jQuery', level: 70 },
            { name: 'SEO', level: 70 }
          ]
        }],
        iconSkill: [
          { name: 'ps', iconSrc: 'images/icon_ps.png' },
          { name: 'ai', iconSrc: 'images/icon_ai.png' },
          { name: 'ld', iconSrc: 'images/icon_ld.png' },
          { name: 'fl', iconSrc: 'images/icon_fl.png' },
          { name: 'html', iconSrc: 'images/icon_html.png' },
          { name: 'wp', iconSrc: 'images/icon_wp.png' },
          { name: 'jq', iconSrc: 'images/icon_jq.png' },
          { name: 'seo', iconSrc: 'images/icon_seo.png' }
        ]
      }
    }).then(({ data: { skillGroup = [], iconSkill = [] } }) => {
      setSkillGroupList(skillGroup)
      setIconSkillList(iconSkill)
    })
  }, [])
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
      {/* <ul className="plagin_list"> */}
        {/* <li className="li_1"><a href="#">ps</a></li> */}
        {/* <li className="li_2"><a href="#">ai</a></li> */}
        {/* <li className="li_3"><a href="#">ld</a></li> */}
        {/* <li className="li_4"><a href="#">fl</a></li> */}
        {/* <li className="li_5"><a href="#">html</a></li> */}
        {/* <li className="li_6"><a href="#">wp</a></li> */}
        {/* <li className="li_7"><a href="#">jq</a></li> */}
        {/* <li className="li_8"><a href="#">seo</a></li> */}
      {/* </ul> */}
      {/* <ul className="plagin_list none"> */}
        {/* <li className="li_1"><a href="#">ps</a></li> */}
        {/* <li className="li_2"><a href="#">ai</a></li> */}
        {/* <li className="li_3"><a href="#">ld</a></li> */}
        {/* <li className="li_4"><a href="#">fl</a></li> */}
      {/* </ul> */}
      {/* <ul className="plagin_list none"> */}
        {/* <li className="li_5"><a href="#">html</a></li> */}
        {/* <li className="li_6"><a href="#">wp</a></li> */}
        {/* <li className="li_7"><a href="#">jq</a></li> */}
        {/* <li className="li_8"><a href="#">seo</a></li> */}
      {/* </ul> */}
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.</p>
      <p>Qui officia deserunt mollitia animi, id est laborum et dolorum fuga. <span>Et harum quidem rerum facilis est et expedita distinctio</span> . Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
    </Fragment>
  )
}

export default SectionSkills
