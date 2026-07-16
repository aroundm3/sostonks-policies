(function () {
  "use strict";

  var STORAGE_KEY = "sostonks-theme";
  var select = document.getElementById("theme-select");
  if (!select) return;

  var stored = localStorage.getItem(STORAGE_KEY) || "system";
  select.value = stored;

  select.addEventListener("change", function () {
    var value = select.value;
    if (value === "system") {
      localStorage.removeItem(STORAGE_KEY);
      document.documentElement.removeAttribute("data-theme");
    } else {
      localStorage.setItem(STORAGE_KEY, value);
      document.documentElement.setAttribute("data-theme", value);
    }
  });
})();
