# Accessing the Project Files

## 1. Install Yarn

- To get started, you'll need Yarn as your package manager. If you haven't already installed Yarn, you can download and install it from the official website: [Yarn Installation Guide](https://classic.yarnpkg.com/en/docs/install/).

# Login Instructions

## 1. Accessing the Login Page

- Open your web browser and navigate to the login page of the application.

## 2. Click the Login Button

- On the login page, you will see a "Login" button. Click on this button to proceed.

## 3. No Credentials Required

- Note that you won't need to enter any credentials (username/password) for this login process.

## 4. Data Handling

- Behind the scenes, when you click the "Login" button, user data stored in the `authContext.js` file will be sent and stored in your browser's localStorage.

## 5. Accessing the Home Page

- After clicking "Login," you will be granted access to the home page of the application.

## 6. Protected Route

- If there is no user data in the localStorage (i.e., you haven't clicked "Login" before), a protected route mechanism will prevent you from accessing the home page. In this case, you may be redirected to the login page.

## 7. Accessing Home Page with Data

- To access the home page successfully, ensure that you have previously clicked the "Login" button to store the necessary data in localStorage.

# Functionality

# Create

To create a new post on the home page, you can use the input fields for the image URL and description. You can also create a new post during the registration process on the /register page, where you will see the created account displayed in the right sidebar as a suggested person.

# Edit

If you want to make changes to your existing post, simply click the "Edit" button associated with that post.

# Delete

To remove a post, click the red trashcan icon next to it. You will receive a confirmation prompt asking, "Are you sure you want to delete this post?" to ensure you don't accidentally delete it.

# View

When you click on a user's name, you will see their unique ID. Currently, this feature is available for the user named John Lenard, with an ID value of 1.

# Dark Mode

You can switch between Light Mode and Dark Mode using the "Dark Mode" switch in the navigation bar.
