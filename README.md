# Jobify – Job Listing Portal

## Walkthrough Video
You can view the video walkthrough here:https://youtu.be/7H2YJqwAJ40

A simple and responsive job board application built with **React**, **TailwindCSS**, **Zustand** and **React Router**. Users can view, filter, and save job listings, as well as post new jobs.

---

##  Setup Instructions

1. **Clone the repository:**

   git clone https://github.com/tu-usuario/jobify.git
   cd jobify
   npm i
   npm run dev

## Decisions Made
Zustand was chosen over Redux for its simplicity and low boilerplate.

TailwindCSS for rapid, responsive design.

React Router DOM (v6+) for routing and navigation.

Lazy loading of routes to improve performance.

SEO tags were added using react-head to enhance discoverability.

Suspense was used at the route-level fallback to display loading states per page.


## Assumptions
Users can save jobs locally without authentication.

Job data is currently managed in a global store (useJobsStore), assuming no backend.

Job IDs are unique.

Posting a new job updates the global store immediately.

## Use of AI Tools
ChatGPT (OpenAI) was used for:

Clarifying best practices (lazy loading, Zustand usage).

Generating translations between English and Spanish.

improving readability.

Generating  minor documentation strings.