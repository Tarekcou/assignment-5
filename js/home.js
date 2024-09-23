document.getElementById('homeBtn').addEventListener('click',()=>
{
  location.href="../index.html";
  document.getElementById('tab').classList.remove('hidden')
})


const question=[
  'What is Documnet object model?',
  'How do you select an element from DOM',
  'What is the difference between querySelector and querySelectorAll?',
  'What is an event delegation in the context of the DOM and why it is useful',
  'How do you manupulate an elements atribute and style using the DOM'
]
const answer=[
  'The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications.',

  'JavaScript provides several methods to select DOM elements. Here are some of them:  (1) Using getElementById, (2) Using getElementsByClassName (3) Using getElementsByTagName (4) Using querySelector',

  'The querySelector method returns the first element that matches a specified CSS selector(s), while the querySelectorAll method returns all elements that match the CSS selector(s).',

  'Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future.',

  'Changing an element style (CSS) attributes is one of the ways in which the DOM can be used. For example, in the code below, the onfocus event handler method is used to change the input element style when the user clicks inside it.'

]
const main=document.getElementById('main')
question.map((q,position)=>{
   main.innerHTML+=`
   <div
        tabindex="0"
        class="bg-base-200 border border-base-300 collapse collapse-arrow"
      >
        <div class="font-medium text-xl collapse-title">
          ${q}
        </div>
        <div class="collapse-content">
          <p>
            ${answer[position]}
          </p>
        </div>
      </div>
  `

})
