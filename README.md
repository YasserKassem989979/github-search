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
  </h4>
  <br/>
</div>

### [Demo](https://github-search-api-opal.vercel.app/)

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![TailwindCSS][TailwindCSS]][Tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get the frontend running locally:

- Clone this repo
- `npm install` to install all dependencies
- `npm run dev` to start the local server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Unit Test

- `npm run test` to run unit tests

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Search by repository name, description, or contents of the README file
With the in qualifier you can restrict your search to the repository name, repository description, repository topics, contents of the README file, or any combination of these. When you omit this qualifier, only the repository name, description, and topics are searched.
<br />
Examples:
jquery in:name               matches repositories with "jquery" in the repository name.
jquery in:name,description   matches repositories with "jquery" in the repository name or description.


_To learn more about the format of the query, please refer to the [Constructing a search query](https://docs.github.com/en/search-github/searching-on-github/searching-for-repositories)_
<br/>
By default, searching users will return both personal and organizations. However, you can use the type qualifier to restrict search results to personal accounts or organizations only.

Examples:

mike in:name type:user matches personal accounts named "mike".

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: src/assets/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/ 
[TailwindCSS]: https://img.shields.io/badge/tailwind%20css-000000?style=for-the-badge&logo=tailwindcss&logoColor=sky
[Tailwind-url]: https://tailwindcss.com/