async function getUsers() {
    let url = '../../users.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `
            <div class="user">
                <img src="${user.profileURL}">
                <h2>${user.firstname} ${user.lastname}</h2>
                <div class="email"><a href="mail:${user.email}">${user.email}</a></div>
            </div>`;
        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();
