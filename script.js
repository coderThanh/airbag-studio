// Reload on top
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual'
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0)
  }
}

//
function runGSapClipFromLeft() {
  gsap.registerPlugin(ScrollTrigger)

  const listItems = gsap.utils.toArray('.gsap-clip-from-left')

  listItems?.forEach((element) => {
    const listTrigger = gsap.utils.toArray(
      element.querySelectorAll('.trigger-clip-from-left'),
    )

    let delay = 0.15

    listTrigger.forEach((trigger, index) => {
      gsap.set(trigger, { x: '-120%' })

      const delayBonus = trigger?.dataset?.delay ? trigger?.dataset?.delay : 0

      delay += 0.15 + parseFloat(delayBonus)

      gsap.to(trigger, {
        x: '0%',
        duration: 0.8,
        delay: delay,
        ease: 'slow',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: `bottom 20%`,
        },
      })
    })
  })
}

runGSapClipFromLeft()

//
function runGSapClipFromBottom() {
  gsap.registerPlugin(ScrollTrigger)

  const listItems = gsap.utils.toArray('.gsap-clip-from-bottom')

  listItems?.forEach((element) => {
    const listTrigger = gsap.utils.toArray(
      element.querySelectorAll('.trigger-clip-from-bottom'),
    )

    let delay = 0.15

    listTrigger.forEach((trigger, index) => {
      const delayBonus = trigger?.dataset?.delay ? trigger?.dataset?.delay : 0

      delay += 0.15 + parseFloat(delayBonus)

      gsap.from(trigger, {
        y: '120%',

        duration: 0.8,
        delay: delay,
        ease: 'slow',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: `bottom 20%`,
        },
      })
    })
  })
}

runGSapClipFromBottom()

//
function runGSapHomeHero() {
  gsap.registerPlugin(ScrollTrigger)

  gsap.to(['.home-hero :is(h1, p)'], {
    opacity: 0,
    y: '-150px',
    x: '-100px',
    ease: 'slow',
    scrollTrigger: {
      trigger: '.home-hero',
      start: 'top top',
      end: `bottom 80%`,
      scrub: 0.5,
      //   markers: true,
    },
  })

  gsap.to('.home-hero .box', {
    width: '100vw',
    height: '100vh',
    top: 0,
    ease: 'none',
    transform: 'skewY(0deg)',
    scrollTrigger: {
      trigger: '.home-hero',
      start: 'top top',
      end: `bottom 80%`,
      scrub: true,
      //   markers: true,
    },
  })

  gsap.to('.home-hero .box', {
    id: 'home-hero-box',
    left: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.home-hero',
      start: 'top top',
      end: `bottom 40%`,
      scrub: true,
      //   markers: true,
      pin: true,
    },
  })
}

runGSapHomeHero()

