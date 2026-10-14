## Professional Self-Assessment
The work I have done in the Computer Science program helped me become confident when building and working with applications, data, and explaining technical decisions. My career goal is to become a software engineer or a 
data analyst. I like work where I have to break things down and find/solve the problem, organize data, and find improvements. This portfolio showed my progress in improving two projects, Travlr Getaways and the 
Grazioso Salavare animal rescue dashboard. 

In the first half of my program I was more narrow minded in how I approached a problem. I mostly just focused on getting the feature or issue to work. As I went through my program I needed to broaden my perspective and 
consider other questions. Who should be able to use the feature? What if an input is incorrect? Can another person understand my code? Can someone take advantage of flaws in my application? The capstone helped me implement questions
like these to my two projects. 

## Collaboration and Feedback
My capstone enhancements were my own work but I acted like there was a development team I had to work with. I organized code into separate files depending on their use, used Git to keep track of changes, and explained
decisions through inline comments, my code review, and narratives. These practices would allow another developer to have an easier time reviewing and understanding the work I have done.

I used professor feedback when fixing up my narratives. For Travlr I strengthened the explanation for testing and the evidence for permissions. For the algorithms enhancement I explained why I implemented the merge sort even 
when Python already has efficient built-in sorting. This helped me understand that even if I completed the work I have to explain my design choices and give evidence to back those claims up. I would keep this approach when working with a team, making sure to ask
questions, listen to feedback, and explaining my thought process well. 

## Communication
The code review and enhancement narratives gave me practice for communicating with different audiences. A developer would need to understand a sort function or database query. A person not knowledge of this would need the 
portfolio explained in a more non-technical light and be shown why the enhancements matter.

I learned to connect technical details to the evidence of them. For example,  checking booking ownership means that a customer would be the only one able to cancel their own bookings. Getting one database page at a time 
lets the application not have to load all matching animals records before displaying the results. 

I learned to explain the limits of my work. My sorting test compared the merge sort and bubble sort. It didn't prove that it is faster than Python's built in sorting. My database test measures a specific query, rather than
having the load time of the entire dashboard. Explaining these distinctions helps the audience better understand what the evidence actually supports. 

## Algorithms and Working with Data
The algorithms enhancement helped me understand how an algorithms design choices affect performance and accuracy. I implemented the merge sort to organize animal records by age, name, or breed. I also took into consideration equal values,
missing data, invalid values, and ascending or descending order.

Merge sort has a time complexity of O(n log n) but it needs more memory. When comparing it with the bubble sort it helped me understand the tradeoff with measurements. Keeping the sorting function separate from the dashboard
also made it easier to use and test.

Outside the portfolio projects I had Python experience working with pandas to combine datasets, remove duplicates, handle missing data, and summarizing data. That worked helped me understand how useful analysis is when
working with properly prepared data. 

## Software Engineering and Databases
Travlr Getaways helped me have a better understanding of full stack development. The application connects a Angular interface, an Express and Node.js API, and a MongoDB database. Adding customer and admin roles made changes needed across the whole application.

I learned that making one change to an area could affect a totally different area. A new booking operation needed a database model, an API route, controller logic, a frontend service, and an interface. Following the changes and request through these layers gave me a 
deeper understand of the application as a whole.

The database enhancement helped me learn a lot. I added reusable query validation, pagination, projection, and an index comparison. In the Water Rescue comparison, MongoDB examined 17 animal records after indexing instead of 4,222 while still returning the same first page records.

The result showed how important it is to measure a change. I considered the costs, indexes need storage and maintenance, and pagination changed what the dashboards sorting and charts meant. In the enhanced database those features describe the current page rather than every matching animal record.

## Security
The capstone increased my understanding of authentication, authorization, and ownership of data. Authentication identifies the user while Authorization sees what actions the user is allowed to do.

In Travlr the server checks the roles before letting them do an operations. New accounts get the customer role, and booking operations use the customers specific account through a verified token. These checks are important because 
hiding a button in the interface wouldn't stop someone from sending a request straight to the API. 

The database enhancement helped me apply a security mindset through valid query fields, page size limits, and input validation. I considered how incorrect requests could affect the application. 

## How the Portfolio Connects
The three enhancements show off parts of my development. Travlr enhancement one shows my skills with software design, full stack, and access control. Grazioso algorithm enhancement two shows my skills in algorithm design, testing, and understand tradeoffs.
Grazioso databases enhancement three shows my skills in database retrieval, validation, and measured query improvements.

Together they showed my progress from working on singular features to considering things more on the whole, from correctness, security, efficiency, and communication. These are the skills I want shown for a software developer or data analyst job.
