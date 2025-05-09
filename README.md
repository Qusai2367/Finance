# Yami Project

A Single Page Application (SPA) with client-side routing and Express backend server.

## Project Structure

```
main/
  ├── index.html
  └── static/
      └── js/
          └── index.js
server.js
package.json
package-lock.json
```

## Frontend

The frontend implements client-side routing using vanilla JavaScript. The router handles the following routes:

- `/` - Dashboard
- `/post` - Posts
- `/settings` - Settings

The routing is implemented using the History API, allowing for seamless navigation without page reloads.

## Server

The Express server is running on port 5060 and serves the static frontend files.

## Running the Application

The application is currently running at http://localhost:3000

## Development Notes

### Server Setup and Debugging

During the initial development phase, we encountered and resolved several key challenges:

1. Express Server Configuration
   - Successfully set up Express server on port 3000
   - Implemented static file serving for the frontend
   - Configured proper routing to handle SPA requirements

2. Version Compatibility
   - Resolved Express version compatibility issues
   - Ensured proper middleware integration

3. Testing and Verification
   - Confirmed server functionality through local testing
   - Verified proper static file serving
   - Validated client-side routing functionality