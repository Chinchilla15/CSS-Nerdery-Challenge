function SidebarLeft() {
  return (
    <aside id="sidebar-left">
      <section className="upper-container">
        <div className="gradient-box"></div>
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">
              <span id="selection-notch"></span>
              <span className="square-icon"></span>
              <p>Home</p>
            </li>
            <li className="nav-list-item">
              <span className="square-icon"></span>
              <p>My Files</p>
            </li>
            <li className="nav-list-item">
              <span className="square-icon"></span>
              <p>Recent Files</p>
            </li>
            <li className="nav-list-item">
              <span className="square-icon"></span>
              <p>Shared Files</p>
            </li>
            <li className="nav-list-item">
              <span className="square-icon"></span>
              <p>File Request</p>
            </li>
            <li className="nav-list-item">
              <span className="square-icon"></span>
              <p>Trash</p>
            </li>
          </ul>
        </nav>
      </section>
      <section className="lower-container">
        <div className="tooltip-container">
          <div className="icon-text-tooltip">
            <span className="square-icon"></span>
            <p>Upload Files</p>
          </div>
          <div className="icon-text-tooltip">
            <span className="square-icon"></span>
            <p>Upload Folder</p>
          </div>
          <div className="icon-text-tooltip">
            <span className="square-icon"></span>
            <p>New Folder</p>
          </div>
          <div className="icon-text-tooltip">
            <span className="square-icon"></span>
            <p>More</p>
          </div>
          <span className="triangle"></span>
        </div>
        <div className="button-container">
          <p>Create New</p>
          <button>+</button>
        </div>
      </section>
    </aside>
  );
}

export default SidebarLeft;
