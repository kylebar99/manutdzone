document.querySelectorAll(".section-header").forEach((header) => {
  if (!header.hasAttribute("aria-expanded")) {
    header.setAttribute("aria-expanded", "false");
  }

  
  const toggleSection = () => {
    const section = header.closest(".expandable-section");
    if (!section) return;

    const isExpanded = section.classList.toggle("active");

    const icon = header.querySelector(".toggle-icon");
    if (icon) icon.textContent = isExpanded ? "−" : "+";

    header.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  };

  header.addEventListener("click", toggleSection);

  header.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();     
      toggleSection();   
    }
  });
});
