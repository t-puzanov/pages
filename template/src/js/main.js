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
            throwOnError: false
        });
    }
});