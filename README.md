# React Router Study Jam: Student Link Gallery

Post Study Jam activity for the React Router session. A collaborative Student Link Gallery where each student gets their own page, connected from a shared landing page with React Router.

## Table of Contents

- [About](#about)
- [Activity instructions](#activity-instructions)
- [Acceptance criteria](#acceptance-criteria)
- [Quick start](#quick-start)
- [Documentation](#documentation)
- [Contributors](#contributors)

## About

We've learned a lot about navigating between pages, handling routes, and building single-page applications with React Router. Now it's time to put those skills into practice.

This repository holds a **Student Link Gallery**. It's a collaborative website where **each student gets their very own page**. On your personal page, you can display anything you want: links to your social media, your portfolio, your favorite coding resources, or even just some cool projects you've worked on.

The website also features a **Landing Page**, which acts as the main hub connecting all of our student pages together using React Router.

## Activity instructions

Ready to add your page to the gallery? Follow these steps to contribute:

1. **Fork the Repository**: Click the "Fork" button at the top right of this page to create your own copy of the repository.
2. **Implement Your Changes**:
   - Clone your forked repo to your local machine.
   - Create a new component for your personal page inside the `./src/pages/members` folder. (Feel free to copy the `StudentTemplate.jsx` file to get started!)
   - Modify `src/App.jsx` to set up a new route for your page using React Router so it's accessible from the main app.
   - Modify `src/pages/HomePage.jsx` and add your profile details into the `featuredStudents` array to display your card on the Landing Page gallery.
3. **Push to Your Fork**: Once your page is looking awesome and the routing works, commit your changes and push them back to your forked repository.
4. **Submit a Pull Request**: Head back to this original repository and open a Pull Request (PR) from your fork. Give it a nice title so we know whose page it is!

## Acceptance criteria

To successfully complete this activity, your Pull Request should meet these criteria:

- [ ] **Your Own Page**: You have created a new React component that serves as your dedicated page inside `./src/pages/members`.
- [ ] **Routing Implemented**: Your page is accessible via a unique route mapped in `src/App.jsx` using React Router (e.g., `/students/your-name`).
- [ ] **Navigation**: There is a working link to your page accessible from the Landing Page.
- [ ] **Content**: Your page displays links that you want to share. Feel free to make it as creative as you want!
- [ ] **No Breakages**: Your additions do not break the existing routing or components in the project.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. If you get stuck or have questions about React Router, reach out in our community channels.

Happy coding and routing!

## Documentation

| Doc | Purpose |
| --- | --- |
| [State](docs/state.md) | Operate position / teaching handover |
| [Index](docs/index.md) | Document manifest |
| [FLAGS](FLAGS.md) | Improvement register |
| [AGENTS](AGENTS.md) | Agent read order |

## Contributors

This project is made possible by the GDG PUP community:

| Role | Name |
| --- | --- |
| Development | [Erwin Daguinotas](https://www.linkedin.com/in/erwin-daguinotas/) - Web Development Lead |
