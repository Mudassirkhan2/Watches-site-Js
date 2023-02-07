const data =[
    {
        id:1,
        name: "Apple Smartwatch Luxury",
        img: "images/apple.jpg",
        price:45000,
        catogory:"Luxury"
   },
    {
        id:12,
        name: "Benyar Fashion Watch",
        img: "images/benyarfashion.jpg",
        price:5220,
        catogory:"Fashion"
   },
    {
        id:3,
        name: "Louis Devin Black Watch ",
        img: "images/casuallouis.jpg",
        price:2999,
        catogory:"Casual"
   },
    {
        id:4,
        name: "MVMT Odyssey Black Watch",
        img: "images/casualmvmt.jpg",
        price:5889,
        catogory:"Casual"
   },
    {
        id:4,
        name: "Curren Fashion Watch",
        img: "images/currenfashion.jpg",
        price:4990,
        catogory:"Fashion"
   },
    {
        id:4,
        name: "Daniel Luxury watch",
        img: "images/luxurydaniel.jpg",
        price:19999,
        catogory:"Luxury"
   },
    {
        id:4,
        name: "Omega Luxury Watch",
        img: "images/luxuryomega.webp",
        price:2599,
        catogory:"Luxury"
   },
    {
        id:4,
        name: "OLEVS Chronograph Watch Blue",
        img: "images/oleasclassicblue.jpg",
        price:2890,
        catogory:"Casual"
   },
    {
        id:4,
        name: "OLEVS Chronograph Watch Green",
        img: "images/oleasclassicgreen.jpg",
        price:3190,
        catogory:"Casual"
   },
    {
        id:4,
        name: "Fire-Boltt Phoenix Smart Watch",
        img: "images/smartfirebolt.jpg",
        price:1999,
        catogory:"Smart "
   },
    {
        id:4,
        name: "FastTrack Reflex SmartWatch",
        img: "images/smartfasttrack.jpg",
        price:2495,
        catogory:"Smart "
   },
    {
        id:4,
        name: "SENS EDYSON 1 SmartWatch",
        img: "images/smartsensedyson.jpg",
        price:1699,
        catogory:"Smart "
   },
    {
        id:4,
        name: "Redux Multi Functional Sports Watch",
        img: "images/sportsredux.jpg",
        price:284,
        catogory:"Sports "
   },
    {
        id:4,
        name: "TIMEWEAR-Digital Men's Watch",
        img: "images/sportstimewear.jpg",
        price:543,
        catogory:"Sports "
   },
    {
        id:4,
        name: "Timex Analog Dial Men's Watch",
        img: "images/timexfashion.jpg",
        price:3071,
        catogory:"Fashion"
   }
]


const productsContainer=document.querySelector(".products")
const search=document.querySelector(".search")
const categoriesContainer=document.querySelector(".categories")
const priceRange=document.querySelector(".priceRange")
const priceValue=document.querySelector(".priceValue")


const displayProducts=(filteredProducts)=>{
    productsContainer.innerHTML=filteredProducts.map(product=>
        ` <div class="product">
                    <img src=${product.img} alt="">
                    <span class="name">${product.name}</span>
                    <span class="priceText">&#8377;${product.price}</span>
         </div> `
    ).join("");
} 
displayProducts(data)


// searching
search.addEventListener("keyup",(e)=>{
    const value=e.target.value.toLowerCase();
    if(value){
        displayProducts(data.filter(item=>item.name.toLowerCase().indexOf(value)!== -1))
        // if the word is not their it returns -1 
    }else{
        displayProducts(data)
    }
})

    //  display categories
const setCategories=()=>{
    const allCategories=data.map(item=>item.catogory)
    const finalCategories=["All",...allCategories.filter((item,index)=>{
        return allCategories.indexOf(item)===index
    })
    ];

     categoriesContainer.innerHTML=finalCategories.map(cat=>
    `<span class="cat">${cat}</span>`
     ).join("")

    //  display selected catogory
    categoriesContainer.addEventListener("click",(e)=>{
        const selectedCat=e.target.textContent;
        selectedCat ==="All" ? displayProducts(data) : displayProducts(data.filter(item=>item.catogory===selectedCat));
    })
}

const setPrices =()=>{
    const priceList =data.map((item)=>item.price)
    const minPrice =Math.min(...priceList)
    const maxPrice=Math.max(...priceList)

    priceRange.min=minPrice
    priceRange.max=maxPrice
    priceRange.value=maxPrice
    priceValue.textContent=`${maxPrice}`
    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent=e.target.value
        displayProducts(data.filter((item)=>item.price <= e.target.value));
    })
} 
setCategories()
setPrices()