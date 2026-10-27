// Data supermarket dan katalog produk Indonesia yang realistis
export const REGION_SUPERMARKETS = {
  "Jakarta Pusat": ["Lotte Mart", "Family Mart", "Indomaret", "Alfamart", "Alfamidi"],
  "Jakarta Selatan": ["Lotte Mart", "Family Mart", "Indomaret", "Alfamart", "Alfamidi"],
  "Bandung": ["Lotte Mart", "Indomaret", "Alfamart", "Alfamidi"],
  "Surabaya": ["Lotte Mart", "Family Mart", "Indomaret", "Alfamart", "Alfamidi"],
  "Yogyakarta": ["Lotte Mart", "Indomaret", "Alfamart"],
  "Denpasar": ["Lotte Mart", "Indomaret", "Alfamart", "Alfamidi"]
};

export const SUPERMARKET_PRODUCTS = {
  "Lotte Mart": [
    {
      id: "lm-1",
      name: "Sabun Pembersih Lantai 750ml",
      category: "Alat Kebersihan",
      price: 20000,
      discount: 0.25, // 25% (Harga setelah diskon: Rp 15.000)
      trend: "down",
      lastMonthPrice: 22000,
      image: "https://images.unsplash.com/photo-1585670270608-b404fb880719?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "lm-2",
      name: "Wajan Teflon Anti Lengket 24cm",
      category: "Peralatan Dapur",
      price: 100000,
      discount: 0.60, // 50% + 20% compound discount -> net 60% (Harga setelah diskon: Rp 40.000)
      discountLabel: "-50% + 20%",
      trend: "down",
      lastMonthPrice: 120000,
      image: "https://images.unsplash.com/photo-1584990347449-3994e43f1107?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "lm-3",
      name: "Filma Minyak Goreng Pouch 2L",
      category: "Kebutuhan Pokok",
      price: 20000, // Harga awal diubah menjadi 20.000
      discount: 0.10,
      trend: "down",
      lastMonthPrice: 22000,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "lm-4",
      name: "Telur Ayam Negeri Fresh 10 Butir",
      category: "Kebutuhan Pokok",
      price: 32000, // Harga naik dibanding bulan lalu
      discount: 0,
      trend: "up", // ⬆ Naik
      lastMonthPrice: 28000,
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "lm-5",
      name: "Beras Pandan Wangi Premium 5kg",
      category: "Beras",
      price: 78000, // Harga naik dibanding bulan lalu
      discount: 0,
      trend: "up", // ⬆ Naik
      lastMonthPrice: 72000,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "lm-6",
      name: "Binggrae Banana Milk 200ml",
      category: "Minuman",
      price: 14500,
      discount: 0.15,
      trend: "same",
      lastMonthPrice: 14500,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "lm-7",
      name: "Samyang Buldak Hot Chicken Ramen 140g",
      category: "Makanan Siap Saji",
      price: 18500,
      discount: 0,
      trend: "up",
      lastMonthPrice: 17000,
      image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "lm-8",
      name: "Lotte Mart US Beef Shortplate 300g",
      category: "Daging Segar",
      price: 65000,
      discount: 0.12,
      trend: "down",
      lastMonthPrice: 72000,
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&auto=format&fit=crop&q=80"
    }
  ],
  "Family Mart": [
    {
      id: "fm-1",
      name: "FamiCafe Kopi Susu Keluarga",
      category: "Minuman",
      price: 18000,
      discount: 0.20, // 20%
      trend: "down", // ⬇︎ green
      lastMonthPrice: 20000,
      image: "https://www.familymartindonesia.com/static/media/americano-series.d11b5f2c8c8fa083d3f0.png"
    },
    {
      id: "fm-2",
      name: "Crispy chicken korean buldak",
      category: "Makanan Siap Saji",
      price: 26000,
      discount: 0.15, // 15%
      trend: "up", // ⬆ red
      lastMonthPrice: 24000,
      image: "https://www.familymartindonesia.com/static/media/chrispy-chicken-korean-buldak.8cbf3b7cf8f3c70f0e80.png"
    },
    {
      id: "fm-3",
      name: "Onigiri Salmon Mayo",
      category: "Makanan Siap Saji",
      price: 15000,
      discount: 0,
      trend: "same", // = yellow
      lastMonthPrice: 15000,
      image: "https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-4",
      name: "Sofuto Matcha Ice Cream",
      category: "Dessert",
      price: 12000,
      discount: 0.25, // 25%
      trend: "down", // ⬇︎
      lastMonthPrice: 14000,
      image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-5",
      name: "Ultra Milk Rasa Cokelat 250ml",
      category: "Minuman",
      price: 7500,
      discount: 0,
      trend: "same",
      lastMonthPrice: 7500,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-6",
      name: "Choco Mania",
      category: "Snack",
      price: 8900,
      discount: 0.11, // 11% ((10000 - 8900) / 10000)
      trend: "down",
      lastMonthPrice: 10000,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-7",
      name: "Pokka Green Tea No Sugar 450ml",
      category: "Minuman",
      price: 8900,
      discount: 0,
      trend: "down",
      lastMonthPrice: 9500,
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-8",
      name: "French Fries BBQ Family Mart",
      category: "Snack",
      price: 16000,
      discount: 0.12,
      trend: "up",
      lastMonthPrice: 15000,
      image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-9",
      name: "Sabun Pembersih Lantai 750ml",
      category: "Alat Kebersihan",
      price: 20000,
      discount: 0.25, // 25%
      trend: "down",
      lastMonthPrice: 22000,
      image: "https://images.unsplash.com/photo-1585670270608-b404fb880719?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-10",
      name: "Wajan Teflon Anti Lengket 24cm",
      category: "Peralatan Dapur",
      price: 100000,
      discount: 0.60, // 50% + 20%
      discountLabel: "-50% + 20%",
      trend: "down",
      lastMonthPrice: 120000,
      image: "https://images.unsplash.com/photo-1584990347449-3994e43f1107?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-11",
      name: "Telur Ayam Omega Fresh 10 Butir",
      category: "Kebutuhan Pokok",
      price: 33000, // Harga naik dibanding bulan lalu
      discount: 0,
      trend: "up",
      lastMonthPrice: 29000,
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "fm-12",
      name: "Beras Japonica Premium 2kg",
      category: "Beras",
      price: 46000, // Harga naik dibanding bulan lalu
      discount: 0,
      trend: "up",
      lastMonthPrice: 41000,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&auto=format&fit=crop&q=80"
    }
  ],
  "Indomaret": [
    {
      id: "in-1",
      name: "Point Coffee Iced Palm Sugar",
      category: "Minuman",
      price: 25000,
      discount: 0.20,
      trend: "down",
      lastMonthPrice: 28000,
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-2",
      name: "Sari Roti Tawar Spesial Kupas",
      category: "Roti",
      price: 16500,
      discount: 0,
      trend: "up",
      lastMonthPrice: 15000,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-3",
      name: "Indomie Mi Instan Goreng 85g",
      category: "Mie Instan",
      price: 3500,
      discount: 0.14, // Rp 3.010
      trend: "same",
      lastMonthPrice: 3500,
      image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-4",
      name: "Sania Minyak Goreng Pouch 2L",
      category: "Kebutuhan Pokok",
      price: 20000, // Harga awal diubah menjadi 20.000
      discount: 0.10,
      trend: "down",
      lastMonthPrice: 22000,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-5",
      name: "Say Bread Choco Danish Croissant",
      category: "Roti",
      price: 13500,
      discount: 0,
      trend: "same",
      lastMonthPrice: 13500,
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-6",
      name: "Aqua Air Mineral Botol 600ml",
      category: "Minuman",
      price: 4000,
      discount: 0,
      trend: "same",
      lastMonthPrice: 4000,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-7",
      name: "Chitato Sapi Panggang 68g",
      category: "Snack",
      price: 11500,
      discount: 0.15,
      trend: "up",
      lastMonthPrice: 10500,
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-8",
      name: "Indomaret Facial Tissue 220s",
      category: "Rumah Tangga",
      price: 14900,
      discount: 0.25,
      trend: "down",
      lastMonthPrice: 16500,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-9",
      name: "Sabun Pembersih Lantai 750ml",
      category: "Alat Kebersihan",
      price: 20000,
      discount: 0.25, // 25% (Harga setelah diskon: Rp 15.000)
      trend: "down",
      lastMonthPrice: 22000,
      image: "https://images.unsplash.com/photo-1585670270608-b404fb880719?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-10",
      name: "Wajan Teflon Anti Lengket 24cm",
      category: "Peralatan Dapur",
      price: 100000,
      discount: 0.60, // 50% + 20%
      discountLabel: "-50% + 20%",
      trend: "down",
      lastMonthPrice: 120000,
      image: "https://images.unsplash.com/photo-1584990347449-3994e43f1107?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-11",
      name: "Telur Ayam Negeri Pack 10 Butir",
      category: "Kebutuhan Pokok",
      price: 31000, // Harga naik dibanding bulan lalu
      discount: 0,
      trend: "up",
      lastMonthPrice: 27500,
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "in-12",
      name: "Beras Premium Sania 5kg",
      category: "Beras",
      price: 74500, // Harga naik dibanding bulan lalu
      discount: 0,
      trend: "up",
      lastMonthPrice: 70000,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&auto=format&fit=crop&q=80"
    }
  ],
  "Alfamart": [
    {
      id: "al-1",
      name: "Bimoli Minyak Goreng Pouch 2L",
      category: "Kebutuhan Pokok",
      price: 20000, // Harga awal diubah menjadi 20.000
      discount: 0.15,
      trend: "down",
      lastMonthPrice: 22000,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-2",
      name: "Telur Ayam Omega 10 Butir",
      category: "Kebutuhan Pokok",
      price: 32000, // Harga naik dibanding bulan lalu
      discount: 0,
      trend: "up", // ⬆ Naik
      lastMonthPrice: 29000,
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-3",
      name: "Ultra Milk Susu Cair UHT Cokelat 1L",
      category: "Minuman",
      price: 21500,
      discount: 0.10,
      trend: "same",
      lastMonthPrice: 21500,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-4",
      name: "SilverQueen Cokelat Almond 58g",
      category: "Snack",
      price: 17500,
      discount: 0.20,
      trend: "down",
      lastMonthPrice: 19000,
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-5",
      name: "Indomie Goreng Ayam Geprek",
      category: "Mie Instan",
      price: 3500,
      discount: 0,
      trend: "up",
      lastMonthPrice: 3200,
      image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-6",
      name: "Good Day Cappuccino 5x25g",
      category: "Kopi",
      price: 12000,
      discount: 0.15,
      trend: "same",
      lastMonthPrice: 12000,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-7",
      name: "Sunlight Pencuci Piring Jeruk Nipis 650ml",
      category: "Rumah Tangga",
      price: 16500,
      discount: 0.18,
      trend: "down",
      lastMonthPrice: 18000,
      image: "https://images.unsplash.com/photo-1585670270608-b404fb880719?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-8",
      name: "Alfamart Air Mineral 600ml",
      category: "Minuman",
      price: 3500,
      discount: 0,
      trend: "same",
      lastMonthPrice: 3500,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-9",
      name: "Sabun Pembersih Lantai 750ml",
      category: "Alat Kebersihan",
      price: 20000,
      discount: 0.25, // 25% (Harga setelah diskon: Rp 15.000)
      trend: "down",
      lastMonthPrice: 22000,
      image: "https://images.unsplash.com/photo-1585670270608-b404fb880719?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-10",
      name: "Wajan Teflon Anti Lengket 24cm",
      category: "Peralatan Dapur",
      price: 100000,
      discount: 0.60, // 50% + 20%
      discountLabel: "-50% + 20%",
      trend: "down",
      lastMonthPrice: 120000,
      image: "https://images.unsplash.com/photo-1584990347449-3994e43f1107?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "al-11",
      name: "Beras Setra Ramos Alfamart 5kg",
      category: "Beras",
      price: 74000, // Harga naik dibanding bulan lalu
      discount: 0,
      trend: "up",
      lastMonthPrice: 69500,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&auto=format&fit=crop&q=80"
    }
  ],
  "Alfamidi": [
    {
      id: "md-1",
      name: "Apel Fuji Manis Segar 1kg",
      category: "Buah & Sayur",
      price: 45000,
      discount: 0.20,
      trend: "down",
      lastMonthPrice: 50000,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-2",
      name: "Daging Sapi Beef Slice Sukiyaki 250g",
      category: "Daging Segar",
      price: 52000,
      discount: 0.10,
      trend: "up",
      lastMonthPrice: 48000,
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-3",
      name: "Cimory Fresh Milk Pasteurisasi 950ml",
      category: "Susu Segar",
      price: 24500,
      discount: 0,
      trend: "same",
      lastMonthPrice: 24500,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-4",
      name: "Pisang Cavendish Fresh Pack",
      category: "Buah & Sayur",
      price: 22000,
      discount: 0.15,
      trend: "down",
      lastMonthPrice: 25000,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-5",
      name: "Midi Fresh Salmon Fillet 200g",
      category: "Ikan Segar",
      price: 68000,
      discount: 0.12,
      trend: "up",
      lastMonthPrice: 62000,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-6",
      name: "Beras Premium Midi Topi Koki 5kg",
      category: "Beras",
      price: 74000, // Harga naik dibanding bulan lalu
      discount: 0,
      trend: "up", // ⬆ Naik
      lastMonthPrice: 71000,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-7",
      name: "Roti Sisir Mentega Midi Bakery",
      category: "Bakery",
      price: 11500,
      discount: 0.20,
      trend: "same",
      lastMonthPrice: 11500,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-8",
      name: "Kecap Manis Bango Botol 550ml",
      category: "Bumbu Dapur",
      price: 26000,
      discount: 0.10,
      trend: "down",
      lastMonthPrice: 28000,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-9",
      name: "Sabun Pembersih Lantai 750ml",
      category: "Alat Kebersihan",
      price: 20000,
      discount: 0.25, // 25% (Harga setelah diskon: Rp 15.000)
      trend: "down",
      lastMonthPrice: 22000,
      image: "https://images.unsplash.com/photo-1585670270608-b404fb880719?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-10",
      name: "Wajan Teflon Anti Lengket 24cm",
      category: "Peralatan Dapur",
      price: 100000,
      discount: 0.60, // 50% + 20%
      discountLabel: "-50% + 20%",
      trend: "down",
      lastMonthPrice: 120000,
      image: "https://images.unsplash.com/photo-1584990347449-3994e43f1107?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-11",
      name: "Tropical Minyak Goreng Botol 2L",
      category: "Kebutuhan Pokok",
      price: 20000, // Harga awal diubah menjadi 20.000
      discount: 0.10,
      trend: "down",
      lastMonthPrice: 22000,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&auto=format&fit=crop&q=80"
    },
    {
      id: "md-12",
      name: "Telur Ayam Kampung Fresh 10 Butir",
      category: "Kebutuhan Pokok",
      price: 35000, // Harga naik dibanding bulan lalu
      discount: 0,
      trend: "up",
      lastMonthPrice: 31000,
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&auto=format&fit=crop&q=80"
    }
  ]
};
