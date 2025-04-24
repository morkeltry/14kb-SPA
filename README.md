## 14Kb Single Page App

### 14Kb
.. is the approximate size of a TCP frame. Time-to-first-render (TTFR) depends on (among other limiting factors) the size of the minimal version of your page. More data takes longer fetch, right?
The aim of this project is to make a template to use, wherever possbile websites that fit into that first 14Kb frame.
As every file will require a different HTTP request (and therefore a different TCP frame), we will inline any JS and CSS in the first (and only) HTML file.

### Single Page App
.. these took off with frameworks like React which made it possible to navigate thorough views of a single bundle of HTML/ JS (rather than making a roundtrip to server for every change of view).
But, even though React shrunk by a buge factor with Fiber, it's still bigger than a TCP frame.
It's not new to shrink down the size of the first renderable version of a page to reduce the time to first render. Indeed, the Preact library was built for pretty much this purpose and it is a minisulce 4Kb!

So I want to test how much we can shave off to leave for the website's content, while keeping it reactive in the way that we would expect from React (DOM views change depending on the page's global state).
I will also be experimenting with loading the hidden parts of the view (those which will not be visible until a user interaction changes the state) in later frames. 
As I write this, before beginning, I envision this will be done simply by placing that data in a `<script>` after the main content. 
But I'll be comparing between hand-coded and preact for how much control the developer has over this.


