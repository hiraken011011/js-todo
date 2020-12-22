const onClickTodoAdd = () => {
  const inputText = document.getElementById('add-text').value
  document.getElementById('add-text').value = '' // input後、空に
  // alert(inputText)

  // div生成
  const div = document.createElement('div')
  div.className = 'list-row'
  // console.log(div)

  // li生成
  const li = document.createElement('li')
  li.innerText = inputText // liの中に、input-text
  // console.log(li)

  // 完了button作成
  const completeButton = document.createElement('button')
  completeButton.innerText = "完了"
  completeButton.addEventListener('click', () => { // clickされた時
    deleteFromIncompleteList(deleteButton.parentNode)
    // 完了済みへ移動
    const addTarget = completeButton.parentNode
    // 内容テキストを取得
    const text = addTarget.firstElementChild.innerText
    // div以下を初期化
    addTarget.textContent = null
    // li生成
    const li = document.createElement('li')
    li.innerText = text
    // divに、各種設定
    addTarget.appendChild(li)
    // 完了へ追加
    document.getElementById('complete-list').appendChild(addTarget)    
  })
  // console.log(completeButton)

  // 削除button作成
  const deleteButton = document.createElement('button')
  deleteButton.innerText = "削除"
  deleteButton.addEventListener('click', () => { // clickされた時
    // 親divを削除
    deleteFromIncompleteList(deleteButton.parentNode)
  })
  // console.log(deleteButton)

  // divに、各要素設定
  div.appendChild(li)
  div.appendChild(completeButton)
  div.appendChild(deleteButton)
  // console.log(div)

  // 未完了リストへ追加
  document.getElementById('incomplete-list').appendChild(div)
}

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete-list').removeChild(target)
}

document.getElementById("add-button").addEventListener("click", () => onClickTodoAdd())