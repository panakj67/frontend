var video = document.getElementById("vid");
var btn = document.querySelectorAll("#buttons h2");
var icons = document.querySelectorAll("#buttons h2 i");
var detail = document.getElementById("detail");
var count = document.getElementById("count");

document.querySelector('.p').style.color = 'gray';
const videos = ["https://clear.bank/uploads/assets/CB_Product_Accounts.webm","https://clear.bank/uploads/assets/CB_Product_Clearing.webm","https://clear.bank/uploads/assets/CB_Product_Embedded.webm" ]
const contents = ["Choose the fully regulated accounts that work best for your business and your customers.",
    "Start processing payments faster and more securely by connecting to the payment schemes via our API." ,
    "Offer your customers FSCS protected accounts by leveraging our banking licence. We take care of the banking products so you can focus on creating the business that your customers dream of."
];
var i = 0;

btn.forEach((e , idx)=> {
    e.addEventListener('mouseover' , () =>{
        video.src = videos[idx];
        count.textContent = `0${idx + 1} `;
        detail.textContent = contents[idx];
        i = idx;
        video.load();
        btn.forEach((b) =>{
            if (e === b) {
                b.style.color = 'black'; // Change hovered button to black
            
            } else {
                b.style.color = 'gray'; // Change others to gray
            }
        })
        icons.forEach((icon , ind) => {
            if(idx == ind){
                icon.style.opacity = 1;
            }
            else icon.style.opacity = 0;
        })
        
    });
})

