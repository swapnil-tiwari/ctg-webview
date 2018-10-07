
/*
async function rpc(proc,arg)
{
	  var req={
                method:arg?'POST':'GET',
                headers:{
                    'content-type': 'application/json'
                    },
                }
	  arg?req.body=JSON.stringify(arg):null;
    var resp=await fetch('http://localhost:8080/data/'+proc,req);
    var js=await resp.json();
    if(js.code>=400)throw js;
  	return js;
}

res=await rpc('userdata',['username','email']);
document.write("<br>");
document.write(JSON.stringify(res))


*/

        async  function setAPI(cb)
        {
          if(window.api)
          {
            cb?cb(window.api):null;
            return window.api
          }
          var loc= localize();
          if(typeof cb=='function')
            {

              window.api=await loc
              cb(await loc);
            }
          else
          {
              window.api=await loc
              return await loc;
          }
        }
        async function login()
        {
            window.api?null:window.api=await setAPI();
            //await api.login{username:username.value,password:password.value};
          //   var res=await fetch('http://localhost:8080/data/login',
          //   {
          //       method:'post',
          //       headers:{
          //           'content-type':'application/json'
          //       },
          //       body:JSON.stringify({username:username.value,password:password.value})
          //   })
          // //  console.log(JSON.stringify(await res.json()));
          //   var response= await res.json();
          try{
            var response=await api.login({username:username.value,password:password.value});
            if (response.data.login==true)
            {
              if(location.hash=="#freelancer")
              {
                await api["register/update"]({type:'freelancer'});
              }
              if(location.hash=="#startup")
              {
                await api["register/update"]({type:'startup'});

              }
              var usertype=(await api.userdata(['type'])).data.type;
              var regstatus=(await api.userdata(['registrationstatus'])).data.registrationstatus;
              if(usertype=="freelancer" && typeof regstatus=="undefined")//register status
              {
                window.location.href = "../pages/finalizing-step-2.html";
              }
              else if(usertype=="startup" && typeof regstatus=="undefined")//register status
              {
                window.location.href = "../pages/finalizing-step-2-startups.html";
              }
              else {
                document.location.reload();
              }



            }
          }
            catch(e) {
               window.alert("Wrong Credentials");
            }

        }
        async function register_f()
        {
            var hash=window.location.hash="freelancer";
            window.api?null:window.api=await setAPI();
            // var res=await fetch('http://localhost:8080/data/register',
            // {
            //     method:'post',
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify({username:username_f.value,password:pass_f.value,email:email_f.value,contact:contactno_f.value})
            // })
            var response=await api.register({username:username_f.value,password:pass_f.value,email:email_f.value,contact:contactno_f.value});
            if(response.code==200)
            {
               window.location.href = "../pages/login.html#"+hash;
            }
            else {
               window.location.href = "../pages/getting-started.html";

            }
            //resp.value=JSON.stringify(await res.json())
            //console.log(JSON.stringify(await res.json()));


        }
        async function register_sp()
        {
          var hash=window.location.hash="startup";
            window.api?null:window.api=await setAPI();
            // var res=await fetch('http://localhost:8080/data/register',
            // {
            //     method:'post',
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify({username:username_sp.value,password:pass_sp.value,email:email_sp.value,contact:contactno_sp.value})
            // })
            var response=await api.register({username:username_sp.value,password:pass_sp.value,email:email_sp.value,contact:contactno_sp.value});
            if(response.code==200)
            {
               window.location.href = "../pages/login.html#"+hash;
            }
            else {
               window.location.href = "../pages/getting-started.html";

            }
            //resp.value=JSON.stringify(await res.json())
            //console.log(JSON.stringify(await res.json()));


        }
    async function logout()
    {
        window.api?null:window.api=await setAPI();
        var response=await api.logout();
        if(response.code==200)
        {
          document.location.reload();
        }
        else {
          console.log("Some Error");
        }
        // var res=await fetch('http://localhost:8080/data/logout',
        // {
        //     method:'get',
        //     headers:{
        //         'content-type':'application/json'
        //     }
        // })
        //resp.value=JSON.stringify(await res.json())

    }
    // async function islogin()
    // {
    //     var res=await fetch('/data/islogin',
    //     {
    //         method:'get',
    //         headers:{
    //             'content-type':'application/json'
    //         }
    //     })
    //     resp.value=JSON.stringify(await res.json())
    // }


    // Complete Registration Process Backend Functions
    async function updateData_f()
    {
      window.api?null:window.api=await setAPI();
      try
      {
        var response=await api["register/update"]({communicationlanguage:comlanguage.value,skillslevel:skill,description:description.value,work:work.value,registrationstatus:"completed"});
        if (response.code==200)
        {
           window.location.href =window.location.origin

        }

      }
      catch(e)
      {
        window.alert("Fill the form properly");

      }

    }
    async function updateData_s()
    {
      window.api?null:window.api=await setAPI();
      try
      {
        var response=await api["register/update"]({startupname:startupname.value,contact:startupcno.value,country:country.value,description:description.value,currentstatus:currentstatus.value,registrationstatus:"completed"});
        if (response.code==200)
        {
           window.location.href =window.location.origin

        }

      }
      catch(e)
      {
        window.alert("Fill the form properly")
      }

    }
