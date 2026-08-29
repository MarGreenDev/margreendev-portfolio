//variabelen
let beurt = "speler1";
let hoverColorVakje1;
let hoverColorVakje2;
let hoverColorVakje3;
let hoverColorVakje4;
let hoverColorVakje5;
let hoverColorVakje6;
let hoverColorVakje7;
let hoverColorVakje8;
let hoverColorVakje9;
let vakje1 = 0;
let vakje2 = 0;
let vakje3 = 0;
let vakje4 = 0;
let vakje5 = 0;
let vakje6 = 0;
let vakje7 = 0;
let vakje8 = 0;
let vakje9 = 0;
let button;
let gelijkspel = false;

function preload() {
  //geluiden
  soundFormats('mp3');
  //klikgeluiden
  pop1 = loadSound('pop-402323');
  pop2 = loadSound('pop-402324');
  //achtergrondmuziek
  muziekje = loadSound('uplifting-corporate-loop-cheerful-happiness-303198.mp3');
  //geluid dat afspeelt wanneer er iemand wint of gelijkspeelt
  celebration = loadSound('crowd-cheers-314919.mp3');
  loser = loadSound('boo-6377.mp3');
}

function setup() {
  createCanvas(800, 800);
  hoverColorVakje1 = color(255, 210, 150);
  hoverColorVakje2 = color(255, 210, 150);
  hoverColorVakje3 = color(255, 210, 150);
  hoverColorVakje4 = color(255, 210, 150);
  hoverColorVakje5 = color(255, 210, 150);
  hoverColorVakje6 = color(255, 210, 150);
  hoverColorVakje7 = color(255, 210, 150);
  hoverColorVakje8 = color(255, 210, 150);
  hoverColorVakje9 = color(255, 210, 150);
  button = createButton("Restart");
  //achtergrondmuziek
  // muziekje.play();
  // muziekje.loop();
}

