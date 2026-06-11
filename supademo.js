(function () {
  var sdkSrc = "https://script.supademo.com/supademo.js";

  function loadSupademo() {
    if (window.Supademo) {
      return Promise.resolve(window.Supademo);
    }

    return new Promise(function (resolve, reject) {
      var existingScript = document.querySelector('script[src="' + sdkSrc + '"]');

      if (existingScript) {
        existingScript.addEventListener("load", function () {
          resolve(window.Supademo);
        }, { once: true });
        existingScript.addEventListener("error", reject, { once: true });
        return;
      }

      var script = document.createElement("script");
      script.src = sdkSrc;
      script.async = true;
      script.onload = function () {
        resolve(window.Supademo);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  document.addEventListener("click", function (event) {
    var trigger = event.target.closest("[data-supademo-id]");

    if (!trigger) {
      return;
    }

    event.preventDefault();

    var demoId = trigger.getAttribute("data-supademo-id");

    loadSupademo()
      .then(function (supademo) {
        supademo.open(demoId);
      })
      .catch(function () {
        window.open("https://app.supademo.com/demo/" + demoId, "_blank", "noopener,noreferrer");
      });
  });
})();
