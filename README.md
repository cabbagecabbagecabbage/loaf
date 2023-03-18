# LOAF

LOAF (Lightweight & Open-source Anonymous Forum) is a basic, general-purpose anonymous Q&A platform. Built with Angular, ASP.NET Core Web API, and SQLite.

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## About

LOAF provides a safe space for people to discuss any topic and seek help without fear of judgment or repercussions. We believe everyone should have access to a supportive community that values accessible and non-judgemental communication.

### Lightweight
LOAF is designed to be lightweight, meaning it does not require excessive resources or contain unnecessary elements, such as advertisements or pop-ups. This makes LOAF accessible to a broader range of users, including those with slower internet connections or older devices. The design philosophy of LOAF is to provide an intuitive and smooth user experience.

### Open-source
As an open-source software, the source code is publicly available for anyone to review and contribute to. This allows us to benefit from the collective knowledge and expertise of the community, resulting in a more secure and stable platform. Moreover, this means anyone can deploy their own instance of LOAF and control and modify it for whatever purpose they need.

### Anonymous
Anonymity is the core principle of LOAF. It does not collect any personally identifiable information from our users or store IP addresses or other identifying data. This ensures that people can participate in discussions without fear of being traced or tracked.

### Demo

Here is a demo of the project: https://loaf-ui.onrender.com/

Keep in mind that this instance is hosted using a free service and does not accurately reflect the expected performance of LOAF.

## Getting Started

There are two components to LOAF: LOAF-UI and LOAF-API.

### Docker

You can deploy LOAF using the Docker images.

LOAF-UI: https://hub.docker.com/repository/docker/cabbagecabbagecabbage/loaf-ui/general

LOAF-API: https://hub.docker.com/repository/docker/cabbagecabbagecabbage/loaf-api/general

You can also build your own images using the Dockerfiles in the respective folders.

### Using This Repository

#### Prerequisites

Before you begin, you will need to have the following software installed on your machine:

- Git
- .NET 7.0 SDK
- Node.js
- Angular CLI

#### Installation

1. Clone the GitHub repository:

```console
git clone https://github.com/cabbagecabbagecabbage/LOAF.git
```

2. Navigate to the LOAF-API directory:

```console
cd LOAF/LOAF-API
```

3. Run the backend API:

```console
dotnet run
```

4. Edit the LOAF-UI/src/environments/environment.ts file, and replace apiUrl with the URL where LOAF-API is listening + '/api'. For example:

```console
apiUrl: 'http://localhost:5000/api'
```

5. Navigate to the LOAF-UI directory (assuming you are still in the LOAF-API directory):

```console
cd ../LOAF-UI
```

6. Install dependencies:

```console
npm install --force
```

7. Run the frontend:

```console
ng serve
```

8. Once the frontend UI is running, open your web browser and navigate to http://localhost:4200. You should see some placeholder threads on the homepage.

Congratulations! Your instance of LOAF is now set up and ready to use.

## Contributing

Feel free to contribute through pull requests or issues. Please make sure your contributions align with the project's goals and principles.

## License

LOAF is licensed under the MIT License. See the [LICENSE](https://github.com/cabbagecabbagecabbage/LOAF/blob/master/LICENSE) file for more details.