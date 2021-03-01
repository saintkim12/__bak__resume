import React, { Fragment, useContext, useEffect } from 'react'
import Context from './Context'
import $ from 'jquery'
const SectionPortfolio = () => {
  const { ui: { hideDisplayInfo }, data: { portfolio: { list = [] } } } = useContext(Context)
  const keywordFilters = list.flatMap(({ keyword = [] }) => keyword).filter((s, i, a) => a.indexOf(s) === i).sort()
  useEffect(() => hideDisplayInfo(), [])
  useEffect(() => {
    if (!list.length) return
    $(() => {
      $('.item-list')
        .off('mouseenter', 'li')
        .off('mouseleave', 'li')
        .on('mouseenter', 'li', function () {
          $(this).find($('.item-list .hover')).stop(true, true).fadeIn(600)
          return false
        }).on('mouseleave', 'li', function () {
          $(this).find($('.item-list .hover')).stop(true, true).fadeOut(400)
          return false
        })
    })
    const { jQuery } = window // get template jQuery(already injected)
    jQuery(() => {
      // begin add
      const $container = jQuery('#container')
      // init
      $container.isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'cellsByRow',
        cellsByRow: {
          columnWidth: 295,
          rowHeight: 295
        }
      })
      jQuery('#filters').on('click', 'li', function () {
        const filterValue = jQuery(this).attr('data-filter')
        $container.isotope({ filter: filterValue })
        jQuery('#filters li').removeClass('active')
        jQuery(this).addClass('active')
      })
      // 강제 이벤트 발생 처리(정렬이 꼬임)
      ;(function setAnimationTimeout (fn, timeout) {
        let start = null
        const id = requestAnimationFrame(function reqFn (timestamp) {
          if (!start) start = timestamp
          if (timestamp - start > timeout) {
            fn()
            cancelAnimationFrame(id)
          } else {
            requestAnimationFrame(reqFn)
          }
        })
        return id
      })(() => jQuery('#filters li:first').click(), 100)
      jQuery('.fancybox').fancybox({
        helpers: {
          overlay: {
            locked: false
          }
        }
      })
    })
  }, [list])
  return (
    <Fragment>
      <h2>All works that I made</h2>
      <ul id="filters" className="sub_nav">
        <li className="active" data-filter="*">All works</li>
        { keywordFilters.map(keyword => (
          <li key={ keyword } data-filter={ `.${keyword}` }>{ keyword }</li>
        )) }
      </ul>
      <ul id="container" className="item-list">
        { list.map(({ id, keyword, imgSrc, title, description }) => (
        <li key={ id } className={ `item ${keyword.join(' ')}` }>
          <div className="image">
            <img src={ imgSrc } alt={ title } />
            <div className="hover">
              {/* <a className="fancybox" rel="gallery1" data-fancybox data-src={`#popup-portfolio-${id}`}> */}
              <a className="fancybox" rel="gallery1" href={`#popup-portfolio-${id}`}>
                <div className="item-content">
                  <h4>{ title }</h4>
                  <p>{ description }</p>
                </div>
              </a>
            </div>
          </div>
        </li>
        )) }
      </ul>
      {/* Fancybox 팝업존 */}
      <div style={ { display: 'none' } }>
        { list.map(({ id, title, detail: { startDate = '', endDate = '', img = [], contents } }) => (
        <div key={ id } id={ `popup-portfolio-${id}` } className="popup_portfolio">
          {/* TODO: 슬라이드처리? */}
          { img[0] && (
          <img src={ img[0] } alt={ title } />) }
          <h3>{ title }</h3>
          <time dateTime={startDate}>Made: { `${startDate} ~ ${endDate}` }</time>
          <div className="contents">
            { contents.split('\n').map((s, i) => (
            <p key={ i }>{ s }</p>)) }
          </div>
        </div>
        )) }
      </div>
    </Fragment>
  )
}
export default SectionPortfolio
