# Logic Room UI Architecture - Dev Notes

UI Architecture - Scalable TDD - lesson 2
Logic Room UI - Architecture Approach

This project contains 2 distinct projects that demonstrate two different approaches to automated UI testing:
### before
In the before folder there is a very simple  React App that consists of the typical layers you'd expect in a real SPA.
UI components, and some type HTTP request client for calling data endpoints. 
The data retrieval is handled at the source of the component tree and passed into child compomenets as props - known as 'prop drilling'.

When testing this type of code the UI rendering and search libraries are needed to be able to directly test the output UI elements themselves:

### after
In the after folder the same application has been refactored to isolate the business logic and invert the dependency of the components and the testing.
The conecpt of centralizing busine logic at the core of the depency chain isn't dissimar from BE designs such as DDD or Clean Arhcitecture. 

In this simple example the dependency on the UI and UI testing libraries is removed and the testing becomes much less complex and verbose.
Which in turn makes it easier and thus more likely that developers will write tests.

install
run app
run tests

### References
- 🔗 [UI Architecture Courses](https://www.logicroom.co/courses)

- 🔗 [Jest Official Site](https://jestjs.io/)
- 🔗 [React Testing Library Official Site](https://testing-library.com/docs/react-testing-library/intro)
