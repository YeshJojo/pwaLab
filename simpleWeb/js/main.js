self.addEventListener("load", fetchJSON => {
    fetch('./data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById('gitTitle').innerHTML = data.gitData.details.name;
            document.getElementById('gitID').innerHTML = data.gitData.details.id;

            document.getElementById('repo1').innerHTML = data.gitData.repo1.name;
            document.getElementById('repo2').innerHTML = data.gitData.repo2.name;
            document.getElementById('repo3').innerHTML = data.gitData.repo3.name;
            document.getElementById('repo4').innerHTML = data.gitData.repo4.name;
            document.getElementById('desc1').innerHTML = data.gitData.repo1.desc;
            document.getElementById('desc2').innerHTML = data.gitData.repo2.desc;
            document.getElementById('desc3').innerHTML = data.gitData.repo3.desc;
            document.getElementById('desc4').innerHTML = data.gitData.repo4.desc;
        })
        .catch(error => {
            console.log(error);
        })
})