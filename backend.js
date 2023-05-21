let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.topbar');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let themeswitch = document.querySelector('.themeswitch');
let body = document.querySelector('body')


toggle.onclick = function () {
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');

}

themeswitch.onclick = function () {
    body.classList.toggle('dark')
}

function toggleMenu() {
    // let topbar = document.querySelector('.topbar');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    // topbar.classList.remove('active');
    navigation.classList.remove('active');
    main.classList.remove('active');

}

        const scriptURL = 'https://script.google.com/macros/s/AKfycbx_Gj7ieFWHtB2P7MWyxaD2fs_9yP2gJCYL7yV3SSaEIO0KVx3Oz8zJKV28-OhLsyxn/exec'
        const form = document.forms['submit-to-google-sheet']
        const hyy = document.getElementById("hyy")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                hyy.innerHTML = " Message Sent Successfully"
                setTimeout(function(){
                    hyy.innerHTML = ""
                },3000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
        document.onkeydown = function(e) {
            if (e.ctrlKey && 
                (e.keyCode === 67 ||
                e.keyCode === 97 ||
                e.keyCode === 65 ||
                 e.keyCode === 99 || 
                 e.keyCode === 86 || 
                 e.keyCode === 86 || 
                 e.keyCode === 85 ||
                 e.keyCode === 105 ||
                 e.keyCode === 73 ||
                 e.keyCode === 117)) {
                alert('not allowed');
                return false;
            } else {
                return true;
            }
    };

    // for securing website from copied or hacking block some key this code is written



    //     document.onkeydown = function(e) {
    //         if (e.ctrlKey && 
    //             (e.keyCode === 67 ||
    //             e.keyCode === 97 ||
    //             e.keyCode === 65 ||
    //              e.keyCode === 99 || 
    //              e.keyCode === 86 || 
    //              e.keyCode === 86 || 
    //              e.keyCode === 85 ||
    //              e.keyCode === 105 ||
    //              e.keyCode === 73 ||
    //              e.keyCode === 117)) {
    //             alert('not allowed');
    //             return false;
    //         } else {
    //             return true;
    //         }
    // };