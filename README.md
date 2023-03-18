# LOAF

LOAF (Lightweight & Open-source Anonymous Forum) is a basic, general-purpose anonymous Q&A platform application built with Angular, ASP.NET Core Web API, and SQLite.

## Table of Contents

- [LOAF](#LOAF)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## About

LOAF aims to provide a safe space for people to discuss any topic and seek help without fear of judgment or repercussions. We believe everyone should have access to a supportive community that values accessible and non-judgemental communication.

Here is a demo of the project: https://loaf-ui.onrender.com/

Keep in mind that this instance is hosted using a free service and does not accurately reflect the expected performance of LOAF.


### Lightweight
LOAF is designed to be lightweight, meaning it does not require excessive resources or contain unnecessary elements, such as advertisements or pop-ups. This makes LOAF accessible to a broader range of users, including those with slower internet connections or older devices. The design philosophy of LOAF is to provide an intuitive and smooth user experience.

### Open-source
As an open-source software, the source code is publicly available for anyone to review and contribute to. This allows us to benefit from the collective knowledge and expertise of the community, resulting in a more secure and stable platform. Moreover, this means anyone can deploy their own instance of LOAF and control and modify it for whatever purpose they need.

### Anonymous
Anonymity is the core principle of LOAF. It does not collect any personally identifiable information from our users or store IP addresses or other identifying data. This ensures that people can participate in discussions without fear of being traced or tracked.

### Other Features

- **Search** - Users can search for posts and threads using keywords.
- **Post Tags** - Users can tag posts with keywords to make them easier to find. You can modify the list of tags in the LOAF-UI\src\app\components\create-post\create-post.component.html file.
- **HTML Support** - Users can use HTML tags to format their posts.
- **MathJax Support** - Users can use LaTeX to display mathematical notation.

## Getting Started

LOAF has two components: LOAF-UI (frontend) and LOAF-API (backend). This means you will need to deploy both components to use LOAF out of the box. 

Of course, you can also use only one of them and develop your own frontend or backend.

### Docker

You can deploy LOAF using the Docker images. Make sure to configure the environment variables, as described in step 4 of the [installation instructions](#installation).


LOAF-UI: https://hub.docker.com/repository/docker/cabbagecabbagecabbage/loaf-ui/general

LOAF-API: https://hub.docker.com/repository/docker/cabbagecabbagecabbage/loaf-api/general

You can also build your own images using the Dockerfiles in the respective folders. This may be preferred if you want to modify the source code before deploying.

### Using This Repository

#### Prerequisites

Before you begin, you will need to have the following software installed on your machine:

- Git
- .NET 7.0 SDK
- Node.js
- Angular CLI

#### Installation

1. Clone the GitHub repository:

```
git clone https://github.com/cabbagecabbagecabbage/LOAF.git
```

2. Navigate to the LOAF-API directory:

```
cd LOAF/LOAF-API
```

3. Run the backend API:

```
dotnet run
```

4. Edit the LOAF-UI/src/environments/environment.ts file, and replace apiUrl with the URL where LOAF-API is listening + '/api'. For example:

```
apiUrl: 'http://localhost:5000/api'
```

5. Navigate to the LOAF-UI directory (assuming you are still in the LOAF-API directory):

```
cd ../LOAF-UI
```

6. Install dependencies:

```
npm install --force
```

7. Run the frontend:

```
ng serve
```

8. Once the frontend UI is running, open your web browser and navigate to http://localhost:4200. You should see some placeholder threads on the homepage.

Congratulations! Your instance of LOAF is now set up and ready to use.

## Contributing

This is a very early version of LOAF, so there is a lot of room for improvement. Feel free to contribute through pull requests or issues. Please make sure your contributions align with the project's goals and principles.

## License

LOAF is licensed under the MIT License. See the [LICENSE](https://github.com/cabbagecabbagecabbage/LOAF/blob/master/LICENSE) file for more details.