// 処理開始
miro.onReady(async function () {
    var p2_element = document.getElementById('p2');
    var new_element2 = document.createElement('p');
    
    var id_ = await miro.board.info.get();
    console.log(id_);
    
    new_element2.textContent = 'https://miro.com/app/board/' + id_.id + '/';
  
    p2_element.after(new_element2);
  });