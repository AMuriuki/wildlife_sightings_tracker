# Wildlife Sightings Tracker
This repository contains the code for a project with separate directories for the backend and frontend components. The backend is built using Flask, a Python web framework, while the frontend is developed using React Js.

## Installation
### Backend
1. Clone the repository: 
```bash
$ git clone https://github.com/AMuriuki/wildlife_sightings_tracker
```

2. Navigate to the backend directory
```bash
$ cd wildlife_sightings_tracker/backend
```

3. Create a virtual environment
```bash
$ python3 -m venv venv
```

4. Activate the virtual environment:
* For Windows:
```bash
$ venv\Scripts\activate
```
* For macOS/Linux:
```bash
$ source venv/bin/activate
```

5. Install the required Python packages
```
$ pip install -r requirements.txt
```

6. Run DB migrations
```bash
$ flask db upgrade #(uses sqlite as default DB)
```

7. Seed DB with dummy data
```bash
$ flask dummy load-data
```

8. Run the development server
```bash
$ flask run
```

The backend server should now be running on `http://localhost:5000`, copy and paste the url on your browser to view the API's documentation.

### Frontend
Open a different terminal and follow these steps:

1. Navigate to the frontend directory: 
```bash
$ cd wildlife_sightings_tracker/frontend
```

2. Install Node.js and npm if not already installed

3. create and populate the `.env` file.
```bash
$ echo "REACT_APP_BASE_API_URL=http://localhost:5000" > .env
```

3. Install the project dependencies:
```bash
$ npm install
```

4. Start the development server:
```bash
$ npm start
``` 

## Usage
Once both the backend and frontend servers are running, you can interact with the application by accessing http://localhost:3000 in your web browser. The frontend communicates with the backend through API endpoints provided by the Flask server.


