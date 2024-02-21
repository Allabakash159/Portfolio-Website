const width = window.innerWidth;
const height = window.innerHeight;
if (width<900){
    let item1=document.getElementById('item1')
    item1.remove()   
    let item2=document.getElementById('item2')
    item2.remove()   
    let item3=document.getElementById('item3')
    item3.remove()   
    let item4=document.getElementById('item4')
    item4.remove()   
    let item5=document.getElementById('item5')
    item5.remove()   
    let item6=document.getElementById('item6')
    item6.remove()   
    addNav()


    // for body part
    document.getElementById('nav1').style.display='block'
    document.getElementById('part2').style.height="25vh"
    document.getElementById('part2').style.width="100vw"
    document.getElementById('abodytext').style.width='100vw'
    document.getElementById('abodytext').style.height='55vh'
    // document.getElementById('part2image').style.height="200px"
    // document.getElementById('part2image').style.height="200px"


    document.getElementById('navitem1').style.height="100%"
    document.getElementById('navitem1').style.width="10%"
    document.getElementById('name').style.fontSize='29px'
    document.getElementById('2image').style.height="225px"
    document.getElementById('2image').style.width="225px"
    // document.getElementById('image').style.width="35px"
    // document.getElementById('image').style.height="35px"
    document.getElementById('abodytext').style.justifyContent="flex-end"
    document.getElementById('abodytext').style.fontSize="30px"
    document.getElementById('myname').style.width="90vw"
    document.getElementById('intos').style.width="90vw"
    document.getElementById('intos').style.fontSize="21px"
    // document.getElementById('abters').style.fontSize="21px"
    document.getElementById('abtres').style.width="70vw"
    // document.getElementById('abodytext').style.alignItems="normal"
    document.getElementById('ba1').style.width="100px"
    document.getElementById('ba2').style.width="100px"
    document.getElementById('ba1').style.height="20px"
    document.getElementById('ba2').style.height="20px"
    document.getElementById('ba1').style.fontSize="15px"
    document.getElementById('ba2').style.fontSize="15px"
    document.getElementById('maincontent').style.width="91vw"
    document.getElementById('part2').style.alignItems="flex-start"
    // document.getElementById('abodytext').style.
    // document.getElementById('maincontent').style.


}else{
    document.getElementById('abodytext').style.width="50%"
    document.getElementById('abodytext').style.height="100%"
    document.getElementById('part2').style.width="50%"
    document.getElementById('part2').style.height="100%"
    let d=document.getElementById('nav1').style.display="flex"
}
function addNav(){
    let b=document.getElementById('navitem1')
    b.insertAdjacentHTML('beforeend',`<div class="menu item7" id="item7">
    <i class="fa-solid fa-bars" id="bars" onClick="openNav()"></i></div>`)
}
function openNav(){

    const ope=document.getElementById('menubar')
    ope.insertAdjacentHTML('beforeend',`<ul class="navvertbar" id="navvertbar">
    <li class="mitem"><a style="color:white" href="#nav1" onClick="closeNav()">Home</a></li>
    <li class="mitem"><a style="color:white" href="#nav2"onClick="closeNav()">About</a></li>
    <li class="mitem"><a style="color:white" href="#nav3"onClick="closeNav()">Skills</a></li>
    <li class="mitem"><a style="color:white" href="#nav4"onClick="closeNav()">Projects</a></li>
    <li class="mitem"><a style="color:white" href="#nav5"onClick="closeNav()">Education</a></li>
    <li class="mitem"><a style="color:white" href="#nav6"onClick="closeNav()">Contact</a></li>
    </ul>`)
    let bd=document.getElementById('bars')
    bd.remove()
    let cross=document.getElementById('item7')
    cross.insertAdjacentHTML('beforeend',`<i class="fa-solid fa-xmark" id="cross" onClick="closeNav()"></i>`)
}
function closeNav(){
    addAgain()
    let bars=document.getElementById('navvertbar')
    bars.remove()
    document.getElementById('item7').remove()
}
function addAgain(){
    document.getElementById('navitem1').style.backgroundColor='whitesmoke'
    addNav()
}
var typing=new Typed(".profession", {
    strings: ["", "Web Developement","Web Designing","Frontend Development", "Freelancing", "Graphics Designing"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});
var resizeTimeout;
window.addEventListener('resize', function(event) {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function(){
    window.location.reload();
  }, 1000);
});