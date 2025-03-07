// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let errorDiv = document.querySelector('#modal')
let glyphB = document.querySelector('span.like-glyph')
//let idName = document.querySelector('h2')
function hideModal(inputHide = "hidden")  // this function will change the class name
{
  errorDiv.className = `${inputHide}`
}

document.addEventListener('DOMContentLoaded', () => {
  hideModal();
})


function glyphModel(glyph){
  console.log(glyph)
  if (glyph.innerText == FULL_HEART)
  { 
    glyph.innerText = EMPTY_HEART
    glyph.className = "deactivated-heart"
    console.log("deactive")
    //return;   /// this is important because after this if statement runs, glyph.innerText is empty so the next else statement runs
  }
  else // or get rid of else condition statement
  { 
    glyph.innerText = FULL_HEART
    glyph.className = "activated-heart"
    console.log("Active")
  }
 
}


glyphB.addEventListener('click',(clickE)=>{
    clickE.preventDefault();
    mimicServerCall()
    .then(function(res) {
      let glyph = clickE.target
      console.log(glyph)
      glyphModel(glyph)   
    })
    .catch(() => {
      console.log("error")
      //hideModal("un-hidden")
      setTimeout( hideModal("un-hidden"), 3000)    
    })
    
  })

    





// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
