function login() {


    const account = [{
            username: "hhh",
            password: "123"
        },
        {
            username: "hhh2",
            password: "123"
        },
        {
            username: "hhh3",
            password: "123"
        },
        {
            username: "hhh4",
            password: "123"
        }
    ]
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    var isLogin = false;
    
    
    for (var i = 0; i < account.length; i++) {
        if (account[i].username == username && account[i].password == password) {
            if (i == 0) {
                isLogin = true;
                alert("Đăng nhập thành công!")
                window.location.assign("./inlogin.html")
                    } else if (i == 1) {
                        isLogin = true;
                        alert("Đăng nhập thành công!")
                        window.location.assign("./inlogin.html")
                    } else if (i == 2 || i==3  ) {
                        isLogin = true;
                        alert("Đăng nhập thành công!")
                        window.location.href = "./inlogin.html"
                    }
            }
        }
        if (isLogin == false) {
            //  messageElement.textContent = 'Input quá ngắn!';
            alert("Sai tài khoản hoặc mật khẩu")
        }

        return false;
    }