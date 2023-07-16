import { TAGS } from '@/constants'

const en = [
  {
    title: 'Rails to React Migration: Backwards Compatibility. Part 1',
    mainImagePath: 'rails-to-react-migration-backwards-compatibility-part-1/mt-ida.jpg',
    mediumLink: 'https://medium.com/swlh/rails-to-react-migration-backwards-compatibility-part-1-dc218b2766ea',
    publishDate: 'August 3rd, 2020',
    tags: [
      TAGS.react,
      TAGS.createreactapp,
      TAGS.rubyonrails,
      TAGS.javascript
    ],
    paragraphs: [
      {
        type: 'text',
        text: 'Paying customers, backwards compatibility and refactoring'
      },
      {
        type: 'text',
        text: 'Recently, I agreed to do some work for a fast growing startup. This company and their web application has been active over 2 years, boasting a handful of developers and a sizable amount of early round funding.'
      },
      {
        type: 'text',
        text: 'We\'re not talking enterprise level but the codebase is well beyond a hobbyist project. Zipped the codebase is over 50MB, unzipped over 300MB of tightly wound business logic, duplication and tech debt. But let\'s not overlook the fact that this application is in production, and big name clients rely on and (most importantly) pay for its features.'
      },
      {
        type: 'text',
        text: 'Paying customers don\'t care about an application\'s tech debt, testing coverage or using the latest frameworks. They want good software today, not perfect software tomorrow.',
        dots: true
      },
      {
        type: 'text',
        text: 'Objective: Ripping out the Frontend! I mean, “migrating” the Frontend.'
      },
      {
        type: 'text',
        text: 'It was immediately clear to me, and other engineers on the team that the greatest need was to separate the Front and Back end codebases. So that\'s what I set out to accomplish, with a couple goals to keep in mind.'
      },
      {
        type: 'text',
        text: '1. Backwards compatibility: The existing website had to continue serving customer\'s needs. No closing up shop for 3 months to rebuild everything.'
      },
      {
        type: 'text',
        text: '2. Piece by Piece: A refactor of this magnitude could only be accomplished little by little.'
      },
      {
        type: 'text',
        text: '3. Use existing Backend: create new JSON API endpoints to run alongside traditional controllers.'
      },
      {
        type: 'text',
        text: '4. Abstract Components: Refactor Frontend HTML/ERB templates into React components.'
      },
      {
        type: 'text',
        text: '5. End goal: full transition to distinct React Frontend. Move templates and features slowly into a new React app that will eventually entirely replace the previous MVC Frontend.'
      },
      {
        type: 'text',
        text: '6. Have fun.'
      },
      {
        type: 'text',
        text: 'In my 9 - 5 grind, I\'m a Frontend developer, but I have had a few years of experience working with Ruby on Rails backends. I was not prepared for the black hole of code this startup had amassed.'
      },
      {
        type: 'text',
        text: 'I won\'t even mention the backend language or framework, because frankly to this day I still don\'t understand how it worked. And you know what? I\'m at peace with that. The principles I learned while taking this project on could be applied to any MVC web application migrating to an independent Frontend. For the sake of this article and my sanity, I will code the Backend examples in Ruby, and Frontend examples in React.'
      },
      {
        type: 'text',
        text: 'Side note: There are dozens of ways to refactor, your situation and code will differ from mine. This series is not a step by step guide on how to migrate any Rails MVC to a React Frontend. React on Rails and React Rails are fantastic gems available to Rails projects to accomplish what this article describes.'
      },
      {
        type: 'text',
        text: 'Let\'s meet our fancy (clunky) MVC app'
      },
      {
        type: 'image',
        altText: 'GIF of fancy (clunky) MVC app.  Left sidebar has list of featured cars, main is all available cars',
        url: 'rails-to-react-migration-backwards-compatibility-part-1/clunky.gif'
      },
      {
        type: 'text',
        text: 'Our example app for this article is: Car Finder!! It\'s not cutting edge. And it sure isn\'t powered by AI, or Blockchain. But for our purposes, this should work just fine.'
      },
      {
        type: 'text',
        text: 'The main thing going on in this app is a some sweet 90\'s style CSS, hacked together by someone who got fired long ago. First we see a Car Hero, welcoming us to the MVC Car Finder. On the left side is our Featured Cars List. Finally we have our All Cars List list of all the cars. At the moment this app is completely MVC. All of this has been generated with ERB/HTML templates, no JS.'
      },
      {
        type: 'text',
        text: 'So let\'s dive into the code.'
      },
      {
        type: 'text',
        text: 'Backend (M): Ruby Models'
      },
      {
        type: 'text',
        text: 'Our car.rb model has several database backed attributes, name, make, style, year, price_min, price_max and color. We included a helper method: featured_cars() to return a list of featured cars.'
      },
      {
        type: 'codeBlock',
        gistId: '2d7bcd3a9d6600b051c1e73da75d5bec',
        gistFile: 'app/models/car.rb'
      },
      {
        type: 'text',
        text: 'Backend (C): Ruby controllers'
      },
      {
        type: 'text',
        text: 'Our cars_controller.rb contains an index action, where an instances variables are set that will later be used in the template to render our Featured Cars List and All Cars List.'
      },
      {
        type: 'codeBlock',
        gistId: '9e94171020786c87980a884068235376',
        gistFile: 'v1_MVC_cars_controller.rb'
      },
      {
        type: 'text',
        text: 'Frontend (V): ERB/HTML Templates'
      },
      {
        type: 'text',
        text: 'Our Frontend is generated by Rails ERB/HTML templates. Notice the Rails partial CarsHero being used in an attempt to stay dry and organize our app into components. Then our code iterates over the @all_cars and @featured_cars lists to render blocks of HTML. And people say that HTML isn\'t real programming!'
      },
      {
        type: 'codeBlock',
        gistId: '9caa1304ae622e257304be3d6e67689c',
        gistFile: 'v1_MVC_cars_index.html.erb',
        dots: true
      },
      {
        type: 'text',
        text: 'Injecting React in MVC, as painful as real injection'
      },
      {
        type: 'text',
        text: 'Before we continue, it\'s necessary to go on a small tangent to explain why integrating React into an existing MVC app is such a pain. In a perfect world we\'d spark up a new React app with a nifty new framework like Gatsby.js, or Next.js, and our MVC app could just import a couple JS files from localhost and Bam! Everything works. Reality is much different. Building a React bundle requires a lot of work adding dependencies, transpiling JS for browsers, often even compiling images and stylesheets into JS.'
      },
      {
        type: 'text',
        text: 'This process of selecting a React framework and reverse engineering its build files to be used in your MVC app will require a lot of up front work. But it will be worth in the end to have a stand alone React app.'
      },
      {
        type: 'text',
        text: 'For this tutorial, we\'re going with a more homemade, less scalable solution. We will be using the built in Rails webpacker gem. This solution involves very obvious tradeoff: we can get started right away creating components, but our one-off components can\'t benefit from a full-feature React framework like Gatsby or Next.'
      },
      {
        type: 'text',
        text: 'Rails 6 and Modern JS'
      },
      {
        type: 'text',
        text: 'Rails has made significant improvements integrating with modern Frontend frameworks, out of the box, rails 6 includes the webpacker gem to easily incorporate modern js. As previously mentioned, react_on_rails and react-rails are great options that I would infinitely recommend over the approach covered in this article. But remember, in real life I wasn\'t working with Rails.'
      },
      {
        type: 'text',
        text: 'With Rails, getting up and running with React is amazing easy, leveraging the built-in webpacker gem.'
      },
      {
        type: 'codeBlock',
        gistId: 'f045ed00a436890e2816d522d31eaaff',
        gistFile: 'v2_MVC_javascript_directories',
        dots: true
      },
      {
        type: 'text',
        text: 'Our First Component: CarHero.js'
      },
      {
        type: 'text',
        text: 'With React installed in our MVC app, we\'re ready to create our React components and inject them into the existing HTML/ERB templates. Our CarHero Rails partial is a perfect candidate to be refactored into a new React Component.'
      },
      {
        type: 'text',
        text: 'Create the CarHero.js React component, we can even create SASS styles and it will be compiled flawlessly by Rails. I ❤️ u rails.'
      },
      {
        type: 'codeBlock',
        gistId: '1bb07320490ed5c1159ed1d806047fd9',
        gistFile: 'v1_React_CarHero.js'
      },
      {
        type: 'text',
        text: 'Injected CarHero into our Template'
      },
      {
        type: 'text',
        text: 'With our CarHero.js component built, we need to prepare our HTML/ERB template to receive the React component. Let\'s create a container inside of the HTML/ERB template where we want our component to be injected. We\'ll add 2 important properties'
      },
      {
        type: 'text',
        text: '1. class="react-component" so that we can search for it later with document.querySelectorAll(\'.react-component\')'
      },
      {
        type: 'text',
        text: '2. data-component="CarHero" so that React knows the name of the component to render.'
      },
      {
        type: 'codeBlock',
        gistId: 'b475e2d0deff407f8ccb2ac5c125f2de',
        gistFile: 'V2_MVC_React_cars_index.html.erb'
      },
      {
        type: 'text',
        text: 'Last step before that beautiful demo time, we have to write a simple JS script render the React components. Create a react_components_manifest.js pack, although you can name the script whatever you\'d like.'
      },
      {
        type: 'text',
        text: 'touch app/javascript/packs/react_components_manifest.js'
      },
      {
        type: 'codeBlock',
        gistId: '1ed103edb4bc4c809d14bc72f9a69272',
        gistFile: 'react_components_manifest.js'
      },
      {
        type: 'text',
        text: 'This script imports our dependencies and components, then adds a document.ready event to find all HTML elements with the react-component class. Then iterates on each DOM element, extracting the React Component that will be rendered from the data-component attribute. Finally we render the component into the DOM element with ReactDOM.render(React.createElement(<Component>, <domNode>))'
      },
      {
        type: 'text',
        text: 'Our First Component in Action'
      },
      {
        type: 'image',
        altText: 'Gif of our first React Component injected into the MVC app.',
        url: 'rails-to-react-migration-backwards-compatibility-part-1/spa-in-action.gif',
        dots: true
      },
      {
        type: 'text',
        text: 'Conclusion'
      },
      {
        type: 'text',
        text: 'And with that, we\'ve enabled our MVC app to use injected React components. We\'ve maintained backwards compatibility for our customers, and trail-blazed a path forward for our developers to build a service-based architecture. We will continue our migration by extracting the AllCars and FeaturedCars components from MVC into React, and even and an impromptu new search feature. Because no refactor would be complete without last minute product requirements.'
      },
      {
        type: 'text',
        text: 'Thanks for reading, I hope you\'ve learned something or at least laughed at my misfortunes.'
      },
      {
        type: 'text',
        text: 'Any feedback would be greatly appreciated, or passive aggressively ignored.'
      }
    ]
  },
  {
    title: 'Vue.js Mobile Desktop Optimized Images',
    mainImagePath: 'vue-js-mobile-desktop-optimized-images/original_salento.jpg',
    mediumLink: 'https://medium.com/@e.ozelius/vue-js-mobile-desktop-optimized-images-7b93f2afc43b',
    publishDate: 'July 14th, 2020',
    tags: [
      TAGS.vue,
      TAGS.javascript
    ],
    paragraphs: [
      {
        type: 'text',
        text: 'Mobile devices and internet speeds have come a long way. Gone are the days of one wifi bar and a dream, praying the 99 cent 3.1K iTunes song you just purchased for your slick new 8G iPod mini will download in under an hour. If at all.'
      },
      {
        type: 'text',
        text: 'Nowadays web developers build expensive beautiful web apps with high-resolution professional photography.  But even with how far mobile devices have come, high quality images taken with decent phone camera can easily reach 5 - 6 MB, which will not only slow mobile image rendering to a crawl, but for many desktop web experiences, could be way overkill.'
      },
      {
        type: 'text',
        text: 'Optimizing images for desktop and mobile devices requires just a basic understanding of photoshop, some JS foo, and basic understanding of how images are deployed with your Front End Framework.  But the payoff of optimized lighting quick high quality images will be well worth the effort.',
        dots: true
      },
      {
        type: 'text',
        text: 'For this tutorial, I\'ll use the open-source image editing program Gimp version 2.10, and Vue.js my favorite Front End framework.  Lets start with this high-quality image of a jumbled work bench taken with my OnePlus 5 phone, which has a 16MP camera.'
      },
      {
        type: 'image',
        url: 'vue-js-mobile-desktop-optimized-images/original_salento.jpg',
        altText: 'original Salento Colombia image'
      },
      {
        type: 'text',
        text: 'There\'s a high degree of detail in this photo, and I want to preserve each spec of rust, no matter what device I\'m using.  This photo measures 4608x3456 pixels and weighs in at a whopping 5.6MB.'
      },
      {
        type: 'text',
        text: 'If I was building a professional photography website, I might leave this image in its current format to really wow website visitors.  But for most scenarios, this image could slow performance and rendering, even on a powerful desktop computer with a fast wifi connection.  So for this tutorial, I\'m going to optimize this image for desktop and mobile by scaling the size down a bit.'
      },
      {
        type: 'text',
        text: 'You\'ll have to play around with each image a bit to achieve the balance of image quality and rendering speed that is right for your application, but in my experience I\'ve found that images in the neighborhood of 1200 - 1600 pixels wide will look amazing on desktop devices.  For mobile, I usually go for about 400 - 600 pixels wide.  Once you get the hang of it, you\'ll be able to dial in the exact proportions that are right for you.'
      },
      {
        type: 'text',
        text: 'Before we get to image optimization, let\'s organize our Vue app images directory.  Create a directory structure that makes sense for your app, my images directory looks like this'
      },
      {
        type: 'codeBlock',
        gistId: '13c2ffe305e3311aee90bb0f2d8448f9',
        gistFile: 'images_tree',
        dots: true
      },
      {
        type: 'text',
        text: 'Note: Photo editing and coding are similar in that it\'s a good idea to make a copy that you can fall back on if things go south.'
      },
      {
        type: 'text',
        text: 'To optimize our images, open the original image in Gimp.  To Scale an image in Gimp, go to Tools > Transform Tools > Scale'
      },
      {
        type: 'image',
        url: 'vue-js-mobile-desktop-optimized-images/scale.png',
        altText: 'Gimp scale tool'
      },
      {
        type: 'text',
        text: 'Once the Scale tool is active, click the image, and a dialog box will appear for you to set the new width and height.  I always scale the height proportionally to the width, this can be done automatically with Gimp, but selecting the chain link icon in the scaling dialog box.  Set the image width to 1600px, and the height will update automatically.'
      },
      {
        type: 'text',
        text: 'Once the image has been scaled to our desktop dimensions of 1600 x 1200 pixels, copy the image by holding Cmd + C, or Shift + C on Windows and Linux machines.'
      },
      {
        type: 'text',
        text: 'Next create a new Gimp image file with File > New.  Set the width and height on the new Gimp file to 1600 x 1200 pixels and click OK.  Once the new Gimp file loads, simple paste your scaled image from clipboard into the new Gimp image with Cmd + V or Shift + V.'
      },
      {
        type: 'text',
        text: 'Optimizing for mobile devices is much the same process, with a small caveat.  Our mobile images will be portrait not landscape, so we need to select only a section of our original image that will look best on mobile devices.'
      },
      {
        type: 'text',
        text: 'To select a portrait section of our original image, go to Gimp Tools > Selection Tools > Rectangular Select.  Once the rectangular select tool is active, drag across the original image until you find a portrait selection that looks good to you.  Once you\'ve got it, scale the selection to 500 x 750px, copy the scaled selection, create a new 500 x 750px Gimp image and paste the selection into the new file.'
      },
      {
        type: 'image',
        url: 'vue-js-mobile-desktop-optimized-images/rectangle-select.png',
        altText: 'rectangular select tool'
      },
      {
        type: 'text',
        text: 'Finally we need to export (not save) our optimized images into our Vue app.  In Gimp go to File > Export As, and select the mobile and desktop image directory where you would like your new images to be exported to.  Once you have selected your location, another Gimp dialog box will open making sure you are alright with the exporting settings.  Note: I\'ve always had good luck with the default settings, and was always too impatient to get back to coding to dive too deeply into what each of these settings do, but if you\'re curious, dive right in.',
        dots: false
      },
      {
        type: 'text',
        text: 'With our optimized images exported to their proper directories, you should have an images directory like this.',
        dots: false
      },
      {
        type: 'codeBlock',
        gistId: '0bfd9a0526b9be6e905d84ead7a14af5',
        gistFile: 'images_tree_with_images',
        dots: true
      },
      {
        type: 'text',
        text: 'With our optimized images exported to their proper directories, it\'s time to dive into the code to serve one of these two images based on screen size.'
      },
      {
        type: 'text',
        text: 'We will create a simple util function called isMobile.js that will return true if the screen width is less than 500 pixel, while this solution won\'t cover every single edge case, it\'s good enough for our purposes.'
      },
      {
        type: 'codeBlock',
        gistId: '78122c3e2888f1ea8b0b62c51e061275',
        gistFile: 'isMobile.js'
      },
      {
        type: 'text',
        text: 'Next create a <Picture /> component'
      },
      {
        type: 'codeBlock',
        gistId: 'b5b5f98cb92b655f4a3aaa73479c8d92',
        gistFile: 'Picture.vue'
      },
      {
        type: 'text',
        text: 'The only interesting bit about this component is the <img :src= "require(getOptimizedImage)" />, which dynamically loads an image from either the large or small directory, based on the isMobile().'
      },
      {
        type: 'text',
        text: 'Let\'s spark up our app to see our work in action!'
      },
      {
        type: 'image',
        url: 'vue-js-mobile-desktop-optimized-images/optimized-images.gif',
        altText: 'optimized images in action gif',
        dots: true
      },
      {
        type: 'text',
        text: 'A quick note about overall build size and how assets are deployed.'
      },
      {
        type: 'text',
        text: 'When you build your app webpack will likely give you several warnings that your desktop images are larger than the suggested maximum asset size of 244 KiB.'
      },
      {
        type: 'codeBlock',
        gistId: 'd9c804938ba42332d76f34e7859d2a53',
        gistFile: 'webpack_warning'
      },
      {
        type: 'text',
        text: 'Relax webpack, we\'re pros here.'
      },
      {
        type: 'text',
        text: 'Obviously these high quality images will significantly bump up our production builds folder\'s footprint, but a larger build folder, doesn\'t necessarily equate to slower load times.  To understand this we need to understand how a deployed app built with Vue CLI is structured (create-react-app is structured in a similar fashion).'
      },
      {
        type: 'text',
        text: 'When we run yarn build, a dist folder is created with the following structure, containing everything a user needs to interact with our website, images, styles, our Front End code and dependencies.'
      },
      {
        type: 'text',
        text: 'A dist folder built with Vue CLI will look like this:'
      },
      {
        type: 'codeBlock',
        gistId: 'a1d652e52f7c004aaad48de6f4088497',
        gistFile: 'dist'
      },
      {
        type: 'text',
        text: 'When this directory is deployed to a server, and a browser visits our site, the index.html file is returned to the browser, which contains a <script> tag that loads our app.bundle.js.  Once that index.html and app script tag render in the browser, Vue takes over and brings all it\'s Vue magic!'
      },
      {
        type: 'text',
        text: 'Only when our <Picture /> component is rendered, will the <img :src= "require(getOptimizedImage)" /> initiate a network request for our image.'
      },
      {
        type: 'text',
        text: 'As opposed to everything, styles, images and JS code all being bundled into one single massive app.bundle.js file.  Which is how some Front End build tools used to function.  *a-hem* not naming names, I\'m sure it made a lot of sense at the time.'
      },
      {
        type: 'text',
        text: 'This means that I can confidently build mobile and desktop images into the same build and not worry that mobile users will be bogged down by unnecessarily loading desktop images and vice versa.'
      },
      {
        type: 'text',
        text: 'Enjoy!'
      }
    ]
  },
  {
    title: 'Rails New Barebones JSON API Alias',
    mediumLink: 'https://medium.com/@e.ozelius/rails-new-barebones-api-24905d434073',
    mainImagePath: 'rails-new-barebones-json-api-alias/dino-skeleton.png',
    publishDate: 'July 2nd, 2020',
    tags: [
      TAGS.rubyonrails
    ],
    paragraphs: [
      {
        type: 'text',
        text: 'I love rails. I also love MVC.'
      },
      {
        type: 'text',
        text: 'Finally, like the least loved child, I do admit I also love SPAs. Vue is by far my overachiever, React is a solid A- Student, and Angular hasn\'t burned the house down. yet. Love them all.'
      },
      {
        type: 'text',
        text: 'If I had my way, all internet applications would be built in MVC. It\'s not that SPAs aren\'t great, or that they aren\'t faster and allow for much more sensible design patterns. It\'s just that I have trust issues with browsers. Stale, old unsupported, infected browsers, running on weird rooted Android devices available over on the Siberia black market. yuck. I cringe when I think about all my business logic running on the front end, available for anyone to inspect and tinker with. Or more likely start a session, leave it for 4 days and then flip a table when everything doesn\'t work without a refresh.'
      },
      {
        type: 'text',
        text: 'But, now I just sound like a curmudgeon and SPAs are here to stay. So let\'s get on with it.',
        dots: true
      },
      {
        type: 'text',
        text: 'Giving credit where it\'s due, rails has made an impressive effort to keep up with the times. Rails has always had a great pipeline for compiling front end assets, supported coffeescript, AJAX and even Turbolink out of the box, when these were hip. As times have changed, rails made room for countless front end techniques. Even if that meant ceding control of business logic to the front end. And for that we are glad. <%= erb %> is no substitute for a proper SPA environment.'
      },
      {
        type: 'text',
        text: 'Rails is still my backend of choice, and it might always be. I just use rails exclusively as a backend API now, and plug in something fresher on the front end. So, I did some digging in the rails docs to find out how to build just a JSON backend in rails to serve my fancy new SPAs. There are a lot of options but this is the best setup that works for me. It strips out all front end responsibilities from rails, making it much simpler, lighter and allows it to shine as a JSON api.'
      },
      {
        type: 'codeBlock',
        gistId: 'bb28f643c63961fed335e1f2adf97d7c',
        gistFile: 'rails_new_barebones_json_api'
      },
      {
        type: 'text',
        text: 'I created an alias for this command, because I love short cuts.'
      },
      {
        type: 'codeBlock',
        gistId: '2ae9b1660210a5e18833cd7d6612f4bf',
        gistFile: 'rails_new_api_alias'
      },
      {
        type: 'text',
        text: 'Enjoy.'
      }
    ]
  }
]

export default {
  en
}
