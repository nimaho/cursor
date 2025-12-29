import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

(() => {
  const storageKey = "theme";
  const yearEl = document.getElementById("year");
  const toggleBtn = document.getElementById("themeToggle");
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function setTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // ignore storage errors
    }
    if (toggleBtn) {
      const isDark = theme === "dark";
      toggleBtn.innerHTML = isDark
        ? '<i class="bi bi-sun"></i> حالت روشن'
        : '<i class="bi bi-moon-stars"></i> حالت تیره';
    }
  }

  function getPreferredTheme() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "dark" || saved === "light") return saved;
    } catch {
      // ignore
    }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  setTheme(getPreferredTheme());

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "dark" : "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (formStatus) formStatus.textContent = "ارسال انجام شد (فقط نمایشی).";
      form.reset();
    });
  }
})();

