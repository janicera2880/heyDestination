# hey-Destination

### Table Of Contents

[Description](#description) 

[Features](#features)

[Technology Stack](#technologystack)

[Requirements](#requirements)

[Environment Setup](#environmentsetup)

[Installation](#installation) 

[Server](#server) 

[Contributing](#contributing) 

[Acknowledgements](#Acknowledgements)

[Deployment](#deployment)

[Resources](#resources)

[License](#license)

## Description

**hey-Destination** is a web application that serves as a travel agency, providing users with the ability to browse and inquire about a luxury villa rentals in various destinations around the world. The application offers a wide range of villas, each offering unique services and activities to enhance the travel experience.

## Features

- Villa Listings: Users can browse through a diverse selection of luxury villas from different destinations worldwide. Each villa listing highlights details such as name, capacity, number of bedrooms and bathrooms, nightly rates, and images.

- Activities and Services: The application showcases various activities and services available at each destination, allowing users to explore and plan their itineraries accordingly.

- Admin Authentication: Only administrators have the privilege to sign up and log in to the application, granting them exclusive access to manage villa listings, add locations, and handle incoming inquiries. Once logged in, administrators are directed to the admin portal.

- Interactive Carousel: The application utilizes React Carousel libraries to create an interactive image carousel for each villa listing, allowing users to easily view and navigate through multiple images of the villas.

- Stylish Design: The CSS design of the application is optimized to provide a visually appealing and user-friendly experience, enhancing the overall aesthetics and usability of the interface.

## Technology Stack

- Frontend: The frontend of **hey-Destination** is built using JavaScript, HTML, and React. React is leveraged to create dynamic and interactive user interfaces, ensuring a smooth browsing experience.

- Backend: The backend of the application is developed using Ruby on Rails, providing a robust and scalable server-side framework. Ruby on Rails facilitates efficient data management, authentication, and seamless communication with the front-end.

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Render account
- Postgresql

See Environment Setup below for instructions on installing these tools if you
don't already have them.

## Environment Setup

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

We recommend version 2.7.4. If you need to upgrade you can install it using rvm:

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails
```

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is not 16.x.x, install it and set it as the current and
default version with:

```sh
nvm install 16
nvm use 16
nvm alias default 16
```

You can also update your npm version with:

```sh
npm i -g npm
```

## Installation

1. Clone the repository: git clone git@github.com:janicera2880/heyDestination.git
2. Navigate to the project directory: cd hey-Destination
3. Install the necessary dependencies: bundle install
4. Start the development server: npm start --prefix client
5. Open your web browser and access the application at http://localhost:4000

## Server

To run the server type the command in your terminal:

```
sudo service postgresql start
```
Enter your password credentials and then type:

```
rails s
```
It should run the backend on http://localhost:3000

## Contributing 

Contributions to **hey-Destination** are welcome! If you encounter any issues or have suggestions for improvement, please feel free to submit a pull request or open an issue on the GitHub repository.

## Acknowledgements

***Images and Logo***
- The images and logo utilized in this application were obtained from  [Canva](https://www.canva.com)
 and [Villas of DISTINCTION](https://www.villasofdistinction.com).

Special credit to various open-source libraries and frameworks used in the development of this application, which have significantly contributed to its functionality and user experience.

## Deployment

To access the live version of the app, I have completed the deploying process on Render. You can visit the deployed app at [hey-Destination](https://hey-destination.onrender.com). The deployment on Render was straightforward, ensuring that the app is readily available for users to access and interact with. Feel free to explore the deployed version and provide feedback on any improvements or issues you may encounter.

For detailed instructions on how to deploy and set up your environment to deploy on Render, please refer to the resources section.

## Resources

Take a look at my blog, where I showcase a snippet of my web application.
- [Celebrating a Milestone: Capstone Project Unveiled](https://dev.to/janicera2880/celebrating-a-milestone-capstone-project-unveiled-51c1)
- [Getting Started with Ruby on Rails on Render](https://render.com/docs/deploy-rails)
- [Render Databases Guide](https://render.com/docs/databases)


## License 

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit) 
Feel free to use, modify, and distribute the code as per the terms of the license.
