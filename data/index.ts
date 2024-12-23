export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title:
        "I prioritize client experience,  ensuring that every interaction is positive and productive",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full object-cover",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My Skills",
      description: "Constantly Improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building an Energy web application ",
      description: "Behind The Scenes",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "EVPoint - EV charging application in Germany",
      des: "Simplify EV charging experience with EVPoint. Seamlessly connect with the EV charger and get car charged.",
      img: "/EVcharging.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/expo.svg", "/firebase.svg"],
      link: "/ui.evpoint.com",
    },
    {
      id: 2,
      title: "Elysium Energy - Drive energy decentralization",
      des: "Design, Simulate and de-risk energy storage investments for secure, low-cost, clean energy supply",
      img: "/Energy.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://elysium-energy.com/",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "/ui.aiimg.com",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "/ui.apple.com",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Exceeded expectations with innovative designs. A true asset for any frontend development project. Faye's enthusiasm for every facet of development truly stands out.",
      name: "Michael Livingstone",
      title: "Founder/CEO DustiD",
    },
    {
      quote:
        "Reliable, deadline-oriented developer. Crafted interactive designs that truly engage and captivate users.",
      name: "Ravdeep Singh",
      title: "Technical Director of DustiD",
    },
    {
      quote:
        "Effortlessly blended creativity with functionality. Played a pivotal role in our app's success. If you're seeking to elevate your website and elevate your brand, Faye is the ideal partner.",
      name: "Foivos Maniatis",
      title: "CEO, Co-founder of Elysium Energy",
    },
    {
      quote:
        "Collaborating with Faye was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
      name: "Ignacio Moreno",
      title: "CTO, Co-founder of Elysium Energy",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "Built interactive and responsive web interfaces using React.js, focusing on user experience and modern design principles. Utilized Tailwind CSS for efficient styling and reusable components.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Full Stack Developer (React Native Project)",
      desc: "Developed a full stack application using React, optimizing performance with static site generation and API routes. Implemented TypeScript for better scalability and error management.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Web Developer(Next.js Project)",
      desc: "Designed and built a web application from scratch using Next.js. Focused on component-driven development, following modern web standards.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Frontend Developer (Independent Learning Project)",
      desc: "Developed and maintained user-facing features using moDeveloped and maintained various user interfaces using React and Next.js. Focused on enhancing user experience, state management, and API integrations, with a strong emphasis on responsiveness.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link:"https://github.com/faye092"
    },
    {
      id: 2,
      img: "/twit.svg",
      link:"/"
    },
    {
      id: 3,
      img: "/link.svg",
      link:"https://www.linkedin.com/in/fei-liao-a40a11209/"
    },
  ];