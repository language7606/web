// $(function(){
// let table = [];
// table.push('<ul>');
//     table.push('<li>Apple</li>');
//     table.push('<li>Banana</li>');
//     table.push('<li>Cherry</li>');
//     table.push('</ul>');
// let tag = table.join('');
// console.log(tag);
// $('body').html(tag);
// });
$(document).ready(function () {
    $.ajax({
        url: '../MOCK_DATA.json',
        success: function (data) {
            console.log(data);
            let table = [];
            table.push('<table border="1">');
            for (let i = 0; i < data.length; i++) { // row 단위
                teable.push('<tr>');
                for (field in data[i]) { // field 단위
                    table.push('<td>' + data[i][field] + '</td>');
                }
                table.push('</tr>');
            }
            table.push('</table>');
            let tag = table.join('');
            $('body').html(tag);

        }
    });
});

$.ajax({
    url: '../MOCK_DATA.json',
    type: 'get',
    data: 'name=hong&age=20',
    dataType: 'json',
    success: function (data) {
        let arry = data;
        let ulTag = $('<ul />');
        $(arry).each(function (idx, obj) {
            console.log(idx, obj);
            ulTag.append($('<li />').html('<a href="#">' + obj.first_name + '</a>'));
            ulTag.append( //
                $('<li />').append( //
                    $('<a />')
                    .html(obj.first_name)
                    .attr('href', 'get.jsp?name=' + obj.first_name)
                )
            );
        });
        $('body').append(ulTag);
    },
    error: function (reject) {
        console.error(reject.status, reject.statusText);
    }
});