# Flywheel Angular Test

## Using the Example Project

1. <del>Install npm and bower
  * <https://www.npmjs.com/>
  * <http://bower.io/>
2. <del>Run 'npm install' to fetch grunt & dependencies
3. <del>Run 'bower install' to fetch angular.js and bootstrap
4. <del>Run 'grunt serve' to start a web server.  The server will serve the /app directory and proxy /api calls to a test version of the Flywheel api with test data.  Once the server is running, you can view the app by visiting <http://localhost:9000>.

## API Usage

A test API is available at [https://interview.flywheel.io/api ](https://interview.flywheel.io/api) for use with this test.  The test API has had authentication removed and instead expects the URL parameter 'user' to equal your email address.

#### API Calls

Request a list of sessions:  
Endpoint:`GET http://localhost:9000/api/sessions?user=YOUR\_EMAIL\_ADDRESS`

Request a session's details:  
Endpoint:`GET http://localhost:9000/api/sessions/SESSION_ID?user=YOUR\_EMAIL\_ADDRESS`

Modify a session:  
Payload: `{"subject":{"firstname":"","lastname":"","code":""}}`  
Endpoint:`PUT http://localhost:9000/api/sessions/SESSION_ID?user=YOUR\_EMAIL\_ADDRESS`

Add a new note  
Payload: `{"text":"The comment's text"}`   
Endpoint:`POST  
 http://localhost:9000/api/sessions/SESSION_ID/notes?user=YOUR\_EMAIL\_ADDRESS`  

Request a list of projects:  
Endpoint:`GET http://localhost:9000/api/projects?user=YOUR\_EMAIL\_ADDRESS`

Angular Example:
```
$http.get('/api/sessions?user=your@email.io').then(function(response) {
  console.log(response);
});
```

## Requirements
The requirements will frequently refer to 'sessions'.  In this context a session is an instance in which scientific data was collected.

The app will consist of 2 parts.  A sessions list view with filters and a session detail view.

#### Session List View Requirements  
1. The list view must have a table with the following columns
  1. Session Label
    * session.label
  2. Project Label
    * On the session object the property 'project' will give you the project ID.  If this ID corresponds to a project in the projects list, then display the project's label.  Otherwise, display "Unknown."
  3. Subject code  
    * The session object has a subject property containing information about the subject.  The 'code' from this property should be displayed.
2.  Filters must be provided to filter on the Session Label, Project Label and Subject Code simultaneously.
3.  Selecting a table row should navigate the user to the Session Details view.

#### Session Details View Requirements
1. On the details page the session _id, label, project, group, subject code, subject first name and subject last name should be displayed.
2. Upon clicking an edit button, the subject code, first name and last name should become editable and the edit button should be replaced with save/cancel buttons.
3. A notes section should also be displayed.  Notes can be found in the notes property of the session object.  The note's text, modified, and user fields should be displayed.
4. A text area and save button should be displayed to add new notes to a session.

## Extras

1. [Use ui.router](https://github.com/angular-ui/ui-router)
2. Add unit tests
3. Submit code free of JSHint errors
4. Follow this [Angular Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
5. Use [UI Bootstrap](https://angular-ui.github.io/bootstrap/)
6. Include field validation
  1. Subject Code, First/Last Name
    * required, letters/numbers, 25 characters
  2. Notes
    * required, 1000 characters
7. Use [ng-resource](https://docs.angularjs.org/api/ngResource/service/$resource)
8. Use lodash to simplify code if applicable
