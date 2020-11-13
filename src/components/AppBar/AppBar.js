import {
  Typography
} from '../'

import icons from '../../icons'

import './AppBar.css'

const AppBar = ({ title, leftIcon, rightIcons }) => {
  /* Set Icons */

  // left icon (just one icon)
  const LeftIcon = icons[leftIcon.icon]

  // right icons (maximum only five icons)
  const listRightIcons = rightIcons.slice(0, 5).map(({ icon, onClick }, index) => {
    const RightIcon = icons[icon]
    return (
      <RightIcon
        key={index}
        onClick={onClick}
        floatRight
      />
    )
  })

  /* Handle Functions */

  const handleLeftIcon = e => leftIcon.onClick(e)

  /* Return */

  return (
    <div className='AppBar'>
      {/* left icon (just one icon) */}
      <LeftIcon
        onClick={handleLeftIcon}
      />
      {/* title */}
      <Typography
        style={{ padding: '8px', margin: '12px 0', cursor: 'default' }}
      >
        {title}
      </Typography>
      {/* right icons (maximum only five icons) */}
      {listRightIcons.length && listRightIcons}
      {/* */}
    </div>
  )
}

export default AppBar
