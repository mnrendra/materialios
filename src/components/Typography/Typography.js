import './Typography.css'

const Typography = props => {
  return (
    <div
      className='Typography'
      style={props.style}
    >
      <p>{props.children}</p>
    </div>
  )
}

export default Typography
