# LOAF 🍞

LOAF is a general-purpose anonymous Q&A platform built with Angular, ASP.NET Core, and SQLite.

## Table of Contents

- [LOAF](#LOAF)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## About

LOAF aims to provide a safe platform for people to discuss any topic and seek help without fear of judgment or repercussions. We believe everyone should have access to a supportive community that values accessible and non-judgemental communication.

Here is a demo of the project: https://loaf-ui.onrender.com/

Keep in mind that this demo is hosted using a free service (render.com) and does not accurately reflect the expected performance of LOAF. In particular, you may have to wait over 10 seconds for the server to wake up if it has been inactive for a while.

### Features

- **Search** - Users can search for posts and threads using keywords.
- **Post Tags** - Users can tag posts with keywords to make them easier to find. You can modify the list of tags in the LOAF-UI\src\app\components\create-post\create-post.component.html file.
- **HTML Support** - Users can use HTML tags to format their posts.
- **MathJax Support** - Users can use LaTeX to display mathematical notation.

## Getting Started

LOAF has two components: LOAF-UI (frontend) and LOAF-API (backend). This means you will need to deploy both components to use LOAF out of the box. 

Of course, you can also use only one of them and develop your own frontend or backend.

### Using Docker

You can deploy LOAF using the Docker images. Make sure to configure the API URL in the frontend before deploying.

LOAF-UI: https://hub.docker.com/r/cabbagecabbagecabbage/loaf-ui

LOAF-API: https://hub.docker.com/r/cabbagecabbagecabbage/loaf-api

You can also build your own images using the Dockerfiles in the respective folders. This may be preferred if you want to modify the source code before deploying.

### Using This Repository

#### Prerequisites

Before you begin, you will need to have the following software installed on your machine:

- Git
- .NET 7.0 SDK
- Node.js
- Angular CLI

#### Installation For Local Development

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

Your instance of LOAF is now set up and ready to use.

## License

LOAF is licensed under the MIT License. See the [LICENSE](https://github.com/cabbagecabbagecabbage/LOAF/blob/master/LICENSE) file for more details.
