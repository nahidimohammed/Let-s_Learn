//defending the animated elements
const divElement1 = document.querySelector('header > div:nth-child(1)');
const divElement2 = document.querySelector('header > div:nth-child(2)');
const divElement3 = document.querySelector('header > div:nth-child(4)');
const divElement4 = document.querySelector('header > div:nth-child(5)');
const divElementGen = document.querySelectorAll('header > div');
const mainDiv = document.querySelector('main');


// The animation when scroll 
window.addEventListener('scroll',() => {

    if (window.pageYOffset > 100){
        divElementGen.forEach( (div) => {
            div.style.transition ='all 0.5s';
        });
        divElement1.style.top = '40%' ;
        divElement2.style.top = '33%' ;
        divElement3.style.top = '47%' ;
        divElement4.style.top = '50%' ;
        divElement2.style.height = '103px';
        divElement3.style.height = '103px';
        
    }
    else {
        divElementGen.forEach( (div) => {
            div.style.transition ='all 0.5s';
        });
        divElement1.style.top = '10%' ;
        divElement2.style.top = '20%' ;
        divElement3.style.top = '60%' ;
        divElement4.style.top = '70%' ;
        divElement2.style.height = '100px';
        divElement3.style.height = '100px';
    }

});

// The Scroll to 250 
scrollto = () => {
    window.scrollTo({
        top:250,
        behavior: 'smooth'
    });
}

// this function returns the HTML code to be added to the main element 
createHtmlCode = (title , imglink , link , githubLink , description) => {
    let htmlContent  = "<div> " +
    " <img src='"+imglink+"' width='100%' height='100%' loading='lazy'> " +
        "<div>"+
            "<h1>"+title+"</h1>  <a class='moveToRight' href='"+link+"'>Try </a> "+
            "<p>"+description+"</p>"+
            " <a href='"+githubLink+"'>GitHub</a>"+
        "</div>"+
    "</div>";

    return htmlContent;
}

// function to get the json returns htmlcode 
async function GetThedata () {
       const response = await fetch('data.json');
       const data = await response.json();
       return data;
}
GetThedata().then(data => {
    let htmlcode = "" ; 
    data.forEach(website => {
       htmlcode += createHtmlCode(website.name , website.imgLocation  , website.websiteLink ,website.gitHubLink , website.description );
    });
    mainDiv.innerHTML = htmlcode;
});

// function to search for project according to two options (Projects name and Technology used)
// defineding the input element  
let inputSearch =  document.querySelector('.search > input');
inputSearch.addEventListener('keyup' , () => {

    GetThedata().then(data => {
        let htmlcode = "" ; 
        data.forEach(website => {
            // search for the wanted item=
            if (website.name.toUpperCase().startsWith(inputSearch.value.toUpperCase())){
                htmlcode += createHtmlCode(website.name , website.imgLocation , website.websiteLink ,website.gitHubLink , website.description );
            }
        });
        mainDiv.innerHTML = htmlcode;
    });
});