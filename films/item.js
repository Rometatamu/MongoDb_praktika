const itemTitle=document.getElementById(`title`);
const itemImdbLink=document.getElementById(`imdbLink`);
const itemDescription=document.getElementById(`description`);
const itemRaiting=document.getElementById(`raiting`);
const deleteBtn=document.getElementById(`delete-btn`);
const updateBtn=document.getElementById(`update-btn`);
const updateTitle=document.getElementById(`update-title`);
const updateImdbLink=document.getElementById(`update-imbdLink`);
const updateDescription=document.getElementById(`update-description`);
const updateRaiting=document.getElementById(`update-raiting`);


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


const fetchItemById= async()=>{
    try{
    const response= await fetch(`http://localhost:3002/films/${id}`);
    const data=await response.json();
     item=data.film;

      itemImdbLink.src=item.imdbLink;
      itemTitle.textContent=item.title;
      itemRaiting.textContent=`${item.raiting} ${`stars`}`;
      itemDescription.textContent=item.description;

      updateTitle.value = item.title;
      updateImdbLink.value = item.imdbLink;
      updateDescription.value = item.description;
      updateRaiting.value = item.raiting;
    }catch(err){
        console.log(err);
    }
}; 
fetchItemById();

deleteBtn.addEventListener(`click`,()=>deleteItem(id)); 
const deleteItem=async(itemId)=>{
    try{
     const response= await fetch(`http://localhost:3002/films/${itemId}`,
     {
     method: "DELETE",
     });
    const status=await response.json();
     alert(`Film deleted`);

    setTimeout(()=>{
        window.location.replace(`index.html`);
    }, 1000);
    }catch(err){
        console.log(err);
    }
};

updateBtn.addEventListener('click', () => updateItem(id));

const updateItem = async (itemId) => {
    const updatedData = {
        title: updateTitle.value,
        raiting: updateRaiting.value,
        description: updateDescription.value,
        imdbLink: updateImdbLink.value
    };

    try {
        const response = await fetch(`http://localhost:3002/films/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        const result = await response.json();
        alert('Film updated');
        itemTitle.textContent = updatedData.title;
        itemImdbLink.src = updatedData.imdbLink;
        itemRaiting.textContent = `${updatedData.raiting} stars`;
        itemDescription.textContent = updatedData.description;
        setTimeout(()=>{
            window.location.replace(`index.html`);
        }, 3000);
    } catch (error) {
        console.error('Error updating film:', error);
    }
};