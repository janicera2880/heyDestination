# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."
puts "Deleting old data..."

UserAdmin.destroy_all
Villa.destroy_all
Activity.destroy_all
Location.destroy_all
Inquiry.destroy_all
ActivityLocation.destroy_all


u1 = UserAdmin.create!(
  first_name: "Janice",
  last_name: "Alecha",
  password: "adminjanz",
  email: "janiceralecha@gmail.com",
  admin: true,
  profile_image: "https://fashionterest.com/wp-content/uploads/2019/01/Top-female-models-in-the-world-6-766x1024.jpg"
)


u2 = UserAdmin.create!(
  first_name: "Genevieve",
  last_name: "Lopez",
  password: "admingene",
  email: "genlopez05@gmail.com",
  admin: true,
  profile_image: "https://pbs.twimg.com/profile_images/1472792284458532866/PS1qng6P_400x400.jpg"
)


u3 = UserAdmin.create!(
  first_name: "Claire",
  last_name: "Smith",
  password: "adminclaire",
  email: "clairesmith95@gmail.com",
  admin: true,
  profile_image: "https://www.janairmodels.in/wp-content/uploads/2022/12/KELLY-Janair-Models-2-380x380.jpg" 
)


u4 = UserAdmin.create!(
  first_name: "Jessa",
  last_name: "Stone",
  password: "adminjess",
  email: "jessastone00@gmail.com",
  admin: true,
  profile_image: "https://www.modellingagenciesmumbai.com/blog/wp-content/uploads/2016/09/prachi-desai.jpg"
)

