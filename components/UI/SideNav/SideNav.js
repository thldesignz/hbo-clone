const SideNav = (props) => {
  return (
    <div className="side-nav">
      <div className="side-nav__close-btn">
        <i className="fas fa-times" />
      </div>
      <ul className="side-nav__main">
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/">Series</a>
        </li>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/">Originals</a>
        </li>
        <li>
          <a href="/">Just Added</a>
        </li>
        <li>
          <a href="/">Last Chance</a>
        </li>
        <li>
          <a href="/">Trending Now</a>
        </li>
        <li>
          <a href="/">Coming Soon</a>
        </li>
      </ul>
      <div className="side-nav__divider" />
      <ul className="side-nav__main">
        <li>
          <a href="/">Action</a>
        </li>
        <li>
          <a href="/">Horror</a>
        </li>
        <li>
          <a href="/">Kids/Family</a>
        </li>
        <li>
          <a href="/">Latin</a>
        </li>
        <li>
          <a href="/">Anime</a>
        </li>
        <li>
          <a href="/">Romance</a>
        </li>
        <li>
          <a href="/">Reality</a>
        </li>
        <li>
          <a href="/">Suspence</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
