// fetch('/file/nav.html')
// .then(res => res.text())
// .then(text => {
//     let oldelem = document.querySelector("script#replace_with_navbar");
//     let newelem = document.createElement("div");
//     newelem.innerHTML = text;
//     oldelem.parentNode.replaceChild(newelem,oldelem);
// })


// const login=document.getElementById('login');
// fetch('/file/nav.html')
// .then(res=>{
//   return res.text()})
// .then(data=>{
//    login.innerHTML=data;
//    const parser=new DOMParser();
//    const doc=parser.parseFromString(data,'text/html');
//    console.log(doc.querySelector('script').textContent)
//    eval(doc.querySelector('script').textContent);
// })


 function loadNavbar() { 
            fetch('/file/nav.html') 
                .then(response => response.text()) 
                .then(data => { 
                    document.getElementById('navbar').innerHTML = data; 
                }); 
        } 
  window.onload = loadNavbar; 
console.log("narbar")
  document.getElementById('blogBtn').addEventListener('click',(e)=>{
  location.href="./file/home.html";
  document.getElementById('tab').classList.add('hidden')
  console.log("nav")
})

  document.getElementById('donationBtn').addEventListener('click',(e)=>{

  })
    