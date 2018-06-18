# REACT STARTER KIT

<p align="center">
    <img src="http://git-assets.react-starter-kit.com/logo.png">  
</p>

Open Source Universal React Redux GraphQL Boilerplate

[Online Demo](https://react-starter-kit-demo.herokuapp.com)

# Getting Started

This repository contains the source code for React-Starter-Kit. This documentation will cover the installation on your machine, project architecture, unit testing and working with the app in general.

This is a Universal React Redux GraphQL Node app.

## YouTube Video Tutorials

##### Introduction (Getting started)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=g2QWG9sAQqs" target="_blank">
	<img src="http://img.youtube.com/vi/g2QWG9sAQqs/0.jpg" width="240" height="180" />
</a>


##### Project architecture

<a href="http://www.youtube.com/watch?feature=player_embedded&v=DfxmoBgPymI " target="_blank">
	<img src="http://img.youtube.com/vi/DfxmoBgPymI/0.jpg" width="240" height="180" />
</a>

## Preview

<p align="center">
    <img src="http://git-assets.react-starter-kit.com/preview.png" style="max-width: 400px;">  
</p>

## Software 

Before proceeding, please ensure you have the following software installed on your computer.

* Node
* Yarn (optional but recommended)
* Git command line tools

### Useful links

* Download Git CLT - Windows: https://git-scm.com/download/windows Mac: https://git-scm.com/download/mac
* Download Node - https://nodejs.org/en/
* Download Yarn CLT - https://yarnpkg.com/lang/en/docs/install/
* Download VSCode - https://code.visualstudio.com/


## Installation

Please fork a copy of this repository. Forking a repository allows you to freely experiment with changes without affecting the original project. Alternatively download or clone the master branch.

1. Clone the repo to your machine 

```
  git clone <CloneURL>
```

2. Within terminal or cmd ensure you have changed directory (into the new folder that has been cloned) and install the dependencies

```
  cd <new-dir> 
  yarn install OR npm install
```

3. Before we can build, run or deploy our app it is important to ensure that the 'webConfig.json' is configured for our environment. Please change 'siteURL' to point to either your local or live url.

```
    {
    "siteURL": "http://localhost:3000", ...

    OR

    {
    "siteURL": "http://mydomain.com", ... 
```

5. You must build the app before you can run it

```
  yarn run build OR npm run build
```

6. Run your build

```
  yarn run dev OR npm run dev
```

This should launch the application and start running on: http://localhost:3000/


## Notes

For specific versions of dependencies being used please reference the 'package.json' file within the main project directory.


## Project architecture

Within the main project directory 'src' (source) folder, you will find the following folders:

1. 'assets'

This folder contains important files that are referenced throughout the app.

2. 'client'

This folder contains our source code. 

## A closer look

Please read the information below before making any changes to this project. You can reference this to gain an understanding of our design patterns, and help you find/write new code.

### Inside the 'src' folder

1. 'actions'

Any actions we create should be exported from this file. (incl async)

2. common

This folder contains code that is shared. For example form inupt types or form validation.

3. components

This folder contains components which are not connected to the store. For example, you can find the header & footer components here.

4. endpoints

We are using the axios library to handle our requests both on the server & client.

I have created an axios instance with a 'baseURL' for our main API. This means when making a call we only need to supply the route and body of our request.

Please see the example:

```
  api.post(landingPageAPI, body).then(response => { ...
``` 

Please note: The 'baseURL' is defined within the 'webConfig' file. If you need to make a request to a completely different api, use axios without our instance.

5. Layouts

We use layout components to render our routes. Upon configuration, we can define a unique layout component for any route. This can be useful for landing pages or pages that require unique functionality.

Please note that our routes will be rendered wherever we place the following code:

```
  {renderRoutes(this.props.route.routes)}
```

6. Pages

This folder is self-explanatory.

Please maintain the proper naming conventions. For example, 'namePage'.

## Important

Whilst most of our code is standard, please note the special 'loadData' function that is exported.

As you know, this is a universal application, which means that we need to configure our pages to run on both the server and client.

The 'loadData' function is used to tell the server what calls need to be complete before throwing down the initial html to the browser.

7. Reducers

This folder is self-explanatory.

Please maintain the proper naming conventions. For example, 'nameReducer'. 

Before we create a store, we combine our reducers. Please ensure any new reducers are imported into the main 'index' file within the directory and added to the combine reducers method/object.

8. FILE: app.js

You can imagine this as the default layout of our application.

9. FILE: routes.js

This file is self-explanatory.

Although we are using 'React Router 4' as this is a universal app, I am using the static router.

This is because we need to handle two types of routing as it needs to run on both the client and the server.

More information can be found: 

https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config


## Deployment

To deploy the app, simply follow the steps:

1. install dependencies

2. run a build

3. start the app via the following command - 'node build/bundle.js' 


# General info

## Send emails:

We are using 'nodemailer' to handle the process of sending emails.

We have already intergrated into the project. See 'src/client/pages/contactPage.js' and the '/sendmail' route within our server file.

For more information, please reference: https://github.com/nodemailer/nodemailer

## Fonts:

Throughout the project we reference a single font family 'gt_walsheim', but have multiple font weights.

We have the following weights included within the project:

Ultra Thin: 100
Thin: 200
Light: 300
Regular: 400
Medium: 500
Bold: 700
Ultra Bold: 900

Please reference 'src/assets/fonts/fonts.css' for more.

## Reference a background image within css

Please ensure you copy all your images into the graphics folder. Whenever you compile the scss, webpack will prefix your path with the root domain defined within the 'webConfig' file.

To reference an image within css, please use the example below:

```
background-image: url('/assets/graphics/[name].[ext]'); 
```

## Reference a image within HTML/components

There are a number of different methods that can be used to include graphics within our components. However once you begin using more complex routes, you might find some paths breaking.

The solution is to use absolute paths. This means that we prefix with the enviroment url. Please reference the example below:

```
   <img src={`${webConfig.siteURL}/assets/graphics/logo.png`} />
```

Please note: ensure you have imported 'webConfig' before using it.

## Carousels

You may wish to implement a carousel within the website. 

Whilst this is slightly more complex because this is a universal app, please reference the link below.

This app uses 'react-slick'. The relevant dependencies and css have already been included within the project.

URL: https://www.npmjs.com/package/react-slick-ssr

## Forms:

We are using 'Redux-form' throughout our application. This has made it simple to apply proper validation (inclu async), two-way data binding (initialize from store), and write cleaner, more reusable code (pre-defined input types & validation etc..).

- input-type

We are currently exporting constants for the following field types:

- Textfield
- Textarea

Please ensure you export new constants from this file if you require any new field types. It is important to be aware that the styles for these inputs can be found within 'src/assets/scss/base/_forms.scss' and that each have multiple variations in terms of both functionality and design determined by the presence of additional classes. 

Be careful when manipulating the mark-up of these constants, as these field types are used throughout the application. 

These input types can be utilized by passing the relevant const through as a prop to each 'Field' element as a 'component' within 'Redux-form'.

## Styles

We are using SCSS (CSS pre-processor/bracketed version of SASS) to enable us to write cleaner and more reusable css code.

Our main 'styles.scss' is compiled upon each save, once the project has been started from your terminal/cmd. Whilst the resulting 'styles.css' is the only 'css' called from within the project, the 'scss' version simply contains imports to the partial files created within folders.

## CSS Rules

In order to ensure the integrity of the project and long-term maintainability, please conform the following rules:

- Media queries should be written/maintained within the relevant 'partial' file.
- REM CSS measurement units:

We are using rem's to style our app. Whilst you should not use any other measurement unit, it is correct to use ‘px’ for certain properties. For example, you should still use 'px' for setting a border or the width of a media query to ensure more accurate break points.

The root font size is set to '10px'. This means the calculation required to implement rem’s is simple: (target font size / 10 OR 18 / 10 = 1.8rem).

- 'config.js' 

Please utilize our configuration partial file wherever possible. This contains global variables for generic/brand colours, keyframes, mixins and more! For consistency please reference these instead of redefining where possible (or add to this file).


## 12 Col Grid Boiler template
 
We are using a 12 Column Grid that works as follows:
 
The grid has 12 columns
 
Each columns width is a % value that can be calculated using the following:

```
Target Columns (Example '6')
Minus Number of Total Columns (12)
Times 100 = 50%
```

Example HTML mark-up for a 2-column layout:

```
<div class="grid">
 
  <div class="column column_6_12">
    Half
  </div>
  
  <div class="column column_6_12">
    Half
  </div>
 
<div>
```
 
Each column has a ‘20px’ gutter/ Each column has 10px padding on either side.

The grid should not be used within areas that require custom mark-up (such as your header/footer) to avoid having to override default styling. This will ensure the integrity of the code. Please DO NOT apply any styling to the grid directly. These should be global classes which are not overridden (ensures you will not break styling in other places).

To centre your content, simply apply a 'max-width' to the parent wrapper '.grid'. You can either set this globally within the '_responsive-grid' partial file or target it specifically via a custom parent class.

