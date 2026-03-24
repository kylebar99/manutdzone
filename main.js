

document.querySelectorAll(".section-header").forEach((header) => {
  if (!header.hasAttribute("aria-expanded")) {
    header.setAttribute("aria-expanded", "false");
  }

  header.addEventListener("click", () => {
    const section = header.closest(".expandable-section");
    if (!section) return; 

 
    const isExpanded = section.classList.toggle("active");

  
    const icon = header.querySelector(".toggle-icon");
    if (icon) {
      icon.textContent = isExpanded ? "−" : "+";
    }

  
    header.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  });
});
