I have been using ReactJS to ease out the development.

Created different components like Dashboard, Form Wizard, Header and Error.

Routing to component through action.

Managed state on Form Wizard to hold the data.

Dashboard - lands on page once application is loaded

Form Wizard - User is able to fill details on the form and view summary. To make it work, I have loaded summary section in the same form wizard page and manipulated the DOM.

Error - created new component as we can reuse it to show the error.

App -> Dahsboard -> Form Wizard -> Form  -> Summary -> Dashboard
                                   Form  -> Error -> Dashboard

