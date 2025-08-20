import React, { useState } from 'react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('activity');
  const [activeSubTab, setActiveSubTab] = useState('pills-mentions');

  // Sample data for demonstration
  const userData = {
    name: "Aneeta Shakhya",
    status: "Active 02 Minutes Ago",
    coverImage: "assets/images/profile/cover.jpg",
    profileImage: "assets/images/profile/Profile.jpg",
    baseInfo: {
      name: "Aneeta Shakya",
      gender: "Woman",
      lookingFor: "Men",
      maritalStatus: "Single",
      age: "36",
      dob: "27-02-1996",
      address: "Streop Rd, Peosur, Inphodux, USA."
    },
    friends: [
      { id: 1, name: "Jenifer Guido", image: "assets/images/member/01.jpg", active: "1 Day" },
      { id: 2, name: "Andrea Guido", image: "assets/images/member/02.jpg", active: "2 Day" },
      { id: 3, name: "Anna hawk", image: "assets/images/member/03.jpg", active: "5 Day" },
      { id: 4, name: "Andreas Adam", image: "assets/images/member/04.jpg", active: "4 Day" },
      { id: 5, name: "Alaina T", image: "assets/images/member/05.jpg", active: "1 Day" },
      { id: 6, name: "Aron Smith", image: "assets/images/member/06.jpg", active: "3 Day" },
      { id: 7, name: "Helen Gomz", image: "assets/images/member/07.jpg", active: "3 Day" },
      { id: 8, name: "Andrez jr", image: "assets/images/member/08.jpg", active: "5 Day" },
      { id: 9, name: "Ladiga Guido", image: "assets/images/member/09.jpg", active: "5 Day" },
      { id: 10, name: "Andrea Guido", image: "assets/images/member/10.jpg", active: "1 Day" },
      { id: 11, name: "Jene Aiko", image: "assets/images/member/11.jpg", active: "4 Day" },
      { id: 12, name: "Jhon Cena", image: "assets/images/member/12.jpg", active: "2 Day" }
    ],
    groups: [
      { id: 1, name: "Active Group A1", image: "assets/images/group/group-page/01.jpg", members: 12 },
      { id: 2, name: "Active Group A2", image: "assets/images/group/group-page/02.jpg", members: 16 },
      { id: 3, name: "Active Group A3", image: "assets/images/group/group-page/03.jpg", members: 8 },
      { id: 4, name: "Active Group A4", image: "assets/images/group/group-page/04.jpg", members: 20 },
      { id: 5, name: "Active Group A5", image: "assets/images/group/group-page/05.jpg", members: 15 }
    ],
    photos: Array.from({ length: 20 }, (_, i) => `assets/images/member/${(i % 20) + 1 < 10 ? '0' + ((i % 20) + 1) : (i % 20) + 1}.jpg`)
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'activity':
        return <ActivityTab activeSubTab={activeSubTab} setActiveSubTab={setActiveSubTab} />;
      case 'profile':
        return <ProfileTab userData={userData} />;
      case 'friends':
        return <FriendsTab friends={userData.friends} />;
      case 'groups':
        return <GroupsTab groups={userData.groups} />;
      case 'photos':
        return <PhotosTab photos={userData.photos} />;
      case 'media':
        return <MediaTab />;
      default:
        return <ActivityTab activeSubTab={activeSubTab} setActiveSubTab={setActiveSubTab} />;
    }
  };

  return (
    <>
      {/* Page Header Section */}
      <section className="page-header-section style-1 bg-pink">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-inner">
              <div className="page-title">
                <h2>Member Single Profile</h2>
              </div>
              <ol className="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li className="active">{userData.name}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="profile-section padding-tb bg-ash">
        <div className="container">
          <div className="section-wrapper">
            <div className="member-profile">
              {/* Profile Header */}
              <ProfileHeader userData={userData} />
              
              {/* Profile Navigation */}
              <div className="profile-details">
                <nav className="profile-nav">
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button 
                      className={`nav-link ${activeTab === 'activity' ? 'active' : ''}`}
                      onClick={() => setActiveTab('activity')}
                    >
                      Activity
                    </button>
                    <button 
                      className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile')}
                    >
                      Profile
                    </button>
                    <button 
                      className={`nav-link ${activeTab === 'friends' ? 'active' : ''}`}
                      onClick={() => setActiveTab('friends')}
                    >
                      Friends <span className="item-number">{userData.friends.length}</span>
                    </button>
                    <button 
                      className={`nav-link ${activeTab === 'groups' ? 'active' : ''}`}
                      onClick={() => setActiveTab('groups')}
                    >
                      Groups <span className="item-number">{userData.groups.length}</span>
                    </button>
                    <button 
                      className={`nav-link ${activeTab === 'photos' ? 'active' : ''}`}
                      onClick={() => setActiveTab('photos')}
                    >
                      Photos
                    </button>
                    <button 
                      className={`nav-link ${activeTab === 'media' ? 'active' : ''}`}
                      onClick={() => setActiveTab('media')}
                    >
                      Media <span className="item-number">35</span>
                    </button>
                    <div className="dropdown">
                      <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Activity</a></li>
                        <li><a className="dropdown-item" href="#">Privacy</a></li>
                        <li><a className="dropdown-item" href="#">Block user</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                
                {/* Tab Content */}
                <div className="tab-content" id="nav-tabContent">
                  {renderTabContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Profile Header Component
const ProfileHeader = ({ userData }) => {
  return (
    <div className="profile-item">
      <div className="profile-cover">
        <img src={userData.coverImage} alt="cover-pic" />
        <div className="edit-photo custom-upload">
          <div className="file-btn"><i className="icofont-camera"></i>Edit Photo</div>
          <input type="file" />
        </div>
      </div>
      <div className="profile-information">
        <div className="profile-pic">
          <img src={userData.profileImage} alt="DP" />
          <div className="custom-upload">
            <div className="file-btn">
              <span className="d-none d-lg-inline-block"><i className="icofont-camera"></i>Edit</span>
              <span className="d-lg-none mr-0"><i className="icofont-plus"></i></span>
            </div>
            <input type="file" />
          </div>
        </div>
        <div className="profile-name">
          <h4>{userData.name}</h4>
          <p>{userData.status}</p>
        </div>
        <ul className="profile-contact">
          <li>
            <a href="#">
              <div className="icon"><i className="icofont-user"></i></div>
              <div className="text"><p>Add Friends</p></div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon"><i className="icofont-envelope"></i></div>
              <div className="text"><p>Public Message</p></div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="icon"><i className="icofont-envelope"></i></div>
              <div className="text"><p>Private Message</p></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Activity Tab Component
const ActivityTab = ({ activeSubTab, setActiveSubTab }) => {
  return (
    <div className={`tab-pane activity-page fade show active`} id="activity" role="tabpanel">
      <div className="row">
        <div className="col-xl-8">
          <article>
            <div className="activity-tab">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeSubTab === 'pills-personal' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('pills-personal')}
                  >
                    <i className="icofont-user"></i> Personal
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeSubTab === 'pills-mentions' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('pills-mentions')}
                  >
                    <i className="icofont-edit"></i> Mentions
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeSubTab === 'pills-favorites' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('pills-favorites')}
                  >
                    <i className="icofont-heart-alt"></i> Favorites
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeSubTab === 'pills-friends' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('pills-friends')}
                  >
                    <i className="icofont-favourite"></i> Friends
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className={`nav-link ${activeSubTab === 'pills-groups' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('pills-groups')}
                  >
                    <i className="icofont-users"></i> Groups
                  </button>
                </li>
                <li className="custom-select">
                  <select>
                    <option value="1">Everything</option>
                    <option value="2">Recent</option>
                    <option value="3">Relevant</option>
                    <option value="4">Popular</option>
                  </select>
                </li>
              </ul>
              
              <div className="tab-content activity-content" id="pills-tabContent">
                {/* Sub-tab content would go here */}
                <div className={`tab-pane fade ${activeSubTab === 'pills-mentions' ? 'show active' : ''}`} id="pills-mentions" role="tabpanel">
                  {/* Post items would be rendered here */}
                  <div className="post-item mb-20">
                    <div className="post-content">
                      <div className="post-author">
                        <div className="post-author-inner">
                          <div className="author-thumb">
                            <img src="assets/images/profile/dp.png" alt="img" />
                          </div>
                          <div className="author-details">
                            <h6><a href="#">William Smith</a></h6>
                            <ul className="post-status">
                              <li className="post-privacy"><i className="icofont-world"></i> Public</li>
                              <li className="post-time">6 Minutes Ago</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="post-description">
                        <p>Quickly deliver going forward methods info create empowerment before client-centered bandwidth. Credibly pontificate interoperable leadership skills and B2B data awesome Continually whiteboard.</p>
                      </div>
                    </div>
                    <div className="post-meta">
                      <div className="post-meta-top">
                        <p><a href="#"><i className="icofont-like"></i> <i className="icofont-heart"></i> <i className="icofont-laughing"></i> <span>Julia, Petrova and 306 like this</span></a></p>
                        <p><a href="#">136 Comments</a></p>
                      </div>
                      <div className="post-meta-bottom">
                        <ul className="react-list">
                          <li className="react"><a href="#"><i className="icofont-like"></i> Like</a></li>
                          <li className="react"><a href="#"><i className="icofont-speech-comments"></i> Comment</a></li>
                          <li className="react"><a href="#"><i className="icofont-share"></i> Share</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        
        {/* Sidebar */}
        <div className="col-xl-4">
          <aside className="mt-5 mt-xl-0">
            <SearchWidget />
            <LikeMemberWidget />
            <ActiveGroupWidget />
          </aside>
        </div>
      </div>
    </div>
  );
};

// Profile Tab Component
const ProfileTab = ({ userData }) => {
  return (
    <div className="tab-pane fade" id="profile" role="tabpanel">
      <div className="row">
        <div className="col-xl-8">
          <article>
            <div className="info-card mb-20">
              <div className="info-card-title"><h6>Base Info</h6></div>
              <div className="info-card-content">
                <ul className="info-list">
                  <li><p className="info-name">Name</p><p className="info-details">{userData.baseInfo.name}</p></li>
                  <li><p className="info-name">I'm a</p><p className="info-details">{userData.baseInfo.gender}</p></li>
                  <li><p className="info-name">Looking for a</p><p className="info-details">{userData.baseInfo.lookingFor}</p></li>
                  <li><p className="info-name">Marital Status</p><p className="info-details">{userData.baseInfo.maritalStatus}</p></li>
                  <li><p className="info-name">Age</p><p className="info-details">{userData.baseInfo.age}</p></li>
                  <li><p className="info-name">Date of Birth</p><p className="info-details">{userData.baseInfo.dob}</p></li>
                  <li><p className="info-name">Address</p><p className="info-details">{userData.baseInfo.address}</p></li>
                </ul>
              </div>
            </div>
            {/* Additional profile sections would go here */}
          </article>
        </div>
        
        {/* Sidebar */}
        <div className="col-xl-4">
          <aside className="mt-5 mt-xl-0">
            <SearchWidget />
            <LikeMemberWidget />
            <ActiveGroupWidget />
          </aside>
        </div>
      </div>
    </div>
  );
};

// Friends Tab Component
const FriendsTab = ({ friends }) => {
  return (
    <div className="tab-pane fade" id="friends" role="tabpanel">
      <div className="row">
        <div className="col-xl-8">
          <article>
            <div className="row gy-4 gx-3 justify-content-center">
              {friends.map(friend => (
                <div key={friend.id} className="col-lg-3 col-md-4 col-6">
                  <div className="lab-item member-item style-1">
                    <div className="lab-inner">
                      <div className="lab-thumb">
                        <img src={friend.image} alt="member-img" />
                      </div>
                      <div className="lab-content">
                        <h6><a href="#">{friend.name}</a></h6>
                        <p>Active {friend.active}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
        
        {/* Sidebar */}
        <div className="col-xl-4">
          <aside className="mt-5 mt-xl-0">
            <SearchWidget />
            <LikeMemberWidget />
            <ActiveGroupWidget />
          </aside>
        </div>
      </div>
    </div>
  );
};

// Groups Tab Component
const GroupsTab = ({ groups }) => {
  return (
    <div className="tab-pane fade" id="groups" role="tabpanel">
      <div className="row">
        <div className="col-xl-8">
          <article>
            <div className="row gy-3">
              {groups.map(group => (
                <div key={group.id} className="col-12">
                  <div className="group-item lab-item style-1">
                    <div className="lab-inner d-flex flex-wrap align-items-center p-4">
                      <div className="lab-thumb me-md-4 mb-4 mb-md-0">
                        <img src={group.image} alt="img" />
                      </div>
                      <div className="lab-content">
                        <h4>{group.name}</h4>
                        <p>Collaboratively innovate compelling mindshare after prospective partnerships</p>
                        <ul className="img-stack d-flex">
                          <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                          <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                          <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                          <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                          <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                          <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                          <li className="bg-theme">{group.members}+</li>
                        </ul>
                        <div className="test">
                          <a href="profile.html" className="lab-btn">
                            <i className="icofont-users-alt-5"></i> View Group
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
        
        {/* Sidebar */}
        <div className="col-xl-4">
          <aside className="mt-5 mt-xl-0">
            <SearchWidget />
            <LikeMemberWidget />
            <ActiveGroupWidget />
          </aside>
        </div>
      </div>
    </div>
  );
};

// Photos Tab Component
const PhotosTab = ({ photos }) => {
  return (
    <div className="tab-pane fade" id="photos" role="tabpanel">
      <div className="photo-title text-center border-radius-2 bg-white p-1 mb-4">
        <h3 className="mb-0">All Uploaded Pictures</h3>
      </div>
      <div className="row g-3 g-lg-4 justify-content-center row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
        {photos.map((photo, index) => (
          <div key={index} className="col">
            <div className="gallery-img">
              <img src={photo} alt="image" className="rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="load-btn">
        <a href="#" className="lab-btn">Load More <i className="icofont-spinner"></i></a>
      </div>
    </div>
  );
};

// Media Tab Component
const MediaTab = () => {
  return (
    <div className="tab-pane fade" id="media" role="tabpanel">
      <div className="row">
        <div className="col-xl-8">
          <article>
            <div className="media-wrapper">
              {/* Media tab content would go here */}
              <h3>Media Gallery</h3>
              <p>Media content would be displayed here</p>
            </div>
          </article>
        </div>
        
        {/* Sidebar */}
        <div className="col-xl-4">
          <aside className="mt-5 mt-xl-0">
            <SearchWidget />
            <LikeMemberWidget />
            <ActiveGroupWidget />
          </aside>
        </div>
      </div>
    </div>
  );
};

// Reusable Widget Components
const SearchWidget = () => {
  return (
    <div className="widget search-widget">
      <div className="widget-inner">
        <div className="widget-title"><h5>Filter Search Member</h5></div>
        <div className="widget-content">
          <p>Serious Dating With Shy-Eyes Your Perfect Match is Just a Click Away.</p>
          <form className="banner-form">
            <div className="gender">
              <div className="custom-select right w-100">
                <select>
                  <option value="0">I am a</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </select>
              </div>
            </div>
            {/* Additional form fields would go here */}
            <button className="">Find Your Partner</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const LikeMemberWidget = () => {
  return (
    <div className="widget like-member">
      <div className="widget-inner">
        <div className="widget-title"><h5>you may like</h5></div>
        <div className="widget-content">
          <div className="row row-cols-3 row-cols-sm-auto g-3">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={i} className="col">
                <div className="image-thumb">
                  <a href="#">
                    <img src={`assets/images/widget/0${i + 1}.jpg`} alt="img" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ActiveGroupWidget = () => {
  return (
    <div className="widget active-group">
      <div className="widget-inner">
        <div className="widget-title"><h5>join the group</h5></div>
        <div className="widget-content">
          <div className="group-item lab-item">
            <div className="lab-inner d-flex flex-wrap align-items-center">
              <div className="lab-content w-100">
                <h6>Active Group A1</h6>
                <p>Collaboratively fabricate best breed and applications through visionary</p>
                <ul className="img-stack d-flex">
                  <li><img src="assets/images/group/group-mem/01.png" alt="member-img" /></li>
                  <li><img src="assets/images/group/group-mem/02.png" alt="member-img" /></li>
                  <li><img src="assets/images/group/group-mem/03.png" alt="member-img" /></li>
                  <li><img src="assets/images/group/group-mem/04.png" alt="member-img" /></li>
                  <li><img src="assets/images/group/group-mem/05.png" alt="member-img" /></li>
                  <li><img src="assets/images/group/group-mem/06.png" alt="member-img" /></li>
                  <li className="bg-theme">12+</li>
                </ul>
                <div className="test">
                  <a href="profile.html" className="lab-btn">
                    <i className="icofont-users-alt-5"></i> View Group
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;