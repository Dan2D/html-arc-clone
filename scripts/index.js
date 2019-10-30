const navLnks = document.querySelectorAll("a.nav-lnk");

for (let i = 0; i < navLnks.length; i++){
    navLnks[i].addEventListener('click', (e) => handleNavClick(e));
}

function handleNavClick(e) {
    navLnks.forEach(navLnk => navLnk.classList.remove("current"));
    e.target.classList.add("current");
}