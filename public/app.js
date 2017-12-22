$(document).ready(function() {
    var webAuth = new auth0.WebAuth({
        domain: AUTH0_DOMAIN,
        clientID: AUTH0_CLIENT_ID
    });

    $('.btn-login').click(function(e) {
        e.preventDefault();
        webAuth.authorize({
            responseType: 'code',
            redirectUri: AUTH0_CALLBACK_URL
        });
    });
});
