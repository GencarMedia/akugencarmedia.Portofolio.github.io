/*navbar*/
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
};

window.onscroll = () => {
  menu.classList.remove('bx-x'); 
  navlist.classList.remove('active');
};
// a
const ctx = document.getElementById("revenues");

Chart.defaults.color = "#fff",
Chart.defaults.font.family = "Open Sans";

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Web Developer",
      "Phographer",
      "Desaigner",
      "Editing",
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Crative",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          65, 90, 42, 70, 78, 40, 82, 65,
        ],
        backgroundColor: "aqua",
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
  // continuation

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "skills & Professional",
        padding: {
          bottom: 16,
        },
        font: {
          size: 16,
          weight: "normal",
        },
      },
      tooltip: {
        backgroundColor: "#111",
      },
    },
    scales: {
      x: {
        border: {
          dash: [2, 4],
        },
        grid: {
          color: "#111",
        },
        title: {
          text: "2023",
        },
      },
      y: {
        grid: {
          color: "#111",
        },
        border: {
          dash: [2, 4],
        },
        beginAtZero: true,
        title: {
          display: true,
          text: "Revenue",
        },
      },
    },
  },
});
