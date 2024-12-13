function SidebarRight() {
  return (
    <aside id="sidebar-right">
      <div className="user-info-container flex-center">
        <div className="icon-container flex-center">
          <span className="square-filled"></span>
          <span className="square-filled"></span>
        </div>
        <div className="name-and-icon flex-center">
          <p>Name</p>
          <span className="user-icon"></span>
        </div>
      </div>
      <div className="storage-info-container flex-column-center">
        <p>Storage</p>
        <div className="circle-container">
          <div className="white-circle flex-column-center">
            <p>
              85 <span>%</span>
            </p>
            <p>Used</p>
            <svg className="svg-container" viewBox="0 0 135 135">
              <circle
                cx="67.5"
                cy="67.5"
                r="62.5"
                stroke="var(--grey-fill-color)"
                stroke-width="5"
                fill="none"
                stroke-linecap="round"
                stroke-dasharray="0 125 50 20 0 80"
              />
              <circle
                cx="67.5"
                cy="67.5"
                r="62.5"
                stroke="var(--blue-color)"
                stroke-width="5"
                fill="none"
                stroke-linecap="round"
                stroke-dasharray="0 190 95 0"
              />
              <circle
                cx="67.5"
                cy="67.5"
                r="62.5"
                stroke="var(--main-green-color)"
                stroke-width="5"
                fill="none"
                stroke-linecap="round"
                stroke-dasharray="0 300 50 0"
              />
              <circle
                cx="67.5"
                cy="67.5"
                r="62.5"
                stroke="var(--main-yellow-color)"
                stroke-width="5"
                fill="none"
                stroke-linecap="round"
                stroke-dasharray="110 255"
              />
            </svg>
          </div>
        </div>
        <p>420.2 GB of 500 GB used</p>
        <section className="storage-details">
          <ul>
            <li className="item-list flex-center ">
              <div className="yellow-box"></div>
              <div className="text-container">
                <p>Documents</p>
                <p>720 files</p>
              </div>
              <div className="space-details">
                <p>200 GB</p>
              </div>
            </li>
            <li className="item-list flex-center">
              <div className="blue-box"></div>
              <div className="text-container">
                <p>Documents</p>
                <p>720 files</p>
              </div>
              <div className="space-details">
                <p>125 GB</p>
              </div>
            </li>
            <li className="item-list flex-center">
              <div className="green-box"></div>
              <div className="text-container">
                <p>Documents</p>
                <p>720 files</p>
              </div>
              <div className="space-details">
                <p>75 GB</p>
              </div>
            </li>
            <li className="item-list flex-center">
              <div className="grey-box"></div>
              <div className="text-container">
                <p>Documents</p>
                <p>720 files</p>
              </div>
              <div className="space-details">
                <p>50 GB</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <div className="cta-container">
        <div className="cta-box flex-column-center">
          <span className="gradient-box-big"></span>
          <p>Buy more space now!</p>
          <p>Upgrade to cloud premium</p>
          <button>Upgrade Account!</button>
        </div>
      </div>
    </aside>
  );
}

export default SidebarRight;
