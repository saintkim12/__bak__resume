import React, { useContext } from 'react'
import Context from './Context'
const Footer = () => {
  const { data: { user: { email } } } = useContext(Context)
  return (
    <footer id="footer">
      <div className="footer-content">
        <ul className="social">
          <li className="icon-item">
            <a href={ `mailto:${email}` }><i className="fas fa-envelope"></i></a>
          </li>
          <li className="icon-item">
            <a href="#"><i className="fab fa-github"></i></a>
          </li>
          <li className="icon-item">
            <a href="#"><i className="fab fa-blogger"></i></a>
          </li>
          {/* <li className="facebook"><a href="#">Facebook</a></li> */}
          {/* <li className="twitter"><a href="#">Twitter</a></li> */}
          {/* <li className="pinterest"><a href="#">Pinterest</a></li> */}
        </ul>
        <p className="copy">Copyright 2014 John Markowitz. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer
