import React, { useContext } from 'react'
import Context from './Context'

const Timeline = () => {
  const {
    data: { achievements: { timeline = [] } }
  } = useContext(Context)
  return (
    <div className="box_timeline_holder">
      <div className="box_timeline">
        <ul>{timeline.map(({ date, title, description, key = date }) => (
          <li key={ key }>
            <div className="date"><span>{ date }</span></div>
            <h3>{ title }</h3>
            <p>{ description }</p>
          </li>))}
        </ul>
      </div>
    </div>
  )
}
export default Timeline

// <li>
// <div className="date">
//   <span>12/09</span>
// </div>
// <h3>tempora incidunt</h3>
// <p>Dolor sit consectetur adipisicing elit, sed do eiusmod tempor</p>
// </li>
// <li>
// <div className="date">
//   <span>02/10</span>
// </div>
// <h3>nemo enim ipsam</h3>
// <p>Laudantium totam rem aperiam eaque ipsa quae</p>
// </li>
// <li>
// <div className="date">
//   <span>09/11</span>
// </div>
// <h3>unde omnis iste</h3>
// <p>Eaque ipsa quae illo inventore veritatis et quasi architecto </p>
// </li>
// <li>
// <div className="date">
//   <span>06/12</span>
// </div>
// <h3>porro quisquam</h3>
// <p>Dolorem ipsum quia consectetur adipisci velit sed quia non</p>
// </li>
// <li>
// <div className="date">
//   <span>11/13</span>
// </div>
// <h3>dolorem eum</h3>
// <p>Nodi tempora incidunt ut labore dolore magnam</p>
// </li>
