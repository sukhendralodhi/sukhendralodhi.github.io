var names = new Array();

names[0] = "Yaakoov";
names[1] = "Jack";
names[2] = "paul";
names[3] = "john";
names[4] = "frank";
names[5] = "Jaison";
names[6] = "Katty";
names[7] = "trent";
names[8] = "Williamson";
names[9] = "Jamin";

for (var i = 0; i<names.length; i++) {
    if (names[i].charAt(0)==='J' || names[i].charAt(0)==='j') {
        console.log("Goodbye" + " " + names[i])
    }
    else{
        console.log("Hello" + " " + names[i])
    }
}

