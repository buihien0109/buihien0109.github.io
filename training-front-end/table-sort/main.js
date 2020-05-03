// API : https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow

var users = []
let url = 'https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow'
function fetchData(url) {
    $.ajax({
        url: url,
        method: 'get',
        dataType: 'json',
        success: function (data) {
            users = data.items
            renderUI(users)
        },
        error: function (err) {
            console.log(err)
        }
    })
}
fetchData('https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&site=stackoverflow')

function renderUI(users) {
    let content = ''
    for(let i = 0; i < users.length; i++) {
        const user = users[i]
        content += `
                <tr>
                    <td>
                        <img src="${user.profile_image}" />
                    </td>
                    <td id="display_name">
                        <a href="${user.link}">${user.display_name}</a>
                    </td>
                    <td id="user_id">
                        ${user.user_id}
                    </td>
                    <td id="reputation">
                        ${user.reputation}
                    </td>
                    <td>
                        <a href="${user.website_url}">Website</a>
                    </td>
                    <td id="creation_date">
                        ${convertTime(user.creation_date)}
                    </td>
                </tr>
        `
    }
    $('tbody').append(content)
}

$('th').click(function(){
    let name = $(this).attr('name')
})

function sortUser(name, direction) {
    console.log(users)
    let userSort = users.sort(function(a,b) {
        let x = a[name]
        let y = b[name]
        if(direction == 'desc') {
            return x - y
        } else {
            return y - x
        }
    })
    return userSort
}

let test = sortUser("display_name","desc")
console.log(test)

function convertTime(unixTime) {
    let date = new Date(unixTime * 1000);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};



$(document).ready(function () {
    
})