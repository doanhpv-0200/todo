export function showSplashScreen() {
    const splash = document.getElementsByClassName('splash-screen')[0];
    splash.classList.add('loading');
}

export function hideSplashScreen() {
    const splash = document.getElementsByClassName('splash-screen')[0];
    splash.classList.remove('loading');
}

export default {
    showSplashScreen,
    hideSplashScreen
}
