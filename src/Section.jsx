import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'
const getViewSourceUrl = o => Object(o).getViewSourceUrl ? Object(o).getViewSourceUrl(o) : ''
const Section = ({ children }) => {
  const { ui: { sectionInfo } } = useContext(Context)
  const [viewSourceUrl, setViewSourceUrl] = useState('')
  useEffect(() => {
    const obj = { baseUrl: 'https://github.com/saintkim12/themezy.john_markowitz/blob/main', ...sectionInfo }
    setViewSourceUrl(getViewSourceUrl(obj))
  }, [sectionInfo])
  return (
    <section id="main">
      <div className="view-source" title="소스 보기" onClick={() => viewSourceUrl && window.open(viewSourceUrl, '_blank')}/>
      { children }
    </section>
  )
}
export default Section
