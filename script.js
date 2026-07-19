

    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: .15 });
    document.querySelectorAll(
        ".product-card,.why-box,.testi-card"
    ).forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(60px)";
        el.style.transition = ".8s";
        observer.observe(el);

    });

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click",function(){
    menu.classList.toggle("active");
    });

const menuLinks = document.querySelectorAll('#menu a');


menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});


