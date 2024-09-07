let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let myDiv = document.querySelector('.myDiv');

btn.addEventListener('click', () => {
    let inputValue = parseInt(input.value); 
    
fetch(`https://api.imgflip.com/get_memes`)
.then((res) => res.json())
.then((data) => {
    console.log(data);
   if (inputValue >= 0 && inputValue < 100) {

    let meme = data.data.memes[inputValue];
            let content = `
            <h1>${meme.name}</h1> 
            <img src="${meme.url}" >              
               `;
              myDiv.innerHTML = content; 
            }
             else if (isNaN(inputValue)) {
               let message1 = `<h1>Please enter a valid number</h1>`;
            
               myDiv.innerHTML = message1;
            }
            else {
              
                let message2 = `<h1>Please enter a number between 0 and 99</h1>`;
              
              myDiv.innerHTML = message2;
            }
    });
});
