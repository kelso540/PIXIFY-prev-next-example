const imageSets = [
    {
      id:1,  
      name: 'Andrew Smith',
      title: 'Innocence',
      images: [
        'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
        'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
      ],
    },
    {
      id:2,
      name: 'Jane Doe',
      title: 'Nature Adventures',
      images: [
        'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
        'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
      ],
    },
    {
      id:3,
      name: 'Irna Tawsen',
      title: 'Faces of the World',
      images: [
        'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ],
    },
    {
      id:4,
      name: 'Mark Dale',
      title: 'Wild Animals',
      images: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
        'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ]
    }

  ];


 let currentId; 
 let currentImg;
 window.onload = function(){
    const urlParams = new URLSearchParams(window.location.search);
    currentId = urlParams.get("id");
    console.log(currentId);


    currentImg = imageSets.filter(item => item.id == currentId)[0]; 

    console.log(currentImg); 

    const img = `<div class="img-title">
              <p>${currentImg.title}</p>
              <p class="img-name">${currentImg.name}</p>
              <div class="img">
                  <img src=${currentImg.images} alt=${currentImg.name} class="img-sequence" id="imgSequence"/>  
              </div>
          </div>`

          const imagePage = document.querySelector("#image-page");
          imagePage.innerHTML = img;
    } 

let counter = 0; 

//way to do prev and next with two separate functions:
//add these two lines of code to HTML page on prev and next buttons.
//onclick="imageSliderHandler('previous');"
//onclick="imageSliderHandler('next');"
const upOne = () =>{
  const imageSeq = document.querySelector('.img-sequence'); 
  if (counter >= currentImg.images.length - 1){
    counter = counter; 
  } else {
    counter++; 
    imageSeq.src = currentImg.images[counter];
  } 
  document.querySelector('.submission-current-image-number').innerText = `${counter + 1} of ${currentImg.images.length}`;
}; 

const dwnOne = () =>{
  const imageSeq = document.querySelector('.img-sequence');
  if (counter <= 0){
    counter = counter; 
  } else {
    counter--; 
    imageSeq.src = currentImg.images[counter];
  } 
  //create a new <p class="submission-current-image-number"></p> under img on details page. Will look like this...
  // <div class="button-image">
  //   <p class="submission-current-image-number">1 of 5</p>
  //   <button class="prev" id="prev" onclick="imageSliderHandler('previous');" >Previous</button>
  //   <button class="next" id="next" onclick="imageSliderHandler('next');" >Next</button>
  // </div> 
  document.querySelector('.submission-current-image-number').innerText = `${counter + 1} of ${currentImg.images.length}`;
}; 





//better way to do prev and next with one function:
function imageSliderHandler(userChoice) { 
  if (counter < currentImg.length - 1 && userChoice === 'next') {
      counter += 1
  } else if (counter > 0 && userChoice === 'previous') {
      counter -= 1
  };
  document.querySelector('.img-sequence').src = currentImg[counter];
  document.querySelector('.submission-current-image-number').innerText = `${counter + 1} of ${currentImg.length}`; 
};