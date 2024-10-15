function loadingAnimation() {
    
var h5Timer = document.querySelector(".part1 h5");
var grow = 0;

var tl = gsap.timeline();
tl.from('.line h1',{
    y:120,
    stagger:0.2,
    delay:0.5
})
tl.from(".part1, .line h2",{
    opacity:0,
    onStart:function () {
        setInterval(() => {
            if(grow<100){
                h5Timer.innerHTML = `<i>${grow++}</i>`;
                console.log(int);
            }else{
                h5Timer.innerHTML = `<i>${grow}</i>`;
            }
        }, 30);
    }
})
tl.to(".loader",{
    opacity:0,
    duration:0.4,
    delay:3,
})
tl.from(".page1 h3",{
    y:200,
    color:"green"
})
tl.to(".loader",{
    display:"none"
})
tl.from(".nav",{
    opacity:0,
    duration:0.8
})
tl.from("#hero1 h1, #hero2 h1, #hero3 h2",{
    y:120,
    stagger:0.2
})
tl.from(".page2",{
    opacity:0
})
}

function cursorAni() {
    Shery.mouseFollower();
    Shery.makeMagnet(".magnet",{});
}

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}

function SheryAni() {
 Shery.imageEffect(".image-div ",{
    style:5,
    gooey:true,
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"","range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":5}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
 })    
}

let videoContainer = document.querySelector(".video-contaner");
function VideoAni() {

    videoContainer.addEventListener("mouseenter",function () {
        videoContainer.addEventListener("mousemove",function (dets) {
            gsap.to(".mousefollower",{
                opacity:0
            })
            gsap.to(".vid-cursor",{
                left:dets.x - 570,
                y:dets.y - 300
            })
        })
    })

    videoContainer.addEventListener("mouseleave",function () {
        gsap.to(".mousefollower",{
            opacity:1
        })
        gsap.to(".vid-cursor",{
            left:"80%",
        })
    })
}

function videoPlay() {
    let vid = document.querySelector(".vid");
    
    videoContainer.addEventListener("click",function () {
        vid.play();
    })

    videoContainer.addEventListener("mouseleave",function () {
        vid.pause();
    })
}

function MediaCircle() {
    Shery.hoverWithMediaCircle(".mediaCir",{
        images: ["assets/1.png","assets/2.png"]
    });
}

let txtAni = document.querySelector(".footer h1");

txtAni.addEventListener("mouseenter",function () {
    $('.footer h1').textillate(
        { in: { effect: 'fadeIn' } },
        { outEffects:'hinge'}
    );
})
    
MediaCircle();
videoPlay();
VideoAni();
loadingAnimation();
cursorAni();
locomotive();
SheryAni();