l1 = Location.create!(city: "Guanacaste", country: "Costa Rica", image: "https://media.cntraveller.com/photos/611bf67d3e186825295c3365/16:9/w_2560%2Cc_limit/Aerial-32-Manuel-Antonio.jpg", description: "Guanacaste, a province in northwestern Costa Rica bordering the Pacific, is known for its beaches and biodiverse parkland. Its Santa Rosa National Park is home to rare dry tropical forest, surfing sites and some 250 bird species. Endless beaches include Playa Blanca, with its calm waters, and Playa Hermosa, popular for diving and water sports. Papagayo Peninsula hosts luxury resorts and golf courses.")
l2 = Location.create!(city: "Loire Valley", country: "France", image: "https://cdn.britannica.com/87/687-050-06103996/chateau-Villandry-gardens-Tours-France-Loire-Valley-1532.jpg", description: "The Loire Valley, spanning 280 kilometres, is a valley located in the middle stretch of the Loire river in central France, in both the administrative regions Pays de la Loire and Centre-Val de Loire. The area of the Loire Valley comprises about 800 square kilometres.")
l3 = Location.create!(city: "Santorini", country: "Greece", image: "https://www.gannett-cdn.com/presto/2021/06/10/USAT/3d0222f3-5ccd-4e21-ab70-803ce1badd16-GettyImages-510967662.jpg?crop=2120%2C1193%2Cx0%2Cy211&width=1200", description: "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera. They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.")
l4 = Location.create!(city: "Montego Bay", country: "Jamaica", image: "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt03acfca6197d45cc/61bae74bd73c783f9a3d1a6a/US_MontegoBay_JM_Headerjpg.jpg", description: "Montego Bay, the capital of Saint James Parish on Jamaicas north coast, is a major cruise ship port with numerous beach resorts and golf courses outside its commercial core. Popular beaches include Doctors Cave Beach and Walter Fletcher Beach, home to an amusement park. There is also snorkelling and diving at coral reefs in the protected waters of Montego Bay Marine Park.")
l5 = Location.create!(city: "Raa Atoll", country: "Maldives", image: "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2023/01/DJI_0106-copy.jpg", description: "Raa Atoll is a small island in the Indian Ocean, located in the Indian Ocean, near the Arabian Sea. Amongst the soft and hard corals you will find nudibranchs, colorful sponges, elaborate sea fans, crustaceans and octopus.")
l6 = Location.create!(city: "Koh Yao Noi", country: "Thailand", image: "https://mediaim.expedia.com/destination/1/02ae3e9cbf359c0b3d6eca28839d4f7a.jpg", description: "Ko Yao Yai is a Thai island in the Andaman Sea, halfway between Phuket and Krabi. Its characterized by sandy shores, mangroves, rubber plantations and fishing villages. Beaches include Loh Paret and Loh Jark, the latter with a pier for ferries and long-tail boats. The surrounding waters are rich in coral and dotted with dive sites, like the King Cruiser Wreck near Anemone Reef, and the pinnacles of Shark Point.")
l7 = Location.create!(city: "Cabo San Lucas", country: "Mexico", image: "https://youimg1.tripcdn.com/target/100214000000wcrs0EF64.jpg?proc=source%2Ftrip", description: "Cabo San Lucas, a resort city on the southern tip of Mexicos Baja California peninsula, is known for its beaches, water-based activities and nightlife. Playa El Médano is Cabos main beach, with outdoor restaurants and numerous bars. Past the marina is Lands End promontory, site of Playa del Amor and El Arco, a natural archway in the seacliffs.")
l8 = Location.create!(city: "Aspen", country: "USA", image: "https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2MTM3MTU2NDI3MjYxNDQ1/aspen.webp", description: "Aspen, in Colorados Rocky Mountains, is a ski resort town and year-round destination for outdoor recreation. It is also known for high-end restaurants and boutiques, and landmarks like the Wheeler Opera House, built in 1889 during the areas silver mining boom. The Wheeler-Stallard House is a local history museum set in a 19th-century, Queen Anne–style home, while the Aspen Art Museum displays contemporary artworks.")
l9 = Location.create!(city: "Punta Cana", country: "Dominican Republic", image: "https://a.cdn-hotels.com/gdcs/production6/d1070/34764894-f30f-4db9-9ef9-ef07baf7e2fd.jpg", description: "Punta Cana, the easternmost tip of the Dominican Republic, abuts the Caribbean Sea and the Atlantic Ocean. It is the capital of the Caribbean Sea, as a region known for its 32km stretch of beaches and clear waters. The Bavaro area and Punta Cana combine to form whats known as La Costa del Coco, or the Coconut Coast, an area of lavish, all-inclusive resorts. Its popular for zip-lining, windsurfing, kayaking and sailing.")
l10 = Location.create!(city: "El Nido", country: "Philippines", image: "https://mediaim.expedia.com/destination/1/dcc4b5ab1c594fa368c2c71f52313040.jpg", description: "El Nido is a Philippine municipality on Palawan island. It is known for white-sand beaches, coral reefs and as the gateway to the Bacuit archipelago, a group of islands with steep karst cliffs. Miniloc Island is famed for the clear waters of its Small and Big lagoons. Nearby Shimizu Island has fish-filled waters. The area has many dive sites, including Dilumacad Island, which is long tunnel leading to an underwater cavern.")
l11 = Location.create!(city: "Lautoka", country: "Fiji", image: "https://www.theknot.com/tk-media/images/f323e3d9-729b-4776-bbe7-bea8a0198411", description: "Fiji, a country in the South Pacific, is an archipelago of more than 300 islands. It is famed for rugged landscapes, palm-lined beaches and coral reefs with clear lagoons. Its major islands, Viti Levu and Vanua Levu, contain most of the population. Viti Levu is home to the capital, Suva, a port city with British colonial architecture. The Fiji Museum, in the Victorian-era Thurston Gardens, has ethnographic exhibits.")
l12 = Location.create!(city: "Tulum", country: "Mexico", image: "https://media.cntraveler.com/photos/546cd38c2a3d21fa285c8069/16:9/w_2580,c_limit/el-castillo-quintana-roo-tulum-mexico.jpg", description: "Tulum is a town on the Caribbean coastline of Mexicos Yucatan, located in the Pacific Ocean Peninsula. It is known for its beaches and well-preserved ruins of an ancient Mayan port city. The main building is a large stone structure called El Castillo, perched on a rocky cliff above the white sand beach and turquoise sea. Near the ruins is the Parque Nacional Tulum, a coastal area with mangroves and cenotes")
l13 = Location.create!(city: "Oahu", country: "USA", image: "https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2021/12/1140-oahu-hero.jpg", description: "Oahu is a U.S. island in the Central Pacific, part of the Hawaiian island chain and home to the state capital, Honolulu. Highlights of the city include historic Chinatown and the Punchbowl, a crater-turned-cemetery. Waikiki is an iconic beach, dining and nightlife area. West of Honolulu is Pearl Harbor, site of the WWIIs 1941 bombing attack and home to the USS Arizona Memorial. ")
l14 = Location.create!(city: "Sicily", country: "Italy", image: "https://www.wendyperrin.com/wp-content/uploads/2018/06/stock-photo-mountain-village-novara-di-sicilia-sicily-italy-shutterstock_736870174.jpg", description: "Sicily, the largest Mediterranean island, is just off the toe of Italys boot. Its rich history is reflected in sites like the Valley of the Temples, the well-preserved ruins of 7 monumental, Doric-style Greek temples, and in the Byzantine mosaics at the Cappella Palatina, a former royal chapel in capital city Palermo. On Sicily’s eastern edge is Mount Etna, one of Europe’s highest active volcanoes.")
l15 = Location.create!(city: "Big Sky", country: "USA", image: "https://www.wilsonpeakproperties.com/custimages/Beehive%20basin%20summer%20lake%20image.png", description: "Big Sky is a community in the Rocky Mountains of southern Montana. It is known for the ski and downhill mountain-bike trails of Big Sky Resort. Southeast of town is Yellowstone National Park, with its wildlife, hot springs and gushing geysers. To the northeast, the choppy Gallatin River cuts through the rugged Gallatin Canyon. On a tributary, Ousel Falls Park has a waterfall, picnic areas and viewpoints.")
l16 = Location.create!(city: "Faro", country: "Portugal", image: "https://www.iberian-escapes.com/images/faro-algarve-portugal.jpg", description: "Faro is the capital of southern Portugal Algarve region. The city is bordered by the towns of the Arco da Vila and the Algarve. The neoclassical Arco da Vila is on the site of a gate that was part of the original Moorish wall. The monumental archway leads to the old town, with its cobbled streets. Nearby is Faro Cathedral, built in the 13th century. The Municipal Museum, in a 16th-century convent, displays prehistoric and medieval artifacts, plus religious art.")
l17 = Location.create!(city: "Tortola", country: "British Virgin Islands", image: "https://cruisethewaves.com/wp-content/uploads/2021/02/Road-Town-Tortola-British-Virgin-Islands7.jpg", description: "Tortola is the largest of the British Virgin Islands in the Caribbean. It features several white-sand beaches, including Cane Garden Bay and Smugglers Cove. Road Town, the capital of the British Virgin Islands, has a harbor dotted with sailing boats and is known as a yachting hub. In the islands southwest, forested Sage Mountain National Park offers trails and sweeping views over neighboring cays.")
l18 = Location.create!(city: "Ibiza", country: "Spain", image: "https://image.cnbcfm.com/api/v1/image/107085623-1657201218424-gettyimages-1278660829-dji_0569.jpeg?v=1658113863", description: "Ibiza is one of the Balearic islands, an archipelago of Spain in the Mediterranean Sea. It is well known for the lively nightlife in Ibiza Town and Sant Antoni, where major European nightclubs have summer outposts. It is also home to quiet villages, yoga retreats and beaches, from Platja den Bossa, lined with hotels, bars and shops, to quieter sandy coves backed by pine-clad hills found all around the coast.")
l19 = Location.create!(city: "Malibu", country: "USA", image: "https://assets.savills.com/properties/US0001S27682/01_l_gal.jpg", description: "Malibu is a city west of Los Angeles, California. It is known for its celebrity homes and beaches, including wide and sandy Zuma Beach. To the east is Malibu Lagoon State Beach, known as Surfrider Beach for its waves. Nearby is the Spanish Revival–style Adamson House, with local history displays in its Malibu Lagoon Museum. Inland, trails weave through canyons, waterfalls and grasslands in the Santa Monica Mountains.")
l20 = Location.create!(city: "Dangriga", country: "Belize", image: "https://w4x5t4z2.stackpathcdn.com/wp-content/uploads/2015/08/Belize-Wildlife-Holidays_Accommodation_Pelicans-South-Water-Caye.jpg", description: "Dangriga, formerly known as Stann Creek Town, is a town in southern Belize, located on the Caribbean coast at the mouth of the North Stann Creek River. It is the capital of Belize and the largest city in the Stann Creek District. Dangriga is served by the Dangriga Airport. ")
l21 = Location.create!(city: "Dubrovnik", country: "Croatia", image: "https://lp-cms-production.imgix.net/2021-06/shutterstockRF_662032261.jpg?auto=format&w=1440&h=810&fit=crop&q=75", description: "Dubrovnik is a city in southern Croatia fronting the Adriatic Sea. It is known for its distinctive Old Town, encircled with massive stone walls completed in the 16th century. Its well-preserved buildings range from baroque St. Blaise Church to Renaissance Sponza Palace and Gothic Rectors Palace, now a history museum. Paved with limestone, the pedestrianized Stradun is lined with shops and restaurants.")
l22 = Location.create!(city: "Geneva", country: "Switzerland", image: "https://deih43ym53wif.cloudfront.net/bern-switzerland-shutterstock_1845136612.jpg_ecb4c93750.jpg", description: "Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman. Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc. Headquarters of Europes United Nations and the Red Cross, it is a global hub for diplomacy and banking. French influence is widespread, from the language to gastronomy and bohemian districts like Carouge.")
l23 = Location.create!(city: "Franschhoek", country: "France", image: "https://aws-tiqets-cdn.imgix.net/images/content/7b66f5b1fa3a4bc1aca955477d11e3a9.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=a6a9214e386b43cde33a74975e3c882d", description: "Franschhoek is a town in South Africa, located in the north of the Cape of Good Hopes Western Cape with centuries-old vineyards and Cape Dutch architecture. Trails wind through flowers and wildlife at Mont Rochelle Nature Reserve to views over Franschhoek Valley. The Huguenot Memorial Museum and neighboring monument honor the areas French settlers, who arrived in the 17th and 18th centuries. Franschhoek Motor Museum displays vintage cars amid mountain farmland.")
l24 = Location.create!(city: "Puerto Vallarta", country: "Mexico", image: "https://www.libertytravel.com/sites/default/files/styles/full_size/public/lt_mar8_puerto_vallarta_lt-blog-main-1920x1080.jpg?itok=JMhT1vZ9", description: "Puerto Vallarta is a resort town on Mexico located in the south-eastern parts Pacific coast, in Jalisco state. It is known for its beaches, water sports and nightlife scene. Its cobblestone center is home to the ornate Nuestra Señora de Guadalupe church, boutique shops and a range of restaurants and bars. El Malecón is a beachside promenade with contemporary sculptures, as well as bars, lounges and nightclubs.")

