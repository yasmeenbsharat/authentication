let user;
let profile = document.getElementById("profile");
function initApp() {
    if (localStorage.getItem("token")) {
        generateUserProfile();
    }
    else { window.location.href = '../../index.html'; }
}

function generateUserProfile() {
    const token = localStorage.getItem('token');
    user = decodeToken(token);

    generateData(getUserDetails, displayUserDetails);
}


async function getUserDetails() {
    const request = await fetch(`https://dummyjson.com/users/${user.id}`);
    user = await request.json();
    return user;
}

function displayUserDetails(user) {
    let data = '';
    data += `<div class="row">
    <div class="col-md-4">
        <div class="profile-img">
            <img src="${user.image}" alt="userImg" class=''/>
        </div>
    </div>
    <div class="col-md-6">
        <div class="profile-head mt-5">
                    <h5>
                    ${user.firstName} ${user.lastName}
                    </h5>
                    <h6 class="text-primary">
                       @ ${user.maidenName}
                    </h6>
                    <p class="profile-rating text-uppercase mt-3">Age : <span class='text-primary'> ${user.age}</span> 	&nbsp; 	&nbsp; 	&nbsp;    gender : <span class="text-lowercase text-primary"> ${user.gender}</span></p>
                    <h5 class="mt-3">About</h5>
                    <hr>
        </div>
    </div>
    <div class="col-md-2 mt-5">
        <input type="submit" class="log-out-btn text-primary" name="btnAddMore" value="Log Out"  onClick="logoutUser()"/>
    </div>
</div>
<div class="row">
<div class="col-md-4">           
</div>
    <div class="col-md-8">
        <div class="tab-content profile-tab" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="row">
                            <div class="col-md-6">
                                <label>User Id</label>
                            </div>
                            <div class="col-md-6">
                                <p>${user.id}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Name</label>
                            </div>
                            <div class="col-md-6">
                                <p>${user.firstName}  ${user.lastName}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Email</label>
                            </div>
                            <div class="col-md-6">
                                <p>${user.email}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>Phone</label>
                            </div>
                            <div class="col-md-6">
                                <p>${user.phone}</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label>BirthDate</label>
                            </div>
                            <div class="col-md-6">
                                <p>${user.birthDate}</p>
                            </div>
                        </div>
            </div>
      
        </div>
    </div>
</div>  `;
    profile.innerHTML = data;
}

function decodeToken(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const payload = JSON.parse(atob(base64));
    return payload;
}
async function generateData(callback, display) {
    const data = await callback();
    display(data);

}



function handleLogoutMessage(event) {
    if (event.data.action === 'logout') {
        alert("You have been logged out.");
        window.location.href = '../';
    }

}

const logoutChannel = new BroadcastChannel('logoutChannel');
logoutChannel.onmessage = handleLogoutMessage;
initApp();