//
function runGSapHomeAbout() {
  gsap.registerPlugin(ScrollTrigger)

  const roadHeight = window.innerHeight * 4

  gsap.from('.home-about', {
    id: 'about',
    ease: 'none',
    scrollTrigger: {
      trigger: '.home-about',
      start: 'top top',
      end: `+=${roadHeight}`,
      scrub: true,
      //   markers: true,
      pin: true,
    },
  })

  gsap.to('.home-about .box.first', {
    id: 'box-first',
    ease: 'none',
    keyframes: {
      '0%': {
        width: document.body.clientWidth,
        height: '101vh',
        left: '50%',
        top: '50%',
        transform: 'perspective(80px) rotateX(0deg) translate(-50%, -50%)',
        borderRadius: '0px',
        zIndex: 10,
      },
      '25%': {
        borderRadius: '30px',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        transform: 'perspective(80px) rotateX(0deg) translate(0%, 0%) ',
      },
      '21%': {
        transformOrigin: '50% 100%',
      },

      '30%': {
        borderRadius: '30px 30px 0 0',
      },
      '45%': {
        opacity: 1,
      },
      '46%': {
        opacity: 0,
      },
      '50%': {
        transform: 'perspective(80px) translate(0%, -100%) rotateX(10deg) ',
      },
    },
    scrollTrigger: {
      trigger: '.home-about',
      start: `top top`,
      end: `+=${roadHeight}`,
      scrub: true,
    },
  })

  gsap.to('.home-about .box.second', {
    id: 'box-second',
    ease: 'none',
    keyframes: {
      '0%': {
        borderRadius: '0 0 30px 30px',
        transformOrigin: '50% 0%',
        transform: 'perspective(80px) translate(0%, 100%) rotateX(-10deg) ',
        zIndex: 0,
      },

      '25%': {
        borderRadius: '0 0 30px 30px',
        transformOrigin: '50% 0%',
        transform: 'perspective(80px) translate(0%, 100%) rotateX(-10deg) ',
      },

      '34%': {
        zIndex: 0,
      },
      '35%': {
        zIndex: 20,
      },
      '45%': {
        borderRadius: '0 0 30px 30px',
      },
      '50%': {
        transform: 'perspective(80px) translate(0%, 0%) rotateX(0deg) ',
        borderRadius: '30px',
        width: '100%',
        height: '100%',
        left: '0%',
        top: '0%',
      },

      '100%': {
        width: document.body.clientWidth,
        height: '100vh',
        left: '50%',
        top: '50%',
        transform: 'perspective(80px)  translate(-50%, -50%)',
        borderRadius: '0px',
      },
    },
    scrollTrigger: {
      trigger: '.home-about',
      start: `top top`,
      end: `+=${roadHeight}`,
      scrub: true,
    },
  })

  gsap.to('.home-about .text-fade-1st', {
    keyframes: {
      '0%': {
        x: '20vw',
        y: '-48vh',
        opacity: 0,
        fontSize: '2.4rem',
        color: 'white',
      },
      '10%': {
        x: '0',
        y: '-50vh',
        opacity: 1,
      },
      '20%': {
        color: 'white',
        fontSize: '2.4rem',
      },
      '35%': {
        y: '5vh',
        color: '#841a3b',
        fontSize: '1.2rem',
      },
      '50%': {
        y: '5vh',
        opacity: 1,
      },
      '60%': {
        y: '-20px',
        opacity: 0,
      },
    },
    scrollTrigger: {
      trigger: '.home-about',
      start: `top bottom`,
      end: `+=${roadHeight}`,
      scrub: true,
    },
  })

  gsap.to('.home-about .text-fade-2st', {
    keyframes: {
      0: {
        opacity: 0,
      },
      '5%': {
        opacity: 0,
        y: '7vh',
        x: '20px',
      },
      '15%': {
        opacity: 1,
        y: '5vh',
        x: '0',
      },
      '25%': {
        y: '5vh',
        opacity: 1,
      },
      '35%': {
        y: '-20px',
        opacity: 0,
      },
    },
    scrollTrigger: {
      trigger: '.home-about',
      start: `top top`,
      end: `+=${roadHeight}`,
      scrub: true,
    },
  })

  gsap.to('.home-about .img-fade img', {
    keyframes: {
      0: {
        opacity: 0,
      },
      '5%': {
        opacity: 0,
        y: 20,
      },
      '15%': {
        opacity: 1,
        y: 0,
      },
    },
    scrollTrigger: {
      trigger: '.home-about',
      start: `top top`,
      end: `+=${roadHeight}`,
      scrub: 0.2,
    },
  })
  gsap.to('.home-about .text-fade-3nd', {
    keyframes: {
      0: {
        y: '2vh',
        fontSize: '3rem',
        opacity: 0,
      },
      '36%': {
        y: '0vh',
        fontSize: '3rem',
        opacity: 0,
      },
      '42%': {
        y: '-3vh',
        opacity: 1,
        fontSize: '3rem',
      },
      '52%': {
        y: '-3vh',
        opacity: 1,
        fontSize: '3rem',
      },
      '70%': {
        y: '-20vh',
        fontSize: '1.2rem',
      },
    },
    scrollTrigger: {
      trigger: '.home-about',
      start: `top top`,
      end: `+=${roadHeight}`,
      scrub: true,
      // markers: true,
    },
  })

  gsap.to('.home-about .text-fade-4th', {
    keyframes: {
      0: {
        y: '-5vh',
        opacity: 0,
      },

      '54%': {
        y: '-5vh',
        opacity: 0,
      },
      '70%': {
        y: '-20vh',
        opacity: 1,
      },
    },
    scrollTrigger: {
      trigger: '.home-about',
      start: `top top`,
      end: `+=${roadHeight}`,
      scrub: true,
      // markers: true,
    },
  })
}

