var mat1=[
    [4,8],
    [3,7]
];
var mat2=[
    [2,4],
    [1,5]
];

document.write("Given Matrix are:")
document.write("*** Matrix 1***")

var i,j;
for(i=0;i<2;i++){
    for(j=0;j<2;j++){
        document.write(mat1[i][j]+"&nbsp &nbsp &nbsp &nbsp")
    }
    document.write("<br>");
}
document.write("*** Matrix 2***")

var i,j;
for(i=0;i<2;i++){
    for(j=0;j<2;j++){
        document.write(mat2[i][j]+"&nbsp &nbsp &nbsp &nbsp")
    }
    document.write("<br>");
}

