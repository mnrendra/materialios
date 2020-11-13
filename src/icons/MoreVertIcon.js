import './icons.css'

const MoreVertIcon = props => {
  const floatRight = props.floatRight ? 'FloatRight' : ''

  return (
    <div
      className={`Icon MoreVertIcon ${floatRight}`}
      onClick={props.onClick}
    >
      <svg fill='inherit' width='24px' height='24px'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
      </svg>
    </div>
  )
}

export default MoreVertIcon
