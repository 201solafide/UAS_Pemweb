
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}


setCookie('user', JSON.stringify({
    name: 'Solafide Zamili',
    nim: '121140201',
    kelas: 'RB'
}), 1);


var userFromCookie = getCookie('user');
if (userFromCookie) {
    console.log('Informasi pengguna dari cookie:', JSON.parse(userFromCookie));
}

localStorage.setItem('user', JSON.stringify({
    name: 'Solafide Zamili',
    nim: '121140201',
    kelas: 'RB'
}));

var userFromLocalStorage = localStorage.getItem('user');
if (userFromLocalStorage) {
    console.log('Informasi pengguna dari localStorage:', JSON.parse(userFromLocalStorage));
}

eraseCookie('user');
console.log('Informasi pengguna dari cookie setelah dihapus:', getCookie('user'));

localStorage.removeItem('user');
console.log('Informasi pengguna dari localStorage setelah dihapus:', localStorage.getItem('user'));
