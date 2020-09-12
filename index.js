var pathname = location.pathname
if (pathname.endsWith('/')) pathname += 'index.html'

// async function readPage () {
//   return beaker.hyperdrive.readFile(pathname).catch(e => '')
// }

// async function savePage (value) {
//   await beaker.hyperdrive.writeFile(pathname, value)
// }

async function showEditor () {
  var editor = document.createElement('div')
  var page = $('#test2')
  const $ = sel => editor.querySelector(sel)
  
  editor.id = 'editor'
  editor.innerHTML = `
    <nav>
      <button id="save">Save</button>
      <button id="cancel">Cancel</button>
    </nav>
    <textarea></textarea>
  `
  // $('textarea').value = await readPage()
  $('#save').addEventListener('click', async (e) => {
    
    // $('html').html( $('textarea').value)
    page.html($('textarea').value);

    // location.reload()
    $('div').hidden = true
    })
  $('#cancel').addEventListener('click', e => hideEditor())
  document.body.appendChild(editor)
}

async function hideEditor () {
  document.getElementById('editor').remove()
}

var editBtn = document.createElement('button')
editBtn.textContent = 'Edit Page'
editBtn.addEventListener('click', e => showEditor())
document.body.append(editBtn)