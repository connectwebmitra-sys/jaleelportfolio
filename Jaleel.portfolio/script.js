/* ==========================================
   Jaleel Portfolio JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Header Shadow on Scroll
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /* ==========================
       Typing Animation
    ========================== */
    const typing = document.querySelector(".typing");

    if (typing) {

        const words = [

            "IT Infrastructure Engineer",
            "Network Administrator",
            "Azure Administrator",
            "Cloud Engineer"

        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {

            const Word = words[wordIndex];

            if (!deleting) {

                typing.textContent = Word.substring(0, charIndex++);

                if (charIndex > Word.length) {

                    deleting = true;

                    setTimeout(type, 1500);

                    return;

                }

            } else {

                typing.textContent = Word.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    wordIndex = (wordIndex + 1) % words.length;

                }

            }

            setTimeout(type, deleting ? 50 : 90);

        }

        type();

    }

    /* ==========================
       Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        sections.forEach(section => {

            const offset = section.offsetTop - 300;

            if (window.scrollY >= offset) {
                section.classList.add("show");
            }

        });

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       Theme Toggle
    ========================== */

    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("light");

            const icon = themeButton.querySelector("i");

            if (document.body.classList.contains("light")) {

                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");

            } else {

                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");

            }

        });

    }

    /* ==========================
       Mobile Menu
    ========================== */

    const menuBtn = document.getElementById("menu-btn");

    const navList = document.getElementById("nav-links");

    if (menuBtn && navList) {

        menuBtn.addEventListener("click", () => {

            navList.classList.toggle("show");

        });

    }

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navList) {
                navList.classList.remove("show");
            }

        });

    });

    /* ==========================================
       Premium Scroll Animation
    ========================================== */
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item, index) => {

        item.style.transitionDelay = `${index * 0.08}s`;

        observer.observe(item);

    });

});
