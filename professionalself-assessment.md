[Back to portfolio](https://nicholasdeniz.github.io/)

Nicholas Deniz

CS-499 Capstone Professional Self-Assessment

Professor Satish Penmatsa

10/14/2026

Code Review Link: https://www.youtube.com/watch?v=Bb94dRamimo

GitHub Pages URL: https://nicholasdeniz.github.io/

# Professional Self-Assessment
The work I have done in the Computer Science program helped me become confident when building and working with applications, data, and explaining technical decisions. My career goal is to become a software engineer or a data analyst. I like work where I must break things down and find/solve the problem, organize data, and find improvements. This portfolio showed my progress in improving two projects, Travlr Getaways and the Grazioso Salavare animal rescue dashboard. 

In the first half of my program, I was narrower minded in how I approached a problem. I mostly just focused on getting the feature or issue to work. As I went through my program, I needed to broaden my perspective and consider other questions. Who should be able to use this feature? What if the input is incorrect? Can another person understand my code? Can someone take advantage of flaws in my application? The capstone helped me implement questions like these to my two projects. 

# Collaboration and Feedback
My capstone enhancements were an individual project, but I organized and documented my worker so another developer would have a better time reviewing it. I organized code into separate files depending on their use, used Git to keep track of changes, and explained decisions through inline comments, my code review, and narratives. These practices would allow another developer to have an easier time reviewing and understanding the work I have done.

I used professor feedback when fixing up my narratives. For the software engineering enhancement, I strengthened the explanation for testing and the evidence for permissions. For the algorithms enhancement I explained why I implemented the merge sort even when Python already has an efficient built-in sorting. For the database enhancement, I kept the professor’s feedback in mind, making sure to measure the results from the Water Rescue query, the before and after of adding the index. The comparison made sure to check the matching count, and first page results remained the same and that the number of documents decreased from 4,222 to 17. 

This helped me understand that even if I completed the work, I must explain my design choices and give evidence to back those claims up. I would keep this approach when working with a team, making sure to ask questions, listen to feedback, and explain my thought process well. Keeping code, explanations, and results together would let another developer evaluate trade offs and decisions well. Although this was an individual project, I had a lot of practice taking in feedback, revising this capstone, and making technical decisions more understandable. 

# Communication
The code review and enhancement narratives gave me practice for communicating with different audiences. A developer would need to understand a sort function or database query. A person who has no knowledge of this would need the portfolio explained in a more non-technical light and be shown why the enhancements matter.

In CS 255, I worked to understand stakeholder needs through a project called DriverPass. I used a given client interview to identify requirements for lesson scheduling, practice tests, progress tracking, and different user roles. I also needed to keep in mind requirements for security and access from mobile/desktop devices. Overall, this project helped me take on a client’s problem and turn it into clear requirements so a developer can follow them. It showed me why technical decisions need to connect with the client’s goals. 

I learned to connect technical details to the evidence of them. For example, checking booking ownership means that a customer would be the only one able to cancel their own bookings. Getting one database page at a time lets the application not have to load all matching animal’s records before displaying the results. 

I learned to explain the limits of my work. My sorting test compared the merge sort and bubble sort. It didn’t prove that it is faster than Python’s built in sorting. My database test measures a specific query, rather than having the load time of the entire dashboard. Explaining these distinctions helps the audience better understand what the evidence supports. 

# Algorithms and Working with Data
The algorithms enhancement helped me understand how algorithms design choices affect performance and accuracy. I implemented the merge sort to organize animal records by age, name, or breed. I also took into consideration equal values, missing data, invalid values, and ascending or descending orders.

Merge sort has a time complexity of O(n log n) but it needs more memory. When comparing it with the bubble sort it helped me understand the tradeoff with measurements. Keeping the sorting function separate from the dashboard also made it easier to use and test.

In CS 300, I compared vectors, hash tables, and binary search trees for a course planning project. The project had to display courses in alphanumeric order and allow users to look up course titles and prerequisites. I used a binary search tree because in order traversal was more inline with what was needed for the ordered course list. I also had helper functions to validate spaces and capitalization in the input. This project taught me the importance of data structure and the quality of data being used. This project helped me with the algorithm and databases enhancements as I had to keep my attention on sorting, missing or invalid values, and design tradeoffs.

Outside the portfolio projects I had Python experience working with pandas to combine datasets, remove duplicates, handle missing data, and summarize data. That work helped me understand how useful analysis is when working with properly prepared data. 

# Software Engineering and Databases

CS 320 taught me the importance of testing. I used JUnit to test contact, task, and appointment classes and services against their requirements. Which included limits on field lengths, needed information, and valid dates. Separating the application into separate classes and services made it easier to test more individual units. This class taught me to take requirements and put checks on them that could be reused even after the code changes. It helped me understand that testing should have invalid inputs as well as valid input that should work. 

Travlr Getaways helped me have a better understanding of full stack development. The application connects an Angular interface, an Express and Node.js API, and a MongoDB database. Adding customer and admin roles made changes needed across the whole application.

I learned that making one change to an area could affect a totally different area. A new booking operation needed a database model, an API route, controller logic, a front-end service, and an interface. Following the changes and requests through these layers gave me a deeper understanding of the application. The database enhancement helped me learn a lot. I added reusable query validation, pagination, projection, and an index comparison. In the Water Rescue comparison, MongoDB examined 17 animal records after indexing instead of 4,222 while still returning the same first page records. The results showed how important it is to measure a change. I considered the costs, indexes need storage and maintenance, and pagination changed what the dashboards sorting and charts meant. In the enhanced database those features describe the current page rather than every matching animal record.

# Security
The capstone increased my understanding of authentication, authorization, and ownership of data. Authentication identifies the user while Authorization sees what actions the user is allowed to do. In Travlr the server checks the roles before letting them do an operation. New accounts get the customer role, and booking operations use the customer’s specific account through a verified token. These checks are important because hiding a button in the interface wouldn't stop someone from sending a request straight to the API. The database enhancement helped me apply a security mindset through valid query fields, page size limits, and input validation. I considered how incorrect requests could affect the application. 

# How the Portfolio Connects
The three enhancements show off parts of my development. Travlr enhancement one shows my skills with software design, full stack, and access control. Grazioso algorithm enhancement two shows my skills in algorithm design, testing, and understanding tradeoffs. Grazioso databases enhancement three shows my skills in database retrieval, validation, and measured query improvements.

Together they showed my progress from working on singular features to considering things more overall, from correctness, security, efficiency, and communication. Making me place more important on readable code, protecting user data, and supporting my decisions with evidence. What I learned here should be brought into any future jobs as a software engineer or data analyst. I do need more practice working on a shared application as I would be joining in the middle of a codebase at a potential job. I also need to do more automated, and in general, testing. It would also be good practice to work on an application from scratch as a lot of course work had starter code and a foundation I could work on and learn from. These are the skills I want shown for a software developer or data analyst job. 
