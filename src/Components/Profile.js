import "../css/profile.css";
import "../css/App.css";

function Profile() {
  return (
    <div className="profile-background">
      <div className="profile-div">
        <div className="profile-grid">
          <div className="columnPic">
            <img
              className="headProfilePic"
              src="../images/alanHeadshot.jpg"
              alt="Alan Cooper Mortgage Broker"
            />
          </div>
          <div>
            <h1 className="profileName">Alan Cooper</h1>
            <h2 className="NMLS">Mortgage Broker (NMLS #1912420)</h2>
            <p className="profileP">
              Hello I&apos;m Alan, I help families obtain the American Dream,
              one home at a time! I look forward to helping you along your home
              buying experience. I&apos;ve provided a few useful links to get
              you started.
            </p>
            <div className="buttonBlueDiv">
              <a href="#getStarted" className="buttonBlue">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
