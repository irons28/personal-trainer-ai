document.addEventListener('DOMContentLoaded' ,() => {
    const userForm = document.getElementById('user-form');
    const userProfiles = document.getElementById('user-profiles');

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const goals = document.getElementById('goals').value;

        const userProfile = document.createElement('div');
        userProfile.className = 'user-profile';
        userProfile.innerHTML = `
            <p>Name: ${name}<p>
            <p>Age: ${age}<p>
            <p>Goals: ${goals}<p>
        `;

        userProfiles.appendChild(userProfile);

        userForm.requestFullscreen();
    });
});