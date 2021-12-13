(
  function(){
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const resultsConcernContainerA = document.getElementById('0results');
    const resultsConcernContainerB = document.getElementById('1results');
    const resultsConcernContainerC = document.getElementById('2results');
    const resultsConcernContainerD = document.getElementById('3results');
    const resultsConcernContainerE = document.getElementById('4results');
    const resultsConcernContainerF = document.getElementById('5results');
    const resultsConcernContainerG = document.getElementById('6results');
    const resultsConcernContainerH = document.getElementById('7results');

    const submitButton = document.getElementById('submit');

    const myQuestions = [
      
/// xyz vallues are empty used as dummy's so that objects are not overwrittrn
      
      {question: "Which age category applies to you?",
        answers: {
          a: "24 or younger",
          b: "25 – 34",
          c: "35 – 45 ",
          d: "45 – 54",
          e: "55 +"
        },
      description: "Depending on your age, you may have specific concerns that might be relevant."
    },
      {question: "When I wake up in the morning my skin feels...",
        answers: {
          a: "Oily and shiny",
          b: "Oily or dry in certain areas",
          c: "Tight and uncomfortable",
          d: "Just fine, Nothing out of the ordinary"
        },
        description: ""
    },
      {question: "Which describes your pores best?",
        answers: {
          a: "Large and visible all over",
          b: "Large or medium around my T-zone.",
          c: "Small, hardly noticeable",
          d: "Small to medium-sized"
    },
        description: ""
    },
      {question: "Which describes your skin best?",
        answers: {
          4: "Very oily, usually a shiny appearance",
          b: "Oiliness on certain areas, others dry",
          c: "Feels and looks dry, not oily at all",
          d: "Not too oily nor dry, overall feels balanced"
    },
        description: "Though everyone's skin produces oil, sometimes it's more apparent or obvious in some skin types than others"
    },
    {question: "At the end of the day my skin feels...",
        answers: {
          a: "Greasy and shiny all over",
          b: "My nose and forehead feel oily",
          c: "Looks and feels dry/rough",
          d: "Balanced, may be slightly oily or dry",
          7: "Irritated and/or itchy"
    },
        description: ""
    },
    {question: "How reactive would you consider your skin?",
        answers: {
          x: "I can easily use all products",
          y: "Not much, depends on the ingredients",
          1: "I frequently experience redness"
    },
    description: ""
    },

    {question: "In which skincare products are you most interested?",
      answers: {
        x: "Ones that have acid in them",
        6: "Ones that stimulate collagen and reduces wrinkles",
        5: "Ones that contain vitamin C",
        1: "Ones that protect and repair skin",
        3: "Ones that are nourishing and hydrating",
        d: "Ones that complement my skin",
        8: "Ones that are fungal acne safe"
  },
        description: "Certain ingredients help to address specific skin needs. Pick your favourite!"
  },
        {question: "How frequently do you get acne or breakouts?",
    answers: {
      2: "Frequently, and it’s difficult to manage",
      x: "Not often, and when I do it’s easy to manage",
      2: "Often (hormonally or due weather/stress)",
      y: "A few times, around certain areas"
},
      description: ""
},
      {question: "Does your skin look red/irritated easily??",
      answers: {
        7: "Very often",
        d: "Hardly ever",
        7: "Whenever i use new products",
        7: "Sometimes, but usually around my cheeks"
  },
        description: ""
  },  {question: "What is your main skin goal?",
   answers: {
      2: "To get rid of Acne",
      6: "Minimize fine lines and wrinkles",
      5: "Fading blemishes/dark spots",
      1: "Soothing redness and irritation",
      3: "Achieving hydrated skin",
      b: "Enhance my skin",
      8: "To get a fungal acne safe routine"
},
      description: "We would like to take your preferences into account."
},
	

{question: "Thank you for filling out the form! ",
answers: {

},
  description: "<br> Feel free to reach out to our team if you have any questions regarding your skin! <br> you can click on the boxes below to find out more about your skin! "
}
    ];
  
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          // variable to store the list of possible answers
          const answers = [];  
          // and for each available answer...
          for(letter in currentQuestion.answers){
          // ...add an HTML radio button
            answers.push(
              `<div><label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${currentQuestion.answers[letter]}
              </label></div>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="quiz-slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="description"><p> ${currentQuestion.description} </p></div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){

      let skinTypeA=0;
      let skinTypeB=0;
      let skinTypeC=0;
      let skinTypeD=0;
      
      let SkinconcernTypeA=0;
      let SkinconcernTypeB=0;
      let SkinconcernTypeC=0;
      let SkinconcernTypeE=0;
      let SkinconcernTypeF=0;
      let SkinconcernTypeD=0;
      let SkinconcernTypeG=0;
      let SkinconcernTypeH=0;

      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        switch (userAnswer) {
          case "a":
            skinTypeA++;
            break;
          case "b":
            skinTypeB++
            break;
          case "c":
            skinTypeC++
            break;
          case "d":
            skinTypeD++
            break;
          /// for skinconcern
          case "1":
            SkinconcernTypeA++
            break;
          case "2":
            SkinconcernTypeB++
            break;
          case "3":
            SkinconcernTypeC++
            break;
          ///to-do    
          case "4":
            SkinconcernTypeD++
            break;
          case "5":
            SkinconcernTypeE++
            break;
          case "6":
            SkinconcernTypeF++
            break;      
          case "7":
            SkinconcernTypeG++
            break;
          case "8":
            SkinconcernTypeH++
            break;}
      });
  
      var skinTypeResults = {"skinTypeA": skinTypeA, "skinTypeB": skinTypeB, "skinTypeC": skinTypeC, "skinTypeD": skinTypeD};
      var skinConcernResults = [SkinconcernTypeA, SkinconcernTypeB, SkinconcernTypeC,SkinconcernTypeD,SkinconcernTypeE,SkinconcernTypeF,SkinconcernTypeG,SkinconcernTypeH];

      //grabs the skintype with the highest occurance value
      var mySkinType = Object.keys(skinTypeResults).reduce(function(a, b){ return skinTypeResults[a] > skinTypeResults[b] ? a : b })

      //uses the calculated skintype to give back the corresponding ddescription of skintype
      determineSkintype(mySkinType);

      for (let i = 0; i < skinConcernResults.length; i++) {
        console.log(skinConcernResults)
        if(skinConcernResults[i]>0){

        // let containerName = (i.toString() + "concernContainer");

        // console.log(containerName)

        // containerName.innerHTML = ` `;
      
        
        }
      }
      console.log(skinConcernResults)

      console.log(skinConcernResults.length)


      if(SkinconcernTypeA>0){
        resultsConcernContainerA.innerHTML = `
        <div class="card-header" id="headingTwo">
        <h5 class="mb-0">
          <button class="btn btn-light collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Dryness/ Dehydrated
          </button>
        </h5>
      </div>
      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
        <div class="card-body">
        It seems like your main concern is dehydrated skin. One of the best ways to replenish a depleted moisture barrier is to opt for layers of hydration in the form of essences, serums and ampoules. You’ll also want to look for gentle exfoliators like AHAs that will help slough off dead skin so it’s better primed to absorb moisture.
        </div>`;
      }
      if(SkinconcernTypeB>0){
        resultsConcernContainerB.innerHTML = `
        <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-light collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Redness
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div class="card-body">
          <br>
          It seems like your main concern is redness. A gentle double cleanse will help rid skin of potentially inflammatory impurities while hydrating in layers, using products full of soothing ingredients like centella asiatica, aloe, or snail mucin will help keep the moisture barrier intact. When it comes to exfoliators, proceed with caution! Opt for gentle variations like lactic acids, PHAs or enzymes which will be effective without causing increased sensitivity. Finally, SPF - don’t forget it!      </div>`;
      }
      if(SkinconcernTypeC>0){
        resultsConcernContainerC.innerHTML =  `
        <div class="card">
        <div class="card-header" id="headingThreeAndAHalf">
          <h5 class="mb-0">
            <button class="btn btn-light collapsed" data-toggle="collapse" data-target="#collapseThreeAndAHalf" aria-expanded="false" aria-controls="collapseThreeAndAHalf">
            Oil control / Clogged Pores
            </button>
          </h5>
        </div>
        <div id="collapseThreeAndAHalf" class="collapse" aria-labelledby="headingThreeAndAHalf" data-parent="#accordion">
          <div class="card-body">
          <br>
          It seems like your main concern is oiliness/clogged pores. While oily skin is considered a skin type, anybody can suffer from over-production of oil or clogged pores. Your first step should be a double cleanse that focuses on thinning sebum, unclogging pores and removing impurities. Equally important to incorporate into your routine are gentle exfoliants like BHAs, which help unclog pores, as well as humectants, which help hydrate the skin and keep oil production in-check.  </div>
      </div>`;
      } 
      if(SkinconcernTypeD>0){
        resultsConcernContainerD.innerHTML =   `
        <div class="card">
        <div class="card-header" id="headingFour">
          <h5 class="mb-0">
            <button class="btn btn-light collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Pigmentation
            </button>
          </h5>
        </div>
        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
          <div class="card-body">
          <br>
          It seems like your main concern is pigmentation. Incorporating a combination of brightening ingredients and gentle exfoliators will help alleviate nearly all types of discoloration. After you cleanse, reach for a gentle toner or essence that includes skin brighteners like licorice root, ferments and niacinamide. AHAs like glycolic or lactic acid will help aid in cell regeneration while antioxidants like vitamins C and E will help fade existing hyperpigmentation. Lastly, don’t forget that SPF! </div>
      </div>`;
      }  
      if(SkinconcernTypeE>0){
        resultsConcernContainerE.innerHTML =   `
        <div class="card">
        <div class="card-header" id="headingFive">
          <h5 class="mb-0">
            <button class="btn btn-light collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Acne
            </button>
          </h5>
        </div>
        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
          <div class="card-body">
          <br>
          It seems like your main concern is acne. Breakouts happen to everyone, but one of the best ways to help reduce acne is to keep skin both clean and sufficiently hydrated. A double cleanse will clear pores of both water-based and oil-based impurities, which will also help your other skin care products absorb better. BHAs like tea tree and willow bark extract can help clarify, while layers of hydration can support the moisture barrier for stronger, clearer skin.   </div>
      </div>`;
      
    } 
    if(SkinconcernTypeF>0){
      resultsConcernContainerF.innerHTML =  `
      <div class="card">
      <div class="card-header" id="Six">
        <h5 class="mb-0">
          <button class="btn btn-light collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
          Anti-Aging / Wrinkles
          </button>
        </h5>
      </div>
      <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
        <div class="card-body">
        <br>
        It seems like your main concern is anti-aging/wrinkles. Antioxidants like vitamins C and E can help treat and prevent pigmentation, reduce the appearance of fine lines and wrinkles, and contribute to collagen synthesis, while layers of hydration in the form of essences, ampoules and moisturizers can help plump skin for a more radiant complexion. Use gentle exfoliants like PHAs, AHAs or enzymes to slough off dead skin and keep your complexion looking radiant. And, of course, don’t forget that SPF! </div>
    </div>`;
    
  }
  if(SkinconcernTypeG>0){
        resultsConcernContainerG.innerHTML =  `
        <div class="card">
        <div class="card-header" id="headingSeven">
          <h5 class="mb-0">
            <button class="btn btn-light collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            Sensitive
            </button>
          </h5>
        </div>
        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
          <div class="card-body">
          <br>
          It seems like your main concern is sensitivity. Sensitive skin is usually caused by reactivity to specific ingredients, but it can also be caused by a compromised skin barrier. A low pH double cleanse will help rid skin of potentially sensitizing impurities. Hydrators that double as skin soothers, like panthenol and niacinamide, can help alleviate irritation while layers of moisture in the form of serums, moisturizers and lightweight oils can help support the skin barrier without causing irritation. Finally, use an SPF formulated for sensitive skin. </div>
      </div>`;
      
      }  
      if(SkinconcernTypeH>0){
        resultsConcernContainerH.innerHTML =  `
        <div class="card">
        <div class="card-header" id="headingEight">
          <h5 class="mb-0">
            <button class="btn btn-light collapsed" data-toggle="collapse" data-target="#collapseEighth" aria-expanded="false" aria-controls="collapseEighth">
            Fungal Acne ( malassezia “pityrosporum” folliculitis )            </button>
          </h5>
        </div>
        <div id="collapseEighth" class="collapse" aria-labelledby="headingEighth" data-parent="#accordion">
          <div class="card-body">
          <br>
          It seems like your main concern is Fungal acne. Fungal acne is a common skin condition that is often misdiagnosed as regular acne. It is caused by an overload of yeast that causes inflammation in the hair follicles. Fungal acne is an acne-like breakout ( red/skin colored bumps ) often accompanied by itchiness that flares most in areas with a lot of sebaceous activity.

          Since fungal acne thrives on an oil-based diet, try to avoid cleansing oils or balms in your skincare routine. Use micellar water as your first step (if you double cleanse) or just a water cleanser instead.
          Also try adding Salicylic acid (BHA) into your routine, which is antibacterial, anti-inflammatory and anti-fungal. BHA also helps keeping your oil production in check. Avoid products that contain benzoyl peroxide, fatty acids such as lauric acid [coconut oil], linoleic acid etc.
          
          For any help choosing Fungal Acne safe products, feel free to contact us.
           </div>
      </div>`;
      }
      

      console.log(skinTypeResults)
      console.log(mySkinType)

      // show number of correct answers out of total
      // resultsContainer.innerHTML = `you have ${mySkinType}`;
  

    }

  
    function determineSkintype(quizResult) {
      switch (quizResult) {
        case "skinTypeA":
          resultsContainer.innerHTML = `
          <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-light" data-toggle="collapse" data-target="#" aria-expanded="true" aria-controls="collapseOne">
              
              Oily Skin              



              </button>
            </h5>
          </div>
      
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">

            Your skin type would be considered oily. You likely experience breakouts frequently and have visible pores throughout your face. Hydration is key! Sometimes, the skin will over-compensate for lack of moisture by producing more oil. Double cleanse to clear pores of impurities then exfoliate with BHAs like salicylic acid or willow bark extract to help unclog pores. Finally, hydrating ingredients like hyaluronic acid, aloe and panthenol will help balance oil production. </div>
         
         </div>
          </div>
        </div><br>`;
          break;

        case "skinTypeB":
          resultsContainer.innerHTML = `
          <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-light" data-toggle="collapse" data-target="#" aria-expanded="true" aria-controls="collapseOne">
             

			  Combo Skin              

              </button>
            </h5>
          </div>
      
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
            
            Your skin type would be considered combination; oily in some areas and dry or normal in others. The key to balancing combination skin is to focus on layers of hydration and strategic use of exfoliators. Use gentle BHAs (beta hydroxy acids) toward the center of the face or where you experience the most oiliness, then opt for layers of hydration in the form of essences, serums and lightweight moisturizers. </div>
         


   </div>
        </div>`;
          break;

        case "skinTypeC":
          resultsContainer.innerHTML = `
          <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-light" data-toggle="collapse" data-target="#" aria-expanded="true" aria-controls="collapseOne">

			Dry Skin              


			</button>
            </h5>
          </div>
      
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
			Your skin type would be considered dry. You likely have very few visible pores and blackheads, but your skin can feel tight, itchy or even rough. Dry skin types generally suffer from a compromised lipid barrier, which can lead to tightness, flaking, and sensitivity. Gentle exfoliators like AHAs or PHAs can help reduce flakiness while ingredients like glycerin, honey and hyaluronic acid can help.  </div>
       

		</div>
        </div>`;
          break;

        case "skinTypeD":
          resultsContainer.innerHTML = `
          <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-light" data-toggle="collapse" data-target="#" aria-expanded="true" aria-controls="collapseOne">
              
				Normal Skin       


			</button>
            </h5>
          </div>
      
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">

            Your skin type would be considered normal. You rarely experience breakouts, have small pores along
            the T-zone and typically experience a slight oily shine at the end of the day. A gentle approach is always
            best, particularly for normal skin types who generally do not suffer from excessive dryness or oil. Care for
            your skin type with the basics: a gentle double cleanse, a hydrating or lightly exfoliating toner, a light to
            mid-weight moisturizer (depending on the season and preference) and of course, SPF.
   

		</div>
        </div>`;
          break;
      }
    }


    function showSlide(n) {
      slides[currentSlide].classList.remove('active-quiz-slide');
      slides[n].classList.add('active-quiz-slide');
      currentSlide = n;
      
//       if(currentSlide === 0){
//         previousButton.style.display = 'none';
//       }
//       else{
//         previousButton.style.display = 'inline-block';
//       }
      
//       if(currentSlide === slides.length-1){
//         nextButton.style.display = 'none';
//                 previousButton.style.display = 'none';

//         submitButton.style.display = 'inline-block';
//       }
//       else{
// //         nextButton.style.display = 'inline-block';
//         nextButton.style.display = 'none';
//         previousButton.style.display = 'none';

// //         submitButton.style.display = 'none';
//       }
    }
  


    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    // Kick things off
    buildQuiz();
  
    // Pagination
//     const previousButton = document.getElementById("previous");
    // const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".quiz-slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
//     submitButton.addEventListener('click', showResults);
//     previousButton.addEventListener("click", showPreviousSlide);
//     nextButton.addEventListener("click", showNextSlide);

    $(".answers div").click(function(e){
      $(this).closest(".answers").find("div").removeClass("selected");
      $(this).addClass("selected").find(":radio").click();
      showNextSlide();

    if(currentSlide === slides.length-1){
        showResults();
        document.getElementById("outer-quiz-container").style.display="none";
        document.getElementById("result-screen-div").style.display="inline-block";
        document.getElementById("outer-result-screen-div").style.display="block";

        
      }
    });
  })();
  

    $('#start-screen-slide').click(function(){
      // document.getElementById("start-screen-slide").style.display="none";
      document.getElementById("start-screen-slide").style.visibility="hidden";
      document.getElementById("quiz").style.display="block";
      console.log("Eat this!");
    });
  
    // used to make radiobutton prettier
    $(".answers :radio").hide().click(function(e){
      e.stopPropagation();
      console.log("Eat this!")
    });
    // $(document).ready(function(){
    //   $( ".accordion-toggle" ).mouseover(function(){
    //      $( ".accordion-toggle" ).trigger( "click" );
    //   });
    //   });
    

