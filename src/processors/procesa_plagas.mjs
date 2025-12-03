let contador = 0

export default function handler(req, res, endpoint) {
    const nombreComuPlaga = req.body && req.body.nombreComuPlaga
   

    return res.status(200).json(informacion_plagas)
  
   

}

const informacion_plagas = {
  "estado": "exito",
  "data": [
    {
      "id": "434",
      "nombreComuPlaga": "Astrantia",
      "nombreCientificoPlaga": "Astrantia nilotica"
    },
    {
      "id": "214",
      "nombreComuPlaga": "Acacia",
      "nombreCientificoPlaga": "Acacia nilotica"
    },
    {
      "id": "49",
      "nombreComuPlaga": "Achilea",
      "nombreCientificoPlaga": "Achillea sp."
    },
    {
      "id": "63",
      "nombreComuPlaga": "Achira",
      "nombreCientificoPlaga": "Canna indica"
    },
    {
      "id": "213",
      "nombreComuPlaga": "Achojcha,caigua",
      "nombreCientificoPlaga": "Cyclanthera pedata"
    },
    {
      "id": "85",
      "nombreComuPlaga": "Achotillo",
      "nombreCientificoPlaga": "Nephelium lappaceum"
    },
    {
      "id": "2",
      "nombreComuPlaga": "Agapanthus",
      "nombreCientificoPlaga": "Agapanthus africanus"
    },
    {
      "id": "1",
      "nombreComuPlaga": "Aguacate",
      "nombreCientificoPlaga": "Persea americana"
    },
    {
      "id": "64",
      "nombreComuPlaga": "Ajo",
      "nombreCientificoPlaga": "Allium sativum"
    },
    {
      "id": "4",
      "nombreComuPlaga": "Ají",
      "nombreCientificoPlaga": "Capsicum annuum"
    },
    {
      "id": "93",
      "nombreComuPlaga": "Albahaca",
      "nombreCientificoPlaga": "Ocimum basilicum"
    },
    {
      "id": "5",
      "nombreComuPlaga": "Alfalfa",
      "nombreCientificoPlaga": "Medicago sativa"
    },
    {
      "id": "50",
      "nombreComuPlaga": "Algarrobo",
      "nombreCientificoPlaga": "Ceratonia siliqua"
    },
    {
      "id": "51",
      "nombreComuPlaga": "Algodon",
      "nombreCientificoPlaga": "Gossypium hirsutum L"
    },
    {
      "id": "205",
      "nombreComuPlaga": "Alhelí,Stock",
      "nombreCientificoPlaga": "Matthiola incana"
    },
    {
      "id": "118",
      "nombreComuPlaga": "Aliso",
      "nombreCientificoPlaga": "Alnus glutinosa"
    },
    {
      "id": "82",
      "nombreComuPlaga": "Almendra",
      "nombreCientificoPlaga": "Prunus dulcis"
    },
    {
      "id": "94",
      "nombreComuPlaga": "Alstroemeria",
      "nombreCientificoPlaga": "Alstroemeria sp."
    },
    {
      "id": "95",
      "nombreComuPlaga": "Amaranthus",
      "nombreCientificoPlaga": "Amaranthus sp."
    },
    {
      "id": "96",
      "nombreComuPlaga": "Ammi majus",
      "nombreCientificoPlaga": "Ammi majus sp."
    },
    {
      "id": "209",
      "nombreComuPlaga": "Anemone",
      "nombreCientificoPlaga": "Anemone sp."
    },
    {
      "id": "6",
      "nombreComuPlaga": "Anthurium, Anturio",
      "nombreCientificoPlaga": "Anthurium andranum"
    },
    {
      "id": "119",
      "nombreComuPlaga": "Anís",
      "nombreCientificoPlaga": "Pimpinella anisum"
    },
    {
      "id": "97",
      "nombreComuPlaga": "Apio",
      "nombreCientificoPlaga": "Apium graveolens"
    },
    {
      "id": "8",
      "nombreComuPlaga": "Arazá",
      "nombreCientificoPlaga": "Eugenia stipitata"
    },
    {
      "id": "52",
      "nombreComuPlaga": "Arroz",
      "nombreCientificoPlaga": "Oryza sativa"
    },
    {
      "id": "9",
      "nombreComuPlaga": "Arveja",
      "nombreCientificoPlaga": "Pisum sativum"
    },
    {
      "id": "98",
      "nombreComuPlaga": "Aster",
      "nombreCientificoPlaga": "Aster sp."
    },
    {
      "id": "210",
      "nombreComuPlaga": "Azucena ,Lirio",
      "nombreCientificoPlaga": "Lilium sp."
    },
    {
      "id": "240",
      "nombreComuPlaga": "Babaco",
      "nombreCientificoPlaga": "Carica pentagona"
    },
    {
      "id": "106",
      "nombreComuPlaga": "Badea",
      "nombreCientificoPlaga": "Passiflora quadrangularis"
    },
    {
      "id": "433",
      "nombreComuPlaga": "Balanceado",
      "nombreCientificoPlaga": "Balanceado"
    },
    {
      "id": "65",
      "nombreComuPlaga": "Balsa",
      "nombreCientificoPlaga": "Ochroma pyramidale"
    },
    {
      "id": "66",
      "nombreComuPlaga": "Banano",
      "nombreCientificoPlaga": "Musa sapientum"
    },
    {
      "id": "7",
      "nombreComuPlaga": "Boca de dragón,Perritos, snap dragon",
      "nombreCientificoPlaga": "Antirrhinum majus"
    },
    {
      "id": "107",
      "nombreComuPlaga": "Borojó",
      "nombreCientificoPlaga": "Borojoa patinoi"
    },
    {
      "id": "99",
      "nombreComuPlaga": "Bouquet",
      "nombreCientificoPlaga": "xxxxxx"
    },
    {
      "id": "100",
      "nombreComuPlaga": "Bouvardia",
      "nombreCientificoPlaga": "Bouvardia sp."
    },
    {
      "id": "394",
      "nombreComuPlaga": "Brassica",
      "nombreCientificoPlaga": "Brassica sp."
    },
    {
      "id": "151",
      "nombreComuPlaga": "Brocoli",
      "nombreCientificoPlaga": "Brassica oleracea"
    },
    {
      "id": "101",
      "nombreComuPlaga": "Bromelia",
      "nombreCientificoPlaga": "Bromelia sp."
    },
    {
      "id": "108",
      "nombreComuPlaga": "Buganvilla",
      "nombreCientificoPlaga": "Bougainvillea sp."
    },
    {
      "id": "102",
      "nombreComuPlaga": "Buplerum",
      "nombreCientificoPlaga": "Buplerum sp."
    },
    {
      "id": "67",
      "nombreComuPlaga": "Cacao",
      "nombreCientificoPlaga": "Theobroma cacao"
    },
    {
      "id": "104",
      "nombreComuPlaga": "Cactus",
      "nombreCientificoPlaga": "Cactus sp."
    },
    {
      "id": "11",
      "nombreComuPlaga": "Café",
      "nombreCientificoPlaga": "Coffea arábiga"
    },
    {
      "id": "258",
      "nombreComuPlaga": "Camote",
      "nombreCientificoPlaga": "lpomoea batatas"
    },
    {
      "id": "105",
      "nombreComuPlaga": "Campanula",
      "nombreCientificoPlaga": "Campanula sp."
    },
    {
      "id": "136",
      "nombreComuPlaga": "Caoba",
      "nombreCientificoPlaga": "Swietenia macrophylla"
    },
    {
      "id": "13",
      "nombreComuPlaga": "Capulí",
      "nombreCientificoPlaga": "Muntingia calabura"
    },
    {
      "id": "69",
      "nombreComuPlaga": "Carambola, Fruta China",
      "nombreCientificoPlaga": "Averrhoa carambola"
    },
    {
      "id": "14",
      "nombreComuPlaga": "Cartucho, Callas, Zantesdechia",
      "nombreCientificoPlaga": "Zantedeschia sp."
    },
    {
      "id": "109",
      "nombreComuPlaga": "Cauje, caimito",
      "nombreCientificoPlaga": "Pouteria caimito"
    },
    {
      "id": "12",
      "nombreComuPlaga": "Caña de azúcar",
      "nombreCientificoPlaga": "Saccharum officinarum"
    },
    {
      "id": "68",
      "nombreComuPlaga": "Caña guadua",
      "nombreCientificoPlaga": "Guadua angustifolia"
    },
    {
      "id": "61",
      "nombreComuPlaga": "Cebada",
      "nombreCientificoPlaga": "Hordeum vulgare"
    },
    {
      "id": "15",
      "nombreComuPlaga": "Cebolla",
      "nombreCientificoPlaga": "Allium cepa"
    },
    {
      "id": "110",
      "nombreComuPlaga": "Cebolla blanca",
      "nombreCientificoPlaga": "Allium fistulosum"
    },
    {
      "id": "116",
      "nombreComuPlaga": "Cedro",
      "nombreCientificoPlaga": "Cedrela odorata"
    },
    {
      "id": "115",
      "nombreComuPlaga": "Cereza",
      "nombreCientificoPlaga": "Prunus cerasus"
    },
    {
      "id": "250",
      "nombreComuPlaga": "Chaya",
      "nombreCientificoPlaga": "Cnidoscolus aconitifolius"
    },
    {
      "id": "137",
      "nombreComuPlaga": "Cheflera",
      "nombreCientificoPlaga": "Schefflera arboricola"
    },
    {
      "id": "16",
      "nombreComuPlaga": "Chirimoya",
      "nombreCientificoPlaga": "Annona cherimola"
    },
    {
      "id": "43",
      "nombreComuPlaga": "Chocho",
      "nombreCientificoPlaga": "Lupinus mutabilis"
    },
    {
      "id": "44",
      "nombreComuPlaga": "Choco",
      "nombreCientificoPlaga": "Cosmos atrosanguineus"
    },
    {
      "id": "447",
      "nombreComuPlaga": "Cipres",
      "nombreCientificoPlaga": "Cupressus sp."
    },
    {
      "id": "117",
      "nombreComuPlaga": "Ciruelo",
      "nombreCientificoPlaga": "Prunus domestica"
    },
    {
      "id": "121",
      "nombreComuPlaga": "Clavel, Dianthus",
      "nombreCientificoPlaga": "Dianthus caryophyllus"
    },
    {
      "id": "275",
      "nombreComuPlaga": "Coco",
      "nombreCientificoPlaga": "Cocos nucifera"
    },
    {
      "id": "246",
      "nombreComuPlaga": "Cocotero",
      "nombreCientificoPlaga": "Cocos nucifera"
    },
    {
      "id": "126",
      "nombreComuPlaga": "Col",
      "nombreCientificoPlaga": "Brassica oleracea"
    },
    {
      "id": "256",
      "nombreComuPlaga": "Col morada",
      "nombreCientificoPlaga": "Brassica oleracea var. capitata"
    },
    {
      "id": "216",
      "nombreComuPlaga": "Coliflor",
      "nombreCientificoPlaga": "Brassica oleracea var. botrytis"
    },
    {
      "id": "127",
      "nombreComuPlaga": "Colio, Cóleo",
      "nombreCientificoPlaga": "Solenostemon sp."
    },
    {
      "id": "153",
      "nombreComuPlaga": "Copa de oro",
      "nombreCientificoPlaga": "Allamanda cathartica"
    },
    {
      "id": "131",
      "nombreComuPlaga": "Craspedia",
      "nombreCientificoPlaga": "Craspedia sp."
    },
    {
      "id": "62",
      "nombreComuPlaga": "Crisantemo",
      "nombreCientificoPlaga": "Chrysantemun sp."
    },
    {
      "id": "70",
      "nombreComuPlaga": "Croto, Croton",
      "nombreCientificoPlaga": "Codiaeum variegatum"
    },
    {
      "id": "427",
      "nombreComuPlaga": "Cryptomeria",
      "nombreCientificoPlaga": "Cryptomeria sp."
    },
    {
      "id": "17",
      "nombreComuPlaga": "Cucarda",
      "nombreCientificoPlaga": "Hibiscus rosa sinensis"
    },
    {
      "id": "243",
      "nombreComuPlaga": "Culantro",
      "nombreCientificoPlaga": "Coriandrum sativum"
    },
    {
      "id": "442",
      "nombreComuPlaga": "cultivo comun",
      "nombreCientificoPlaga": "cultivo cientifico"
    },
    {
      "id": "437",
      "nombreComuPlaga": "curry, siempreviva",
      "nombreCientificoPlaga": "Helichrysum sp."
    },
    {
      "id": "436",
      "nombreComuPlaga": "Cártamo",
      "nombreCientificoPlaga": "Carthamus sp"
    },
    {
      "id": "45",
      "nombreComuPlaga": "Dalia",
      "nombreCientificoPlaga": "Dahlia variabilis"
    },
    {
      "id": "111",
      "nombreComuPlaga": "Delphinium, Larkspur",
      "nombreCientificoPlaga": "Delphinium elatum"
    },
    {
      "id": "138",
      "nombreComuPlaga": "Duranta",
      "nombreCientificoPlaga": "Duranta repens"
    },
    {
      "id": "120",
      "nombreComuPlaga": "Durazno",
      "nombreCientificoPlaga": "Prunus persica"
    },
    {
      "id": "217",
      "nombreComuPlaga": "Eryngium",
      "nombreCientificoPlaga": "Eryngium sp."
    },
    {
      "id": "112",
      "nombreComuPlaga": "Esparrago",
      "nombreCientificoPlaga": "Asparagus officinalis"
    },
    {
      "id": "46",
      "nombreComuPlaga": "Eucalipto",
      "nombreCientificoPlaga": "Eucalyptus globulus"
    },
    {
      "id": "261",
      "nombreComuPlaga": "Faique",
      "nombreCientificoPlaga": "Acacia macracantha"
    },
    {
      "id": "428",
      "nombreComuPlaga": "Feijoa",
      "nombreCientificoPlaga": "Acca sellowiana"
    },
    {
      "id": "264",
      "nombreComuPlaga": "ficus",
      "nombreCientificoPlaga": "Ficus benjamina"
    },
    {
      "id": "279",
      "nombreComuPlaga": "Firiguelo",
      "nombreCientificoPlaga": "Vigna unguiculata"
    },
    {
      "id": "10",
      "nombreComuPlaga": "Floripondio",
      "nombreCientificoPlaga": "Brugmancia sanguinea"
    },
    {
      "id": "123",
      "nombreComuPlaga": "Frailejón",
      "nombreCientificoPlaga": "Espeletia sp"
    },
    {
      "id": "135",
      "nombreComuPlaga": "Freesia",
      "nombreCientificoPlaga": "Freesia sp."
    },
    {
      "id": "90",
      "nombreComuPlaga": "Fresa, Frutilla",
      "nombreCientificoPlaga": "Fragaria vesca"
    },
    {
      "id": "18",
      "nombreComuPlaga": "Fréjol",
      "nombreCientificoPlaga": "Phaseolus vulgaris"
    },
    {
      "id": "129",
      "nombreComuPlaga": "Gandúl, Fréjol de palo",
      "nombreCientificoPlaga": "Cajanus cajan"
    },
    {
      "id": "156",
      "nombreComuPlaga": "Geranio",
      "nombreCientificoPlaga": "Geranium sp."
    },
    {
      "id": "157",
      "nombreComuPlaga": "Gerbera",
      "nombreCientificoPlaga": "Gerbera sp."
    },
    {
      "id": "449",
      "nombreComuPlaga": "gipson",
      "nombreCientificoPlaga": "gipson"
    },
    {
      "id": "113",
      "nombreComuPlaga": "Girasol",
      "nombreCientificoPlaga": "Helianthus annuus"
    },
    {
      "id": "218",
      "nombreComuPlaga": "Gladiolo",
      "nombreCientificoPlaga": "Gladiolus sp."
    },
    {
      "id": "158",
      "nombreComuPlaga": "Godethia",
      "nombreCientificoPlaga": "Godethia sp."
    },
    {
      "id": "139",
      "nombreComuPlaga": "Granada",
      "nombreCientificoPlaga": "Punica granatum"
    },
    {
      "id": "19",
      "nombreComuPlaga": "Granadilla",
      "nombreCientificoPlaga": "Passiflora ligularis"
    },
    {
      "id": "227",
      "nombreComuPlaga": "Grano almacenado de maíz",
      "nombreCientificoPlaga": "Zea mays"
    },
    {
      "id": "20",
      "nombreComuPlaga": "Guaba",
      "nombreCientificoPlaga": "Inga edulis"
    },
    {
      "id": "21",
      "nombreComuPlaga": "Guanábana",
      "nombreCientificoPlaga": "Annona muricata"
    },
    {
      "id": "22",
      "nombreComuPlaga": "Guayaba",
      "nombreCientificoPlaga": "Psidium guajava"
    },
    {
      "id": "271",
      "nombreComuPlaga": "Guayacán",
      "nombreCientificoPlaga": "Tabebuia chrysantha"
    },
    {
      "id": "47",
      "nombreComuPlaga": "Gypsophila",
      "nombreCientificoPlaga": "Gypsophila paniculata"
    },
    {
      "id": "23",
      "nombreComuPlaga": "Haba",
      "nombreCientificoPlaga": "Vicia faba"
    },
    {
      "id": "272",
      "nombreComuPlaga": "Harina de trigo",
      "nombreCientificoPlaga": "Triticum aestivum"
    },
    {
      "id": "140",
      "nombreComuPlaga": "Helechos",
      "nombreCientificoPlaga": "Tracheophyta sp."
    },
    {
      "id": "141",
      "nombreComuPlaga": "Heliconias",
      "nombreCientificoPlaga": "Heliconia chartacea"
    },
    {
      "id": "255",
      "nombreComuPlaga": "Hibiscos",
      "nombreCientificoPlaga": "Hibiscus rosa-sinensis"
    },
    {
      "id": "361",
      "nombreComuPlaga": "Hierbaluisa",
      "nombreCientificoPlaga": "Aloysia citriodora"
    },
    {
      "id": "160",
      "nombreComuPlaga": "Higo",
      "nombreCientificoPlaga": "Ficus carica"
    },
    {
      "id": "146",
      "nombreComuPlaga": "Hindú",
      "nombreCientificoPlaga": "Asminum multiflorum"
    },
    {
      "id": "114",
      "nombreComuPlaga": "Hypericum",
      "nombreCientificoPlaga": "Hypericum perforatum"
    },
    {
      "id": "48",
      "nombreComuPlaga": "Ibilán",
      "nombreCientificoPlaga": "Monima obtusifolia"
    },
    {
      "id": "71",
      "nombreComuPlaga": "Ixora",
      "nombreCientificoPlaga": "Ixora coccinea"
    },
    {
      "id": "207",
      "nombreComuPlaga": "Jacaranda",
      "nombreCientificoPlaga": "Jacaranda mimosifolia"
    },
    {
      "id": "147",
      "nombreComuPlaga": "Jack fruit",
      "nombreCientificoPlaga": "Artocarpus heterophyllus"
    },
    {
      "id": "328",
      "nombreComuPlaga": "Jengibre",
      "nombreCientificoPlaga": "Zingiber officinale"
    },
    {
      "id": "219",
      "nombreComuPlaga": "Jigua",
      "nombreCientificoPlaga": "Nectandra turbacensis"
    },
    {
      "id": "91",
      "nombreComuPlaga": "Jícama",
      "nombreCientificoPlaga": "Pachyrhizus erosus"
    },
    {
      "id": "429",
      "nombreComuPlaga": "Kales",
      "nombreCientificoPlaga": "Brassica oleracea"
    },
    {
      "id": "430",
      "nombreComuPlaga": "kikuyo",
      "nombreCientificoPlaga": "Pennisetum clandestinum"
    },
    {
      "id": "128",
      "nombreComuPlaga": "Laurel",
      "nombreCientificoPlaga": "Cordia alliodora"
    },
    {
      "id": "220",
      "nombreComuPlaga": "Lavanda",
      "nombreCientificoPlaga": "Lavandula angustifolia"
    },
    {
      "id": "125",
      "nombreComuPlaga": "Lechuga",
      "nombreCientificoPlaga": "Lactuca sativa"
    },
    {
      "id": "221",
      "nombreComuPlaga": "Leucadendron",
      "nombreCientificoPlaga": "Leucadendron sp."
    },
    {
      "id": "439",
      "nombreComuPlaga": "Leucospermum",
      "nombreCientificoPlaga": "Leucospermum sp."
    },
    {
      "id": "222",
      "nombreComuPlaga": "Liatris",
      "nombreCientificoPlaga": "Liatris sp."
    },
    {
      "id": "223",
      "nombreComuPlaga": "Lima",
      "nombreCientificoPlaga": "Citrus limetta"
    },
    {
      "id": "24",
      "nombreComuPlaga": "Limón",
      "nombreCientificoPlaga": "Citrus limon"
    },
    {
      "id": "132",
      "nombreComuPlaga": "Linaza",
      "nombreCientificoPlaga": "Linum usitatissimum"
    },
    {
      "id": "122",
      "nombreComuPlaga": "Lisianthus",
      "nombreCientificoPlaga": "Eustoma grandiflorum"
    },
    {
      "id": "431",
      "nombreComuPlaga": "Lysimachia",
      "nombreCientificoPlaga": "Lysimachia sp."
    },
    {
      "id": "215",
      "nombreComuPlaga": "Madera",
      "nombreCientificoPlaga": "Pigue sp."
    },
    {
      "id": "159",
      "nombreComuPlaga": "Malanga",
      "nombreCientificoPlaga": "Xanthosoma sagittifolium"
    },
    {
      "id": "440",
      "nombreComuPlaga": "Malva",
      "nombreCientificoPlaga": "Malva sp."
    },
    {
      "id": "72",
      "nombreComuPlaga": "Mamey",
      "nombreCientificoPlaga": "Pouteria sapota"
    },
    {
      "id": "83",
      "nombreComuPlaga": "Mamoncillo",
      "nombreCientificoPlaga": "Melicoccus bijugatus"
    },
    {
      "id": "26",
      "nombreComuPlaga": "Mandarina",
      "nombreCientificoPlaga": "Citrus reticulata"
    },
    {
      "id": "27",
      "nombreComuPlaga": "Mango",
      "nombreCientificoPlaga": "Mangifera indica"
    },
    {
      "id": "84",
      "nombreComuPlaga": "Manzana",
      "nombreCientificoPlaga": "Malus domestica"
    },
    {
      "id": "249",
      "nombreComuPlaga": "Manzano",
      "nombreCientificoPlaga": "Malus domestica"
    },
    {
      "id": "148",
      "nombreComuPlaga": "Maní",
      "nombreCientificoPlaga": "Arachis hypogaea"
    },
    {
      "id": "291",
      "nombreComuPlaga": "Maní de árbol",
      "nombreCientificoPlaga": "Caryodendron orinocense"
    },
    {
      "id": "142",
      "nombreComuPlaga": "Maracuyá",
      "nombreCientificoPlaga": "Passiflora edulis"
    },
    {
      "id": "25",
      "nombreComuPlaga": "Maíz",
      "nombreCientificoPlaga": "Zea mays"
    },
    {
      "id": "229",
      "nombreComuPlaga": "Maíz blanco",
      "nombreCientificoPlaga": "Zea mays"
    },
    {
      "id": "143",
      "nombreComuPlaga": "Melina",
      "nombreCientificoPlaga": "Gmelina arborea"
    },
    {
      "id": "144",
      "nombreComuPlaga": "Melon",
      "nombreCientificoPlaga": "Cucumis melo"
    },
    {
      "id": "441",
      "nombreComuPlaga": "Menta",
      "nombreCientificoPlaga": "Mentha sp"
    },
    {
      "id": "150",
      "nombreComuPlaga": "Mirtho",
      "nombreCientificoPlaga": "Myrtus sp."
    },
    {
      "id": "161",
      "nombreComuPlaga": "Moluccella",
      "nombreCientificoPlaga": "Moluccella sp."
    },
    {
      "id": "28",
      "nombreComuPlaga": "Mora",
      "nombreCientificoPlaga": "Rubus glaucus Benth"
    },
    {
      "id": "29",
      "nombreComuPlaga": "Naranja",
      "nombreCientificoPlaga": "Citrus X sinensis"
    },
    {
      "id": "30",
      "nombreComuPlaga": "Naranjilla",
      "nombreCientificoPlaga": "Solanum quitoense"
    },
    {
      "id": "247",
      "nombreComuPlaga": "Naranjo",
      "nombreCientificoPlaga": "Citrus sinensis"
    },
    {
      "id": "354",
      "nombreComuPlaga": "Neem",
      "nombreCientificoPlaga": "Azadirachta indica"
    },
    {
      "id": "81",
      "nombreComuPlaga": "Nogal",
      "nombreCientificoPlaga": "Juglans neotropica"
    },
    {
      "id": "226",
      "nombreComuPlaga": "Nuez",
      "nombreCientificoPlaga": "Juglans regia"
    },
    {
      "id": "31",
      "nombreComuPlaga": "Níspero",
      "nombreCientificoPlaga": "Eriobotrya japonica"
    },
    {
      "id": "73",
      "nombreComuPlaga": "Ornamentales",
      "nombreCientificoPlaga": "Ornamental sp."
    },
    {
      "id": "162",
      "nombreComuPlaga": "Ornithogalum",
      "nombreCientificoPlaga": "Ornithogalum sp-"
    },
    {
      "id": "53",
      "nombreComuPlaga": "Orquídea",
      "nombreCientificoPlaga": "Orchidaceae"
    },
    {
      "id": "163",
      "nombreComuPlaga": "Ovos",
      "nombreCientificoPlaga": "Spondias purpurea"
    },
    {
      "id": "54",
      "nombreComuPlaga": "Palma (cica)",
      "nombreCientificoPlaga": "Cycas revoluta"
    },
    {
      "id": "134",
      "nombreComuPlaga": "Palma aceitera, palma africana",
      "nombreCientificoPlaga": "Elaeis guineensis"
    },
    {
      "id": "74",
      "nombreComuPlaga": "Palma de coco",
      "nombreCientificoPlaga": "Cocos nucifera"
    },
    {
      "id": "225",
      "nombreComuPlaga": "palma ornamental, palma areca",
      "nombreCientificoPlaga": "Dypsis lutescens"
    },
    {
      "id": "435",
      "nombreComuPlaga": "Palmito",
      "nombreCientificoPlaga": "Chamaerops humilis"
    },
    {
      "id": "32",
      "nombreComuPlaga": "Papa",
      "nombreCientificoPlaga": "Solanum tuberosum"
    },
    {
      "id": "149",
      "nombreComuPlaga": "Papa China",
      "nombreCientificoPlaga": "Colocasia esculenta L."
    },
    {
      "id": "55",
      "nombreComuPlaga": "Papaya",
      "nombreCientificoPlaga": "Carica papaya"
    },
    {
      "id": "145",
      "nombreComuPlaga": "Pasto",
      "nombreCientificoPlaga": "Cynodon dactylon"
    },
    {
      "id": "56",
      "nombreComuPlaga": "Pepinillo",
      "nombreCientificoPlaga": "Cucumis sativus"
    },
    {
      "id": "75",
      "nombreComuPlaga": "Pepino",
      "nombreCientificoPlaga": "Cucumis sativus"
    },
    {
      "id": "86",
      "nombreComuPlaga": "Pera",
      "nombreCientificoPlaga": "Pyrus communis"
    },
    {
      "id": "76",
      "nombreComuPlaga": "Peregrina",
      "nombreCientificoPlaga": "Jatropha integerrima"
    },
    {
      "id": "196",
      "nombreComuPlaga": "Phlox",
      "nombreCientificoPlaga": "Phlox sp."
    },
    {
      "id": "33",
      "nombreComuPlaga": "Pimiento",
      "nombreCientificoPlaga": "Capsicum annuum"
    },
    {
      "id": "34",
      "nombreComuPlaga": "Pino",
      "nombreCientificoPlaga": "Pinus sp."
    },
    {
      "id": "432",
      "nombreComuPlaga": "Pirul",
      "nombreCientificoPlaga": "Schinus molle"
    },
    {
      "id": "438",
      "nombreComuPlaga": "Pitahaya Amarilla",
      "nombreCientificoPlaga": "Hylocereus megalanthus"
    },
    {
      "id": "60",
      "nombreComuPlaga": "Pitahaya Roja",
      "nombreCientificoPlaga": "Selenicereus undatus"
    },
    {
      "id": "130",
      "nombreComuPlaga": "Piña",
      "nombreCientificoPlaga": "Ananas comosus"
    },
    {
      "id": "326",
      "nombreComuPlaga": "Piñón",
      "nombreCientificoPlaga": "Jatropha curcas"
    },
    {
      "id": "35",
      "nombreComuPlaga": "Plátano",
      "nombreCientificoPlaga": "Musa paradisiaca"
    },
    {
      "id": "262",
      "nombreComuPlaga": "Poroto palo",
      "nombreCientificoPlaga": "Cajanus cajan"
    },
    {
      "id": "197",
      "nombreComuPlaga": "Protea",
      "nombreCientificoPlaga": "Protea sp."
    },
    {
      "id": "445",
      "nombreComuPlaga": "prueba",
      "nombreCientificoPlaga": "prueba"
    },
    {
      "id": "450",
      "nombreComuPlaga": "Prueba",
      "nombreCientificoPlaga": "Prueba001"
    },
    {
      "id": "451",
      "nombreComuPlaga": "Prueba",
      "nombreCientificoPlaga": "Prueba1"
    },
    {
      "id": "443",
      "nombreComuPlaga": "pruebas planta",
      "nombreCientificoPlaga": "pruebas planta"
    },
    {
      "id": "444",
      "nombreComuPlaga": "pruebas planta 1",
      "nombreCientificoPlaga": "pruebas planta 1"
    },
    {
      "id": "446",
      "nombreComuPlaga": "Pumamaqui",
      "nombreCientificoPlaga": "Oreopanax ecuadorensis"
    },
    {
      "id": "36",
      "nombreComuPlaga": "Quinua",
      "nombreCientificoPlaga": "Chenopodium quinoa"
    },
    {
      "id": "87",
      "nombreComuPlaga": "Quishuar",
      "nombreCientificoPlaga": "Buddleja incana"
    },
    {
      "id": "198",
      "nombreComuPlaga": "Ranunculus",
      "nombreCientificoPlaga": "Ranunculus sp."
    },
    {
      "id": "200",
      "nombreComuPlaga": "Rice flower",
      "nombreCientificoPlaga": "Ozothamnus diosmifolius"
    },
    {
      "id": "37",
      "nombreComuPlaga": "Rosa",
      "nombreCientificoPlaga": "Rosa sp."
    },
    {
      "id": "345",
      "nombreComuPlaga": "Ruda",
      "nombreCientificoPlaga": "Ruta graveolens"
    },
    {
      "id": "224",
      "nombreComuPlaga": "Ruscus",
      "nombreCientificoPlaga": "Ruscus sp."
    },
    {
      "id": "201",
      "nombreComuPlaga": "Sacha Inchi",
      "nombreCientificoPlaga": "Plukenetia volubilis L."
    },
    {
      "id": "92",
      "nombreComuPlaga": "Sandia",
      "nombreCientificoPlaga": "Citrullus lanatus"
    },
    {
      "id": "355",
      "nombreComuPlaga": "Scabiosa",
      "nombreCientificoPlaga": "Scabiosa sp."
    },
    {
      "id": "202",
      "nombreComuPlaga": "Senecio",
      "nombreCientificoPlaga": "Senecio sp."
    },
    {
      "id": "356",
      "nombreComuPlaga": "Snapdragon",
      "nombreCientificoPlaga": "Antirrhinum majus"
    },
    {
      "id": "203",
      "nombreComuPlaga": "Solidago",
      "nombreCientificoPlaga": "Solidago sp."
    },
    {
      "id": "155",
      "nombreComuPlaga": "Soya",
      "nombreCientificoPlaga": "Glycine max"
    },
    {
      "id": "206",
      "nombreComuPlaga": "Statice, limonium",
      "nombreCientificoPlaga": "Limonium sp."
    },
    {
      "id": "211",
      "nombreComuPlaga": "Stevia",
      "nombreCientificoPlaga": "Stevia rebaudiana"
    },
    {
      "id": "448",
      "nombreComuPlaga": "Supirrosa",
      "nombreCientificoPlaga": "Lantana camara"
    },
    {
      "id": "77",
      "nombreComuPlaga": "Tabaco",
      "nombreCientificoPlaga": "Nicotiana tabacum"
    },
    {
      "id": "124",
      "nombreComuPlaga": "Tagua",
      "nombreCientificoPlaga": "Phytelephas sp."
    },
    {
      "id": "234",
      "nombreComuPlaga": "Tamarindo",
      "nombreCientificoPlaga": "Tamarindus indica"
    },
    {
      "id": "38",
      "nombreComuPlaga": "Tarta",
      "nombreCientificoPlaga": "Adromischus cristatus"
    },
    {
      "id": "57",
      "nombreComuPlaga": "Taxo",
      "nombreCientificoPlaga": "Passiflora mollissima"
    },
    {
      "id": "78",
      "nombreComuPlaga": "Teca",
      "nombreCientificoPlaga": "Tectona grandis"
    },
    {
      "id": "39",
      "nombreComuPlaga": "Tomate de árbol",
      "nombreCientificoPlaga": "Solanum betaceum"
    },
    {
      "id": "58",
      "nombreComuPlaga": "Tomate riñón",
      "nombreCientificoPlaga": "Solanum lycopersicum"
    },
    {
      "id": "212",
      "nombreComuPlaga": "Toronja",
      "nombreCientificoPlaga": "Citrus aurantium"
    },
    {
      "id": "204",
      "nombreComuPlaga": "Trachelium",
      "nombreCientificoPlaga": "Trachelium sp."
    },
    {
      "id": "3",
      "nombreComuPlaga": "Trampa",
      "nombreCientificoPlaga": "No aplica"
    },
    {
      "id": "327",
      "nombreComuPlaga": "Trampa claudia",
      "nombreCientificoPlaga": "prunus domestica"
    },
    {
      "id": "274",
      "nombreComuPlaga": "Trampa-aguacate",
      "nombreCientificoPlaga": "Persea americana"
    },
    {
      "id": "244",
      "nombreComuPlaga": "Trampa-algarrobo",
      "nombreCientificoPlaga": "Ceratonia siliqua"
    },
    {
      "id": "269",
      "nombreComuPlaga": "Trampa-almendro",
      "nombreCientificoPlaga": "Prunus dulcis"
    },
    {
      "id": "232",
      "nombreComuPlaga": "Trampa-araucaria",
      "nombreCientificoPlaga": "Araucaria heterophylla"
    },
    {
      "id": "288",
      "nombreComuPlaga": "Trampa-arazá",
      "nombreCientificoPlaga": "Eugenia stipitata"
    },
    {
      "id": "349",
      "nombreComuPlaga": "Trampa-babaco",
      "nombreCientificoPlaga": "Carica pentagona"
    },
    {
      "id": "292",
      "nombreComuPlaga": "Trampa-badea",
      "nombreCientificoPlaga": "Passiflora quadrangularis"
    },
    {
      "id": "265",
      "nombreComuPlaga": "Trampa-banano",
      "nombreCientificoPlaga": "Musa paradisiaca"
    },
    {
      "id": "241",
      "nombreComuPlaga": "Trampa-barbasco",
      "nombreCientificoPlaga": "Lonchocarpus utilis"
    },
    {
      "id": "289",
      "nombreComuPlaga": "Trampa-borojo",
      "nombreCientificoPlaga": "Borojoa patinoi)"
    },
    {
      "id": "280",
      "nombreComuPlaga": "Trampa-caimito",
      "nombreCientificoPlaga": "Pouteria caimito"
    },
    {
      "id": "343",
      "nombreComuPlaga": "Trampa-cascol",
      "nombreCientificoPlaga": "Libidibia glabrata"
    },
    {
      "id": "231",
      "nombreComuPlaga": "Trampa-Cerezo",
      "nombreCientificoPlaga": "Prunus subg. Cerasus"
    },
    {
      "id": "236",
      "nombreComuPlaga": "Trampa-charan",
      "nombreCientificoPlaga": "Chloroleucon mangen"
    },
    {
      "id": "282",
      "nombreComuPlaga": "Trampa-Chirimoya",
      "nombreCientificoPlaga": "Annona cherimola"
    },
    {
      "id": "248",
      "nombreComuPlaga": "Trampa-ciruela",
      "nombreCientificoPlaga": "Prunus domestica"
    },
    {
      "id": "330",
      "nombreComuPlaga": "Trampa-cítrico",
      "nombreCientificoPlaga": "No informa"
    },
    {
      "id": "285",
      "nombreComuPlaga": "Trampa-durazno",
      "nombreCientificoPlaga": "Prunus persica"
    },
    {
      "id": "335",
      "nombreComuPlaga": "Trampa-ebano",
      "nombreCientificoPlaga": "Ebenopsis ebano"
    },
    {
      "id": "228",
      "nombreComuPlaga": "Trampa-faique",
      "nombreCientificoPlaga": "Acacia macracantha"
    },
    {
      "id": "233",
      "nombreComuPlaga": "Trampa-ficus",
      "nombreCientificoPlaga": "Ficus benjamina"
    },
    {
      "id": "290",
      "nombreComuPlaga": "Trampa-forestal",
      "nombreCientificoPlaga": "Forestal.sp"
    },
    {
      "id": "334",
      "nombreComuPlaga": "Trampa-frutilla",
      "nombreCientificoPlaga": "Fragaria ananassa"
    },
    {
      "id": "277",
      "nombreComuPlaga": "Trampa-Granada",
      "nombreCientificoPlaga": "Punica granatum"
    },
    {
      "id": "238",
      "nombreComuPlaga": "Trampa-Grosella",
      "nombreCientificoPlaga": "Ribes rubrum"
    },
    {
      "id": "254",
      "nombreComuPlaga": "Trampa-guaba",
      "nombreCientificoPlaga": "Inga edulis"
    },
    {
      "id": "342",
      "nombreComuPlaga": "Trampa-guaba bejuco",
      "nombreCientificoPlaga": "Inga vera"
    },
    {
      "id": "360",
      "nombreComuPlaga": "Trampa-Guaba machetona",
      "nombreCientificoPlaga": "Inga edulis"
    },
    {
      "id": "293",
      "nombreComuPlaga": "Trampa-guanabana",
      "nombreCientificoPlaga": "Annona muricata"
    },
    {
      "id": "347",
      "nombreComuPlaga": "Trampa-guasmo",
      "nombreCientificoPlaga": "Guazuma ulmifolia"
    },
    {
      "id": "263",
      "nombreComuPlaga": "Trampa-guayaba",
      "nombreCientificoPlaga": "Psidium guajava"
    },
    {
      "id": "239",
      "nombreComuPlaga": "Trampa-Guásimo",
      "nombreCientificoPlaga": "Guazuma ulmifolia"
    },
    {
      "id": "235",
      "nombreComuPlaga": "Trampa-Hualtaco",
      "nombreCientificoPlaga": "Loxopterigium huasango"
    },
    {
      "id": "344",
      "nombreComuPlaga": "Trampa-leucaena",
      "nombreCientificoPlaga": "Leucaena leucocephala"
    },
    {
      "id": "281",
      "nombreComuPlaga": "Trampa-Lima",
      "nombreCientificoPlaga": "Citrus limetta"
    },
    {
      "id": "251",
      "nombreComuPlaga": "Trampa-limón",
      "nombreCientificoPlaga": "Citrus limonum"
    },
    {
      "id": "286",
      "nombreComuPlaga": "Trampa-limón rugoso",
      "nombreCientificoPlaga": "Citrus jambhiri Lush."
    },
    {
      "id": "333",
      "nombreComuPlaga": "Trampa-luma",
      "nombreCientificoPlaga": "Pouteria lucuma"
    },
    {
      "id": "278",
      "nombreComuPlaga": "Trampa-madera",
      "nombreCientificoPlaga": "Pigue sp."
    },
    {
      "id": "350",
      "nombreComuPlaga": "Trampa-mamey",
      "nombreCientificoPlaga": "Pouteria sapota"
    },
    {
      "id": "270",
      "nombreComuPlaga": "Trampa-mandarina",
      "nombreCientificoPlaga": "Citrus reticulata"
    },
    {
      "id": "253",
      "nombreComuPlaga": "Trampa-mango",
      "nombreCientificoPlaga": "Mangifera indica"
    },
    {
      "id": "283",
      "nombreComuPlaga": "Trampa-Manzana",
      "nombreCientificoPlaga": "Malus domestica"
    },
    {
      "id": "267",
      "nombreComuPlaga": "Trampa-maracuya",
      "nombreCientificoPlaga": "Passiflora edulis"
    },
    {
      "id": "230",
      "nombreComuPlaga": "Trampa-matapalo",
      "nombreCientificoPlaga": "Ficus costaricana"
    },
    {
      "id": "340",
      "nombreComuPlaga": "Trampa-mercado",
      "nombreCientificoPlaga": "N/A"
    },
    {
      "id": "346",
      "nombreComuPlaga": "Trampa-mora",
      "nombreCientificoPlaga": "Rubus glaucus"
    },
    {
      "id": "252",
      "nombreComuPlaga": "Trampa-naranja",
      "nombreCientificoPlaga": "Citrus sinensis"
    },
    {
      "id": "359",
      "nombreComuPlaga": "Trampa-naranja agria",
      "nombreCientificoPlaga": "Citrus sinensis"
    },
    {
      "id": "260",
      "nombreComuPlaga": "Trampa-Naranja dulce",
      "nombreCientificoPlaga": "Citrus sinensis"
    },
    {
      "id": "336",
      "nombreComuPlaga": "Trampa-neem",
      "nombreCientificoPlaga": "Azadirachta indica"
    },
    {
      "id": "338",
      "nombreComuPlaga": "Trampa-niguito",
      "nombreCientificoPlaga": "Muntingia calabura"
    },
    {
      "id": "273",
      "nombreComuPlaga": "Trampa-noni",
      "nombreCientificoPlaga": "Morinda citrifolia"
    },
    {
      "id": "266",
      "nombreComuPlaga": "Trampa-níspero",
      "nombreCientificoPlaga": "Eriobotrya japonica"
    },
    {
      "id": "287",
      "nombreComuPlaga": "Trampa-ornamental",
      "nombreCientificoPlaga": "Ornamental sp."
    },
    {
      "id": "242",
      "nombreComuPlaga": "Trampa-Overal",
      "nombreCientificoPlaga": "Cordia lutea"
    },
    {
      "id": "329",
      "nombreComuPlaga": "Trampa-palma",
      "nombreCientificoPlaga": "No informa"
    },
    {
      "id": "337",
      "nombreComuPlaga": "Trampa-palo santo",
      "nombreCientificoPlaga": "Bursera graveolens"
    },
    {
      "id": "268",
      "nombreComuPlaga": "Trampa-Papaya",
      "nombreCientificoPlaga": "Carica papaya"
    },
    {
      "id": "339",
      "nombreComuPlaga": "Trampa-pechiche",
      "nombreCientificoPlaga": "Vitex gigantea"
    },
    {
      "id": "331",
      "nombreComuPlaga": "Trampa-pera",
      "nombreCientificoPlaga": "Pyrus communis"
    },
    {
      "id": "245",
      "nombreComuPlaga": "Trampa-pitahaya",
      "nombreCientificoPlaga": "Selenicereus undatus"
    },
    {
      "id": "353",
      "nombreComuPlaga": "Trampa-sandia",
      "nombreCientificoPlaga": "Citrullus lanatus"
    },
    {
      "id": "351",
      "nombreComuPlaga": "Trampa-shawi",
      "nombreCientificoPlaga": "Plinia inflata"
    },
    {
      "id": "257",
      "nombreComuPlaga": "Trampa-Tamarindo",
      "nombreCientificoPlaga": "Tamarindus indica"
    },
    {
      "id": "284",
      "nombreComuPlaga": "Trampa-tomate de árbol",
      "nombreCientificoPlaga": "Solanum betaceum"
    },
    {
      "id": "332",
      "nombreComuPlaga": "Trampa-toronja",
      "nombreCientificoPlaga": "Citrus paradisi"
    },
    {
      "id": "341",
      "nombreComuPlaga": "Trampa-uva de mesa",
      "nombreCientificoPlaga": "Vitis vinífera"
    },
    {
      "id": "357",
      "nombreComuPlaga": "Trampa-Uvilla",
      "nombreCientificoPlaga": "Physalis peruviana"
    },
    {
      "id": "348",
      "nombreComuPlaga": "Trampa-zapallo",
      "nombreCientificoPlaga": "Cucurbita moschata"
    },
    {
      "id": "276",
      "nombreComuPlaga": "Trampa-zapote",
      "nombreCientificoPlaga": "Pouteria sapota"
    },
    {
      "id": "40",
      "nombreComuPlaga": "Trebol",
      "nombreCientificoPlaga": "Trifolium repens"
    },
    {
      "id": "133",
      "nombreComuPlaga": "Trigo",
      "nombreCientificoPlaga": "Triticum estivum"
    },
    {
      "id": "88",
      "nombreComuPlaga": "Tuna",
      "nombreCientificoPlaga": "Opuntia ficus-indica"
    },
    {
      "id": "41",
      "nombreComuPlaga": "Uva",
      "nombreCientificoPlaga": "Vitis vinifera"
    },
    {
      "id": "59",
      "nombreComuPlaga": "Uvilla",
      "nombreCientificoPlaga": "Physalis peruviana"
    },
    {
      "id": "89",
      "nombreComuPlaga": "Vainilla",
      "nombreCientificoPlaga": "Vainilla"
    },
    {
      "id": "103",
      "nombreComuPlaga": "Vainita",
      "nombreCientificoPlaga": "Phaseolus vulgaris L."
    },
    {
      "id": "199",
      "nombreComuPlaga": "Veronica",
      "nombreCientificoPlaga": "Veronica sp."
    },
    {
      "id": "358",
      "nombreComuPlaga": "Vicia",
      "nombreCientificoPlaga": "Vicia sp."
    },
    {
      "id": "79",
      "nombreComuPlaga": "Yuca",
      "nombreCientificoPlaga": "Manihot esculenta"
    },
    {
      "id": "42",
      "nombreComuPlaga": "Zanahoria",
      "nombreCientificoPlaga": "Daucus carota"
    },
    {
      "id": "259",
      "nombreComuPlaga": "Zanahoria blanca",
      "nombreCientificoPlaga": "Arracacia xanthorrhiza Bancr"
    },
    {
      "id": "80",
      "nombreComuPlaga": "Zapallo",
      "nombreCientificoPlaga": "Cucurbita maxima"
    },
    {
      "id": "154",
      "nombreComuPlaga": "Zapote",
      "nombreCientificoPlaga": "Pouteria sapota"
    },
    {
      "id": "237",
      "nombreComuPlaga": "Zarandaja",
      "nombreCientificoPlaga": "Lablab purpureus"
    },
    {
      "id": "352",
      "nombreComuPlaga": "Zarcillo",
      "nombreCientificoPlaga": "Fuchsia sp."
    },
    {
      "id": "208",
      "nombreComuPlaga": "Zuquini",
      "nombreCientificoPlaga": "Cucurbita pepo"
    }
  ]
}