function draw() {
  button.hide();
  button.position(400, 750);
  button.mousePressed(restartSpel);

  //achtergrond
  background(200, 255, 163);
  strokeWeight(0);
  fill(255, 135, 157);
  triangle(0, 0, 0, 800, 800, 800);

  //speelveld
  strokeWeight(5);
  stroke("white");
  fill(105, 68, 50);
  rect(100, 100, 600, 625, 20);
  strokeWeight(10);
  stroke(66, 43, 23);

  //tekent lege vakjes in het speelveld
  fill(hoverColorVakje1);
  tekenVakjes(120, 125, 20);
  fill(hoverColorVakje2);
  tekenVakjes(315, 125, 20);
  fill(hoverColorVakje3);
  tekenVakjes(510, 125, 20);
  fill(hoverColorVakje4);
  tekenVakjes(120, 325, 20);
  fill(hoverColorVakje5);
  tekenVakjes(315, 325, 20);
  fill(hoverColorVakje6);
  tekenVakjes(510, 325, 20);
  fill(hoverColorVakje7);
  tekenVakjes(120, 525, 20);
  fill(hoverColorVakje8);
  tekenVakjes(315, 525, 20);
  fill(hoverColorVakje9);
  tekenVakjes(510, 525, 20);

  //symbolen
  textSize(150);
  strokeWeight(3);
  textAlign(LEFT);
  if (vakje1 == 1) {
    text("🪴", 100, 260);
  }
  if (vakje1 == 2) {
    text("🌸", 100, 260);
  }
  if (vakje2 == 1) {
    text("🪴", 300, 260);
  }
  if (vakje2 == 2) {
    text("🌸", 300, 260);
  }
  if (vakje3 == 1) {
    text("🪴", 500, 260);
  }
  if (vakje3 == 2) {
    text("🌸", 500, 260);
  }
  if (vakje4 == 1) {
    text("🪴", 100, 460);
  }
  if (vakje4 == 2) {
    text("🌸", 100, 460);
  }
  if (vakje5 == 1) {
    text("🪴", 300, 460);
  }
  if (vakje5 == 2) {
    text("🌸", 300, 460);
  }
  if (vakje6 == 1) {
    text("🪴", 500, 460);
  }
  if (vakje6 == 2) {
    text("🌸", 500, 460);
  }
  if (vakje7 == 1) {
    text("🪴", 100, 660);
  }
  if (vakje7 == 2) {
    text("🌸", 100, 660);
  }
  if (vakje8 == 1) {
    text("🪴", 300, 660);
  }
  if (vakje8 == 2) {
    text("🌸", 300, 660);
  }
  if (vakje9 == 1) {
    text("🪴", 500, 660);
  }
  if (vakje9 == 2) {
    text("🌸", 500, 660);
  }

  //beurt tekst
  fill(37, 74, 38);
  textAlign(CENTER);
  if (beurt == "speler1") {
    fill("white");
    rect(290, 30, 240, 60, 20);
    fill(37, 74, 38)
    textSize(50);
    stroke(255, 135, 157);
    text("🪴's beurt", 400, 75);
    textSize(100);
    text("🪴🪴🪴🪴🪴", 390, 800);
  }
  else if (beurt == "speler2") {
    textSize(100);
    text("🌸🌸🌸🌸🌸", 390, 80);
    textSize(50);
    fill("white");
    rect(290, 30, 240, 60, 20);
    fill(37, 74, 38)
    stroke(200, 255, 163);
    text("🌸's beurt", 400, 75);

  }

  //uitkomsten
  textSize(150);
  textAlign(CENTER);
  let erHeeftIemandGewonnen = false;
  if (vakje1 == 1 && vakje2 == 1 && vakje3 == 1) {
    //speler 1 wint met bovenste rij
    fill(255, 135, 157);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🪴wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje1 == 2 && vakje2 == 2 && vakje3 == 2) {
    //speler 2 wint met bovenste rij
    fill(200, 255, 163);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🌸 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje4 == 1 && vakje5 == 1 && vakje6 == 1) {
    //speler 1 wint met middelste rij
    fill(255, 135, 157);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🪴 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje4 == 2 && vakje5 == 2 && vakje6 == 2) {
    //speler 2 wint met middelste rij
    fill(200, 255, 163);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🌸 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje7 == 1 && vakje8 == 1 && vakje9 == 1) {
    //speler 1 wint met onderste rij
    fill(255, 135, 157);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🪴 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje7 == 2 && vakje8 == 2 && vakje9 == 2) {
    //speler 2 wint met onderste rij
    fill(200, 255, 163);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🌸 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje1 == 1 && vakje4 == 1 && vakje7 == 1) {
    //speler 1 wint met eerste kolom
    fill(255, 135, 157);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🪴 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje1 == 2 && vakje4 == 2 && vakje7 == 2) {
    //speler 2 wint met eerste kolom
    fill(200, 255, 163);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🌸 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje2 == 1 && vakje5 == 1 && vakje8 == 1) {
    //speler 1 wint met middelste kolom
    fill(255, 135, 157);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🪴wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje2 == 2 && vakje5 == 2 && vakje8 == 2) {
    //speler 2 wint met middelste kolom
    fill(200, 255, 163);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🌸 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje3 == 1 && vakje6 == 1 && vakje9 == 1) {
    //speler 1 wint met laatste kolom
    fill(255, 135, 157);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🪴 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje3 == 2 && vakje6 == 2 && vakje9 == 2) {
    //speler 2 wint met laatste kolom
    fill(200, 255, 163);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🌸 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje1 == 1 && vakje5 == 1 && vakje9 == 1) {
    //speler 1 wint met diagonaal van linksboven naar rechtsonder
    fill(255, 135, 157);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🪴 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje1 == 2 && vakje5 == 2 && vakje9 == 2) {
    //speler 2 wint met diagonaal van linksboven naar rechtsonder
    fill(200, 255, 163);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🌸 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje3 == 1 && vakje5 == 1 && vakje7 == 1) {
    //speler 1 wint met diagonaal van rechtsboven naar linksonder
    fill(255, 135, 157);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🪴 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (vakje3 == 2 && vakje5 == 2 && vakje7 == 2) {
    //speler 2 wint met diagonaal van rechtsboven naar linksonder
    fill(200, 255, 163);
    rect(150, 245, 520, 200, 50);
    fill(61, 12, 24);
    text("🌸 wint", 400, 400);
    erHeeftIemandGewonnen = true;
  }
  if (erHeeftIemandGewonnen == false) {
    if (vakje1 != 0 && vakje2 != 0 && vakje3 != 0 && vakje4 != 0 && vakje5 != 0 && vakje6 != 0 && vakje7 != 0 && vakje8 != 0 && vakje9 != 0) {
      //gelijkspel
      fill("white");
      rect(100, 245, 600, 200, 50);
      fill(61, 12, 24);
      text("gelijkspel", 400, 400);
      gelijkspel = true;
    }
    button.hide();
  }

  if (gelijkspel == true) {
    button.show(); // laat de restart button zien wanneer het spel gelijk is
    // loser.play();//speelt een boe geroep geluid af wanneer het gelijkspel is 
  }

  if (erHeeftIemandGewonnen == true) {
    //als er iemand wint kan er geen vakje meer aangeklikt worden
    beurt = "speler0";
    button.show();//laat button zien wanneer het spel voorbij is
    textSize(50);
    // celebration.play();//speelt gejuich af wanneer er iemand wint
  }

}

function tekenVakjes(x, y, rounded) {
  //lege vakjes voor in het speelveld
  square(x, y, 175, rounded);
}

function mouseMoved() {
  //als de muis over een vakje beweegt verandert ie van kleur
  hoverColorVakje1 = color(255, 210, 150);
  if (mouseX > 125 && mouseX < 300 && mouseY > 125 && mouseY < 300) {
    hoverColorVakje1 = "white"
  }
  hoverColorVakje2 = color(255, 210, 150);
  if (mouseX > 315 && mouseX < 500 && mouseY > 125 && mouseY < 300) {
    hoverColorVakje2 = "white"
  }
  hoverColorVakje3 = color(255, 210, 150);
  if (mouseX > 510 && mouseX < 685 && mouseY > 125 && mouseY < 300) {
    hoverColorVakje3 = "white"
  }
  hoverColorVakje4 = color(255, 210, 150);
  if (mouseX > 125 && mouseX < 300 && mouseY > 325 && mouseY < 500) {
    hoverColorVakje4 = "white";
  }
  hoverColorVakje5 = color(255, 210, 150);
  if (mouseX > 315 && mouseX < 500 && mouseY > 325 && mouseY < 500) {
    hoverColorVakje5 = "white";
  }
  hoverColorVakje6 = color(255, 210, 150);
  if (mouseX > 510 && mouseX < 685 && mouseY > 325 && mouseY < 500) {
    hoverColorVakje6 = "white";
  }
  hoverColorVakje7 = color(255, 210, 150);
  if (mouseX > 125 && mouseX < 300 && mouseY > 525 && mouseY < 700) {
    hoverColorVakje7 = "white"
  }
  hoverColorVakje8 = color(255, 210, 150);
  if (mouseX > 315 && mouseX < 500 && mouseY > 525 && mouseY < 700) {
    hoverColorVakje8 = "white";
  }
  hoverColorVakje9 = color(255, 210, 150);
  if (mouseX > 510 && mouseX < 685 && mouseY > 525 && mouseY < 700) {
    hoverColorVakje9 = "white";
  }
}

function mousePressed() {
  //vakjes klikken
  if (mouseX > 125 && mouseX < 300 && mouseY > 125 && mouseY < 300) {
    if (vakje1 == 0) {
      if (beurt == "speler1") {
        vakje1 = 1;
        beurt = "speler2"
        pop1.play();
      }
      else if (beurt == "speler2") {
        vakje1 = 2;
        beurt = "speler1"
        pop2.play();
      }
    }
  }
  if (mouseX > 315 && mouseX < 500 && mouseY > 125 && mouseY < 300) {
    if (vakje2 == 0) {
      if (beurt == "speler1") {
        vakje2 = 1;
        beurt = "speler2"
        pop1.play();
      }
      else if (beurt == "speler2") {
        vakje2 = 2;
        beurt = "speler1"
        pop2.play();
      }
    }
  }
  if (mouseX > 510 && mouseX < 685 && mouseY > 125 && mouseY < 300) {
    if (vakje3 == 0) {
      if (beurt == "speler1") {
        vakje3 = 1;
        beurt = "speler2";
        pop1.play();
      }
      else if (beurt == "speler2") {
        vakje3 = 2;
        beurt = "speler1";
        pop2.play();
      }
    }
  }
  if (mouseX > 125 && mouseX < 300 && mouseY > 325 && mouseY < 500) {
    if (vakje4 == 0) {
      if (beurt == "speler1") {
        vakje4 = 1;
        beurt = "speler2"
        pop1.play();
      }
      else if (beurt == "speler2") {
        vakje4 = 2;
        beurt = "speler1";
        pop2.play();
      }
    }
  }
  if (mouseX > 315 && mouseX < 500 && mouseY > 325 && mouseY < 500) {
    if (vakje5 == 0) {
      if (beurt == "speler1") {
        vakje5 = 1;
        beurt = "speler2";
        pop1.play();
      }
      else if (beurt == "speler2") {
        vakje5 = 2;
        beurt = "speler1";
        pop2.play();
      }
    }
  }
  if (mouseX > 510 && mouseX < 685 && mouseY > 325 && mouseY < 500) {
    if (vakje6 == 0) {
      if (beurt == "speler1") {
        vakje6 = 1;
        beurt = "speler2";
        pop1.play();
      }
      else if (beurt == "speler2") {
        vakje6 = 2;
        beurt = "speler1";
        pop2.play();
      }
    }
  }
  if (mouseX > 125 && mouseX < 300 && mouseY > 525 && mouseY < 700) {
    if (vakje7 == 0) {
      if (beurt == "speler1") {
        vakje7 = 1;
        beurt = "speler2"
        pop1.play();
      }
      else if (beurt == "speler2") {
        vakje7 = 2;
        beurt = "speler1";
        pop2.play();
      }
    }
  }
  if (mouseX > 315 && mouseX < 500 && mouseY > 525 && mouseY < 700) {
    if (vakje8 == 0) {
      if (beurt == "speler1") {
        vakje8 = 1;
        beurt = "speler2";
        pop1.play();
      }
      else if (beurt == "speler2") {
        vakje8 = 2;
        beurt = "speler1";
        pop2.play();
      }
    }
  }
  if (mouseX > 510 && mouseX < 685 && mouseY > 525 && mouseY < 700) {
    if (vakje9 == 0) {
      if (beurt == "speler1") {
        vakje9 = 1;
        beurt = "speler2";
        pop1.play();
      }
      else if (beurt == "speler2") {
        vakje9 = 2;
        beurt = "speler1"
        pop2.play();
      }
    }
  }
}

function restartSpel() {
  //reset het spel
  vakje1 = 0;
  vakje2 = 0;
  vakje3 = 0;
  vakje4 = 0;
  vakje5 = 0;
  vakje6 = 0;
  vakje7 = 0;
  vakje8 = 0;
  vakje9 = 0;

  beurt = "speler1"
  erHeeftIemandGewonnen = false;
  gelijkspel = false;
  // celebration.stop();
  // loser.stop();
}
