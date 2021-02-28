import React, { Fragment, useContext, useEffect, useState } from 'react'
import $ from 'jquery'
import Context from './Context'

const Header = ({ children }) => {
  const [userName] = useState('saintkim12')
  useEffect(() => {
    document.title = userName
  }, [userName])
  const { displayInfo = false } = useContext(Context)
  useEffect(() => {
    $(document).off('click', '.menu_trigger')
      .on('click', '.menu_trigger', function (e) {
        e.preventDefault()
        // window.setTimeout(function () {
        if ($('#nav').hasClass('clicked')) {
          $('#nav').stop(true, true).animate({ height: 'hide' }, 100)
          $('#nav').removeClass('clicked')
        } else {
          $('#nav').stop(true, true).animate({ height: 'show' }, 400)
          $('#nav').addClass('clicked')
        }
        // }, 400)
        return false
      })
    $('#nav').off('click', '.drops')
      .on('click', '.drops', function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active').parent().next().slideUp()
        } else {
          $(this).addClass('active').parent().next().slideDown()
        }
        return false
      })
    $(window).resize(function () {
      if ($(document).width() > 768) {
        // $('#nav').addClass('active')
        $('#nav ul').attr('style', '')
        $('#nav').attr('style', '')
        $('#nav').removeClass('clicked')
        // $('#nav .active').removeClass('active')
      } else {
        // $('#nav').removeClass('active')
      }
    })
  }, [])
  return (
    <header id="header">
      { children }
      { displayInfo && (
        <Fragment>
          <h1 className="logo">{ userName }</h1>
          <h2 className="slogan">Web Developer</h2>
        </Fragment>) }
    </header>
  )
}
export default Header
