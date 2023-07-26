# Setting Up the Project

Hello Autofleet team!
As the task requires the project has two main components: server, client.
Make sure you are on the project directory.
The following file describes how to set up each component before running it locally. Let's dive in!

## Server

### Server Prerequisites
- python 3.8.6 (at least)

## Running the server:
1. Create a virtual environment:
   ```
   python3 -m venv venv
   ```

2. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```
     source venv/bin/activate
     ```

3. Navigate to the backend directory:
    ```
   cd backend
   ```
   
4. Install requirements:
   ```
   pip install -r requirements.txt
   ```

5. Set the Flask app environment variable:
   - On Windows (Command Prompt):
     ```
     set FLASK_APP=backend/app
     ```
     or PowerShell:
     ```
     $env:FLASK_APP = "backend/app"
     ```
   - On macOS and Linux:
     ```
     export FLASK_APP=backend/app
     ```

6. Add the current directory to the Python path:
    ```
    export PYTHONPATH=$PYTHONPATH:.
   ```
   
7. Run the Flask app:
    ```
    flask run
   ```
8. if you want to review the swagger of the API, navigate on your browser to  http://localhost:5000/swagger-ui 

9. You can run the tests with the following command:
    ```
    pytest tests.py
   ```

## Client

### Client Prerequisites
- npm 9.8.1
- node version higher than 17 (I used 20.5.0)

## Running the client:

1. Navigate to the frontend directory:
    ```
   cd frontend
   ```
2. Install dependencies:
    ```
   npm install
   ```
 
3. Start the React app:
    ```
   npm start
   ```

4. If you want to see the complete application on the deployment environment, open another terminal:
    ```
   flask run
   ```
   refresh the React app web app

5. If you would like to deploy the project, remove the "proxy" from the package.json file

## Keep in Touch
If you have any other questions, feel free to send a message: danielsht11@gmail.com