runGSapHomeAbout()

//
function runMasonyHomeWell() {
  jQuery(document).ready(function ($) {
    $('.home-well .box-imgs').masonry({
      itemSelector: '.img',
      gutter: 120,
    })
  })
}

runMasonyHomeWell()

//
function runGSapHomeWell() {
  gsap.registerPlugin(ScrollTrigger)

  gsap.fromTo(
    '.home-well .box-1',
    {
      y: 300,
      x: 200,
    },
    {
      ease: 'slow',
      y: -200,
      x: -200,
      scrollTrigger: {
        trigger: '.home-well',
        start: 'top bottom',
        end: `bottom 20%`,
        scrub: 0.5,
      },
    },
  )

  gsap.fromTo(
    '.home-well .box-imgs',
    { y: 300, x: 200 },
    {
      ease: 'slow',
      y: -200,
      x: -400,
      scrollTrigger: {
        trigger: '.home-well',
        start: 'top bottom',
        end: `bottom 20%`,
        scrub: 0.5,
      },
    },
  )

  gsap.set('.home-well .box-bottom', { marginTop: -200 })
}

runGSapHomeWell()

//
function runGSapHomeIdea() {
  gsap.registerPlugin(ScrollTrigger)

  const boxInnerHeight = document.querySelector(
    '.home-idea .box-inner',
  )?.offsetHeight

  const boxContentHeight = document.querySelector(
    '.home-idea .box-content',
  )?.offsetHeight

  const roadMap = boxInnerHeight

  gsap.from('.home-idea', {
    ease: 'slow',
    scrollTrigger: {
      trigger: '.home-idea',
      start: 'top 15%',
      end: `+=${roadMap}px`,
      scrub: 1,
      pin: true,
    },
  })

  gsap.to('.home-idea', {
    ease: 'slow',
    color: 'white',
    '--box-bg': '#000',
    scrollTrigger: {
      trigger: '.home-idea',
      start: 'top 15%',
      end: `+=100px`,
      scrub: 0.5,
    },
  })

  gsap.to('.home-idea .btn-two-layer', {
    ease: 'slow',
    '--btn-bg': '#bdff00',
    '--btn-bg-hover': '#000',
    '--btn-text': '#000',
    '--btn-text-hover': 'white',
    scrollTrigger: {
      trigger: '.home-idea',
      start: 'top 15%',
      end: `+=100px`,
      scrub: true,
    },
  })

  gsap.to('.home-idea .box-bg', {
    ease: 'slow',
    width: '90%',
    height: '120%',
    scrollTrigger: {
      trigger: '.home-idea',
      start: 'top 15%',
      end: `+=${roadMap}px`,
      scrub: 0.5,
    },
  })

  gsap.fromTo(
    '.home-idea .box-inner',
    {
      y: 100,
    },
    {
      ease: 'slow',
      y: (boxInnerHeight - boxContentHeight + 150) * -1,
      scrollTrigger: {
        trigger: '.home-idea',
        start: 'top 15%',
        end: `+=${roadMap}px`,
        scrub: 0.5,
      },
    },
  )
}

runGSapHomeIdea()

//
function runGSapHomeTrust() {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from('.home-trust .imgs-1', {
    ease: 'slow',
    x: 30,
    y: -50,
    scrollTrigger: {
      trigger: '.home-trust',
      start: 'top center',
      end: 'center top',
      scrub: 0.5,
    },
  })

  gsap.from(['.home-trust .imgs-2', '.home-trust .imgs-3'], {
    ease: 'slow',
    x: -30,
    y: -50,
    scrollTrigger: {
      trigger: '.home-trust',
      start: 'top center',
      end: 'center top',
      scrub: 0.5,
    },
  })
}

runGSapHomeTrust()

//
function runGSapFooter() {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from('footer', {
    ease: 'none',
    y: '-30%',
    scrollTrigger: {
      trigger: 'footer',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0.6,
    },
  })

  gsap.to('footer .bg-overlay', {
    ease: 'none',
    opacity: 0,
    scrollTrigger: {
      trigger: 'footer',
      start: '30% bottom',
      end: 'bottom bottom',
      scrub: 1,
    },
  })
}

runGSapFooter()
