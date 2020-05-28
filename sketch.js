var button, thickness, plusButton, minusButton, confirmButton, colorInput, color;
thickness = 10;
color = "black"

function setup() {
    createCanvas(displayWidth - 50, displayHeight - 200);

    button = createButton("Clear Canvas")
    button.position((displayWidth - 50)/2, displayHeight - 250)

    colorInput = createInput("Color")
    confirmButton = createButton("Set Color")

    plusButton = createButton("+ thickness")
    minusButton = createButton("- thickness")

    plusButton.position(((displayWidth - 50)/2) + 115, displayHeight - 250)

    minusButton.position(((displayWidth - 50)/2) - 100, displayHeight - 250)
}

function draw() {
    

    button.mousePressed(()=>{
        background("white")
    })

    plusButton.mousePressed(()=>{
        thickness+=1
    })

    minusButton.mousePressed(()=>{
        thickness-=1
    })

    confirmButton.mousePressed(()=>{
        color = colorInput.value();
    })
}

function mouseDragged() {
    ellipseMode(CENTER)
    fill(color)
    noStroke()
    ellipse(mouseX, mouseY, thickness)
}