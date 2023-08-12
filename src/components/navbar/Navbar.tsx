import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="logo">
      <img src="logo.svg" alt="" />
      <span>myadmin</span>
    </div>
    <div className="icons">
      <img src="/search.svg" alt="" className="icon"/>
      <img src="/app.svg" alt="" className="icon"/>
      <img src="/expand.svg" alt="" className="icon"/>
      <div className="notification">
        <img src="/notifications.svg" alt="" />
        <span>1</span>
      </div>
      <div className="user">
        <img src="https://static.vecteezy.com/system/resources/previews/009/273/280/original/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg" alt="" />
        <span>Bo</span>
      </div>
      <img src="/settings.svg" alt="" className="icon"/>
    </div>
    </div>
  )
}; 

export default Navbar
