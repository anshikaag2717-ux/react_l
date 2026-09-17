
import RightText from './RightText'
import LeftText from './LeftText'

const PageContant = (props) => {
  return (
    <div className='py-10 flex items-center  gap-10  h-[90vh] px-18'>
        
        {LeftText()}
       {RightText({ users: props.users })}
    </div>
  )
}

export default PageContant