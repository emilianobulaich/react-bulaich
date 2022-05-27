//@ts-check
const listaItems = [
  {
    id: 1,
    category: "procesador",
    title: "Procesador Amd Ryzen 5 3600 4.2 Ghz - AM4",
    description: [
      "Marca : AMD",
      "Marca : AMDLínea : Ryzen",
      " Modelo : Ryzen 5 3600",
      " P/N : 100-100000031BOX ",
      "Caché : 32 MB ",
      "Cantidad de núcleos : 6 ",
      "Tipos de memoria RAM soportadas : DDR4 ",
      "Máximo de memoria RAM soportada: 128 GB ",
      "Arquitectura : Zen2 ",
      "Frecuencia mínima de reloj : 3.6 GHz ",
      "Frecuencia máxima de reloj : 4.2 GHz ",
      "Solución térmica : Wraith Stealth ",
      "TDP/TDP predeterminado : 65W ",
      "Velocidad máxima de memoria : 3200MHz",
    ],
    price: 5907,
    pictureUrl: "https://mexx-img-2019.s3.amazonaws.com/36329_2.jpeg",
    stock: 5,
  },
  {
    id: 2,
    category: "procesador",
    title: " Procesador Amd Ryzen 5 5500 4.2 Ghz - AM4 Sin Gpu",
    description: [
      "Marca : AMDLínea : Ryzen 5 ",
      "Modelo : 5500 ",
      "Modelo alfanumérico : 100-100000457BOX ",
      "UPC : 730143314121 ",
      "GPU integrado : No ",
      "Caché : 16 MB",
      "Cantidad de núcleos de CPU : 6 ",
      "Hilos : 12",
      "Tipos de memoria RAM soportadas : DDR4",
      "Cantidad de RAM soportada : 128 GB",
      "Socket : AM4",
      "Frecuencia mínima de reloj : 3,6 GHz",
      "Frecuencia máxima de reloj : 4,2 GHz",
      "Desbloqueado para OC : Si",
      "Accesorios incluidos : Air cooler ",
      "TDP : 65W",
    ],
    price: 24549,
    pictureUrl:
      "https://mexx-img-2019.s3.amazonaws.com/Procesador-Amd-Ryzen-5-5500_42560_1.jpeg",
    stock: 4,
  },
  {
    id: 3,
    category: "procesador",
    title:
      "Procesador Intel Core i7 11700KF 5.0 Ghz Rocket Lake 1200 Sin Cooler Sin Gp",
    description: [
      "Marca : Intel",
      "Línea : Core i7",
      " Modelo : i7-11700KF",
      " Modelo alfanumérico : BX8070811700KFUPC ",
      "UPC : 735858478199GPU ",
      "CPU integrado : No ",
      "Caché : 16 MB ",
      "Cantidad de núcleos de CPU : 8",
      "Tipos de memoria RAM soportadas : DDR4",
      "Cantidad de RAM soportada : 128 GB",
      "Socket : LGA1200 ",
      "Frecuencia mínima de reloj : 3,6 GHz ",
      "Frecuencia máxima de reloj : 5.0 GHz ",
      " Desbloqueado para OC : Si ",
      "Accesorios incluidos : No",
      "TDP : 125W",
    ],
    price: 59499,
    pictureUrl:
      "https://mexx-img-2019.s3.amazonaws.com/procesador-i7-rocket_39853_1.jpeg",
    stock: 7,
  },
  {
    id: 4,
    category: "motherboard",
    title: "Motherboard AM4 - Msi A320M-A PRO MAX",
    description: [
      "Marca : MSI",
      "Modelo : A320M-A PRO MAX",
      "Socket : AM4UPC : 824142189719",
      "Chipset : AMD A320 Chipset",
      "Fuente : ATXMemoria : DDR4 1866/ 2133/ 2400/ 2667/ 2933(OC)/ 3200(OC)Mhz",
      "Pci-e x16 : 1",
      "Pci-e x1 : 1",
      "Pci : No",
      "Vga : No",
      "Dvi : 1",
      "DVI-DHdmi : 1",
      "Sonido : Realtek ALC892 Codec",
      "Red : Realtek 8111H Gigabit LAN controller",
      "Ps2 : 2",
      "Usb traseros : 6 ( 2 x 2.0 + 4 x 3.2 )",
      "Usb internos : 6 ( 4 x 2.0 + 2 x 3.2 )",
      "Wifi : No",
      "Bluetooth : No",
      "Optica : No",
    ],
    price: 6499,
    pictureUrl: "https://mexx-img-2019.s3.amazonaws.com/37075_1.jpeg",
    stock: 10,
  },
  {
    id: 5,
    category: "motherboard",
    title: "Motherboard AM4 - Msi A520M-A PRO",
    description: [
      "Marca : ASUS",
      "Modelo : A520M-A",
      "Socket : AM4",
      "Chipset : AMD B550",
      "Fuente : ATX",
      "Memoria : 2 x DIMM, Max. 64GB, DDR4 2667/ 2800 /2933 /3000 /3066 /3200 /3466 /3600/ 3733 /3866 /4000 /4133 /4266 /4400/ 4600+ MHz",
      "Pci-e x16 : 2",
      "Pci-e x1 : 1",
      "Pci : No",
      "Vga : No",
      "Dvi : 1",
      "Hdmi : 1",
      "DisplayPort : No",
      "Sonido : Realtek ALC892/ALC897",
      "Red : 10/100/1000*1",
      "Ps2 : 2",
      "Usb traseros : 6 ( 2 x 2.0 + 4 x 3.2 )",
      "Usb internos : 6 ( 2 x 3.2 + 4 x 2.0 )",
      "Wifi : No",
      "Bluetooth : No",
      "Optica : No",
    ],
    price: 10049,
    pictureUrl: "https://mexx-img-2019.s3.amazonaws.com/38688_1.jpeg",
    stock: 23,
  },
  {
    id: 6,
    category: "motherboard",
    title: "Motherboard AM4 - Msi B550 GAMING CARBON WIFI",
    description: [
      "Marca : MSI",
      "Modelo : MPG B550 GAMING CARBON WIFI",
      "UPC : 4719072741051",
      "Socket : AM4",
      "Chipset : AMD B550",
      "Fuente : ATX",
      "Memoria : 4 x DIMM, Max. 128GB, DDR4 1866/ 2133/ 2400 / 2667/ 2800 /2933 /3000 /3066 /3200 /3466 /3600/ 3733 /3866 /4000 /4133 /4266 /4400 /4533 /4600 /4733 /4800 /4866+ MHz by A-XMP OC MODE",
      "Pci-e x16 : 2",
      "Pci-e x1 : 3",
      "Pci : No",
      "Vga : No",
      "Dvi : No",
      "Hdmi : 1",
      "DisplayPort : 1",
      "Sonido : Realtek ALC1200",
      "Red : 10/100/1000*1",
      "Ps2 : 1",
      "Usb traseros : 8 ( 4 x 2.0 + 3 x 3.2 + 1 x USB-C )",
      "Usb internos : 6 ( 4 x 2.0 + 2 x 3.2 + 1 x USB-C )",
      "Wifi : Si",
      "Bluetooth : Si",
      "Optica : Si",
    ],
    price: 38599,
    pictureUrl:
      "https://mexx-img-2019.s3.amazonaws.com/motherboard-msi-gaming-rgb-gamer-wifi_42398_1.jpeg?v797",
    stock: 21,
  },

  {
    id: 7,
    category: "gabinete",
    title: "Gabinete Mini Tower Sentey R20-SF Rgb",
    description: [
      "Marca : Sentey",
      "Modelo : R20",
      "P/N : R20-SF",
      "UPC : 812366026637",
      "Formatos de mother compatibles : ATX, Micro ATX, MINI ITX",
      "Color Exterior : Negro",
      "Color Interior : Negro",
      "Ventana : Si",
      "Fuente : No",
      "Display : No",
      "Usb : 3.0 x 1 + 2.0 x 2",
      "Audio/Mic : HD Audio x 1",
      "Card Reader : Si",
      "Ubicacion de la fuente : Abajo",
      "Ubicacion de botones : Superior",
      "Iluminacion : RGB",
      "Cooler Superior soportado : 2 x 120 mm (no incluidos)",
      "Cooler Frontal soportado : 3 x 120 mm o 2 x 180 mm (no incluidos)",
      "Cooler Trasero soportado : 1 x 120/160 mm (no incluido)",
    ],
    price: 4659,
    pictureUrl:
      "https://mexx-img-2019.s3.amazonaws.com/gabinete-gamer-sentey-rgb_41987_1.jpeg",
    stock: 9,
  },
  {
    id: 8,
    category: "gabinete",
    title: " Gabinete Mid Tower Sentey K20 Super Rgb Vidrio Templado",
    description: [
      "Marca : Sentey",
      "Modelo : K20 Super",
      "P/N : 6300-SF",
      "UPC : 812366025098",
      "Formatos de mother compatibles : ATX, M-ATX",
      "Color Exterior : Negro",
      "Color Interior : Negro",
      "Ventana : SiFuente : No",
      "Display : NoUsb : 3.0 x 2 + 2.0 x 1",
      "Audio/Mic : HD Audio x 1",
      "Card Reader : No",
      "Ubicacion de la fuente : Abajo",
      "Ubicacion de botones : Superior",
      "Iluminacion : RGB",
      "Cooler Superior soportado : 2 x 120 mm (no incluidos)",
      "Cooler Frontal soportado : 3x120mm ARGB (incluidos)",
      "Cooler Trasero soportado : 1 x 120 mm ARGB (incluido)",
      "Cooler Inferior soportado : No",
    ],
    price: 9399,
    pictureUrl:
      "https://mexx-img-2019.s3.amazonaws.com/gabinete-sentey_41991_5.jpeg?v322",
    stock: 11,
  },
  {
    id: 9,
    category: "gabinete",
    title: "Gabinete Mini Tower Sentey F10 Rgb",
    description: [
      "Marca : Sentey",
      "Modelo : F10",
      "P/N : FS10",
      "UPC : 812366026354",
      "Formatos de mother compatibles : Micro Atx , Mini ITX",
      "Color Exterior : Negro",
      "Color Interior : Negro",
      "Ventana : Si",
      "Fuente : No",
      "Display : No",
      "Usb : 3.0 x 1 + 2.0 x 1",
      "Audio/Mic : HD Audio x 1",
      "Card Reader : No",
      "Ubicacion de la fuente : Superior",
      "Ubicacion de botones : Superior",
      "Iluminacion : RGB",
      "Cooler Superior soportado : No",
      "Cooler Frontal soportado : 1 x 120 mm (no incluido)",
      "Cooler Trasero soportado : 1 x 80 mm (no incluido)",
      "Cooler Inferior soportado : No",
    ],
    price: 4299,
    pictureUrl:
      "https://mexx-img-2019.s3.amazonaws.com/gabinete-gamer-sentey-rgb_41988_1.jpeg",
    stock: 25,
  },
];
export { listaItems };
