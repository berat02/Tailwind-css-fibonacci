if (LocalStorage.getItem('dark')) {
    document.documentElement.classList.add('dark');
}
function darkMode() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        LocalStorage.setItem('dark', true);
    } else {
        LocalStorage.removeItem('dark');
    }
}