function addnewaq(){
  let newnode=document.createElement("textarea");
  newnode.classList.add("form-control")
  newnode.classList.add("aqfield");
  newnode.classList.add("mt-2");
  newnode.setAttribute("placeholder","enter here");
  newnode.setAttribute("rows",3);
  let acadbutton=document.getElementById("aq");
  let acaddiv=document.getElementById("aqd");
  acaddiv.insertBefore(newnode,acadbutton);
}
function addnewts(){
  let newnode1=document.createElement("textarea");
  newnode1.classList.add("form-control")
  newnode1.classList.add("tsfield");
  newnode1.classList.add("mt-2");
  newnode1.setAttribute("placeholder","enter here");
  newnode1.setAttribute("rows",3);
  let tsbutton=document.getElementById("ts");
  let tsaddiv=document.getElementById("tsd");
  tsaddiv.insertBefore(newnode1,tsbutton);
}
function addnewin(){
  let newnode2=document.createElement("textarea");
  newnode2.classList.add("form-control")
  newnode2.classList.add("infield");
  newnode2.classList.add("mt-2");
  newnode2.setAttribute("placeholder","enter here");
  newnode2.setAttribute("rows",4);
  let inbutton=document.getElementById("in");
  let inaddiv=document.getElementById("ind");
  inaddiv.insertBefore(newnode2,inbutton);
}
function addnewpr(){
  let newnode3=document.createElement("textarea");
  newnode3.classList.add("form-control")
  newnode3.classList.add("prfield");
  newnode3.classList.add("mt-2");
  newnode3.setAttribute("placeholder","enter here");
  newnode3.setAttribute("rows",5);
  let prbutton=document.getElementById("pr");
  let praddiv=document.getElementById("prd");
  praddiv.insertBefore(newnode3,prbutton);
}
function addnewex(){
  let newnode4=document.createElement("textarea");
  newnode4.classList.add("form-control")
  newnode4.classList.add("exfield");
  newnode4.classList.add("mt-2");
  newnode4.setAttribute("placeholder","enter here");
  newnode4.setAttribute("rows",3);
  let exbutton=document.getElementById("ex");
  let exaddiv=document.getElementById("exd");
  exaddiv.insertBefore(newnode4,exbutton);
}
function generatecv(){
  let nameField=document.getElementById("nameField").value;
  let smname=document.getElementById("smname");
  smname.innerHTML=nameField;
  let phoneField=document.getElementById("phoneField").value;
  let smphone=document.getElementById("smphone");
  smphone.innerHTML=phoneField;
  let addressField=document.getElementById("addressField").value;
  let smaddress=document.getElementById("smaddress");
  smaddress.innerHTML=addressField;
  let llField=document.getElementById("llField").value;
  let smll=document.getElementById("smll");
  smll.innerHTML=llField;
  let githubField=document.getElementById("github Field").value;
  let smgithub=document.getElementById("smgithub");
  smgithub.innerHTML=githubField;

  let AcadField=document.getElementsByClassName("aqfield");
  let str="";
  for(e of AcadField){
    str=str+`<li>${e.value}</li>`;
  }
  document.getElementById("aqt").innerHTML=str;

  let tsfield=document.getElementsByClassName("tsfield");
  let str1="";
  for(f of tsfield){
    str1=str1+`<li>${f.value}</li>`;
  }
 document.getElementById("tst").innerHTML=str1;
 
 let infield=document.getElementsByClassName("infield");
  let str2="";
  for(g of infield){
    str2=str2+`<li>${g.value}</li>`;
  }
  document.getElementById("int").innerHTML=str2;
 
  let prfield=document.getElementsByClassName("prfield");
  let str3="";
  for(h of prfield){
    str3=str3+`<li>${h.value}</li>`;
  }
  document.getElementById("prt").innerHTML=str3;
  
  let exfield=document.getElementsByClassName("exfield");
  let str4="";
  for(i of exfield){
    str4=str4+`<li>${i.value}</li>`;
  }
  document.getElementById("ext").innerHTML=str4;

  let file=document.getElementById("imgField").files[0];
  console.log(file);
  let reader=new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  reader.onloadend=function(){
    document.getElementById("im").src=reader.result;
  }

  document.getElementById("cv-form").style.display="none";
  document.getElementById("cv-template").style.display="block";

  
}
function printcv(){
  window.print();
}