var faqs_row = 0;
function addfaqs() {
html = '<tr id="faqs-row' + faqs_row + '">';
    html += '<td><input type="text" class="form-control" placeholder="Role hiring for"></td>';
    html += '<td><input type="text" placeholder="Skills" class="form-control"></td>';
    html += '<td><input type="text" placeholder="Experience" class="form-control"></td>';
    html += '<td><input type="text" placeholder="Salary" class="form-control"></td>';
    html += '<td><input type="text" placeholder="Job description" class="form-control"></td>';
    html += '<td class="mt-10"><button class="badge badge-danger" onclick="$(\'#faqs-row' + faqs_row + '\').remove();"><i class="fa fa-trash"></i> Delete</button></td>';

    html += '</tr>';

$('#faqs tbody').append(html);

faqs_row++;
}
                                       
                                     
