import Rytcard from "./Rytcard"

const ryttext = (props) => {
  return (
    <div className="h-full w-2/3 shrink-0 p-6 flex flex-nowrap gap-10">
      {props.users.map(function(user) {
    return Rytcard({
        img: user.img,
        intro: user.intro,
        tag: user.tag
    })
})}

    </div>
  )
}

export default ryttext