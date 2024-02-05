

const list = document.querySelectorAll(".list");
      list.forEach((item) => item.addEventListener("click", activeLink));

      function activeLink() {
        list.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
      }

      let sections = document.querySelectorAll('section');

      function activeLinkOnScroll(){
        
        let len = sections.length;
        while(--len && window.scrollY + 97 < sections[len].offsetTop){}
        list.forEach((item) => item.classList.remove("active"));
        list[len].classList.add('active');
        console.log(sections[len].id);

      }
      activeLinkOnScroll();
      window.addEventListener('scroll', activeLinkOnScroll);


      // toggle hamburger on mobile view
      let icon = document.querySelector(".hamburger-menu");
       let menu = document.querySelector(".hamburger-nav");
       icon.addEventListener('click',toggleMenuNav);
       menu.addEventListener('click',toggleMenuNav);

       function toggleMenuNav(){
        icon.classList.toggle("change");
        menu.classList.toggle("change");
        }
    
// <!-- Setup and start animation! -->

    var typed = new Typed('#element', {
      strings: ['Web Developer','Front-end Developer', 'Full stack Developer'],
      typeSpeed: 50,
    })

    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", change_navBckgnd)
    function change_navBckgnd()
    {
      if(window.scrollY > 100)
      {
        navbar.style.backgroundColor = "rgb(134, 182, 201)";
      }
      else{
        navbar.style.backgroundColor = "transparent";
      }
    }