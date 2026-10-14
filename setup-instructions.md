# Travlr Getaways - Setup
## Requirements
- Node.js 24.15 or later
- MongoDB running on port 27017
- A JWT_SECRET environment variable

The application uses the travlr database.

## Run Application
Open a terminal in app.js:

npm ci

npm start

Load sample trips before starting server:

node -r dotenc/config app_api/models/seed.js

The seed command replaces existing trips. So use it only for a fresh start.

Open another terminal:

cd app_admin

npm ci

npx ng serve

Go to http://localhost:4200. Make sure to keep both terminals running.

## Accounts and Features
Create an account by sending a POST request on Postman to http://localhost:3000/api/register with JSON name, email, and password.

New accounts will be assigned with the customer role. Customers can create, view, and cancel their own bookings.

To test admin features change the accounts role to admin in travlr.users collection and then log in again. Admins can manage trips.

# Grazioso Salvare - Setup
## Requriements
- Python
- MongoDB running on port 27017
- The animal shelter dataset loaded into animals collection of the aac database.
- MongoDB login. The default authentication database is admin.

## Run the Dashboard
Open a terminal in the enhancement folder:

python -m pip install dash dash-leaflet plotly pandas numpy matplotlib pymongo jupyterlab

python -m jupyterlab

Open ProjectTwoDashboard.ipynb. Run the login cell, enter MongoDB credentials, and then run the dashboard cell.

## The Enhancements
Enhancement Two:

Choose a rescue category and sort by age, name, or breed in either direction. Run the checks with:

python test_checks.py

python compare_sorts.py

Enhancement Three:

Choose a rescue category and press Previous and Next to go through the database pages. Sorting and the chart apply to the current page.

The saved index measurements are in index_before.json and index_comparison.json. Run the last cell to display them. The index test cells are separate; the baseline needs a database without the test compound index.
