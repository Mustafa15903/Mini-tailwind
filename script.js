        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            50: '#eff6ff',
                            100: '#dbeafe',
                            200: '#bfdbfe',
                            300: '#93c5fd',
                            400: '#60a5fa',
                            500: '#3b82f6',
                            600: '#2563eb',
                            700: '#1d4ed8',
                            800: '#1e40af',
                            900: '#1e3a8a',
                        },
                        'background-light': '#f8fafc',
                        'background-dark': '#0f172a',
                    },
                    fontFamily: {
                        'display': ['Inter', 'system-ui', 'sans-serif'],
                    }
                }
            }
        }

        // ================== Elements ==================
const classInput = document.getElementById("classInput");
const applyBtn = document.getElementById("applyBtn");
const clearBtn = document.getElementById("clearBtn");
const previewBox = document.getElementById("previewBox");
const copyCodeBtn = document.getElementById("copyCodeBtn");
const updateContentBtn = document.getElementById("updateContentBtn");
const customContent = document.getElementById("customContent");
const classItems = document.querySelectorAll(".class-item");
const tabs = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
const classSearch = document.getElementById("classSearch");

// ================== Apply classes ==================
applyBtn.addEventListener("click", () => {
  const classes = classInput.value.trim();
  if (classes) {
    previewBox.className =
      "min-h-64 p-6 border-2 border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center transition-all duration-200 " +
      classes;
  }
});

// ================== Clear ==================
clearBtn.addEventListener("click", () => {
  classInput.value = "";
  previewBox.className =
    "min-h-64 p-6 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center transition-all duration-200";
  previewBox.innerHTML =
    '<p class="text-gray-500 dark:text-gray-400 text-center">Your styled element will appear here.<br>Try applying classes like: <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-2 inline-block">bg-blue-500 text-white p-4 rounded-lg</code></p>';
});

// ================== Update Preview Content ==================
updateContentBtn.addEventListener("click", () => {
  const content = customContent.value.trim();
  previewBox.innerHTML = content
    ? content
    : `<p class="text-gray-500 dark:text-gray-400">Empty preview</p>`;
});

// ================== Copy HTML ==================
copyCodeBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(previewBox.outerHTML).then(() => {
    copyCodeBtn.textContent = "Copied!";
    setTimeout(() => (copyCodeBtn.textContent = "Copy HTML"), 1500);
  });
});

// ================== Sidebar class click ==================
classItems.forEach((item) => {
  item.addEventListener("click", () => {
    const cls = item.dataset.class;
    classInput.value = classInput.value
      ? classInput.value + " " + cls
      : cls;
  });
});

// ================== Tabs ==================
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    // reset all
    tabs.forEach((t) =>
      t.classList.remove("border-primary-500", "text-primary-500")
    );
    tabContents.forEach((c) => c.classList.add("hidden"));

    // activate current
    tab.classList.add("border-primary-500", "text-primary-500");
    document.getElementById(`${target}-tab`).classList.remove("hidden");
  });
});

// ================== Class Search ==================
classSearch.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  classItems.forEach((item) => {
    const txt = item.dataset.class.toLowerCase();
    item.style.display = txt.includes(q) ? "block" : "none";
  });
});
