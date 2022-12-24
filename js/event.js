function thirdEvent() {
    document.body.style.backgroundColor = 'red';
}


const fourthEvent = document.getElementById('fourth-event');
fourthEvent.onclick = fourthChange;
function fourthChange() {
    document.body.style.backgroundColor = 'blue';
}

const fifthEvent = document.getElementById('fifth-event');
fifthEvent.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

const sixthEvent = document.getElementById('sixth-event');
sixthEvent.addEventListener('click', sixthChange);
function sixthChange() {
    document.body.style.backgroundColor = 'goldenrod';
}

const seventhEvent = document.getElementById('seventh-event');
seventhEvent.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

//direct shortcut
document.getElementById('eighth-event').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue'
})


//tenth event onclick function

function justClick() {
    const paraSet = document.getElementById('function-output');
    paraSet.innerText = 'set using by funtion click';
}

//tenth event direct 

document.getElementById('tenth-event').addEventListener('click', function () {
    const p = document.getElementById('function-output');
    p.innerText = 'this is tenth result'
})

//direct input field value

document.getElementById('update-name').addEventListener('click', function () {
    const inputName = document.getElementById('input-value');
    const p = document.getElementById('function-output');
    p.innerText = inputName.value;

})

//comment section update
//add event handler on button
document.getElementById('submit-comment').addEventListener('click', function () {

    //get user comment 
    const inputComment = document.getElementById('add-comment');
    const commentValue = inputComment.value;
    // console.log('clicked');

    //create holding html
    const newComment = document.createElement('p');
    newComment.innerText = commentValue;

    //set comment in main part
    const commentContainer = document.getElementById('comment-box');
    commentContainer.appendChild(newComment);

    //restore the comment box 
    inputComment.value = ' ';



})