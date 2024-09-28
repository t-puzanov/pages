document.addEventListener("DOMContentLoaded", function() {
    let elements = document.getElementsByClassName("tex");

    for (let i = 0; i < elements.length; i++) {

        let el = elements[i];

        if (el.tagName.toUpperCase() !== "SPAN") {
            continue;
        }

        let text = el.textContent;

        el.classList.add("showed");
        el.innerHTML = "";

        katex.render(text, el, {
            displayMode: el.classList.contains("dmode"),
            throwOnError: false
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let elements = document.getElementsByClassName("proof");
    
    for (let i = 0; i < elements.length; i++) {
        let el = elements[i];

        el.addEventListener("click", function() {
            if (el.classList.contains("hidden")) {
                el.classList.remove("hidden");
            }
        });

        el.getElementsByClassName("head")[0].addEventListener("click", function(event) {
            if (!el.classList.contains("hidden")) {
                el.classList.add("hidden");
                event.stopPropagation();
            }
        });
    }
});