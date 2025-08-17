
//Dictionary function to display PC parts
//This function creates a dictionary of PC parts, deletes the Mouse property, and displays the remaining parts in the HTML element with id "Dictionary".
function my_Dictionary() {
    var PcParts = {
        Motherboard: "ASUS ROG Strix",
        CPU: "Ryzen 9 5900X",
        RAM: "Corsair Vengeance LPX 32GB",
        GPU: "NVIDIA GeForce RTX 3080",
        Storage: "Samsung 970 EVO Plus 1TB NVMe SSD",
        PowerSupply: "Corsair RM850x 850W",
        Case: "NZXT H510 Elite",
        Cooling: "Noctua NH-D15",
        Monitor: "Dell UltraSharp U2720Q 27\" 4K",
        Keyboard: "Logitech G Pro X",
        Mouse: "Razer DeathAdder V2"
    }
    delete PcParts.Mouse; // Deleting the Mouse property
    // Displaying the remaining PC parts in the HTML element with id "Dictionary"
    // Each part is displayed on a new line using <br> tags.
    document.getElementById("Dictionary").innerHTML = PcParts.Motherboard + "<br>" +
        PcParts.CPU + "<br>" +
        PcParts.RAM + "<br>" +
        PcParts.GPU + "<br>" +
        PcParts.Storage + "<br>" +
        PcParts.PowerSupply + "<br>" +
        PcParts.Case + "<br>" +
        PcParts.Cooling + "<br>" +
        PcParts.Monitor + "<br>" +
        PcParts.Keyboard + "<br>";
       
}
