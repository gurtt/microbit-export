// Inject renderer
var r = document.createElement("iframe");
r.id = "makecoderenderer";
r.style.position = "absolute";
r.style.left = 0;
r.style.bottom = 0;
r.style.width = "1px";
r.style.height = "1px";
r.src = "https://makecode.microbit.org/--docs?render=1"
document.body.appendChild(r);

// Events
window.addEventListener("message", function (event) {
    var msg = event.data;
    if (msg.source != "makecode") return;

    console.log(msg.type)
    switch (msg.type) {
        case "renderready":
            // iframe is ready to receive render requests
    }
}, false);
