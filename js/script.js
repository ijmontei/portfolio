@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

/* Global Styles & Typography */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #ffffff;
    color: #111111;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    opacity: 0; /* Initially hidden for fade-in effect */
    transition: opacity 1s ease-in-out; /* Smooth transition for fade-in */
}

h1, h2 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    margin-bottom: 0.5em;
}

/* Homepage (index.html) Specifics */
body > header { /* More specific to target only the main page's header if project pages have different header structures */
    text-align: center;
    padding: 4em 1em;
}

/* Assuming the main page header structure is unique enough or apply a class if needed */
/* For index.html main header */
body > header h1 {
    font-size: 3rem;
    margin-bottom: 0.1em;
}

body > header p {
    font-size: 1.2rem;
    color: #555555;
}

#projects {
    padding: 2em 1em;
    max-width: 800px;
    margin: 0 auto;
}

#projects ul {
    list-style: none; /* Remove default list styling */
    padding: 0;
}

#projects ul li {
    margin-bottom: 0.5em; /* Add some space between project links */
}

#projects a {
    text-decoration: none;
    color: #111111;
    font-size: 1.1em; /* Slightly larger font for project links */
}

#projects a:hover {
    text-decoration: underline;
}

/* Project Detail Pages (project-alpha.html, project-beta.html) */
/* Header nav link on project pages */
body > header nav a, 
.project-detail-header nav a { /* Added a class for more specific targeting if needed */
    display: inline-block;
    margin: 1em;
    text-decoration: none;
    color: #333333;
    font-family: Arial, sans-serif; /* Ensure it doesn't inherit serif font */
}

/* Project titles on project pages */
main h1 { /* This will target H1 in main sections of all pages */
    font-size: 2.5rem; /* Slightly smaller than homepage main title */
    text-align: center; /* Center project titles */
    margin-top: 1em; /* Add some space above project title */
}

.project-description {
    font-style: italic;
    color: #444444;
    margin-bottom: 2em;
    text-align: center; /* Center description */
    max-width: 700px; /* Constrain width for readability */
    margin-left: auto;
    margin-right: auto;
}

.project-visual.placeholder {
    width: 100%;
    height: 300px;
    background-color: #eeeeee;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999999;
    font-style: italic;
}

.project-text-block {
    margin-bottom: 2em;
    max-width: 700px; /* Constrain width for readability */
    margin-left: auto;
    margin-right: auto;
}

/* Footer */
footer {
    text-align: center;
    padding: 2em 1em;
    font-size: 0.9rem;
    color: #777777;
    border-top: 1px solid #eeeeee; /* Add a subtle separator */
    margin-top: 2em;
}

/* Basic Responsiveness */
@media (max-width: 768px) {
    body > header h1 { /* index.html main name header */
        font-size: 2.2rem;
    }

    main h1 { /* Project titles on project pages */
        font-size: 1.8rem;
    }

    body > header { /* index.html main header */
        padding: 3em 1em;
    }

    #projects {
        padding: 1.5em 1em;
    }

    .project-description,
    .project-text-block {
        padding-left: 1em;
        padding-right: 1em;
    }
}

@media (max-width: 480px) {
    body > header h1 { /* index.html main name header */
        font-size: 1.8rem;
    }
    body > header p {
        font-size: 1rem;
    }
    main h1 { /* Project titles on project pages */
        font-size: 1.5rem;
    }
    .project-visual.placeholder {
        height: 200px;
    }
}
