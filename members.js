document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when a nav item is clicked
  document.querySelectorAll(".nav-menu a").forEach((navItem) => {
    navItem.addEventListener("click", () => {
      navMenu.classList.remove("active")
    })
  })

  // Fetch and display members
  const members = [
    {
      name: "Shasank Shrestha",
      role: "Member",
      image: "https://source.unsplash.com/random/300x300?person4",
      social: {
        twitter: "https://twitter.com/alicejohnson",
        linkedin: "https://linkedin.com/in/alicejohnson",
        github: "https://github.com/alicejohnson",
      },
    },
    {
      name: "Sanjog Pandey",
      role: "Member",
      image: "https://source.unsplash.com/random/300x300?person5",
      social: {
        twitter: "https://twitter.com/bobwilliams",
        linkedin: "https://linkedin.com/in/bobwilliams",
        github: "https://github.com/bobwilliams",
      },
    },
    {
      name: "Nishan Regmi",
      role: "UI/UX Designer",
      image: "https://source.unsplash.com/random/300x300?person6",
      social: {
        twitter: "https://twitter.com/caroldavis",
        linkedin: "https://linkedin.com/in/caroldavis",
        github: "https://github.com/caroldavis",
      },
    },
    {
      name: "David Brown",
      role: "Data Scientist",
      image: "https://source.unsplash.com/random/300x300?person7",
      social: {
        twitter: "https://twitter.com/davidbrown",
        linkedin: "https://linkedin.com/in/davidbrown",
        github: "https://github.com/davidbrown",
      },
    },
    {
      name: "Eva Martinez",
      role: "Project Manager",
      image: "https://source.unsplash.com/random/300x300?person8",
      social: {
        twitter: "https://twitter.com/evamartinez",
        linkedin: "https://linkedin.com/in/evamartinez",
        github: "https://github.com/evamartinez",
      },
    },
  ]

  const membersContainer = document.querySelector(".members-container")

  members.forEach((member) => {
    const memberElement = document.createElement("div")
    memberElement.classList.add("team-member", "fade-in")
    memberElement.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <div class="team-member-info">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
                <div class="team-member-social">
                    <a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="${member.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
        `
    membersContainer.appendChild(memberElement)
  })
})

