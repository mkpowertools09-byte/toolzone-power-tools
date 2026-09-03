/**
 * ToolZone Product Catalog
 * -------------------------------------------------------------
 * Edit or add new products to this array anytime.
 * All prices are in Indian Rupees (INR).
 * -------------------------------------------------------------
 */

const PRODUCTS = [
  {
    id: 1,
    name: "ToolZone Pro 850W Heavy-Duty Angle Grinder (100mm)",
    category: "grinders",
    categoryLabel: "Angle Grinders",
    price: 2199,
    mrp: 3499,
    rating: 4.8,
    reviewsCount: 184,
    badge: "Bestseller",
    image: "images/grinder.svg",
    inStock: true,
    shortDesc: "High-performance 850W pure copper armature motor for seamless metal fabrication, masonry cutting, and weld smoothing.",
    fullDesc: "Engineered for high-intensity Indian workshop conditions, the ToolZone Pro 850W Angle Grinder features an armored copper field coil that withstands heavy dust and heat. Its balanced 1.8kg slim-body ergonomic design ensures fatigue-free cutting and grinding for metal fabricators, grill makers, and tile workers.",
    specs: {
      "Rated Power": "850 Watts (Pure Copper)",
      "Wheel Diameter": "100 mm (4 Inch)",
      "No-Load Speed": "11,000 RPM",
      "Operating Voltage": "220V - 240V ~ 50Hz",
      "Spindle Thread": "M10 Standard",
      "Tool Weight": "1.85 kg",
      "Warranty": "1 Year All-India Manufacturer Warranty",
      "Box Contents": "Grinder Unit, Wheel Guard, 2-Position Side Handle, Pin Spanner, Carbon Brush Pair, User Manual"
    },
    keyFeatures: [
      "100% Pure Copper Armature with epoxy resin coating against metal debris",
      "Reinforced die-cast aluminum gear head for extended tool life",
      "Burst-proof safety guard with quick-adjust clamp",
      "Lock-on toggle switch for continuous heavy-duty jobs"
    ]
  },
  {
    id: 2,
    name: "ToolZone Max 750W Reversible Impact Hammer Drill (13mm)",
    category: "drills",
    categoryLabel: "Impact Drills",
    price: 2450,
    mrp: 3899,
    rating: 4.9,
    reviewsCount: 212,
    badge: "Top Rated",
    image: "images/drill.svg",
    inStock: true,
    shortDesc: "Dual-mode rotary hammer and drilling action with variable speed trigger for concrete, steel, and hardwood.",
    fullDesc: "The ToolZone 750W Impact Drill is the ultimate heavy-duty all-rounder for electrical contractors, interior fitters, and plumbers. With dual-mode operation (Hammering + Drilling) and variable speed control, it effortlessly tackles tough concrete anchor holes, steel framing, and wood boring.",
    specs: {
      "Rated Power": "750 Watts High-Torque Motor",
      "Chuck Capacity": "1.5 mm - 13 mm (All-Metal Keyed)",
      "No-Load Speed": "0 - 3,000 RPM Variable",
      "Impact Rate": "0 - 48,000 BPM",
      "Max Concrete Drilling": "13 mm",
      "Max Steel Drilling": "10 mm",
      "Max Wood Drilling": "25 mm",
      "Warranty": "1 Year Free Service & Warranty",
      "Box Contents": "Impact Drill Machine, 360° Auxiliary Handle, Depth Gauge Rod, Metal Chuck Key, 3 Drill Bits"
    },
    keyFeatures: [
      "Smooth Hammer/Drill mode selector for concrete wall plugs and metal work",
      "Electronic variable speed control dial on trigger with forward/reverse rotation",
      "Heavy-duty all-metal geared chuck for zero drill bit slip",
      "Ergonomic soft rubber grip absorbing mechanical shock"
    ]
  },
  {
    id: 3,
    name: "ToolZone Brushless 20V Cordless Drill & Driver Kit",
    category: "cordless",
    categoryLabel: "Cordless Tools",
    price: 5899,
    mrp: 8999,
    rating: 4.9,
    reviewsCount: 156,
    badge: "Pro Kit",
    image: "images/cordless-drill.svg",
    inStock: true,
    shortDesc: "Industrial brushless motor with 2x 2.0Ah lithium-ion batteries, 21+1 torque clutch, and fast smart charger.",
    fullDesc: "Free yourself from cords on elevated scaffolding and site installations. The ToolZone 20V Cordless Brushless Drill delivers 55Nm of raw torque with 50% longer run-time per charge compared to brushed drills. Includes dual battery packs so one is always charging while you work.",
    specs: {
      "Motor Type": "High-Efficiency Brushless Motor",
      "Battery Pack": "2x 20V Max 2.0Ah Li-Ion Included",
      "Max Torque": "55 Nm",
      "Clutch Settings": "21 + 1 Precision Torque Positions",
      "2-Speed Gearbox": "0-450 RPM / 0-1,650 RPM",
      "Chuck Type": "10mm (3/8\") Keyless Auto-Lock Chuck",
      "Charger": "60-Minute Fast Desktop Charger",
      "Warranty": "1 Year Warranty on Tool & Batteries",
      "Box Contents": "Brushless Drill, 2x 2.0Ah Batteries, Fast Charger, Belt Clip, 6 Driver Bits, Hard Carry Case"
    },
    keyFeatures: [
      "Frictionless brushless motor generates less heat and delivers double motor lifespan",
      "Bright front LED headlight with 15-second afterglow for dark panel boards",
      "Keyless quick-ratcheting chuck enables 1-handed bit change",
      "3-stage LED battery fuel indicator on each battery pack"
    ]
  },
  {
    id: 4,
    name: "ToolZone Heavy SDS-Plus 800W Rotary Hammer (26mm)",
    category: "drills",
    categoryLabel: "Rotary Hammers",
    price: 4499,
    mrp: 6999,
    rating: 4.7,
    reviewsCount: 98,
    badge: "Heavy Duty",
    image: "images/rotary-hammer.svg",
    inStock: true,
    shortDesc: "3-Mode electro-pneumatic hammer drill for heavy concrete chiseling, core cutting, and continuous masonry demolition.",
    fullDesc: "Built for building contractors and civil technicians, this 800W Rotary Hammer delivers 3.0 Joules of high-impact energy. Its 3-function selector lets you toggle between Rotary Drilling, Hammer Drilling, and Chiseling mode for wall breaking and tile peeling.",
    specs: {
      "Rated Power": "800 Watts Pneumatic Piston",
      "Impact Energy": "3.0 Joules",
      "Chuck System": "SDS-Plus Quick Change",
      "No-Load Speed": "0 - 1,100 RPM",
      "Impact Rate": "0 - 4,500 BPM",
      "Max Concrete Core": "26 mm",
      "Safety": "Overload mechanical safety slip clutch",
      "Warranty": "1 Year Warranty",
      "Box Contents": "Rotary Hammer Unit, 3 SDS Drill Bits (6, 8, 10mm), 1 Point Chisel, 1 Flat Chisel, Grease Pot, Case"
    },
    keyFeatures: [
      "3 Functional Modes: Rotary Drill, Hammer Drill, and Pure Chisel Hammering",
      "Safety slip clutch protects motor and operator in case bit jams in RCC rebar",
      "Electro-pneumatic cylinder delivers effortless penetration in M25 grade concrete",
      "Dust-sealed SDS-Plus tool holder prevents abrasive grit intrusion"
    ]
  },
  {
    id: 5,
    name: "ToolZone Precision 1400W Circular Saw (185mm / 7.25\")",
    category: "saws-cutters",
    categoryLabel: "Saws & Cutters",
    price: 3699,
    mrp: 5499,
    rating: 4.8,
    reviewsCount: 89,
    badge: "Precision",
    image: "images/circular-saw.svg",
    inStock: true,
    shortDesc: "1400W high-speed wood cutting circular saw with 0-45° bevel angle adjustment and precision rip fence.",
    fullDesc: "The woodworker's primary weapon. Powered by a potent 1400W motor rotating at 5,000 RPM, it glides through plywood, hardwood boards, laminated ply, and MDF sheets with clean, splinter-free cuts. Features calibrated angle bevel locks for precise mitre cuts.",
    specs: {
      "Rated Power": "1400 Watts",
      "Blade Size": "185 mm (7-1/4 Inch) 24T TCT Blade",
      "No-Load Speed": "5,000 RPM",
      "Cutting Depth at 90°": "64 mm",
      "Cutting Depth at 45°": "44 mm",
      "Bevel Range": "0° to 45° Quick Lever Lock",
      "Base Plate": "Heavy Pressed Steel with Laser Sighting Groove",
      "Warranty": "1 Year Warranty",
      "Box Contents": "Circular Saw, 24T TCT Carbide Blade, Parallel Rip Guide, Hex Key, Carbon Brush Set"
    },
    keyFeatures: [
      "1400W motor maintains cutting RPM even through dense teak and solid wood timbers",
      "Integrated dust blower keeps cut line clear of sawdust for perfect accuracy",
      "Heavy-gauge steel shoe plate ensures wobble-free stability on straight cuts",
      "Secondary front handle for balanced two-handed control"
    ]
  },
  {
    id: 6,
    name: "ToolZone Master 1250W Marble & Tile Cutter (110mm)",
    category: "saws-cutters",
    categoryLabel: "Saws & Cutters",
    price: 2899,
    mrp: 4199,
    rating: 4.9,
    reviewsCount: 167,
    badge: "Contractor Pick",
    image: "images/marble-cutter.svg",
    inStock: true,
    shortDesc: "High-power 1250W wet and dry cutter for granite, glazed tiles, marble slabs, and concrete groove chases.",
    fullDesc: "A staple across Indian tile-laying and plumbing works. Designed for aggressive dry and wet cutting of tough granite slabs, vitrified tiles, and wall grooving for electrical conduits. Features sealed ball bearings and labyrinth air channels that keep abrasive stone slurry out.",
    specs: {
      "Rated Power": "1250 Watts High-Torque Motor",
      "Blade Diameter": "110 mm (4-3/8 Inch)",
      "Max Depth of Cut": "34 mm at 90°",
      "No-Load Speed": "13,000 RPM",
      "Spindle Bore": "20 mm",
      "Weight": "2.8 kg",
      "Warranty": "1 Year Warranty",
      "Box Contents": "Cutter Machine, Water Tube with Valve, Nozzle, Spanner, Socket Wrench, Manual"
    },
    keyFeatures: [
      "Optimized 13,000 RPM high-speed rotation ensures chip-free edges on vitrified tiles",
      "Water feed attachment with fine brass regulating valve for dust-free wet cutting",
      "Extra wide stamped steel base plate for steady gliding over marble slabs",
      "Double-insulated body with dust-sealed switch rated for wet job environments"
    ]
  },
  {
    id: 7,
    name: "ToolZone Pro 2000W Dual-Temp Industrial Heat Gun",
    category: "accessories",
    categoryLabel: "Specialty Tools",
    price: 1499,
    mrp: 2299,
    rating: 4.7,
    reviewsCount: 114,
    badge: "Value Buy",
    image: "images/heat-gun.svg",
    inStock: true,
    shortDesc: "Dual-temperature heat gun (350°C / 550°C) for shrink tubing, paint stripping, PVC pipe bending, and vinyl wrapping.",
    fullDesc: "Essential equipment for electricians, auto detailing shops, and fabrication garages. The ceramic heating element reaches stable 550°C in seconds. Flat rear design allows the gun to rest upright hands-free on the workbench during pipe warming and shrink wrapping.",
    specs: {
      "Rated Power": "2000 Watts Ceramic Core",
      "Setting I Temp / Airflow": "350°C / 300 Litres/min",
      "Setting II Temp / Airflow": "550°C / 500 Litres/min",
      "Housing": "Heat-Resistant Polyamide with Rear Stand",
      "Tool Weight": "0.75 kg",
      "Warranty": "6 Months Manufacturer Warranty",
      "Box Contents": "Heat Gun Unit, 4 Steel Air Concentration Nozzles, Scraper Tool, User Manual"
    },
    keyFeatures: [
      "Fast ceramic heating element with built-in overheat cutoff protector",
      "Hands-free upright flat stand design for convenient cooling down and bench work",
      "Includes 4 specialized nozzles: Glass protector, reflector, reduction, and wide surface",
      "Lightweight 750g design prevents wrist fatigue during long vinyl wrap jobs"
    ]
  },
  {
    id: 8,
    name: "ToolZone 20V Cordless Brushless Impact Wrench (350Nm)",
    category: "cordless",
    categoryLabel: "Cordless Tools",
    price: 7499,
    mrp: 11499,
    rating: 4.9,
    reviewsCount: 76,
    badge: "Automotive Pick",
    image: "images/impact-wrench.svg",
    inStock: true,
    shortDesc: "350Nm high-torque 1/2\" square drive impact wrench for automobile wheels, scaffold assembly, and heavy bolts.",
    fullDesc: "Built for tire workshops, heavy machinery mechanics, and scaffolding crews. Loosens stubborn rusted nuts in seconds with 350Nm breakaway torque. Features digital 3-speed selector and intelligent reverse stop mode to keep loosened nuts from spinning off into the dirt.",
    specs: {
      "Drive Anvil": "1/2\" (12.7mm) Square Drive with Friction Pin Ring",
      "Breakaway Torque": "350 Nm",
      "Speed Settings": "3-Speed Electronic Control (0-1600 / 0-2100 / 0-2800 RPM)",
      "Impact Rate": "0 - 3,300 IPM",
      "Battery System": "20V 4.0Ah High-Drain Lithium Battery Included",
      "Smart Feature": "Auto-Stop Reverse (Prevents nut dropping)",
      "Warranty": "1 Year Tool Warranty + 6 Month Battery Warranty",
      "Box Contents": "Impact Wrench, 20V 4.0Ah Battery, Fast Charger, 4 Deep Impact Sockets (17, 19, 21, 22mm), Case"
    },
    keyFeatures: [
      "High torque 350Nm brushless powerhouse easily breaks loose SUV and tractor wheel nuts",
      "Intelligent Reverse Auto-Stop pauses rotation as soon as bolt resistance drops",
      "High-output 4.0Ah battery provides power for over 300 wheel nut operations per charge",
      "3 Bright ring LEDs surrounding the anvil cast zero shadow on dark chassis bolts"
    ]
  },
  {
    id: 9,
    name: "ToolZone 101-Piece Master Drill Bit & Hand Tool Kit",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 1899,
    mrp: 2999,
    rating: 4.8,
    reviewsCount: 310,
    badge: "Must Have",
    image: "images/accessory-kit.svg",
    inStock: true,
    shortDesc: "Complete industrial accessory kit with HSS titanium metal drill bits, masonry bits, wood spade bits, ratchet, and driver bits.",
    fullDesc: "Never search for the right drill bit again. Packed in an indestructible blow-moulded carry case, this 101-piece toolkit contains every bit needed for drilling through stainless steel, concrete blocks, solid timber, and brickwork, along with magnetic bit extensions and nut setters.",
    specs: {
      "Piece Count": "101 Pieces Comprehensive Workshop Set",
      "Metal Bits": "19x Titanium-Coated HSS Bits (1.5mm to 6.5mm)",
      "Masonry Bits": "6x Carbide Tipped SDS/Standard Masonry Bits (4mm to 10mm)",
      "Wood Bits": "6x Brad Point Wood Bits + 3x Wood Spade Cutters (16, 22, 32mm)",
      "Screwdriver Bits": "48x 25mm & 50mm CR-V Driver Bits (PH, PZ, Torx, Hex, Slotted)",
      "Sockets": "8x Chrome Vanadium Hex Nut Setters with Ratchet Handle",
      "Case": "Reinforced Double-Latch Hard Case with Bit Sizers",
      "Warranty": "Quality Guaranteed Against Manufacturing Defect",
      "Box Contents": "Complete 101-Piece Master Tool Set in Molded Heavy-Duty Case"
    },
    keyFeatures: [
      "Titanium nitride coating on metal drill bits reduces friction and extends sharpness 4x",
      "Tungsten carbide tips on masonry bits easily pierce concrete and red brick",
      "Heavy-duty magnetic bit holder ensures tight screw hold without wobbling",
      "Organized labeled slots keep every piece securely locked in place on rough transit"
    ]
  }
];

// Helper to find a product by its ID
function getProductById(id) {
  const numericId = parseInt(id, 10);
  return PRODUCTS.find(p => p.id === numericId) || null;
}

// Format numbers into Indian Rupees currency format: ₹2,199
function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString('en-IN');
}
