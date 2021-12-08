let Success_Counter = 0 ;
// letters 
// let arabic = false  ;

// let letters = "abcdefghijklmnopqrstuvwxyz" ;

 let arabic = true ;
 let letters = "" ;

 if (window.localStorage.getItem('language')) 
 {
    arabic = window.localStorage.getItem('language') ;
 } 
 else 
{
 window.localStorage.setItem('language' , true ) ;
}

add_language_class () ;

     if (arabic == 'true') 
     {
 letters = "ابتةثجحخدذرزطظكلمنصضعغفقسشهويءئى" ;
document.querySelector('.letters-guess').style.flexDirection = 'row-reverse' ;
console.log(arabic + ' arabic')  ;
      }  
       if (arabic == 'false') 
      {
         letters = "abcdefghijklmnopqrstuvwxyz" ;
        document.querySelector('.letters-guess').style.flexDirection = 'row' ;
        console.log(arabic + ' english')  ;
      }

lettersArray = Array.from(letters) ; 
let lettersContainer = document.querySelector('.letters') ;

lettersArray.forEach(letter => {
    // create span 
    let span = document.createElement("span") ;
    //create letter Text Node 
    let theLetter = document.createTextNode(letter);
    // append the letter to span 
    span.appendChild(theLetter) ;

    //add class on span 
    span.className ='letter-box' ;
    //append span to the letters Container 
    lettersContainer.appendChild(span) ;
});

// object of words + categories
let words = {} ;
arabic_words_Or_English() ;

function arabic_words_Or_English() {
    if (arabic == 'true') {
        words = {
          
       "برمجة" : [   'اوراكل','ر','الرسم بالحاسوب','لغة سي','وورد برس','تصميم مواقع','جافا','بي اتش بي' , 'جافا سكربت' ,'غو','فورتران','ر','ماي اس كيو ال','بايثون'] ,
       "فلم اوانمي" : [   'جاكي تشان', 'يوغي يو' , 'كونان', 'غريلاند', 'اكشن مان', 'ستريت فايتر', 'مورتال كومبات', 'سيد الخواتم', 'فايجنج'  ,   'القناص','سلام دانك','بلاك كات','داي','ون بيس','ناروتو','فانتوم','اكس مان','سبايدر مان' ,'برستيج' , 'الطفيلي' ,'الناقل','ليون','الشر المقيم نهاية العالم','السائرون الموتى','الشر المقيم']  ,
       "شخصية معروفه" : [  'ياغامي لايت','بيتر باركر','غوكو','فيجيتا','غوجيتا','فيجيتو','غوهان','ماتيلدا','زورو','نيل ديغراس تايسون','سيف النار','لوفي','ناروتو','ستيف اوستن','غون','نجيب محفوظ','اندر تيكر','جون سينا','تايسون' , 'محمد علي' ,'زيكو','سبونج بوب','شفيق حبار','مستر سلطع','جيل فالانتاين'] ,
       "دول" : [  'افغانستان','الجزائر','الارجنتين','النمسا','البحرين','بوليفيا','البرازيل','بلغاريا','الكاميرون','كانادا','تشيلي','الصين',   'سلطنة عمان', 'السودان', 'الصومال', 'السينيغال', 'تونس', 'جيبوتي', 'الاردن', 'سوريا', 'بريطانيا', 'اميريكا', 'لبنان','ليبيا' , 'فلسطين' ,'اليمن','مصر','الامارات','قطر','السعودية']  ,
       } }
   else if (arabic == 'false')
{ words = {
programming : ['php' , 'javaScript' ,'go','fortran','r','mysql','python'] ,
movies : ['prestige' , 'parasite' ,'Transport','Re1','Re Apocalips','Walking Dead','Death Note']  ,
peaple : ['tyson' , 'Mohammed ali' ,'Zeko','Spnog pop','Squid ward','crap','Jill Valantain'] ,
countries : ['Syria' , 'palestine' ,'Yemen','Egypt','Emarat','Qatar','SAodi Arabya']  ,
} }
}

// arabic Viresion 



// get Random properties 
let allKeys = Object.keys(words) ;
// console.log(allKeys) ;

// random number depend on keys length 
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
//category 

let randomPropName = allKeys[randomPropNumber] ;
// category words
console.log(randomPropName) ;
let randomPropValue = words[randomPropName] ;


//random number depend on words 
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length) ;
//  the Chosen Word
let randomValueValue = randomPropValue[randomValueNumber] ;

// set category Info 
document.querySelector('.game-info .category span ').innerHTML =  randomPropName  ;
// document.querySelector('.game-info .category span ').innerHTML =  randomPropName  +' ' + randomValueValue;
// console.log(randomValueValue) ;


// select letters guess element 
let lettersGuessContainr = document.querySelector('.letters-guess') ;

// convert chosen word to array 
let lettersAndSpace = Array.from(randomValueValue) ;
// console.log(lettersAndSpace) ;


