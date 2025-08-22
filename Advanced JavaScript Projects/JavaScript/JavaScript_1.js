function Creature_Function() {
    var Creature_Output;
    var Creature = document.getElementById("Creature_Input").value;
    var Creature_String = " is an awesome choice!";
    
    switch (Creature) {
        case "Goblin":
            Creature_Output = "Goblin" + Creature_String;
            break;
        case "Mummy":
            Creature_Output = "Mummy" + Creature_String;
            break;
        case "Vampire":
            Creature_Output = "Vampire" + Creature_String;
            break;
        case "Gargoyle":
            Creature_Output = "Gargoyle" + Creature_String;
            break;
        case "Slime":
            Creature_Output = "Slime" + Creature_String;
            break;
        case "Skeleton":
            Creature_Output = "Skeleton" + Creature_String;
            break;
        case "Orc":
            Creature_Output = "Orc" + Creature_String;
            break;
        default:
            Creature_Output = "Please enter a creature exactly as written on the list above.";
    }
    
    document.getElementById("Output").innerHTML = Creature_Output;
}
