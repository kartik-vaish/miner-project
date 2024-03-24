


// ********************************************************************************************



function smoothscrool(){
   gsap.registerPlugin(ScrollTrigger);

   const locoScroll = new LocomotiveScroll({
     el: document.querySelector(".section"),
     smooth: true,
   
     // for tablet smooth
     tablet: { smooth: true },
   
     // for mobile
     smartphone: { smooth: true }
   });
   locoScroll.on("scroll", ScrollTrigger.update);
   
   ScrollTrigger.scrollerProxy(".section", {
     scrollTop(value) {
       return arguments.length
         ? locoScroll.scrollTo(value, 0, 0)
         : locoScroll.scroll.instance.scroll.y;
     },
     getBoundingClientRect() {
       return {
         top: 0,
         left: 0,
         width: window.innerWidth,
         height: window.innerHeight
       };
     }
   
     // follwoing line is not required to work pinning on touch screen
   
     /* pinType: document.querySelector(".smooth-scroll").style.transform
       ? "transform"
       : "fixed"*/
   });
   
   
   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
   
   ScrollTrigger.refresh();
}

smoothscrool()


function mousemove(){
   var page=document.querySelector(".page1-contant");
 var curose=document.querySelector(".mouse");
 
page.addEventListener("mousemove",function (dets) {
   gsap.to(".mouse",{
      x:dets.x,
      y:dets.y
   })
})

page.addEventListener("mouseenter",function(){
   gsap.to(curose,{
      scale:1,
      opacity:1
   })
 })
page.addEventListener("mouseleave",function(){
   gsap.to(curose,{
      scale:0,
      opacity:0
   })
 })
   
}
mousemove()


function move2(){
 var page1=document.querySelector(".page5")
 var cur=document.querySelector(".cursour");

page1.addEventListener("mousemove",function(dot){
   gsap.to(".cursour",{
      x:dot.x,
      y:dot.y
   });

});
page1.addEventListener("mouseenter",function(){
   gsap.to(cur,{
      scale:1,
      opacity:1
   });
 });
page1.addEventListener("mouseleave",function(){
   gsap.to(cur,{
      scale:0,
      opacity:0
   });
 });
};
move2()

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

function loader(){
   var tl=gsap.timeline()
   tl.from(".loder h3",{
      x:50,
      opacity:0,
      duration:0.8,
      stagger:0.5
   
   
   })
   tl.to(".loder h3",{
      y:-40,
      opacity:0,
      duration:0.8,
      
   })
   
   tl.to(".loder ",{
     y:-1000,
   //   opacity:0,
     duration:0.8
   })
   tl.from(".page1-contant h1 span",{
      y:100,
      opacity:0,
      stagger:0.09,
      duration:0.7,
      delay:-0.7
   })
}
loader()


