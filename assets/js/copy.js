document.querySelectorAll("pre").forEach(function (pre) {
  var btn = document.createElement("button");
  btn.className = "copy-btn";
  btn.textContent = "Copy";
  btn.addEventListener("click", function () {
    navigator.clipboard.writeText(pre.textContent).then(function () {
      btn.textContent = "Copied";
      setTimeout(function () { btn.textContent = "Copy"; }, 1500);
    });
  });
  var wrap = pre.parentElement;
  if (!wrap.classList.contains("highlight")) {
    wrap = document.createElement("div");
    pre.replaceWith(wrap);
    wrap.appendChild(pre);
  }
  wrap.classList.add("code-wrap");
  wrap.appendChild(btn);
});
