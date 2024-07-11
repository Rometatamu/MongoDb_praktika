const addBtn=document.getElementById(`add-btn`);
const addTitle=document.getElementById(`add-title`);
const addImdbLink=document.getElementById(`add-imbdLink`);
const addDescription=document.getElementById(`add-description`);
const addRaiting=document.getElementById(`add-raiting`);

const createNewItem=()=> {
    return {
        imdbLink: addImdbLink.value,
        description: addDescription.value,
        title: addTitle.value,
        raiting: addRaiting.value,
     };
};

const sendNewItem= async(item)=> {
    try {
        const response = await fetch('http://localhost:3002/films', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(item),
        });
        const result = await response.json();
        alert(`The film added successful.`);

        setTimeout(() => {
            window.location.replace('index.html');
        }, 3000);
    } catch (error) {
        console.error('Error adding new item:', error);
        alert('Error, the film not added.');
    }
};
addBtn.addEventListener('click', () => {
    const newItem = createNewItem();
    sendNewItem(newItem);
});