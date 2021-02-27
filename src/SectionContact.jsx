import React, { useState, Fragment, useContext, useEffect } from 'react'
import Context from './Context'

const SectionContact = () => {
  const { hideDisplayInfo } = useContext(Context)
  useEffect(() => hideDisplayInfo(), [])
  const [info] = useState({
    email: 'john_markowitz@gmail.com',
    phone: '+45 532 823 385',
    skype: 'J_mwitz'
  })
  return (
    <Fragment>
      <div className="images_holder"><img src="images/pic_08.png" alt={info.email} /></div>
      <div className="box_contact">
        <span className="email">{ info.email }</span>
        <span className="phone">{ info.phone }</span>
        <span className="skype">{ info.skype }</span>
      </div>
      <div className="clear"></div>
    </Fragment>
  )
}

export default SectionContact
