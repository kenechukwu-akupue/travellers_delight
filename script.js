const vacationRecommendations = {
    beaches: [
      {
        name: "Whitehaven Beach, Australia",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSaoIbrqOFSIy-SC4wI67G440WmX7DO-bVr6RdkE_LaFcQauXE_a50cQXPRand7RWbKLnWYZgT3sj7H4XaAGkheCFsTxs0gbqH-nj8p4Us5bA", // Replace with actual image URL
        description: "A pristine beach known for its white sands and crystal-clear waters."
      },
      {
        name: "Anse Source d'Argent, Seychelles",
        image: "https://www.jonnymelon.com/wp-content/uploads/2022/01/La-Digue-Seychelles-108.jpg", // Replace with actual image URL
        description: "Famous for its turquoise waters and unique granite rock formations."
      }
    ],
    temples: [
      {
        name: "Angkor Wat, Cambodia",
        image: "https://cdn.britannica.com/35/171035-050-8423095A/Angkor-Wat-Siemreab-Cambodia.jpg", // Replace with actual image URL
        description: "A stunning ancient temple complex and UNESCO World Heritage Site."
      },
      {
        name: "Borobudur, Indonesia",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUAhYigZ5KaTFW7sQV5iX8kpSxXtnV7gLFQ&s", // Replace with actual image URL
        description: "The world's largest Buddhist temple, known for its intricate carvings."
      }
    ],
    countries: [
      {
        name: "Japan",
        image: "https://static-oku.diqit.io/assets/worldwide/oku_ways_to_go_images4.jpg", // Replace with actual image URL
        description: "Known for its blend of traditional culture and modern technology."
      },
      {
        name: "Italy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRba8WF3mL88sAvebo6XIA4rSGyCNjwXOJPIw&s", // Replace with actual image URL
        description: "Famous for its rich history, art, and delicious cuisine."
      }
    ]
  };
  
  // Function to display recommendations
  function displayRecommendations() {
    const container = document.getElementById("recommendations");
    Object.keys(vacationRecommendations).forEach((category) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
      vacationRecommendations[category].forEach((item) => {
        const destinationDiv = document.createElement("div");
        destinationDiv.className = "destination";
        destinationDiv.innerHTML = `
          <h3>${item.name}</h3>
          <img src="${item.image}" alt="${item.name}">
          <p>${item.description}</p>
        `;
        categoryDiv.appendChild(destinationDiv);
      });
      container.appendChild(categoryDiv);
    });
  }
  
  // Call the function to display recommendations
  displayRecommendations();
  