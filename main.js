canvas =
document.getElementById("myCanvas");
ctx= canvas.getContaxt("2d");

rect()
{
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150,143,430, 200);
ctx.stroke();
}



arc()
{

    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(250,210,40, 0, 2 * Math.PI);
    ctx.stroke();

}