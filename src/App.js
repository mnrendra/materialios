import {
  AppBar
} from './components'

import './App.css'

const App = () => {
  const handleMenu = (e) => {
    console.log('menu', e)
  }

  const handleMoreVert = (e) => {
    console.log('moreVert', e)
  }

  return (
    <div className='App'>
      <AppBar
        title='Materialios'
        leftIcon={{ icon: 'MenuIcon', onClick: handleMenu }}
        rightIcons={[
          { icon: 'MoreVertIcon', onClick: handleMoreVert }
        ]}
      />
    </div>
  )
}

export default App
