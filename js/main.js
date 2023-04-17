let n1 = 'Ivan'
let n2 = 'Max'
const names = [n1, n2, 'Oleg', 'Vlad', 'Sam']


//добавление элемента
function f1() {
    let name = $('#in1').val()
    names.push(name)
    $('#out').text(names)
}

//поиск элемента
function f2() {
    let name = $('#in1').val()
    let index = names.indexOf(name)
    if (index === -1) {
        $('#out').text('Не найден')
    } else {
        $('#out').text(name + ' под номером ' + index)
    }
}

// function f3() {
//     let name = $('#in1').val()
//     names.pop()
//     $('#out').text(names)
// }

//удаление элемента
function f3() {
    let name = $('#in1').val()
    let index = names.indexOf(name)
    if (index === -1) {
        $('#out').text('Не найден')
    } else {
        names.splice(index,1)
        $('#out').text(names)
    }
}

$('#add1').click(f1)
$('#search').click(f2)
$('#del').click(f3)

//откл кнопок
$(document).ready(function (){
    $('#but1').prop('disabled', true)
})
$('#but1').click(fb)
$('#but2').click(fd)

function fd() {
    $('#but1').prop('disabled', false)
    $('#but2').prop('disabled', true)
}

function fb() {
    $('#but1').prop('disabled', true)
    $('#but2').prop('disabled', false)
}