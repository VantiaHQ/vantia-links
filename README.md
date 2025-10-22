## Overview
This project implements a "linktree" style landing page designed to serve as a central hub for various external links. It features a public-facing page with predefined links and a hidden administrative dashboard for basic analytics. The site is built using Next.js for the frontend and Firebase for backend services, including data storage and potentially analytics collection.

## Public-Facing Site (Landing Page)

### Structure
The public interface consists of a single landing page. This page displays a collection of links, acting as a consolidated point of access to company resources such as booking a consultation, a savings calculator, a link to main company website, LinkedIn profile and a link to contribute to the GitHub repositories.

### Functionality
*   **Link Display:** Presents a curated list of links to users.
*   **Redirection:** Upon clicking a link, users are redirected to the respective external URL.
*   **User Interaction:** User interaction is limited to clicking on displayed links. There are no user authentication, account creation, or link management features available on the public site.
*   **Customization:** Currently, there are no customization options for the public-facing page (e.g., themes, profile pictures, bios). The design is static.

## Hidden Dashboard

### Access
The dashboard is not publicly exposed through direct navigation. It is accessed via a specific combination of "hidden buttons" located at the bottom of the landing page. This mechanism provides a simple, non-critical access point for internal use.

### Functionality
*   **Basic Analytics:** The primary function of the dashboard is to display fundamental usage statistics:
    *   **Total Landing Page Views:** Tracks the overall number of times the landing page has been accessed.
    *   **Clicks Per Link:** Provides a count of how many times each individual link on the landing page has been clicked.
*   **Security:** Given that the displayed statistics are not considered critical, the dashboard access mechanism is intentionally lightweight and does not incorporate robust security measures like user authentication or authorization.
*   **Management Features:** Beyond displaying analytics, the dashboard does not offer any other management capabilities (e.g., editing links, user settings).

## Technology Stack
*   **Frontend:** Next.js (React framework)
*   **Backend/Services:** Firebase (for data storage and analytics collection)
