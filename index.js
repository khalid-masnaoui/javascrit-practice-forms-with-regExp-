window.onload = function() {
    const inputs = document.querySelectorAll("input");
    const spans = document.querySelectorAll("span");
    const form = document.querySelector("form");

    let username = /^[a-z\d]{5,12}$/i;
    let password = /^[\w@-]{8,20}$/i;
    let email = /^([a-z0-9-_\.]+)@([a-z0-9_]+)\.([a-z]+)(\.[a-z]+)?$/i;
    let telephone = /^\d{11}$/;
    let profil_slug = /^[a-z0-9-_]{8,12}$/;

    const regexp = {
        username: username,
        password: password,
        telephone: telephone,
        profil_slug: profil_slug,
        email: email,
    };
    inputs.forEach((input, index) => {
        input.addEventListener("keyup", (e) => {
            const val = e.target.value
            const name = e.target.attributes.name.value;
            if (regexp[name].test(val)) {

                e.target.className = "valid";
                spans[index].className = "valid";

                //  e.target.nextElementSibling

            } else {
                e.target.className = "invalid";
                spans[index].className = "invalid";

            }
        })
    })
}