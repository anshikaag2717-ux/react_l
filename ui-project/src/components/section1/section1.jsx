
import Navbar from './Navbar'

import PageContant from './PageContant'

const section1 = (props) => {
  return (
    <div className='h-screen w-full'>
    <Navbar />
    {PageContant({users: props.users })}
    </div>
  )
}

export default section1