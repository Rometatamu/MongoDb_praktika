const cardsWrapper=document.getElementById(`cards-wrapper`);
const addNewItem=document.getElementById(`add-btn`)

let films=[];

const buildCards = (films) => {
    cardsWrapper.innerHTML=``;
    films.forEach((f)=>{
        const card=document.createElement(`div`);
        card.setAttribute(`class`, `card`);
        const imdbLink=document.createElement(`img`);
        imdbLink.setAttribute(`class`, `card-image`);
        imdbLink.src=f.imdbLink;
        const title=document.createElement(`h2`);
        title.textContent=f.title;
        const raiting=document.createElement(`h3`);
        raiting.textContent=`${f.raiting} ${`stars`}`; 
        const description=document.createElement(`h3`);
        description.textContent=f.description;  
        card.append(imdbLink, title, raiting, description);
        cardsWrapper.append(card);
        card.addEventListener(`click`,()=>goToItem(f._id));
      }); 
}; 
const goToItem = (id) => window.location.replace(`item.html?id=${id}`);


const fetchAllFilmsbyRaiting= async()=>{
    try{
    const response= await fetch(`http://localhost:3002/films/sorted`);
    const data=await response.json();
    films=data.sortedfilms;
    console.log(films)
    buildCards(films);
    }catch(err){
        console.log(err);
    }
}; 
fetchAllFilmsbyRaiting();  

addNewItem.addEventListener(`click`,()=>{
    window.location.replace(`newitem.html`);
   });