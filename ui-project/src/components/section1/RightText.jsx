import RightCard from "./RightCard"

const RightText = (props) => {
  return (
    <div id='right' className="h-full w-2/3 shrink-0 p-6 flex flex-nowrap gap-10">
      {props.users.map(function(user,idx) {
    return RightCard({
        key: idx,
        id: idx
        img: user.img,
        intro: user.intro,
        tag: user.tag
    })
})}

    </div>
  )
}

export default RightText