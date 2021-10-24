import React from "react";

// Props are passed through our functional component.
function Footer() {
  return (
    <footer class="d-flex justify-content-center">
      <a
        class="bg-secondary text-light m-2"
        href="https://github.com/mjh1985codeman"
      >
        <i class="fab fa-github-square fa-3x"></i>
      </a>

      <a
        class="bg-secondary text-light m-2"
        href="https://www.linkedin.com/in/michael-hodges-937225ba/"
      >
        <i class="fab fa-linkedin fa-3x"></i>
      </a>
      <a
        class="bg-secondary text-light m-2"
        href="mailto:michael.hodges1985@yahoo.com"
      >
        <i class="fas fa-envelope-square fa-3x"></i>
      </a>
    </footer>
  );
}

export default Footer;
