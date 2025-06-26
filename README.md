QuickStay - Hotel Booking Full Stack Project
Welcome to QuickStay, your ultimate destination for seamless hotel booking and management!   
Whether you're a guest planning your dream getaway or a hotel owner managing your listings and revenue, QuickStay brings you a modern, responsive, and interactive experience, all in one place. QuickStay makes travel planning and business management smooth, smart, and stylish.


a. Done by Marie-Ange El Hasbani 

b. Public API used:
In the project, I used the "Random User API" to fetch a list of random user profiles that have already booked a hotel. It can be found in the Dashboard Section that only the owners have access to it. 

Purpose
The goal of the public API was to simulate the presence of real users in the booking dashboard and show how a frontend system can interact with a public API to fetch dynamic data in real time.

What was implemented
- A `RandomUsers` component was created that sends a request to the API to fetch a list of 5 random users.
- The API response contains user data such as:
  - First and last name
  - Email address
  - Location (city and country)
  - Profile picture

How it was displayed:
The random users were shown inside a table in the "Recent Bookings" section.

Error Handling:
- If the API call fails (e.g., network issues), a fallback message "Failed to fetch users" is displayed.
- If the API returns an empty list, a message is shown to indicate there are no users available.

This integration demonstrates:
- Use of `axios` and `useEffect` for API calls
- Dynamic rendering using React state
- Error/empty-state handling
- UI consistency 

c. Project Overview:
QuickStay is a full-featured hotel booking web application that contains 7 pages. It includes functionality for both hotel owners and regular users:

Hotel Owner Dashboard: 
  - Add Room
  - List Rooms
  - Track Bookings using a public api 
  - See Total Revenue and Total Bookings

Client Viewer: 
  - Sign up / Log in via Clerk Authentication
  - Browse the Home page with sections like Hero, Featured Destinations, Offers and Testimonials
  - View all available hotel rooms
  - Click on a room to view its detailed page and prices
  - Not forgetting the footer that is available in all the pages

How to open the Project:
  To open the project few easy steps must be taken into consideration:
  - First you open the project the terminal or the prompt command 
  - Second you should check where you have downloaded the project, let's say on your desktop.. so you must write these command
  cd desktop (the location where the project is downloaded)
  cd hotel booking
  cd client (or the src file)
  then npm run dev, that will generate the URL that appears (usually http://localhost:5173) to view the application in your browser.

Responsive Design & Flexibility
The entire QuickStay interface is built with responsive design principles, ensuring a seamless user experience across all devices. Whether viewed on a large desktop monitor or a small mobile screen, the layout adjusts automatically with smooth transitions, maintaining visual consistency and usability. This flexibility allows users to navigate effortlessly, regardless of screen size, enhancing accessibility and engagement.

📄 Available Pages
1. Home Page
Features a full-screen Hero section with a background image, overlay text, and a search form (destination, dates, guests).
Includes sections like Featured Destinations, Special Offers, Testimonials, and a footer.
Designed for first-time visitors to explore and get started.

2. Rooms Page
Displays a list of available rooms with images, prices, amenities, and hotel information.
Includes filters (by room type, price, and sort options).
Fully responsive and interactive layout for browsing. (You should click on view destinations)

3. Single Room Page
Shows detailed information about a selected room:
Room description - Price per night - Image carousel - List of amenities - Allows users to proceed with booking.

4. Dashboard (For Owners)
Accessible only to hotel owners after login.
Displays:
Total Bookings - Total Revenue - Recent Bookings (table) - Random Users fetched from a public API

5. Add Room Page
Allows hotel owners to upload room details:
Room type, price, images, and amenities
Includes an image upload area and checkboxes for facilities.

6. List Rooms Page
Displays all rooms added by the owner.
Table view with room name, facilities, price per night, and status.

7. Authentication Pages
Login / Sign Up handled via Clerk authentication.
Supports smooth navigation between user and owner roles.


d. Custom Requirement Explanation 
Custom Feature: Hero Section with Overlay Text and Call-to-Action

As part of the project's customization requirements, I designed and implemented a Hero section that is visually engaging and functional:

-Background Image Overlay: A full-screen background image sets a luxurious tone for the website using CSS bg-cover and bg-center.

-Overlay Text: The heading and subheading are placed on top of the image using flexible layout classes to ensure readability and responsiveness.

-Call-to-Action Form: A responsive and interactive form is placed within the hero section, allowing users to:

-Select a destination (using a datalist of predefined cities)

-Choose check-in and check-out dates

-Choose check-in and check-out dates

This section is the first thing users see on the homepage and helps guide them into the booking flow, improving both user engagement and usability.


QuickStay isn't just a booking platform, it's a smart, and scalable solution that turns travel dreams into reality. Whether you're a traveler or a hotelier, QuickStay makes every click count. 🌍🛎️
