document.addEventListener("DOMContentLoaded", function () {
    const sidebarItems = document.querySelectorAll('.sidebar-item');

    window.addEventListener('scroll', function () {
        let currentScroll = window.pageYOffset;

        sidebarItems.forEach(function (item) {
            let sectionId = item.querySelector('a').getAttribute('href').substring(1);
            let section = document.getElementById(sectionId);

            if (section.offsetTop <= currentScroll && section.offsetTop + section.offsetHeight > currentScroll) {
                sidebarItems.forEach(function (item) {
                    item.classList.remove('active');
                });
                item.classList.add('active');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let theme = localStorage.getItem("theme");
    if (theme) {
        toggleDarkMode(theme);
    } else {
        toggleDarkMode("light"); 
    }
});

function toggleDarkMode() {
    let element = document.documentElement;
    let iconeSol = document.getElementById("iconeSol");
    let iconeLua = document.getElementById("iconeLua");
    let logosRodape = document.querySelectorAll(".logoRodape");
    let logos = document.querySelectorAll(".logo");

    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        iconeSol.style.display = "none";
        iconeLua.style.display = "inline";

        logos.forEach(function (logo) {
            if (logo.dataset.mode === "escura") {
                logo.style.display = "inline";
            } else {
                logo.style.display = "none";
            }
        });
        // Itera sobre os logos do rodapé e exibe o logo escura e oculta o claro
        logosRodape.forEach(function (logoRodape) {
            if (logoRodape.dataset.mode === "escura") {
                logoRodape.style.display = "inline";
            } else {
                logoRodape.style.display = "none";
            }
        });
    } else {
        iconeSol.style.display = "inline";
        iconeLua.style.display = "none";

        logos.forEach(function (logo) {
            if (logo.dataset.mode === "clara") {
                logo.style.display = "inline";
            } else {
                logo.style.display = "none";
            }
        });
        // Itera sobre os logos do rodapé e exibe o logo claro e oculta o escura
        logosRodape.forEach(function (logoRodape) {
            if (logoRodape.dataset.mode === "clara") {
                logoRodape.style.display = "inline";
            } else {
                logoRodape.style.display = "none";
            }
        });
    }
}