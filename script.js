document.addEventListener("DOMContentLoaded", function () {
  // 1. Inisialisasi Typed.js untuk efek mengetik
  const typed = new Typed("#typed-output", {
    strings: [
      ">_ Hello, I'm Moch Syaiful_",
      ">_ I am a Backend Developer_",
      ">_ Building stable & fast APIs_",
    ], // Teks yang akan diketik (bisa lebih dari satu)
    typeSpeed: 60, // Kecepatan mengetik (ms)
    backSpeed: 30, // Kecepatan menghapus
    backDelay: 1500, // Jeda sebelum menghapus
    startDelay: 500, // Jeda sebelum mulai
    loop: true, // Ulangi animasi
    showCursor: true, // Tampilkan kursor
    cursorChar: "_", // Karakter kursor
    contentType: "html", // Tipe konten
  });

  // 2. Smooth Scrolling untuk link navigasi
  const navLinks = document.querySelectorAll(".main-header nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Calculate offset if header is sticky
        const headerOffset =
          document.querySelector(".main-header").offsetHeight + 10; // Get header height + extra space
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // 3. Penanganan Form Kontak (Simulasi Klien)
  // INGAT: Ini hanya simulasi. Anda perlu backend atau layanan pihak ketiga.
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      formStatus.textContent = "C:\\> Sending message... please wait..."; // Initial status

      // Simulasi penundaan pengiriman (misalnya 1.5 detik)
      setTimeout(() => {
        formStatus.textContent =
          "C:\\> Message sent successfully! (Simulation)"; // Success message
        contactForm.reset(); // Kosongkan form

        // Hapus pesan status setelah beberapa detik
        setTimeout(() => {
          formStatus.textContent = "";
        }, 4000); // Hapus setelah 4 detik
      }, 1500); // Penundaan simulasi
    });
  }

  // 4. Update Tahun di Footer secara otomatis
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
