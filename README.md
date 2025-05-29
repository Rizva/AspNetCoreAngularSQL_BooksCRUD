Books CRUD Application
This is a full-stack web application demonstrating Create, Read, Update, and Delete (CRUD) operations for managing a collection of books. The backend is built with ASP.NET Core, the frontend with Angular 19, and data is persisted in a SQL Server database. This project was developed for practice and learning purposes.

✨ Features
Create: Add new book entries to the database.

Read: View a list of all books, including details like title, author, and publication year.

Update: Modify existing book details.

Delete: Remove book entries from the database.

Responsive Design: (Optional, but good to mention if implemented) User interface adapts to various screen sizes.

🚀 Technologies Used
Backend:

ASP.NET Core: A cross-platform, high-performance, open-source framework for building modern, cloud-based, internet-connected applications.

C#: The primary programming language for the backend.

Entity Framework Core: An object-relational mapper (ORM) that enables .NET developers to work with a database using .NET objects.

SQL Server: A relational database management system developed by Microsoft for storing and retrieving data.

Frontend:

Angular 19: A platform and framework for building single-page client applications using HTML and TypeScript.

TypeScript: A strongly typed superset of JavaScript that compiles to plain JavaScript.

HTML/CSS: For structuring and styling the user interface.

Angular CLI: Command Line Interface for Angular to create, manage, and build Angular projects.

📋 Prerequisites
Before you begin, ensure you have the following installed on your machine:

.NET SDK: Version 8.0 or later (compatible with ASP.NET Core). You can download it from dot.net.

Node.js & npm: LTS (Long Term Support) version recommended. Download from nodejs.org. npm is included with Node.js.

Angular CLI: Install globally using npm:

npm install -g @angular/cli

SQL Server:

SQL Server Express (for local development): Download from Microsoft SQL Server Downloads.


🚀 Getting Started
Follow these steps to get the application up and running on your local machine.

1. Clone the Repository
First, clone the project from GitHub:

git clone https://github.com/Rizva/AspNetCoreAngularSQL_BooksCRUD.git

2. Backend Setup (ASP.NET Core)
Navigate to the backend project directory:

cd BooksCRUD

Restore NuGet packages:

dotnet restore

Update Database Connection String:
Open appsettings.json (and appsettings.Development.json) in the BooksCRUD folder. Update the DefaultConnection string to point to your SQL Server instance.

Example for SQL Server LocalDB:

"ConnectionStrings": {
  "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=BooksDb;Trusted_Connection=True;MultipleActiveResultSets=true"
}

Apply Database Migrations:

dotnet ef database update

Run the Backend API:

dotnet run

3. Frontend Setup (Angular)
Open a new terminal/command prompt.

Navigate to the Angular project directory:

cd Client/BooksAngularApp

Install npm packages:

npm install

Run the Angular Development Server:

ng serve --open

This command will compile the Angular application and open it in your default web browser (usually http://localhost:4200).

💡 Usage
Once both the backend API and the Angular frontend are running:

Open your web browser and navigate to http://localhost:4200


📂 Project Structure
The repository is organized into two main parts:

.
├── BooksCRUD/                # ASP.NET Core Backend Project
│   ├── Controllers/          # API Controllers for CRUD operations
│   ├── Models/               # Data models
│   ├── DatabaseContext/      # DbContext and Migrations
│   ├── appsettings.json      # Configuration settings
│   ├── BooksCRUD.csproj      # Project file
│   └── ...
├── Client/
│   └── BooksAngularApp/      # Angular 19 Frontend Project
│       ├── src/              # Source code for Angular app
│       │   ├── app/          # Angular components, services, modules
│       │   └── assets/       # Static assets
│       ├── angular.json      # Angular CLI configuration
│       ├── package.json      # Node.js dependencies
│       ├── proxy.conf.json   # (Optional) Frontend proxy configuration
│       └── ...
├── .gitignore                # Git ignore file for common build artifacts and temporary files
└── README.md                 # This README file

