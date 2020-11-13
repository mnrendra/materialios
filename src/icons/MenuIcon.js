import './icons.css'

const MenuIcon = (props) => {
  const floatRight = props.floatRight ? 'FloatRight' : ''

  return (
    <div
      className={`Icon MenuIcon ${floatRight}`}
      onClick={props.onClick}
    >
      <svg fill='inherit' width='24px' height='24px'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
      </svg>
    </div>
  )
}

export default MenuIcon
