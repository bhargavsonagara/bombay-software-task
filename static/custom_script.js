$(function () {
    $("#example1").DataTable({"paging":false, "info": false,
        "responsive": true, "lengthChange": false, "autoWidth": false,
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
});
$(function () {
    var url = window.location;
    // for single sidebar menu
    $('ul.nav-sidebar a').filter(function () {
        return this.href == url;
    }).addClass('active');

    // for sidebar menu and treeview
    $('ul.nav-treeview a').filter(function () {
        return this.href == url;
    }).parentsUntil(".nav-sidebar > .nav-treeview")
        .css({ 'display': 'block' })
        .addClass('menu-open').prev('a')
        .addClass('active');
});
$(function () {
    var url = window.location;
    // for single sidebar menu
    $('ul.nav-sidebar a').filter(function () {
        return this.href == url;
    }).addClass('active');

    // for sidebar menu and treeview
    $('ul.nav-treeview a').filter(function () {
        return this.href == url;
    }).parentsUntil(".nav-sidebar > .nav-treeview")
        .css({ 'display': 'block' })
        .addClass('menu-open').prev('a')
        .addClass('active');
});

setTimeout(function () {
    $('.messages').each(function () {
        this.style.display = "none"
        this.style.opacity = 0
    })
}, 4000); 

function validation(data, clas) {
    $('.django').remove()
    message = document.getElementsByClassName('messages')[0];
    message.style.opacity = null
    message.style.display = null
    message.className += ` alert alert-${clas}`
    elem = document.getElementsByClassName('child-message')[0]
    htmldata = `<strong class="text-capitalize">${clas}!</strong> <span>${data}</span>`
    elem.innerHTML = htmldata
    document.getElementsByClassName('messages')[0].appendChild(elem)
    setTimeout(function(){
        message.className = 'w-100 messages'
        message.style.display = "none";
        message.style.opacity = 0;
    },4000)
    return true;
}
try{
    var close = document.getElementsByClassName("closebtn");
    
    close[0].onclick = function () {
        var div = this.parentElement;
        document.getElementsByClassName('messages')[0].className = 'w-100 messages'
        div.style.opacity = "0";
        setTimeout(function () { div.style.display = "none"; }, 600);
    }

}catch{

}