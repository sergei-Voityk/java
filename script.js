
function fun1() {
    var chbox;
chbox=document.getElementById('one');

if (chbox.checkbox) {
    alert('Выбран');
}
else
{
    alert('Не выбран')
}
}

function fun2() {
    var radi=document.getElementsByName('r1');
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert(' Выбран ' +i+ ' Элемент ')
        }
        
    }
}