a1 = Activity.create!(name: "Golf Courses", highlights: "Be a part of the elite precision club and swing your clubs where the pros play! Pack up your clubs and jet off to private villa, where you can spend your days on some of the most famed greens. The experience of a lifetime is waiting for you on a golf course in paradise.", image: "https://www.oceanedgeclub.com/Images/Library/troonfamilyfcallout.jpeg", details: "We have 9 holes Par 32 of links-style golf, perfect for the occasional golfer with challenging tee boxes for the pros. The Loop is our quick 3 hole Par 9 of the short course designed for those just starting out as well as experts looking to sharpen their short game.", categories: "Sports")
a2 = Activity.create!(name: "Weddings", highlights: "Our All-Inclusive wedding packages provide a range of enhancements and experiences. You have the option to customize each package to your desires by adding extras such as a fourth course, a champagne toast, or a fireworks display.", image: "https://www.verobeachhotelandspa.com/images/1700-960/wedding-ceremony-on-shoreline-patio-b638b1e8.jpg", details: "Mexico is a beloved wedding destination because of its multifaceted beauty. From white-sand beaches to lush tropical ruins, you and your guests are sure to find something to love! One of the most popular destinations for tying the knot are the luxurious, all-inclusive resorts that dot the beach fronts of Cancun, Oaxaca, and the Riviera Maya. Aside from enjoying the sun and the sand, you and your guests can also explore nearby ancient ruins tucked away in the tropical jungle. Saying I do in Mexico City allows you and your guests to take in the awe-inspiring architecture and historic artworks of times long past, channeling a sense of Old World nostalgia that is sure to leave a lasting impression. Unlike many other places in the world, Mexico provides ample opportunity to experience a little bit of everything.", categories:"Events")
a3 = Activity.create!(name: "Spa Treatment", highlights: "This is what it is all about. Many of heyDestination properties are the ultimate escape for spa enthusiasts, where you can customize your time away with the benefits of a personal spa concierge.", image: "https://www.sanctuarysalondayspa.com/wp-content/uploads/2019/08/spa-services-5.jpg", details: "Whether we are addressing your skin needs, relaxing with one of our luxurious spa treatments, or looking for pampering spa gifts, our spa allows guests to escape the stress of everyday life. We are dedicated to providing wellness for the mind and body, as well as, implementing healthy stress-management through relaxation services. Our top priority is to ensure that your experience is second to none. High standards and attentive focus on each guests ensures that we excel over others. This has attributed to raising the bar of both customer experience and customer expectations within our industry. We offer result oriented services.", categories: "Lifestyle")
a4 = Activity.create!(name: "Private Island", highlights: "Live out one of your wildest travel fantasies and escape to your own private island. Imagine the privacy and the tranquility -- the sand, the surf and your loved ones. If you are looking for the ultimate luxury villa vacation experience, a private island escape tops the list.", image: "https://robbreport.com/wp-content/uploads/2020/05/lead-1-solo2.jpg?w=1000", details: "Here at Private Island Tours, we take pride in never doing the same tour twice. If you are not the touristy type, this is the tour for you. We are a local tour company based in Waikiki offering full day/completely customized tours. During your tour you will have your own private vehicle and tour guide. So just kick back, relax, and take it all in. Let us show you how us locals cruise. We are dedicated to showing you the best places to visit, and we has to offer, and our main concern is that you don not miss out on anything!", categories: "Unique")
a5 = Activity.create!(name: "Winery", highlights: "Many of our Wine Region villas are located on estates with their own vineyards, allowing you to try wine produced in your own backyard. Your concierge can also arrange winery tours, wine tastings, and wine pairing classes during your stay.", image: "https://www.villabaroncino.com/wp-content/uploads/2016/10/Wine-tours-in-Tuscany-area-Region-Villa-San-Crispolto.jpg", details: "Grape Escapes are the leading specialists in European wine tours and have been organising wine tours in France, Italy, Spain and Portugal for over a decade. If you are looking to combine visits to a number of wine regions in one or several of these countries, then let us take the strain out of making the arrangements. We are pleased to offer a great selection of Multi region wine tours to suit a wide range of tastes and budgets! All packages include accommodation, visits and travel and a chance to enjoy the local food.", categories: "Lifestyle")
a6 = Activity.create!(name: "Ski & Snow", highlights: "With a bevy of villas stationed at the top of the worlds most breathtaking mountains, you will overlook renowned ski resorts from your own special spot. Many of these properties are available during the summer months, as well, with unique off-season adventure activities and excursions.", image: "https://www.aspensnowmass.com/-/media/aspen-snowmass/images/hero/hero-image/winter/2022-23/tickets-and-passes-hero-image-082522.jpg?mw=1506&mh=930&hash=190C09B75EC96992C1ED1AB16C3477FB", details: "With 4,406 of vertical rise, more than 3,300 acres of varied terrain, and an average of two skiers per acre, Snowmass is unmatched as a mountain destination, and regularly ranks among the best North American resorts. Ski groups can enjoy massive mountain terrain at Snowmass, and ski the other three Aspen resorts on the same lift ticket, all short rides away on free shuttles. Off the slopes, activity options range from snowcat dinner rides to slopeside bowling, as well as all the mountain town fun that Aspen and Snowmass are famous for.", categories: "Sports")
a7 = Activity.create!(name: "Resorts", highlights: "Resort Villas traditionally offer more privacy and comfort than a hotel room or suite, many times with a private pool, although you still have access to the resort grounds with the larger community pools, childrens activities, bars, restaurants, sporting activities and more.", image: "https://familyvacationist.com/wp-content/uploads/2020/12/Hard-Rock-Hotel-Riviera-Maya.jpg", details: "Some resorts may only have one or two exclusive villa accommodations, while others may cater more to villa style accommodations. Many times villas are privately owned and decor may vary between different properties, although there are almost always strict guidelines in place to ensure that independently owned villas meet the resorts high standards for quality and guest satisfaction. It is also common for resorts to own and manage all of the villas on the property, in which case the villas are generally consistent in decor and layout.", categories: "Unique")
a8 = Activity.create!(name: "Family Fun", highlights: "We want you to feel at home with your family on your villa vacation. The following properties have been carefully selected by our staff as those most accommodating for families traveling with infants and small children. Our villa specialists can advise you on additional details and facilities of the properties including swimming pool depth. We'll help you plan the perfect family holiday!", image: "https://www.ourglobetrotters.com/wp-content/uploads/2021/03/Destinations-Snorkelling.jpg", details: "From the Caribbean to the Pacific Ocean and beyond, snorkeling with kids is an exciting way to explore the water and marine life. Kids will absolutely adore seeing sharks, stingrays, sea turtles, colorful fish, coral, and other oceanic creatures while exploring the ocean floor as a family. Snorkeling is an extraordinary family activity that can be experienced in various locations around the world and still feel different every time you go. These diverse locations offer varying amenities, marine critters, and water temperatures, to assist you in finding the best kid-friendly snorkeling location for your family. ", categories: "Lifestyle")
a9 = Activity.create!(name: "Dining", highlights: "Fine dining restaurants often offer one or several tasting menus, multi-course experiences that can comprise dozens of dishes to be enjoyed for over four hours. Wine is also a defining feature in fine dining, and professional sommeliers masterfully crafted food and wine pairings for their guests. There is no doubt the service plays a significant role in fine dining as well, as everyone makes sure you have a wonderful evening!", image: "https://www.liveabout.com/thmb/kqd6Uo9G6StSzrfiSNEljGALrro=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/waiter-picking-up-dishes-in-kitchen-at-restaurant-495332577-5ac0facf0e23d90036761430.jpg", details: "Many fine dining restaurants offer prix fixe menus. These limited menus change on a daily or weekly basis, and the selections often depend on locally sourced foods at their peak of freshness. Your chef will expect to exercise creativity when designing dishes to fit with the season. Reservations allow a restaurant to adequately space parties to ensure that the kitchen and waitstaff are not overwhelmed during a dinner rush, which, in fine dining, often runs the entire length of service.", categories: "Events")
a10 = Activity.create!(name: "Honeymooners", highlights: "There is no better place to begin walking hand-in-hand through life together than on our coasts. Step foot into the exotic expanse of Seven Mile Beach, breathe in the vistas of the ocean or dip your toes in the turquoise shallows as you look forward to the days ahead on our islands and the years ahead together.", image: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/01/shutterstock_317437571-Young-couple-have-a-romantic-dinner-at-sunset-on-a-tropical-beach.jpg", details: "If you are looking for a romantic honeymoon getaway, in need of an intimate couples escape, or are planning to surprise a loved one with the gift of a lifetime, look no further than our selection of romantic villa rentals below. These honeymoon hideaways feature secluded settings, picturesque views, and luxurious amenities. We are happy to arrange additional honeymoon amenities, including rose petals, champagne, and private in-villa massages. Discover a world of love, luxury, and enchantment with our thoughtfully curated honeymoon package, tailor-made for couples seeking an extraordinary experience.", categories: "Sports")

al1 = ActivityLocation.create!(location_id: l24.id, activity_id: a2.id)
al2 = ActivityLocation.create!(location_id: l24.id, activity_id: a10.id)
al3 = ActivityLocation.create!(location_id: l24.id, activity_id: a3.id)
al4 = ActivityLocation.create!(location_id: l12.id, activity_id: a4.id)
al5 = ActivityLocation.create!(location_id: l12.id, activity_id: a7.id)
al6 = ActivityLocation.create!(location_id: l21.id, activity_id: a5.id)
al7 = ActivityLocation.create!(location_id: l14.id, activity_id: a5.id)
al8 = ActivityLocation.create!(location_id: l8.id, activity_id: a6.id)
al9 = ActivityLocation.create!(location_id: l19.id, activity_id: a8.id)
al10 = ActivityLocation.create!(location_id: l10.id, activity_id: a8.id)
al11 = ActivityLocation.create!(location_id: l13.id, activity_id: a1.id)
al12 = ActivityLocation.create!(location_id: l7.id, activity_id: a9.id)
al13 = ActivityLocation.create!(location_id: l1.id, activity_id: a2.id)
al14 = ActivityLocation.create!(location_id: l2.id, activity_id: a5.id)
al15 = ActivityLocation.create!(location_id: l3.id, activity_id: a3.id)
al16 = ActivityLocation.create!(location_id: l4.id, activity_id: a4.id)
al17 = ActivityLocation.create!(location_id: l5.id, activity_id: a10.id)
al18 = ActivityLocation.create!(location_id: l6.id, activity_id: a7.id)
al19 = ActivityLocation.create!(location_id: l9.id, activity_id: a3.id)
al20 = ActivityLocation.create!(location_id: l11.id, activity_id: a10.id)
al21 = ActivityLocation.create!(location_id: l16.id, activity_id: a9.id)
al22 = ActivityLocation.create!(location_id: l17.id, activity_id: a1.id)
al23 = ActivityLocation.create!(location_id: l20.id, activity_id: a8.id)
al24 = ActivityLocation.create!(location_id: l22.id, activity_id: a5.id)
al25 = ActivityLocation.create!(location_id: l23.id, activity_id: a5.id)
al26 = ActivityLocation.create!(location_id: l10.id, activity_id: a4.id)



puts "✅ Done seeding!"

p "Created #{Location.count} locations"
p "Created #{UserAdmin.count} user_admins"
p "Created #{Villa.count} villas"
p "Created #{Activity.count} activities"
p "Created #{ActivityLocation.count} activity_locations"
p "Created #{Inquiry.count} inquieries"