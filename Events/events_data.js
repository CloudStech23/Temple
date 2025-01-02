const Events = [
    {
        title: 'Diwali Celebration',
        description: 'Celebrate Diwali with lights, music, and joy!',
        date: '2025-11-12',
        location: 'New Delhi',
        event_tag: 'Diwali',
        main_image: 'https://www.jessideas.com/wp-content/uploads/2016/07/G.S.B-Seva-Mandal-Ganeshotsav-667x500.jpg',
        images: ['image1.jpg', 'image2.jpg']
    },
    {
        title: 'Holi Festival',
        description: 'Join us for a colorful and joyous Holi celebration.',
        date: '2025-03-28',
        location: 'Jaipur',
        event_tag: 'Holi',
        main_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14qp47sAyBr4AI4On420-8HNqmdRoZz-XyQ&s',
        images: ['image3.jpg', 'image4.jpg']
    },
    {
        title: 'Janmashtami Festivities',
        description: 'Celebrate the birth of Lord Krishna with prayers and dance.',
        date: '2025-08-15',
        location: 'Mathura',
        event_tag: 'Janmashtami',
        main_image: 'https://www.jessideas.com/wp-content/uploads/2017/11/YugpurushShatabdiMahotsav-img-9-1-688x500.jpg',
        images: ['image5.jpg', 'image6.jpg']
    },
    {
        title: 'Navratri Celebration',
        description: 'Nine days of devotion, dance, and cultural celebrations.',
        date: '2025-10-10',
        location: 'Ahmedabad',
        event_tag: 'Navratri',
        main_image: 'https://cdn.elebase.io/173fe953-8a63-4a8a-8ca3-1bacb56d78a5/62b5ae9f-5adf-4d93-83de-6c8b25faa9c2-buddhajayanti-ss-pilbrims-ntb-website.jpeg?w=1000&h=500&fit=crop&q=75',
        images: ['image7.jpg', 'image8.jpg']
    }
];

// Function to render events
function renderEvents(Events) {
    const eventListContainer = document.getElementById('event-list');
    eventListContainer.innerHTML = '';

    Events.forEach(event => {
        const eventDate = new Date(event.date); // Convert string to Date object
        const day = eventDate.getDate(); // Get day
        const year = eventDate.getFullYear();
        const month = eventDate.toLocaleString('default', { month: 'short' }); // Get month in short form

        const eventCard = `
        
            <div class="col-md-4 mb-3">
                <div class="card event-card position-relative">
                    <div class="position-absolute top-0 start-0 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                        style="width: 50px; height: 50px; margin: 10px;">
                        <div class="text-center" style="line-height: 1.2;">
                            <span class="d-block fw-bold">${day}</span>
                            <small>${month}</small>
                        </div>
                    </div>
                    <img src="${event.main_image}" alt="Event Image" class="card-img-top" style="height: 180px;">
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                    </div>
                    <div class="px-4">
                        <p style="margin: 0px;">${event.location}</p>
                        <p>${day} ${month} ${year} </p>
                    </div>
                </div>
            </div>
         `;

        eventListContainer.innerHTML += eventCard;
    });
}

// Event listener for filter button
document.getElementById('filter-button').addEventListener('click', function () {
    const keyword = document.getElementById('keyword-input').value.toLowerCase();
    const location = document.getElementById('location-input').value.toLowerCase();

    // Filter events based on keyword and location
    const filteredEvents = Events.filter(event => {
        const matchesKeyword = event.title.toLowerCase().includes(keyword) || event.description.toLowerCase().includes(keyword);
        const matchesLocation = event.location.toLowerCase().includes(location);

        return matchesKeyword && matchesLocation;
    });

    // Render the filtered events
    renderEvents(filteredEvents);
});

// Initial render
renderEvents(Events);
