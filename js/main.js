
var data ; 
chkLocalStorage();
function chkLocalStorage(){
  if(localStorage.sign != null)
{
    data = JSON.parse(localStorage.sign);
   
    
}
else {
    data = []; 
}
}
var path = window.location.pathname.length-7
console.log(window.location.pathname[path])


const currentUrl = window.location.pathname
console.log(currentUrl)
console.log(document.title)
if(document.title == "main")
{
  main()
  console.log("here")
}
if(document.title == "signup")
{
  signUp()
  console.log("signup")
}
if(document.title == "home")
{
  if(localStorage.login == null)
    {
      document.querySelector("#out").innerHTML =` <div class="class text-center "> <h1 class="text-danger">you are not Authorized to get here</h1></div>`
      
    }
    else{
      home()
       console.log("home")
    }
  
}





function localSave () {
  localStorage.setItem("allData" , JSON.stringify(data))
}



function main(){
  
    var email = document.querySelector("#email");
    var password = document.querySelector("#password")
    var signIn = document.querySelector("#sign-in")
    var signUP = document.querySelector("#sign_up")
    var s3 =document.querySelector("#s3")
    email.value="";
    password.value=""

    signIn.addEventListener("click" , logIn)
    function logIn()
    {
        if(checkUserData())
        {
          
          window.open("home.html","_self")
        }
        else{
          s3.innerHTML = "Invalid E-mail or Password"
        }
        
    }
    console.log("hereweare")
    signUP.addEventListener("click" , openSignUp)


  function openSignUp(){
      window.open("Sign_up.html","_self")
      console.log("hssssssi")
  }

    function checkUserData()
    {
      for(var i = 0 ; i < data.length ; i++ )
      {
        if(email.value.toUpperCase()== data[i].email.toUpperCase() && password.value.toUpperCase() == data[i].password.toUpperCase())
          {
            console.log(data[i].name);
            
            localStorage.setItem("login" , data[i].name )
            return true;
          }
          
        
      }
     return false;
    
    }














}


function signUp(){
          var rName = document.querySelector("#name")
          var rEmail =document.querySelector("#e-mail")
          var rpassword =document.querySelector("#password")
          var rSignUp =document.querySelector("#SignUp")
          var s2 =document.querySelector("#s2")
         

          rSignUp.addEventListener("click" , rsignUP)

          function rsignUP()
          {
            console.log("signnnnnnnnnnn")
            console.log(check())
           if(check() == false)
           {
              s2.innerHTML = `<h5 class=" text-danger ">email already exists </h5>`
              return;
           }
           else{
            add();
            window.alert("account Added Successfuly ")
            window.open("index.html","_self")

           }
          



          
          }

          function check(){

              for(var i = 0 ; i < data.length ; i ++ )
              {
               
                if(rEmail.value.toUpperCase() == data[i].email.toUpperCase())
                {
                    return false;
                }

              }
              return true;

          }

          function add(){

            var name = rName.value
            var email = rEmail.value
            var password =rpassword.value
            var newdata ={
              name , email , password
            }
            data.push(newdata);
            localSave();

            console.log(data)
          }
         


          

}


function home()
{
    var logOut = document.querySelector("#btn-logout")
    var info = document.querySelector("#userName")
    var username = localStorage.getItem('login')
    var reset = document.querySelector("#reset")
    reset.addEventListener("click" , clear)

    function clear ()
    {
      resetAll();
      window.open("index.html","_self")
      localStorage.removeItem('login')

    }

    info.innerHTML = ` Welcome   ${username}`
    logOut.addEventListener("click" , logingOut)

    function logingOut()
    {
      window.open("index.html","_self")
      localStorage.removeItem('login')

    }
}


function localSave () {
  localStorage.setItem("sign" , JSON.stringify(data))
}


function resetAll(){
  if(localStorage.sign != null)
  {   

      localStorage.clear();
      
    
  }
}

