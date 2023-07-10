if(localStorage.getItem("login")){
    // alert("success")
    var guest = document.getElementById("guest")
    // console.log(guest)
    guest.style.display = 'none';
    // guest.innerHTML='hello';

    var uname = document.getElementById("uname")
    uname.style.display = 'block';

    var userInfo = JSON.parse(localStorage.getItem("login"));

    var uname = document.getElementById("uname");
    uname.innerHTML = ' Hi, ' + userInfo.username.slice(0,16);
    uname.style.textTransform = 'capitalize';
    uname.style.marginRight = '10px';
    
    
}

function logout()
{
    if (confirm("Are u sure u want to logout?") == true)
    {
        localStorage.removeItem("login");
        window.location.href = 'public/html/index.html';     
    }
}

function login() {
    // a = document.querySelector('#email').
    console.log('in login')
    var formElements = document.forms['myform'].elements['email'].value;
    // b = document.querySelector('#pswd').value
    console.log(formElements)
    // console.log(b)
}
function checkCredentials() {
    // Retrieve form data
    const username = document.getElementById("logemail").value;
    const password = document.getElementById("logpass").value;

    // Connect to database and retrieve data
    const databaseData = [
        { username: "2021002170110083@ljku.edu.in", password: "Manushi#123" },
        { username: "2021002170110208@ljku.edu.in", password: "Virti#123" },
        { username: "2021002170110128@ljku.edu.in", password: "Yagna#123" },
        { username: "2021002170110139@ljku.edu.in", password: "Shlok#123" },
        { username: "2021002170110062@ljku.edu.in", password: "Rishi#123" },
    ];

    // Check if credentials match database
    const user = databaseData.find(user => user.username === username && user.password === password);

    // Display results
    if (user) {
        // alert("Login successful!");
        const userData = { username: username, password: password };
        localStorage.setItem("login", JSON.stringify(userData));
        return true;
    } else {
        // alert("Invalid username or password.");
        document.getElementById("login_failed").innerHTML = "Login Failed";
        return false;
    }

}