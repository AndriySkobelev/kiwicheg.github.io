const OurElements = document.getElementsByClassName('m_nav');
const nav_m_elemetn = OurElements[0];

const open_menu = function(){
    const sideNav = document.getElementsByClassName('navigation_m')[0];
        sideNav.className = 'navigation_m open_menu';
}

const close_menu = function (){
    const sideNav=document.getElementsByClassName('navigation_m')[0];
        sideNav.className = 'navigation_m';
}

nav_m_elemetn.addEventListener('click', open_menu);

const sideNavGlobal = document.getElementsByClassName('close_menu')[0];

sideNavGlobal.addEventListener('click', close_menu);

