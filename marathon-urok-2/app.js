const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart' ,dragStart)
item.addEventListener('dragend' ,dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover' , dragover)
    placeholder.addEventListener('dragenter' , dragenter)
    placeholder.addEventListener('dragLeave', dragLeave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragStart(event) {
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add
  ('hide'), 0)
}

function dragend(event) {
  event.target.className = 'item'
  }
 function dragover (event) {
    event.preventDefault()
  }

  function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('drag enter')
  }

  function dragLeave(event) {
    event.target.classList.remove('hovered')
  }

  function dragdrop(event) {
    event.target.classList.remove('hovered')
     event.target.append(item)
  }
