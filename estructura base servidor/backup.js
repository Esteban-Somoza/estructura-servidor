if (options == `option`) {
    descripcion.style.display = "none";
    video.style.display = "none";
    color.style.display = "none";
    imagen.style.display = "none";
}
if (options == `color`) {
    console.log("si")
    descripcion.style.display = "none";
    video.style.display = "none";
    color.style.display = "block";
    imagen.style.display = "none";
}
if (options == `imagen`) {
    console.log("si")
    color.style.display = "none";
    descripcion.style.display = "none";
    video.style.display = "none";
    imagen.style.display = "block";
}
if (options == `video`) {
    console.log("si")
    descripcion.style.display = "none";
    imagen.style.display = "none";
    color.style.display = "none";
    video.style.display = "block";
}
if (options == `descripcion`) {
    console.log("si")
    imagen.style.display = "none";
    color.style.display = "none";
    video.style.display = "none";
    descripcion.style.display = "block";
}

// var original = document.getElementById("inputBase");
            // var clone = original.cloneNode(true);
            // clone.removeAttribute("id");
            // terms.setAttribute('id', counter)
            // terms.setAttribute('style', 'color: green')
            // terms.appendChild(clone);
            // document.getElementById("form").appendChild(html);