//create spans depended On Word 
lettersAndSpace.forEach(letter =>{
        // create empty span 
        let emptySpan = document.createElement("span") ;
            // if letter is space 
        if (letter === ' '){
                //add class to this span 
                Success_Counter ++ ;
                emptySpan.className = 'has-space' ;

        }
        //append spans to the letters guess Container 
        lettersGuessContainr.appendChild(emptySpan) ;    
});
    // select guess span 
    let guessSpan = document.querySelectorAll('.letters-guess span') ;
    // set rong Attempts 
    let wrongAttempts = 0 ;
    // select the drawo Element 
    let theDraw = document.querySelector('.hangman-draw') ;

// handle Clicking on Letters 
document.addEventListener('click' , (e)=>{
    // set The Chose Status 
    let theStatus = false ;
    if (e.target.className === 'letter-box')
    {
        e.target.classList.add('clicked') ;
        // get clicked letter 
        let theClickedLetter = e.target.innerHTML.toLowerCase() ;
        //the chosen word  
        let theChosenWord = Array.from(randomValueValue.toLowerCase()) ;

        theChosenWord.forEach((wordletter , wordIndex) =>{
                // if the clicked letter Equal TO One of the chosen  word letter  
            if (theClickedLetter == wordletter) {
                document.getElementById('success').play();
                e.target.classList.add('true') ;
                theStatus = true  ;
                Success_Counter ++ ;
                        if (Success_Counter === randomValueValue.length){
                            lettersContainer.classList.add('finished') ;
                            EndGame(true) ;
                        }
                  // play Succsess Sound 
                // document.getElementById(``).play() ; 
                   // Loop on all guess spans
                   guessSpan.forEach((span,spanIndex) => {
                       if (wordIndex === spanIndex) {
                           span.innerHTML = theClickedLetter ;
                       }
                   })
      
                }
        }) ;
        // if letter is wrong 
        if (!theStatus) {
                // increase the wrong attempt 
              
                wrongAttempts ++ ;
                if (wrongAttempts < 6 ){
                    document.getElementById('Fail').play() ;
                }
                if (wrongAttempts >=6  && wrongAttempts < 8 ){
                    document.getElementById('Heart').play() ;
                }

                //add class wrong on the draw element 
                theDraw.classList.add(`wrong-${wrongAttempts}`) ;

                // play Fail Sound 
                // document.getElementById(``).play() ; 
                if (wrongAttempts === 8 ) {
                    document.getElementById('screem').play() ;
                    EndGame(false) ;
                    lettersContainer.classList.add('finished') ;
                }
        } else {
            //play Success Sound 
            // document.getElementById(``).play() ;
        }

    }
          
}) ;


// endGame Function
function EndGame (Win_Lose) {
    let divText  ;
    if (Win_Lose) {
        document.getElementById('win').play() ;
        if (arabic == 'true') 
{        if (wrongAttempts >= 6)
      {   divText = document.createTextNode(`ناجح بالدفان `) ;}
        if (wrongAttempts >= 0  &&  wrongAttempts <= 2) 
        {   divText = document.createTextNode(`لقد ربحت مستواك ممتاز `) ;}
        if (wrongAttempts >= 3  &&  wrongAttempts <= 5) 
        {   divText = document.createTextNode(`لقد ربحت مستواك جيد  `) ;}}
        else {
            if (wrongAttempts >= 6)
            {   divText = document.createTextNode(`Successful By Luck`) ;}
              if (wrongAttempts >= 0  &&  wrongAttempts <= 2) 
              {   divText = document.createTextNode(`You Win Excellent`) ;}
              if (wrongAttempts >= 3  &&  wrongAttempts <= 5) 
              {   divText = document.createTextNode(`You Win Good `) ;}
            }
        }
    else if (!Win_Lose) 
        {   
            if (arabic == 'true')
            { divText = document.createTextNode(` لقد خسرت الكلمة هي  ${randomValueValue} `) ;}
           else 
            { divText = document.createTextNode(`You Lose The Word Is  ${randomValueValue}   `) ;}
            }
        
            let Retry_Image = document.createElement('img') ;
            Retry_Image.setAttribute('src','Reset.png') ;
            Retry_Image.className = 'retry_img';
//Create Popup Div 
    let div = document.createElement('div') ;

    //append Text TO Div
    div.appendChild(Retry_Image) ;
    div.appendChild(divText) ;

    //add class On Div 
    div.className = 'popup' ;

    //append TO The Body 
    document.body.appendChild(div) ;
    setTimeout(() => {
        div.style.top = '78%';
    }, 50);
} 


    function add_language_class (){
        if (arabic == 'true') {
            document.querySelector('.container  .arabic').classList.add('selected') ;
            document.querySelector('.container  .English').classList.remove('selected') ; 
        }
        if (arabic == 'false') {
            document.querySelector('.container .English ').classList.add('selected') ;
            document.querySelector('.container  .arabic ').classList.remove('selected') ; 

        }
    }


    document.addEventListener('click' , function(e){

        if (e.target.className === 'retry_img' ||e.target.className === 'retry_img1' ){
           window.location.reload() ;
        }

        if (e.target.className === 'English') {
         
            console.log('english');
             window.localStorage.setItem('language' , false) ;
            window.location.reload() ;
            // Languages () ;
        }
        if (e.target.className === 'arabic') {
            window.localStorage.setItem('language' , true) ;
            window.location.reload() ;
            console.log('arabic'); 
            // Languages () ; 
        }
    });


