// script.js

// Animasi Jaringan di Latar Belakang
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 100;
const connectionDistance = 100;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = "#aaa"; /* Warna partikel lebih terang */
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < particleCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particles.push(new Particle(x, y));
  }
}

function connectParticles() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < connectionDistance) {
        ctx.strokeStyle = `rgba(170, 170, 170, ${
          1 - distance / connectionDistance
        })`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const particle of particles) {
    particle.update();
    particle.draw();
  }

  connectParticles();

  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

initParticles();
animate();

// Quiz Logic
const questions = [
  {
    question: "Apa tujuan utama dibangunnya jaringan komputer?",
    options: [
      "Menurunkan biaya listrik",
      "Mengurangi kebutuhan perangkat keras",
      "Berbagi data dan sumber daya",
      "Menambah ukuran file komputer",
    ],
    answer: "Berbagi data dan sumber daya",
  },
  {
    question: "Yang termasuk jaringan komputer berdasarkan jangkauan adalah...",
    options: [
      "OSI, TCP, IP",
      "HTML, HTTP, CSS",
      "LAN, MAN, WAN",
      "Star, Ring, Bus",
    ],
    answer: "LAN, MAN, WAN",
  },
  {
    question: "Jaringan yang mencakup satu gedung atau area kecil disebut...",
    options: ["WAN", "LAN", "MAN", "PAN"],
    answer: "LAN",
  },
  {
    question: "Jaringan komputer pertama kali dikembangkan oleh lembaga...",
    options: ["NASA", "IBM", "ARPA", "Intel"],
    answer: "ARPA",
  },
  {
    question: "Tokoh yang mengusulkan konsep “Intergalactic Network” adalah...",
    options: ["Tim Berners-Lee", "Vint Cerf", "J.C.R. Licklider", "Bill Gates"],
    answer: "J.C.R. Licklider",
  },
  {
    question: "Berikut ini yang merupakan topologi jaringan adalah...",
    options: ["URL", "LAN", "Mesh", "Switch"],
    answer: "Mesh",
  },
  {
    question:
      "Topologi yang semua komputer terhubung ke satu kabel utama disebut...",
    options: ["Star", "Ring", "Mesh", "Bus"],
    answer: "Bus",
  },
  {
    question: "Keunggulan utama dari topologi star adalah...",
    options: [
      "Jika satu kabel putus, seluruh jaringan terputus",
      "Hemat kabel",
      "Mudah dalam deteksi dan perbaikan gangguan",
      "Data mengalir satu arah",
    ],
    answer: "Mudah dalam deteksi dan perbaikan gangguan",
  },
  {
    question: "Lapisan paling bawah dalam model OSI adalah...",
    options: ["Data Link", "Physical", "Network", "Session"],
    answer: "Physical",
  },
  {
    question: "Fungsi dari lapisan transport pada model OSI adalah...",
    options: [
      "Menyampaikan email",
      "Mengatur sesi komunikasi",
      "Menyediakan koneksi end-to-end dan keandalan pengiriman data",
      "Menampilkan data ke pengguna",
    ],
    answer: "Menyediakan koneksi end-to-end dan keandalan pengiriman data",
  },
  {
    question: "Protokol yang bekerja pada lapisan jaringan adalah...",
    options: ["TCP", "IP", "HTTP", "FTP"],
    answer: "IP",
  },
  {
    question: "Manakah yang bukan termasuk dalam tujuh lapisan model OSI?",
    options: ["Application", "Transport", "Switch", "Session"],
    answer: "Switch",
  },
  {
    question: "WWW (World Wide Web) ditemukan oleh...",
    options: ["Mark Zuckerberg", "Bill Gates", "Tim Berners-Lee", "Steve Jobs"],
    answer: "Tim Berners-Lee",
  },
  {
    question:
      "Teknologi yang memungkinkan berbagai perangkat saling terhubung dan bertukar data secara otomatis disebut...",
    options: [
      "Blockchain",
      "Artificial Intelligence",
      "Internet of Things (IoT)",
      "Big Data",
    ],
    answer: "Internet of Things (IoT)",
  },
  {
    question:
      "Perangkat yang digunakan untuk menghubungkan dua jaringan berbeda adalah...",
    options: ["Switch", "Hub", "Router", "Modem"],
    answer: "Router",
  },
  {
    question: "Fungsi utama dari lapisan data link adalah...",
    options: [
      "Pengalamatan logis",
      "Deteksi dan koreksi kesalahan fisik",
      "Enkripsi data",
      "Manajemen koneksi",
    ],
    answer: "Deteksi dan koreksi kesalahan fisik",
  },
  {
    question: "Jaringan WAN mencakup area...",
    options: ["Rumah", "Sekolah", "Kota", "Negara atau lebih"],
    answer: "Negara atau lebih",
  },
  {
    question: "Apa fungsi dari switch dalam jaringan komputer?",
    options: [
      "Menghubungkan komputer ke internet langsung",
      "Mengirim sinyal nirkabel",
      "Mengatur jalur data antar perangkat dalam satu jaringan",
      "Menyimpan data pengguna",
    ],
    answer: "Mengatur jalur data antar perangkat dalam satu jaringan",
  },
  {
    question: "Yang merupakan kelebihan dari topologi mesh adalah...",
    options: [
      "Biaya murah",
      "Mudah dipasang",
      "Sangat andal karena ada banyak jalur data",
      "Menggunakan sedikit kabel",
    ],
    answer: "Sangat andal karena ada banyak jalur data",
  },
  {
    question:
      "Lapisan yang berperan langsung dalam komunikasi dengan pengguna akhir adalah...",
    options: ["Presentation", "Session", "Application", "Transport"],
    answer: "Application",
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = "";

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    quizContainer.innerHTML += `<div class="question"><strong>${q.question}</strong></div>`;
    q.options.forEach((option) => {
      quizContainer.innerHTML += `
                <div class="options">
                    <label>
                        <input type="radio" name="q${currentQuestion}" value="${option}">
                        ${option}
                    </label>
                </div>
            `;
    });
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("resultPage").style.display = "block";
  document.getElementById(
    "scoreDisplay"
  ).innerText = `Skor Anda: ${score} dari ${questions.length}`;
}

document.getElementById("startQuiz").addEventListener("click", () => {
  document.getElementById("startPage").style.display = "none";
  document.getElementById("quizPage").style.display = "block";
  currentQuestion = 0;
  score = 0;
  loadQuestion();
});

document.getElementById("submit").addEventListener("click", () => {
  const selectedOption = document.querySelector(
    `input[name="q${currentQuestion}"]:checked`
  );
  if (selectedOption) {
    if (selectedOption.value === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    loadQuestion();
  } else {
    alert("Silakan pilih jawaban terlebih dahulu!");
  }
});

document.getElementById("restartQuiz").addEventListener("click", () => {
  document.getElementById("resultPage").style.display = "none";
  document.getElementById("startPage").style.display = "block";
});

document.getElementById("exitQuiz").addEventListener("click", () => {
  window.location.href = "about:blank"; // Mengarahkan ke halaman kosong
});

loadQuestion();
