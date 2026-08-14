function register() {
    setTimeout(()=> {
        console.log("Registering user");
    },2000)
}

function login() {
    setTimeout(()=> {
        console.log("Logging in user");
    },5000)
}

function displayData() {
    setTimeout(()=> {
        console.log("Displaying user data");
    },4000)
}

function getData() {
    setTimeout(()=> {
        console.log("Getting user data");
    },1000)
}

//callback hell
register(
    ()=> {
        login(
            ()=> {
                getData(
                    ()=> {
                        displayData()
                    }
                )
            }
        )
    }
)

console.log("End of program");
