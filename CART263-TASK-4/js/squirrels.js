class Squirrel
{
  
  constructor(x, y, size, color)
    {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;

        this.squirrelDiv = document.createElement("div");
        this.squirrelDiv.classList.add("squirrel");

        this.squirrelImg = document.createElement("img");
        this.squirrelImg.src = "./js/squirrel.png";
        this.squirrelImg.classList.add("squirrelImg");

        this.squirrelDiv.appendChild(this.squirrelImg);

        let self = this;
    }
    renderSquirrel()
    {
        this.squirrelImg.style.position = "absolute";
        this.squirrelImg.style.width = this.size + "px";
        this.squirrelImg.style.width = this.size + "px";
        this.squirrelImg.style.color = rgb(${this.color.r},${this.color.g},${this.color.b});
        this.squirrelImg.style.left = this.x + "px";
        this.squirrelImg.style.top = this.y - this.size + "px";
        document.getElementsByClassName("grass")[0].appendChild(this.squirrelImg);
    }
}