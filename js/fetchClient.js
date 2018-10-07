var $$client=null;
async function func()
{


 await setAPI();
 $$client=$$client||await api.userdata(['username','email','contact','description','type'])
 typeof startup_cap_dash_1!='undefined'?startup_cap_dash_1.innerHTML=$$client.data.username:null;
 typeof startup_cap_dash_2!='undefined'?startup_cap_dash_2.innerHTML=$$client.data.username:null;

 typeof startup_cap_post!='undefined'?startup_cap_post.innerHTML=$$client.data.username:null;
 typeof startupname!='undefined'?startupname.value=$$client.data.username:null;
 typeof startupemail!='undefined'?startupemail.value=$$client.data.email:null;
 typeof startupcno!='undefined'?startupcno.value=$$client.data.contact:null;
 typeof fname!='undefined'?fname.value=$$client.data.username:null;
 typeof clientname!='undefined'?clientname.innerHTML=$$client.data.username:null;
 typeof clientemail!='undefined'?clientemail.innerHTML=$$client.data.email:null;
 typeof clientinfo!='undefined'?clientinfo.innerHTML=$$client.data.description:null;
  typeof clienttype!='undefined'?clienttype.innerHTML=$$client.data.type:null;


};
func();
