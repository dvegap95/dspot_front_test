# DSpotTest

Project developed in response to a talent acquisition test with the following requirements:


### 1. Create a basic app that has the following functionalities:

- I. Connect to the REST  API
        a. GET http://private-5bdb3-friendmock.apiary-mock.com/friends Friends List
        b. GET http://private-5bdb3-friendmock.apiary-mock.com/friends/id Friends Detail
    
- II. Create a Friends List using the friends endpoint above. Use whatever tools or libraries that you feel are necessary to complete the job.

- III. When you click on a friend in the Friends List, show a Friends Detail view.

- IV . Have a button or other way to return to the Friends List
    
- V . Use this design https://www.figma.com/file/Pe9VVOGr2sOvfOcnzzAbvX/Dev-T est?node-id=0%3A1.


Assuming this will be part of a very big application, please follow very high standards, to ensure
that your code is maintainable, scalable and reliable. The code will be reviewed taking these
points into account. We also request that you explain how you ensure that these points are
addressed in your application, this should be delivered in a Google Doc document (in English).

- T o ensure these points above, we request as well that you write Unit / Integration / UI tests for your application.

- Please, also make parameterized unit tests to the algorithmic problems given in the test.
Please make sure to use Hubstaff while working on the test.

- In this test, the quality of the code is more important than how many tasks you are able to
complete.  Also, remember to make good use of Git.


# Setup

[Vite](https://vitejs.dev/) was used to build this [React](https://es.reactjs.org/) project.

## Install

```
npm install
```

## Run

### Development

```
npm run dev
```

### Production

```
npm run build
npm run preview
```

## Testing

### Integration (e2e) testing for views with [Cypress](https://www.cypress.io/)

```
npm test
```

With graphical interface 
```
npm run test:ui
```

## Technical Specifications
- See the [Technical Specifications](./docs/Technical%20specifications.odt) as a reference to project scalability, maintainability and reliability.
## Future work
- Add [Redux](https://redux.js.org/) for global state management as it's usually needed inside big applications.

- Add [Toastify](https://aleab.github.io/toastify/) for managing global notifications.

- Add routes fallback for 404 error handling