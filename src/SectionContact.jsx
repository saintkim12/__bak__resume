import React, { Fragment, useContext, useEffect } from 'react'
import Context from './Context'

const SectionContact = () => {
  const { ui: { hideDisplayInfo, setSectionInfo }, data: { user } } = useContext(Context)
  const { imgSrc = 'https://avatars.githubusercontent.com/u/45479131?s=460&v=4', name = '', email = '', phone = '', skype = '' } = Object(user)
  useEffect(() => {
    hideDisplayInfo()
    setSectionInfo({
      name: 'SectionContact.jsx',
      fullPath: 'src/SectionContact.jsx',
      getViewSourceUrl: ({ baseUrl, fullPath }) => [baseUrl, fullPath].join('/')
    })
  }, [])
  return (
    <Fragment>
      <div className="images_holder">
        <img src={ imgSrc } style={ { borderRadius: '30%' }} alt={ name } />
      </div>
      <div className="box_contact">
        <span className="email">{ email }</span>
        <span className="phone">{ phone }</span>
        <span className="skype">{ skype }</span>
      </div>
      <div className="clear"></div>
    </Fragment>
  )
}

export default SectionContact
