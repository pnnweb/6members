var product=['IPHONE 15 PROMAX','REDMI 12','IPHONE 13','HP 15S 1215U','SAMSUNG GALAXY S23'];
function showra(){
    document.getElementById('ql').style.visibility="visible";
    document.getElementById('selt').style.backgroundColor="white";
    hienthi();
}
function themmoi(){
    var newproduct = document.getElementById('product').value;
    if(newproduct!=""){
    product.push(newproduct);
    product.value ="";
    // console.log(product);
    hienthi();
    }
}

function hienthi(){
    var bang = '';
    var unit = product.length;
    if(product.length>0){
    document.getElementById('ti').style.visibility="visible";
    document.getElementById('sl').style.visibility="visible";
    bang +='<table class="table table-striped" style="width: 800px">';
    bang +='<tr>';
    bang +='<th style="width: 500px">TÊN SẢN PHẨM</th>';
    bang +='<th style="width: 500px"></th>';
    bang +='<th style="width: 500px"></th>';
    bang +='</tr>';
    for(let i=0; i<product.length; i++){
        bang +='<tr>';
        bang +='<td style="width: 500px">'+product[i]+'</td>';
        bang +='<td align="center"><button onclick="edit('+i+')" class="btn btn-primary">Edit</button></td>';
        bang +='<td align="center"><button onclick="xoa('+i+')" class="btn btn-danger">Delete</button></td>';
        bang +='</tr>';
    }
    bang +='</table>';
    }
    else
    {
    document.getElementById('ti').style.visibility="hidden";
       document.getElementById('sl').style.visibility="hidden";
    }
    document.getElementById('kq').innerHTML = bang;
    document.getElementById('sl').innerHTML = (unit > 1) ? ('<b>'+unit+'</b>'+' products') : ('<b>'+unit+'</b>'+' product');
}
function xoa(i){
    if(confirm("Bạn có thật sự muốn xóa sản phẩm: '"+product[i]+"' ?")==true){
    product.splice(i,1);
    hienthi();
    }
}
function edit(i){
    let nedit = prompt("Chỉnh sửa '"+product[i]+"' thành:")
    if(nedit!=""&&nedit!=null){
        product[i]=nedit;
        hienthi();
    }
}
