function getGithubInfo(user, callback) {
    //1. Createing an instance of XMLHttpRequest class and sending a GET request using it.
    // this function will finally return an object(it now contains the response!)
    //here created instance of class and made http request of get method and upon success calling callback
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/"+user, true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr)
            } else {
                callback(xhr)
            }
        }
    };
    xhr.send(null);
}
// below function shows the fetching of the user data
function showUser(user) {
    $('#userprofile').show();
    $('#userprofile img.card-img').attr('src', user.avatar_url)
    $('#userprofile p.card-id').text('Id On GitHub: ' +user.id)
    $('#userprofile p.card-name').text('Name On GitHub: ' +user.login)
    $('#userprofile p.card-followers').text('FollowersCount On GitHub: ' +user.followers)
    $('#userprofile p.card-createdat').text('CreatedAt On GitHub: ' +user.created_at)
    $('#userprofile p.card-publicrepos').text('PublicRepos On GitHub: ' +user.public_repos)
    $('#userprofile a').attr('href', user.html_url)
}

$(document).ready(function () {
    $('#userprofile').hide();
    $(document).on('keypress', '#username', function (e) {
        //if user enters the enter key ascii-13 then get the value and pass to function for fetching
        if (e.which == 13) {
            username = $(this).val();
            if (username) {
                $('#errormsg').text("")
                getGithubInfo(username, function(response) {
                    //if we get response and status code is success then parse the json data
                    if (response && response.status == 200) {
                        showUser(JSON.parse(response.responseText));
                        //if no user found in database then error message is displayed
                    } else {
                        noSuchUser(username);
                    }
                });
            } else {
                $('#userprofile').hide();
                $('#errormsg').text("Please enter a username.")
            }
            //below code resets the input text typed
            $(this).val("");

        }
    })
});