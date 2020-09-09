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
            btn = document.getElementById("render");
            btn.className = "btn-ready";
            btn.disabled = false;
    }
}, false);

function render() {
    btn = document.getElementById("render");
    btn.className = "btn-working";
    btn.disabled = true;

    r.contentWindow.postMessage({
        type: "renderblocks",
        id: "0",
        code: document.getElementById("code").value
    }, "https://makecode.microbit.org/");
};
