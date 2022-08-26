document.getElementById('btn-submit').addEventListener('click', function () {
    const emailfile = document.getElementById('User-email');
    const email = emailfile.value;
    const passwordFile = document.getElementById('User-password');
    const password = passwordFile.value;
    if (email === 'rickdev564@gmail.com' && password === 'balerpassword') {
        window.location.href = 'Bank.html'

    }
    else {
        alert('Kire bal vule gesos!!!')
    }

})