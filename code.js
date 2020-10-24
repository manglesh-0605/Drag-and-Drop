const img = document.querySelector('.imgbox');
const boxes = document.querySelectorAll('.box');

img.addEventListener('dragstart', (e) => {
    console.log(`dragstart triggered`);
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = ' hide';
    }, 0)

})
img.addEventListener('dragend', (e) => {
    console.log(`dragend triggered`);
    e.target.className = 'imgbox';

})

boxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        console.log(`dragover triggered`);
        e.preventDefault();

    })
    box.addEventListener('dragenter', (e) => {
        console.log(`dragenter triggered`);
        e.target.className += " dashed";

    })
    box.addEventListener('dragleave', (e) => {
        console.log(`dragleave triggered`);
        e.target.className = "box";
        
    })
    box.addEventListener('drop', (e) => {
        console.log(`drop triggered`);
        e.target.className = "box";
        e.target.append(img);

    })


});