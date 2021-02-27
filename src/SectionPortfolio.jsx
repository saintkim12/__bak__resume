import React, { Fragment, useContext, useEffect } from 'react'
import Context from './Context'
const SectionPortfolio = () => {
  const { hideDisplayInfo } = useContext(Context)
  useEffect(() => hideDisplayInfo(), [])
  useEffect(() => {
    const { jQuery: $, jQuery } = window
    $(() => {
      $('.item-list li').mouseenter(function () {
        $(this).find($('.item-list .hover')).stop(true, true).fadeIn(600)
        return false
      })
      $('.item-list li').mouseleave(function () {
        $(this).find($('.item-list .hover')).stop(true, true).fadeOut(400)
        return false
      })
      // jQuery(document).on('click', '.menu_trigger', function (e) {
      //   e.preventDefault()
      //   window.setTimeout(function () {
      //     if (jQuery('#nav').hasClass('clicked')) {
      //       jQuery('#nav').stop(true, true).animate({ height: 'hide' }, 100)
      //       jQuery('#nav').removeClass('clicked')
      //     } else {
      //       jQuery('#nav').stop(true, true).animate({ height: 'show' }, 400)
      //       jQuery('#nav').addClass('clicked')
      //     }
      //   }, 400)
      //   return false
      // })
      jQuery('#nav').on('click', '.drops', function () {
        if (jQuery(this).hasClass('active')) {
          jQuery(this).removeClass('active').parent().next().slideUp()
        } else {
          jQuery(this).addClass('active').parent().next().slideDown()
        }
        return false
      })
      // begin add
      const $container = $('#container')
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
      $('#filters').on('click', 'li', function () {
        const filterValue = $(this).attr('data-filter')
        $container.isotope({ filter: filterValue })
        $('#filters li').removeClass('active')
        $(this).addClass('active')
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
      })(() => $('#filters li:first').click(), 100)
      $('.fancybox').fancybox({
        helpers: {
          overlay: {
            locked: false
          }
        }
      })
    })
    $(window).resize(function () {
      if ($(document).width() > 768) {
        $('#nav').addClass('active')
        $('#nav ul').attr('style', '')
        $('#nav').attr('style', '')
        $('#nav').removeClass('clicked')
        $('#nav .active').removeClass('active')
      } else {
        $('#nav').removeClass('active')
      }
    })
  }, [])
  const list = [
    { id: 1, keyword: ['web', 'key'], imgSrc: 'images/pic_01.png', title: '', description: '', detail: { imgSrc: '', contents: '' } },
    { id: 2, keyword: ['illustration', 'identity'], imgSrc: 'images/pic_1_1.png', title: '', description: '', detail: { imgSrc: '', contents: '' } },
    { id: 3, keyword: ['web', 'dtp'], imgSrc: 'images/pic_02.png', title: '', description: '', detail: { imgSrc: '', contents: '' } },
    { id: 4, keyword: ['illustration', 'key'], imgSrc: 'images/pic_03.png', title: '', description: '', detail: { imgSrc: '', contents: '' } },
    { id: 5, keyword: ['web', 'identity'], imgSrc: 'images/pic_04.png', title: '', description: '', detail: { imgSrc: '', contents: '' } },
    { id: 6, keyword: ['dtp', 'identity'], imgSrc: 'images/pic_05.png', title: '', description: '', detail: { imgSrc: '', contents: '' } },
    { id: 7, keyword: ['dtp', 'key'], imgSrc: 'images/pic_06.png', title: '', description: '', detail: { imgSrc: '', contents: '' } },
    { id: 8, keyword: ['web', 'identity'], imgSrc: 'images/pic_07.png', title: '', description: '', detail: { imgSrc: '', contents: '' } }
  ].map(({ detail: { ...detail }, ...o }) => ({
    ...o,
    title: 'voluptas assumenda',
    description: 'Sepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae',
    detail: {
      ...detail,
      imgSrc: 'images/img_pf02.jpg',
      date: '2020-01-01',
      contents: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  }))
  return (
    <Fragment>
      <h2>All works that I made</h2>
      <ul id="filters" className="sub_nav">
        <li className="active" data-filter="*">All works</li>
        <li data-filter=".web">Web design</li>
        <li data-filter=".illustration">Illustration</li>
        <li data-filter=".dtp">DTP</li>
        <li data-filter=".key">Key Visual</li>
        <li data-filter=".identity">Identity</li>
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
        { list.map(({ id, title, detail: { date, imgSrc, contents } }) => (
        <div key={ id } id={ `popup-portfolio-${id}` } className="popup_portfolio">
          <img src={ imgSrc } alt={ title } />
          <h3>{ title }</h3>
          <time dateTime={date}>Made: { date }</time>
          <p>{ contents }</p>
        </div>
        )) }
      </div>
    </Fragment>
  )
}
export default SectionPortfolio
