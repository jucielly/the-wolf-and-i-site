window.addEventListener("load", () => {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 789.1476416322727,
        },
      },
      color: {
        value: "#c4bdef",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.48927153781200905,
        random: false,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.7,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "bubble",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 83.91608391608392,
          size: 1,
          duration: 3,
          opacity: 1,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  const navHome = document.querySelector(".nav-home");
  const navHistory = document.querySelector(".nav-history");
  const navGalery = document.querySelector(".nav-galery");
  const navAbout = document.querySelector(".nav-about");
  const navMedia = document.querySelector(".nav-media");
  const navContact = document.querySelector(".nav-contact");
  const homeSection = document.querySelector("#home");
  const historySection = document.querySelector("#history");
  const galerySection = document.querySelector("#galery");
  const aboutSection = document.querySelector("#about");
  const mediaSection = document.querySelector("#media");
  const contactSection = document.querySelector("#contact");

  const handleScroll = (btn, section) =>
    btn.addEventListener("click", () => {
      console.log(btn, section);
      section.scrollIntoView({
        behavior: "smooth",
      });
    });

  handleScroll(navHome, homeSection);
  handleScroll(navHistory, historySection);
  handleScroll(navGalery, galerySection);
  handleScroll(navAbout, aboutSection);
  handleScroll(navMedia, mediaSection);
  handleScroll(navContact, contactSection);
});
