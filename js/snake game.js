var hor=0;
var ver=0;
function up(){
    hor++;
    document.getElementById("snk").style.left=`${hor}%`;
    document.getElementById("snk").style.rotate="0deg";
}
function down()
{
    hor--;
    document.getElementById("snk").style.left=`${hor}%`;
    document.getElementById("snk").style.rotate="180deg";
}
function left(){
    ver++;
    document.getElementById("snk").style.bottom=`${ver*10}px`;
    document.getElementById("snk").style.rotate="-90deg";
}
function right(){
    ver--;
    document.getElementById("snk").style.bottom=`${ver*10}px`;
    document.getElementById("snk").style.rotate="90deg";
}