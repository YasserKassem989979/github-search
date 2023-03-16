<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center">GitHub-Search-API</h1>
  <h4 align="center">
    A Next.js app to search in GitHub Repositories and Users!
    <br />
    <br/>
    <a href="https://github-search-api-opal.vercel.app/">View Demo</a>
  </h4>

</div>

### Built With

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]
- [![TypeScript][typescript]][typescript-url]
- [![TailwindCSS][tailwindcss]][tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### System Requirements
- Node.js 14.6.0 or newer
- MacOS, Windows (including WSL), and Linux are supported
<br/>
To get the frontend running locally:

1. Clone the repo
   ```sh
   git clone https://github.com/YasserKassem989979/github-search.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the local server
   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Unit Test

- `npm run test` to run unit tests

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Here are some examples of search queries you can use with the UI:

1. Search for repositories containing the keyword "python" in the name: Choose "Repositories" and enter `python in:name` into the "Search" field.
2. Search for personal accounts named "mike" that were created before 2011 Choose "Users" and enter `mike in:name created:<2011-01-01 type:user` into the "Search" field.

_To learn more about the format of the query, please refer to the [Constructing a search query](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)_
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Note

- Please be aware of the GitHub API rate limit and ensure that you are using the API responsibly.

- GitHub Search API does not include Username/Avatar of the last 3 users who forked it with avatar linking to the fork 
in the response instead it includes `forks_url` and you have to fetch them separately.

- Due to the tight deadline and competing priorities, I regret to inform you that I was not able to cover all unit tests for the project and keep following TDD.I understand the importance of comprehensive unit testing for ensuring the quality of the code and I apologize for not being able to cover all of the tests in this iteration .


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: src/assets/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[typescript]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[tailwindcss]: https://img.shields.io/badge/tailwind%20css-000000?style=for-the-badge&logo=tailwindcss&logoColor=sky
[tailwind-url]: https://tailwindcss.com/
