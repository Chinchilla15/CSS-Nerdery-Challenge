// import SearchBar from "./ui/SearchBar";
// import RecentlyUsedCard from "./ui/RecentlyUsedCard";
// import RecentlyUsedSection from "./ui/RecentlyUsedSection";
// import RecentFilesSection from "./ui/RecentFilesSection";
// import ShareWithMeSection from "./ui/ShareWithMeSection";

function Main() {
  return (
    <main className="flex justify-center">
      <div className="container flex-col justify-between">
        <div className="search-bar flex-center">
          <label htmlFor="search" className="square-icon"></label>
          <input type="text" id="search" placeholder="Search" />
        </div>
        <section className="recently-used">
          <div className="recently-used-header flex justify-between">
            <h2 className="recently-used-title title">Recently Used</h2>
            <div className="recently-used-icons flex-center">
              <span className="square-icon"></span>
              <span className="square-icon"></span>
            </div>
          </div>
          <div className="recently-used-cards-container cards-container">
            <div className="recently-used-card card-base">
              <span className="square-with-shadow square"></span>
              <div className="card-circle-container self-center">
                <span className="circle-span"></span>
                <span className="circle-span circle-span-offset"></span>
              </div>
              <div className="card-text flex-col justify-center">
                <h3>App Project</h3>
                <p>Created: 20.02.2020</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="var(--icon-gray-color)"
                stroke="var(--icon-gray-color)"
                strokeWidth="2"
                className="three-dots-svg"
              >
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </div>
            <div className="recently-used-card card-base">
              <span className="square-with-shadow square"></span>
              <div className="card-circle-container self-center">
                <span className="circle-span"></span>
                <span className="circle-span circle-span-offset"></span>
              </div>
              <div className="card-text flex-col justify-center">
                <h3>Project: fitbit</h3>
                <p>Created: 28.02.2020</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="var(--icon-gray-color)"
                stroke="var(--icon-gray-color)"
                strokeWidth="2"
                className="three-dots-svg"
              >
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </div>
            <div className="recently-used-card card-base">
              <span className="square-with-shadow square"></span>
              <div className="card-circle-container self-center">
                <span className="circle-span"></span>
                <span className="circle-span circle-span-offset"></span>
                <span className="circle-span circle-span-offset flex-center justify-center">
                  +3
                </span>
              </div>
              <div className="card-text flex-col justify-center">
                <h3>Client Documents</h3>
                <p>Created: 4.03.2020</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="var(--icon-gray-color)"
                stroke="var(--icon-gray-color)"
                strokeWidth="2"
                className="three-dots-svg"
              >
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </div>
          </div>
        </section>
        <section className="recent-files">
          <div className="recent-files-header flex justify-between">
            <h2 className="recent-files-title title">Recent Files</h2>
            <p>View All</p>
          </div>
          <table className="recent-files-table flex-col">
            <thead className="table-header">
              <tr>
                <th className="header-item">Name</th>
                <th className="header-item">Members</th>
                <th className="header-item">Last Modifies</th>
              </tr>
            </thead>
            <tbody className="table-body flex-col">
              <tr className="table-row flex align-center">
                <td className="yellow-box"></td>
                <td className="row-item">Travel Landing Page</td>
                <td className="row-item">5 members</td>
                <td className="row-item">Mar 8,2020</td>
                <td className="row-item">...</td>
              </tr>
              <tr className="table-row flex align-center">
                <td className="green-box"></td>
                <td className="row-item">True Photos</td>
                <td className="row-item">12 members</td>
                <td className="row-item">Mar 8,2020</td>
                <td className="row-item">...</td>
              </tr>
              <tr className="table-row flex align-center">
                <td className="red-box"></td>
                <td className="row-item">Dashboard Structure</td>
                <td className="row-item">10 members</td>
                <td className="row-item">Mar 9,2020</td>
                <td className="row-item">...</td>
              </tr>
              <tr className="table-row flex align-center">
                <td className="yellow-box"></td>
                <td className="row-item">Character Illustration</td>
                <td className="row-item">3 members</td>
                <td className="row-item">Mar 10,2020</td>
                <td className="row-item">...</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="share-with-me flex-col">
          <div className="recent-files-header flex justify-between">
            <h2 className="share-with-me-title title">Share with me</h2>
            <p>View All</p>
          </div>
          <div className="share-with-me-cards-container cards-container">
            <div className="share-with-me-card card-base">
              <div>
                <span className="square-without-shadow square"></span>
                <div className="card-colored-circle-container self-center">
                  <span className="circle-span green"></span>
                  <span className="circle-span circle-span-offset red"></span>
                </div>
              </div>
              <div className="card-text flex-col justify-center">
                <h3>Landing Page</h3>
                <p>Created: 20.02.2020</p>
              </div>
            </div>
            <div className="share-with-me-card card-base">
              <div>
                <span className="square-without-shadow square"></span>
                <div className="card-colored-circle-container self-center">
                  <span className="circle-span green"></span>
                  <span className="circle-span circle-span-offset red"></span>
                  <span className="circle-span circle-span-offset yellow"></span>
                </div>
              </div>
              <div className="card-text flex-col justify-center">
                <h3>Illustration Pack</h3>
                <p>Created: 20.02.2020</p>
              </div>
            </div>
            <div className="share-with-me-card card-base">
              <div>
                <span className="square-without-shadow square"></span>
                <div className="card-colored-circle-container self-center">
                  <span className="circle-span green"></span>
                  <span className="circle-span circle-span-offset yellow"></span>
                </div>
              </div>
              <div className="card-text flex-col justify-center">
                <h3>CV Design</h3>
                <p>Created: 20.02.2020</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
