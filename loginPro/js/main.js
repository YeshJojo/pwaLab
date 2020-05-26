document.getElementById("btnSubmit").addEventListener("click", loginFun);

function loginFun(){
	let uname = document.getElementById("uname").value;
	let pass = document.getElementById("password").value;
	fetch('data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data.login.username==uname && data.login.password==pass){
            	window.location.replace('success.html');
            } else {
            	window.location.replace('unsuccess.html');
            }
        })
        .catch((err) => {
            console.log('error ', err);
    });
}