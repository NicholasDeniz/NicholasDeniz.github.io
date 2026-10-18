## Nicholas Deniz
## CS-499 Capstone Travlr Software Design/Engineering Enhancement Narrative
## Professor Satish Penmatsa
## 9/19/2026

[Back to portfolio](https://nicholasdeniz.github.io/)

## Travlr Getaways:
Travlr Getaways is the artifact I have chosen to enhance to fulfil the first enhancement category Software Design/Engineering. It is a full stack application that I worked on in CS-465 Full Stack Development earlier in 2026. It uses the MEAN stack which uses MongoDB for the database, Express.js and Node.js for the server, and Angular for the frontend. The original application only let the user view trips and let authenticated users add or update trips. It also already included login functions and JWT authentication. My enhancement added role based permissions, customer bookings, and trip deletion.

## Why I selected this Artifact and How I then Improved it:
I selected Travlr because it was a fully completed full stack project that I documented on Github. It included a frontend, authentication, a database, and APIs. It was a good artifact that showed my skills in software design and engineering. Showing that I can understand a full stack application and improve it. 

The main idea of the enhancement was to add customer and admin roles. This required changes to MongoDB schemas, JWT, Express middleware, routes, controllers, components, templates, and navigation. The user model stores a customer or admin role. New accounts would be given a customer role by default. This follows the security mindset of giving users the least number of permissions. The role would be included in the user’s JSON Web Token. When the server receives a request, it will verify the token and check the role before allowing the request to continue. Admin operations are also protected on the server. Only an admin can add, update, or delete any of the trips. Customers also have their own protected booking operations. This was a secure way to stop those making unauthorized requests to the API. Letting the server make the final decision to allow it or not. 

I also created a booking model. A booking is connected to a customer’s account and would store its status and booking date. The model would use MongoDB’s object id to reference the user and trip together. A compound index would prevent the same customer from booking the trip more than once. The booking controller would have three operations. A customer can book a trip from the trip list; they can go to My Bookings to see all their personal bookings and be able to cancel one of their bookings. The server would get the customers’ id from the verified token only. When the customer cancels a booking, the database would check the booking ID and the authenticated customer ID. Preventing a customer from canceling a different customer booking.

The Angular frontend application was updated to stay up to date with these backend changes. Customers can see a Book Trip button at the bottom of a trip and a My Bookings page on the top left in the navbar. Admins can see the different trip operations for each trip. New service methods send booking requests to an API, while the JWT interceptor would put on the login token. The application also handles browser requests to operations like deleting a trip can reach the server.

The enhancement also improves error handling and defensive programming. Incorrect authorization headers return an authentication error. Duplicate bookings return a conflict response. A trip with an existing booking can’t be deleted. Trip updates run schema validators. Registration ignores requested role and creates a customer. Database failures return secure reliable messages.

These changes show multiple software design and engineering skills. Showing that I can work with the UI, REST API’s, authentication and authorizations system, and a database. The show I understand routes, controllers, database models, async operations, HTTP status codes, and role-based access. 
## Testing:

I tested the enhancement using Postman and the Angular application with both an admin and customer account. Using the admin account, I created a test trip and got an HTTP 201 Created. I then saw that the trip was displayed in the Angular trip list. Using the customer account, I tried to create, update, and delete trips through Postman. I got an HTTP 403 Forbidden with the message “Admin role needed.”. These checks showed that the server was keeping to the admin permissions even when the requests were sent directly. I also tested booking creation and duplicate booking rejection. The first booking returned HTTP 201 Created, while repeating it returned HTTP 409 Conflict with the message “This trip was already booked.”. The Angular My Bookings page showed the test trip. The results showed evidence that authorized operations worked while unauthorized operations didn’t work. 

I also tested invalid authentication, booking ownership, and deleting trips with existing booking. Getting bookings with a valid token returned HTTP 200 OK while using an invalid token returned HTTP 401 Unauthorized with the message “Token Validation Error!”. This showed that the server checked the token before returning booking information. When I tried to delete a trip with an existing booking using the admin account the server returned HTTP 409 Conflict with the message “Connot delete a trip if it has a booking.”. These results showed evidence that authentication, booking ownership, and restrictions placed on deleting booked trips were restricted through the API. Ownership protection is also present when cancelling a trip. The database query matches both the requested booking ID and customer ID from the verified JWT. A booking belonging to another customer doesn’t fit those conditions. 
## Artifact Components:

User model and authentication controller. The app_api/models/user.js file defined customer and admin roles. The role field uses Enum that limits stores values to customer or admin, with the default value being customer. The user model includes the role in the JWT payload. The app_api/controllers/authentication.js registration controller would assign customer roles instead of accepting it from the browser. Preventing a user from changing a registration request to create an admin account. 

API routes and authorization middleware. The app_api/routes/index.js file has authenticateJWT, requireAdmin, and requireCustomer functions. The authentication middleware verifies token, and then stores verified payload in req.auth. Role middleware checks if an authenticated user has permission to continue. Admin middleware protects creating, updating, and deleting routes. Customer middleware would protect booking routes.

Booking model. The app_api/models/booking.js file defines users and trips together. Each booking would store an ObjectId reference to a user and trip, a booking status, and the bookedAt date. A compound unique index on the user and trip fields makes sure the customer can’t book the same trip twice. The model keeps shared trip info separate from customer owned booking info and prevents copying a full trip into every customer record. 

Booking controllers. The app_api/controllers/bookings.js file controls the customer booking logic. The listing controller filters bookings with the user is from the JWT and populates the specific trip info. The creating controller finds the selected trip and puts the new booking with the req.auth._id. The cancel controller uses the bookings id and authenticated user if in the delete query. Preventing a customer from cancelling other customers’ booking. 

Trip controller. The app_api/controllers/trips.js file has trip retrieval and admin operations. Trip updates run Achema validators and return an updated record. Before deleting a trip, the controller would check if the booking collection had a record that references it. If a booking exists, the API will return an HTTP 409 conflict response instead. 

Angular authentication service. The AuthenticationService reads the role stored in the JWT and provides reusable isAdmin and isCustomer methods. Components and templates use these methods. The service also manages token storage, login, registration, and logout.

Angular data service. The TripDataService defines HTTP operations. It has methods for retrieving, adding, updating, and deleting trips. Also, methods for booking a trip, getting a current customer booking, and cancelling a booking. The booking methods send only trip or booking id needed by the route. 

Trip card and booking components. The TripCardComponent has actions from the user specified. Customers can book a trip, admins can edit, add, or delete a trip. Visitors would only be able to view the trips. The MyBookingsComponent gets the current customers booking and follows cancellation. It would show success and error messages and refresh the booking list after a deletion. 

Navigation and templates. The Angular navbar and component templates would use the authentication service to show role-based navigation and controls. Customers can see My Bookings link and booking button.

## Course Outcomes:
Outcome One. The code review, Git history, notes and comments, and enhancement documentation let another developer evaluate the design and understand the code. The separation of routes, controllers, models, services, and components makes it easier to maintain and review. 

Outcome Two. This narrative, the code review, naming conventions, comments, and documentation explain what changed, and how another developer can see those results.

Outcome Four. The work integrates Angular, TypeScript, Node.js, Express, MongoDB, Mongoose, REST, JWT authentication, and Git.

Outcome Five. The server prevents role selection, verifies authorization before controllers run, takes and understand booking ownership from the JWT, blocks cross customer deletions, reject duplicate bookings, and prevents deletion of referenced trips. The private env file is excluded from the folder.

## Reflection:
The final implementation decreased the scope of the booking feature than the initial plan explained in my code review. The code review talked about broader booking managements like admins managing the customers’ booking. The completed enhancement lets customers create, view, and cancel their own bookings, while admins manage the shared trips. Making changes to a existing booking and letting admins manage all customer bookings would be a future enhancement.

The completed features show the main design and security goals through separate trip and booking set ups, server-side role checks, customer ownership limits, duplicate booking rejection, and protection against deleting trips with an existing booking. 

The lesson from this enhancement was the difference between authentication and authorization. A valid token makes sure of who sent the request, but it doesn’t make sure that the user can make every action. Adding a role to the token made the difference known while the middleware brought the permission rules alive. 

I also learned that ownership should be part of the database. The interface can hide other customers’ bookings, but a request can bypass the UI. Combining the booking id and authentication owner id in the delete query makes it a condition. This approach is better than retrieving a record, trusting a user id, and checking ownership later. 

The main challenge was keeping the client, API, and database in line with each other. A route path, HTTP, JWT claim, schema field or anything else can work well in its file but completely mess up another file. I overcame this by sticking to the workflow from Angular to service and Express route to the controller then database query. 

Another challenge was the amount of complicated work that I underestimated in this project. The original code also had a lot of bad error handling and defensive programming like not using try and catch and having bad naming conventions like q which I mostly improved. The original structure and code helped a lot in overcoming this challenge as I was able to build off and learn from it. The models, controllers, routes, services, and components were nicely organized, and I stayed within that structure. I also learned a lot from the original code which I implemented in this code like Observables, subscriptions, ChangeDetectorRef, Component input and output, role-based conditions, API access, refresh, Express middleware, JWT role, and more. There were also other features I thought about adding but too much time was needed with authorization, data ownership, and error handling. 

The enhanced Travlr artifact is easier to understand and safer to use than the original version. Shared travel packages, customer owned booking data, and permissions rules. The project demonstrates I can improve an existing full stack application identify and correct weaknesses, make design tradeoffs and communicate the work to a technical audience. These skills are the main reason that this artifact should go into my ePortfolio. 
