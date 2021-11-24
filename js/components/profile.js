const profile = document.querySelector('#js-profile');
const btnOpenProfile = document.querySelector('#js-open-profile');

window.isProfileOpen = false;

const handleOpenProfile = (e) => {
  if (window.isProfileOpen) {
    profile.classList.remove('profile--show');
    window.isProfileOpen = false;
  } else {
    profile.classList.add('profile--show');
    window.isProfileOpen = true;
  }
  e.stopPropagation();
};

const handleCloseProfile = (e) => {
  if (window.isProfileOpen && !e.target.closest('.profile')) {
    profile.classList.remove('profile--show');
    window.isProfileOpen = false;
  }
};

const handleProfileResize = () => {
  if (window.innerWidth > 767 && window.isProfileOpen) {
    profile.classList.add('profile--show');
  } else {
    profile.classList.remove('profile--show');
  }
};

if (btnOpenProfile) btnOpenProfile.addEventListener('click', handleOpenProfile);
if (profile) document.addEventListener('click', handleCloseProfile);
if (profile) window.addEventListener('resize', handleProfileResize);
