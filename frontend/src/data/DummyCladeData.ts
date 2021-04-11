import Clade from "../entities/Clade";


const DUMMY_CLADE_DATA: Clade[] = [
    {id: "1", commonName: "Mammals", parentId: "55",},
    {id: "2", commonName: "Monotrema", parentId: "1",},
    {id: "3", commonName: "Theria", parentId: "1"},
    {id: "4", commonName: "Marsupials", parentId: "3"},
    {id: "5", commonName: "Placentals", parentId: "3"},
    {id: "6", commonName: "Boreoeutheria", parentId: "5"},
    {id: "7", commonName: "Atlantogemeta", parentId: "5"},
    {id: "8", commonName: "Laurasiatheria", parentId: "6"},
    {id: "9", commonName: "Euarchontoglires", parentId: "6"},
    {id: "10", commonName: "Fox", parentId: "14",},
    {id: "11", commonName: "Humans", parentId: "98",},
    {id: "12", commonName: "Snow leopard", parentId: "14",},
    {id: "13", commonName: "Hedgehog", parentId: "8",},
    {id: "14", commonName: "Carnivora", parentId: "44"},
    {id: "16", commonName: "Artiodactyla", parentId: "45"},
    {id: "17", commonName: "Orca", parentId: "25",},
    {id: "18", commonName: "Camel", parentId: "16",},
    {id: "19", commonName: "Tree shrew", parentId: "9",},
    {id: "20", commonName: "Otter", parentId: "23",},
    {id: "21", commonName: "Weasel", parentId: "23",},
    {id: "22", commonName: "Wolverine", parentId: "23",},
    {id: "23", commonName: "Mustalidae", parentId: "14"},
    {id: "24", commonName: "Suina", parentId: "16"},
    {id: "25", commonName: "Whippomorpha", parentId: "37"},
    {id: "26", commonName: "Wild Boar", parentId: "24",},
    {id: "27", commonName: "Glires", parentId: "9"},
    {id: "28", commonName: "Squirrel", parentId: "27",},
    {id: "29", commonName: "Dugong", parentId: "31",},
    {id: "30", commonName: "Elephant", parentId: "31",},
    {id: "31", commonName: "Afrotheria", parentId: "7"},
    {id: "32", commonName: "Xenarthra", parentId: "7"},
    {id: "33", commonName: "Armadillo", parentId: "32",},
    {id: "34", commonName: "Sloth", parentId: "32",},
    {id: "35", commonName: "Giant Anteater", parentId: "32",},
    {id: "36", commonName: "European Bison", parentId: "38",},
    {id: "37", commonName: "Cetruminantia", parentId: "16"},
    {id: "38", commonName: "Bovidae", parentId: "37"},
    {id: "39", commonName: "Hippopotamus", parentId: "25",},
    {id: "40", commonName: "Lemur", parentId: "41",},
    {id: "41", commonName: "Primates", parentId: "9"},
    {id: "42", commonName: "Tapir", parentId: "46",},
    {id: "43", commonName: "Fereuungulata ", parentId: "8"},
    {id: "44", commonName: "Ferae ", parentId: "43"},
    {id: "45", commonName: "Euungulata ", parentId: "43"},
    {id: "46", commonName: "Perissodactyla ", parentId: "45"},
    {id: "47", commonName: "Kinkajou ", parentId: "23",},
    {id: "48", commonName: "Coatimundi ", parentId: "23",},
    {id: "49", commonName: "Possum ", parentId: "4",},
    {id: "50", commonName: "Flying fox ", parentId: "8",},
    {id: "51", commonName: "Wombat ", parentId: "4",},
    {id: "52", commonName: "Rodents ", parentId: "27"},
    {id: "53", commonName: "Chinchilla ", parentId: "52",},
    {id: "54", commonName: "Antilope ", parentId: "38",},
    {id: "55", commonName: "Amniote ", parentId: null},
    {id: "56", commonName: "Aves ", parentId: "55"},
    {id: "57", commonName: "Paleognathae ", parentId: "56"},
    {id: "58", commonName: "Neognathae ", parentId: "56"},
    {id: "59", commonName: "Cassowary ", parentId: "57",},
    {id: "60", commonName: "Ostrich ", parentId: "57",},
    {id: "61", commonName: "Galloanserae ", parentId: "58"},
    {id: "62", commonName: "Neoaves ", parentId: "58"},
    {id: "63", commonName: "Swan ", parentId: "61",},
    {id: "64", commonName: "Wild chicken ", parentId: "61",},
    {id: "65", commonName: "Strisores", parentId: "62"},
    {id: "66", commonName: "Columbaves", parentId: "62"},
    {id: "67", commonName: "Gruiformes", parentId: "62"},
    {id: "68", commonName: "Aequorlitornithes", parentId: "62"},
    {id: "69", commonName: "Inopinaves", parentId: "62"},
    {id: "70", commonName: "Opisthocomiformes", parentId: "69"},
    {id: "71", commonName: "Afroaves", parentId: "69"},
    {id: "72", commonName: "Australaves", parentId: "69"},
    {id: "73", commonName: "Hummingbird", parentId: "65",},
    {id: "74", commonName: "Flamingo", parentId: "68",},
    {id: "75", commonName: "Falcon", parentId: "72",},
    {id: "76", commonName: "Wood-pidgeon", parentId: "66",},
    {id: "77", commonName: "Penguin", parentId: "68",},
    {id: "78", commonName: "Owl", parentId: "71",},
    {id: "79", commonName: "House Sparrow", parentId: "72",},
    {id: "80", commonName: "Albatross", parentId: "68",},
    {id: "81", commonName: "Ring Billed Gull", parentId: "68",},
    {id: "82", commonName: "Atlantic Puffin", parentId: "68",},
    {id: "83", commonName: "Common Raven", parentId: "72",},
    {id: "84", commonName: "Cockatiel", parentId: "72"},
    {id: "85", commonName: "Golden Eagle", parentId: "71",},
    {id: "86", commonName: "Black rumped flameback", parentId: "71",},
    {id: "87", commonName: "Bearded vulture", parentId: "71",},
    {id: "88", commonName: "Toco toucan", parentId: "71",},
    {id: "89", commonName: "Montezuma oropendola", parentId: "72",},
    {id: "90", commonName: "Wire tailed swallow", parentId: "72",},
    {id: "91", commonName: "Great Blue Heron", parentId: "68",},
    {id: "92", commonName: "Black headed Ibis", parentId: "68",},
    {id: "93", commonName: "Kori Bustard", parentId: "66",},
    {id: "94", commonName: "Guinea Turaco", parentId: "66",},
    {id: "95", commonName: "Great Lizard Cuckoo", parentId: "66",},
    {id: "96", commonName: "Great Lizard Cuckoo", parentId: "66",},
    {id: "97", commonName: "Double-banded Sandgrouse", parentId: "66",},
    {id: "98", commonName: "Apes", parentId: "41"},
    {id: "99", commonName: "Chimpangee", parentId: "98",},
    {id: "100", commonName: "Gorilla", parentId: "98",},
];

export default DUMMY_CLADE_DATA;