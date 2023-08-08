var counter = 0

if (localStorage.getItem('metn')) {
    var arr = JSON.parse(localStorage.getItem('metn'))
    for (let i = 0; i < arr.length; i++) {
        let p = $(`<p class="index-${i}">${arr[i]}</p>`)
        let btn = $(`<button data-counter=${i}><i class="fa-solid fa-trash"></i></button>`)
        p.append(btn)
        $('.todo-list').append(p)
        btn.on('click', function() {
            let dataIndex = $(this).data('counter');
            arr.splice(dataIndex, 1);
            localStorage.setItem('metn', JSON.stringify(arr));
            $(`.index-${dataIndex}`).remove();
        });
    }
}
else {
    var arr = []
}
$('.save').on('click', function () {
    var text = $('input').val()
    arr.push(text)

    localStorage.setItem('metn', JSON.stringify(arr))
    var p = $(`<p class="index-${counter}">${text}</p>`)
    let btn = $(`<button data-counter=${counter}><i class="fa-solid fa-trash"></i></button>`)
    p.append(btn)
    $('.todo-list').append(p)
    $('input').val('')
    counter++
    btn.on('click', function() {
        let dataIndex = $(this).data('counter');
        arr.splice(dataIndex, 1);
        localStorage.setItem('metn', JSON.stringify(arr));
        $(`.index-${dataIndex}`).remove();
    });
})


