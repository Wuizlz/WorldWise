🌍 WorldWise

WorldWise is a travel-tracking web application built with React, where users can mark the cities they’ve visited, see them plotted on an interactive world map, and explore their travel history. The app is designed to demonstrate advanced React patterns, global state management, and real-world API integration.

✨ Features

🗺 Interactive Map powered by Leaflet where users can:

Add cities by clicking on the map.

See all visited locations plotted with markers.

🏙 City Details: Each saved city includes information such as name, country, date visited, and personal notes.

📂 Organized Lists:

City List: Displays all added cities with the ability to view details or delete entries.

Country List: Aggregates visited countries based on cities saved.

📌 Global State Management with React Context for city data across the app.

🌐 Reverse Geocoding Integration using the BigDataCloud API to automatically fetch city and country details from latitude/longitude coordinates.

🔄 Persistent Data: Data is stored in a mock API/database, making the app feel real-world ready.

🎨 Responsive UI: Clean, modern design with a layout optimized for desktop and mobile.

🛠️ Tech Stack

Frontend: React (Vite)

State Management: React Context API

Map Library: Leaflet (via react-leaflet)

APIs: BigDataCloud (Reverse Geocoding)

Styling: CSS Modules

Build Tool: Vite

🚀 Getting Started
1. Clone the repository
git clone https://github.com/your-username/worldwise.git
cd worldwise

2. Install dependencies
npm install

3. Set up environment variables

Create a .env file in the root with:

VITE_GEOCODE_API_URL=https://api.bigdatacloud.net/data/reverse-geocode-client

4. Run the development server
npm run dev



<img width="1470" height="838" alt="Screenshot 2025-09-03 at 9 45 49 AM" src="https://github.com/user-attachments/assets/aae69ef2-8923-4f99-ad69-bb5ea0a333de" />
<img width="1470" height="838" alt="Screenshot 2025-09-03 at 9 46 31 AM" src="https://github.com/user-attachments/assets/b473519d-c9db-4afc-9887-a7889ea252c7" />
<img width="1470" height="836" alt="Screenshot 2025-09-03 at 9 46 49 AM" src="https://github.com/user-attachments/assets/34a1a2e3-403e-4816-ad0e-af003326c310" />






