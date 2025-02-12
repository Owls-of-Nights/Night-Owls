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

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Sticky header
  const header = document.querySelector("header")
  const sticky = header.offsetTop

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky")
    }
  })

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementBottom = element.getBoundingClientRect().bottom
      if (elementTop < window.innerHeight && elementBottom >= 0) {
        element.classList.add("animate")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Initial check on page load

  // Fetch and display team members
  const teamMembers = [
    {
      name: "Narayan Bhusal",
      role: "Role",
      image: "https://iili.io/2Z7vtOQ.png",
      social: {
        twitter: "https://twitter.com/naranbhusal02",
        linkedin: "https://linkedin.com/in/naranbhusal02",
        github: "https://github.com/naranbhusal02",
      },
    },
    {
      name: "Nayan Acharya",
      role: "Role",
      image: "https://iili.io/2Z7vNls.jpg",
      social: {
        twitter: "https://twitter.com/nayan135",
        linkedin: "https://linkedin.com/in/janesmith",
        github: "https://github.com/nayan135",
      },
    },
    {
      name: "JCT B",
      role: "Role",
      image: "https://iili.io/2mfOken.jpg",
      social: {
        twitter: "https://twitter.com/mikejohnson",
        linkedin: "https://linkedin.com/in/mikejohnson",
        github: "https://github.com/mikejohnson",
      },
    },
  ]

  const teamGrid = document.querySelector(".team-grid")
  teamMembers.forEach((member) => {
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
    teamGrid.appendChild(memberElement)
  })

  // Fetch and display projects from GitHub API
  const fetchProjects = async () => {
    try {
      const response = await fetch("https://api.github.com/orgs/TEAM-AMBUU/repos")
      const projects = await response.json()
      const projectsGrid = document.querySelector(".projects-grid")

      projects.forEach((project) => {
        const projectElement = document.createElement("div")
        projectElement.classList.add("project-card", "fade-in")
        projectElement.innerHTML = `
                    <div class="project-info">
                        <h3>${project.name}</h3>
                        <p>${project.description || "No description available"}</p>
                        <a href="${project.html_url}" target="_blank" rel="noopener noreferrer" class="github-button">
                            <i class="fab fa-github"></i> View on GitHub
                        </a>
                    </div>
                `
        projectsGrid.appendChild(projectElement)
      })
    } catch (error) {
      console.error("Error fetching projects:", error)
    }
  }

  fetchProjects()

  // Add sample events
  const events = [
    { name: "Night Owls Hackathon", date: "2023-07-15", image: "https://source.unsplash.com/random/400x200?hackathon" },
    { name: "Web Dev Workshop", date: "2023-08-01", image: "https://source.unsplash.com/random/400x200?workshop" },
    {
      name: "Design Thinking Seminar",
      date: "2023-08-15",
      image: "https://source.unsplash.com/random/400x200?seminar",
    },
  ]

  const eventsGrid = document.querySelector(".events-grid")
  events.forEach((event) => {
    const eventElement = document.createElement("div")
    eventElement.classList.add("event-card", "fade-in")
    eventElement.innerHTML = `
            <img src="${event.image}" alt="${event.name}">
            <div class="event-info">
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
            </div>
        `
    eventsGrid.appendChild(eventElement)
  })

  // Form submission
  const joinForm = document.getElementById("join-form")
  joinForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your interest! We will get back to you soon.")
    joinForm.reset()
  })
})

