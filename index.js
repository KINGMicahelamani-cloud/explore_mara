
        
        /**
         * ANIMAL DATA OBJECT
         * All species data is centralized here for dynamic UI rendering.
         * 
         * TO ADD MORE ANIMALS OR CONNECT OTHER PAGES (Big Nine, Mammals, Birds):
         * 1. Add new keys to this object or create separate objects per category.
         * 2. Update the animal tabs in HTML or generate them dynamically.
         */
        const animals = {
            lion: {
                number: "01",
                name: "African Lion",
                scientific: "Panthera leo",
                tagline: "Apex Ruler of the Savanna",
                image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://plus.unsplash.com/premium_photo-1666672388644-2d99f3feb9f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "The African lion is the iconic apex predator of the Mara savanna. Famous for their impressive social structures and resonant roars, prides work collaboratively to hunt large herbivores along river valleys.",
                habitat: "Open grasslands, savanna woodlands, and rocky kopjes across the reserve.",
                diet: "Hypercarnivore preying on wildebeest, zebras, buffalos, and warthogs.",
                social: "Lives in prides of up to 15-30 individuals comprising related females, offspring, and a coalition of males.",
                lookFor: "Resting under shady acacia trees or perched atop granite kopjes during the heat of midday.",
                factTitle: "Roars Echo Across Miles",
                fact: "A male lion's roar can reach 114 decibels and can be heard up to 8 kilometers (5 miles) away, warning rival prides and signaling territory boundaries.",
                


            },
            elephant: {
                number: "02",
                name: "African Bush Elephant",
                scientific: "Loxodonta africana",
                tagline: "Gentle Giant of the Plains",
                image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1400&q=80",
                spotlightImg: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=800&q=80",
                description: "As Earth's largest land mammal, African elephants play a key role as ecosystem engineers in the Mara, clearing pathways and shaping forest foliage for other species.",
                habitat: "Riverine forests, marshlands, and open bush savannas.",
                diet: "Herbivorous; consuming hundreds of pounds of grass, foliage, tree bark, and roots daily.",
                social: "Matriarchal family units led by the oldest, most experienced female.",
                lookFor: "Large herds crossing the Mara River or mud-bathing near marshlands to cool down.",
                factTitle: "Infrasonic Communication",
                fact: "Elephants produce deep rumble sounds below the range of human hearing that travel through the ground for kilometers, allowing herds to communicate via seismic vibrations in their feet.",
                


            },
            rhino: {
                number: "03",
                name: "Black Rhinoceros",
                scientific: "Diceros bicornis",
                tagline: "Ancient Armor of the Bush",
                image: "https://images.unsplash.com/photo-1717652453979-125ec922c68b?q=80&w=1163&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://plus.unsplash.com/premium_photo-1669749405985-ed92c0f4591f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Despite their heavy armor and weighing up to 1,400 kg (3,000 lbs), Black Rhinos can gallop at impressive speeds of up to 55 km/h (34 mph).",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
            leopard: {
                number: "04",
                name: "African Leopard",
                scientific: "Panthera pardus",
                tagline: "Master of Shadows & Canopy",
                image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1400&q=80",
                spotlightImg: "https://images.unsplash.com/photo-1693702366986-cbfbd1cf0450?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Renowned for their stealth, strength, and striking rosette coat, leopards are solitary night hunters capable of hauling heavy prey into high tree limbs away from scavengers.",
                habitat: "Riverine forests, woodland thickets, and rocky outcrops.",
                diet: "Carnivorous; hunting gazelles, impalas, baboons, and young antelopes.",
                social: "Solitary and territorial, marking large boundaries with scent and scratch marks.",
                lookFor: "Dappled limbs high up in sausage trees or fever tree groves along watercourses.",
                factTitle: "Incredible Tree Strength",
                fact: "A leopard can drag prey weighing more than three times its own body mass straight up a vertical tree trunk using its muscular shoulders.",
                // soundUrl: "assets/audio/leopard_grunt.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
            buffalo: {
                number: "05",
                name: "African Buffalo",
                scientific: "Syncerus caffer",
                tagline: "Unyielding Force of the Herd",
                image: "https://images.unsplash.com/photo-1619602436032-ba52de32221f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1650632031283-9a93a670b9b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Famous for their massive curved horn shields (bosses), the Cape Buffalo is one of Africa's most formidable herbivores, fiercely defending herd members against lions.",
                habitat: "Open grasslands, floodplains, and dense reed swamps.",
                diet: "Herbivorous grazers that require daily access to fresh drinking water.",
                social: "Highly social; forming mega-herds ranging from several dozen to thousands.",
                lookFor: "Large grazing herds surrounded by yellow-billed oxpeckers near waterholes.",
                factTitle: "Democratic Herd Decisions",
                fact: "Cape Buffalos practice a voting behavior: during rest periods, females register their travel preference by standing up, staring in a direction, and lying back down. The direction with the most votes wins!",
                // soundUrl: "assets/audio/buffalo_bellow.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
            cheetah: {
                number: "06",
                name: "African Cheetahs",
                scientific: "Diceros bicornis",
                tagline: "lightning-fast hunter of the savanna.",
                image: "https://images.unsplash.com/photo-1526246708488-d433888791b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "master of speed and sharp turns.",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
             giraffe: {
                number: "07",
                name: "African Girrafes",
                scientific: "Diceros bicornis",
                tagline: "tall creatures in the jungle.",
                image: "https://images.unsplash.com/photo-1676242291874-db56ad5479df?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1520124442480-b5c60b0f80c2?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Giraffes have special tongues",
                fact: "A giraffe's tongue can be around 45 to 50 cm long and is dark-colored, helping it grab leaves from tall trees.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
             hippo: {
                number: "08",
                name: "African Hippos",
                scientific: "african hippos",
                tagline: "big,strong and fearful creatures.",
                image: "https://plus.unsplash.com/premium_photo-1661941959732-cd8db924dba7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1712642421888-b3de5073231f?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Despite looking slow and heavy, hippos can run surprisingly fast on land, reaching about 30 km/h (19 mph) for short distances!.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
             zebra: {
                number: "09",
                name: "African Zebras",
                scientific: "african zebras",
                tagline: "black and white stripes of the jungle.",
                image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?q=80&w=767&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
             monkey: {
                number: "10",
                name: "African Monkeys",
                scientific: "baboons",
                tagline: "honest and decieving creatures.",
                image: "https://images.unsplash.com/photo-1618661057302-8b01d93bd898?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1618661057302-8b01d93bd898?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
             fox: {
                number: "11",
                name: "African foxes",
                scientific: "Diceros bicornis",
                tagline: "colourful creatures.",
                image: "https://images.unsplash.com/photo-1699450240423-296101bfb354?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://plus.unsplash.com/premium_photo-1661814331838-fda059da2e8b?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
                },
            ostrich: {
                number: "12",
                name: "ostrich",
                scientific: "african ostrich",
                tagline: "a tall-fast bird.",
                image: "https://images.unsplash.com/photo-1704805566048-c87c39bbcf11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1554543527-6dd499762d12?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
            whitedove: {
                number: "13",
                name: "African foxes",
                scientific: "Diceros bicornis",
                tagline: "white and peaceful cretures.",
                image: "https://images.unsplash.com/photo-1568639610863-8a0516128d82?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://plus.unsplash.com/premium_photo-1661814331838-fda059da2e8b?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
            parrot: {
                number: "14",
                name: "Parrots",
                scientific: "African Parrots",
                tagline: "colourful but annoying bird.",
                image: "https://images.unsplash.com/photo-1703356110647-bde745a4f3ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1616902509409-a624c4f31a56?q=80&w=566&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
            pigeon: {
                number: "15",
                name: "Pigeons",
                scientific: "Pigeons",
                tagline: "calm and beautiful creatures.",
                image: "https://images.unsplash.com/photo-1549216580-cdaa97339899?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1667985492782-7058a1139ce9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
            eagle: {
                number: "16",
                name: "Eagle",
                scientific: "Bald Eagle",
                tagline: "big but strong bird.",
                image: "https://plus.unsplash.com/premium_photo-1661889505655-97a2f9007124?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://plus.unsplash.com/premium_photo-1664303510541-2eedfe6bdb91?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
            hawk: {
                number: "17",
                name: "Hawk",
                scientific: "Hawk",
                tagline: "white and peaceful cretures.",
                image: "https://images.unsplash.com/photo-1642368275076-c605df1fa2eb?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1540661116491-b7f28045a38a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
            owl: {
                number: "14",
                name: "Owl",
                scientific: "Owl",
                tagline: "big and tiredless bird.",
                image: "https://images.unsplash.com/photo-1553264701-d138db4fd5d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                spotlightImg: "https://images.unsplash.com/photo-1560077721-49f27ec27be4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Critically endangered and fiercely solitary, the Black Rhino is one of the Mara's most prized sightings. Known for their hooked upper lip designed for browsing thorny shrubs.",
                habitat: "Dense scrubby thickets, riverine valleys, and acacia bushes.",
                diet: "Browsers that feed on woody trees, thorny bushes, shoots, and fruit.",
                social: "Strictly solitary creatures except during mating or when mothers raise calves.",
                lookFor: "Early morning or late afternoon foraging near dense thickets in the Mara Triangle.",
                factTitle: "Prehistoric Speed",
                fact: "Cheetahs can't roar like lions! Instead, they can purr, chirp, meow, and make a bird-like chirping sound.",
                // soundUrl: "assets/audio/rhino_snort.mp3" // UNCOMMENT & ADD MP3 PATH HERE
            },
        };

        let currentAnimalKey = "lion";

        const displayBg = document.getElementById("displayBg");
        const displayTagline = document.getElementById("displayTagline");
        const displayCounter = document.getElementById("displayCounter");
        const displayCommonName = document.getElementById("displayCommonName");
        const displayScientificName = document.getElementById("displayScientificName");
        const audioBtn = document.getElementById("audioBtn");
        const audioBtnText = document.getElementById("audioBtnText");

        const detailsTitle = document.getElementById("detailsTitle");
        const detailsDesc = document.getElementById("detailsDesc");
        const factHabitat = document.getElementById("factHabitat");
        const factDiet = document.getElementById("factDiet");
        const factSocial = document.getElementById("factSocial");
        const factLookFor = document.getElementById("factLookFor");

        const spotlightImg = document.getElementById("spotlightImg");
        const spotlightTitle = document.getElementById("spotlightTitle");
        const spotlightText = document.getElementById("spotlightText");

        const tabButtons = document.querySelectorAll(".tab-btn");

        function updateAnimalDisplay(key) {
            const data = animals[key];
            if (!data) return;

            currentAnimalKey = key;

            // Update Active Tab Highlight
            tabButtons.forEach(btn => {
                if (btn.dataset.animal === key) {
                    btn.classList.add("active");
                    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } else {
                    btn.classList.remove("active");
                }
            });

            // Smooth Image Fade Transition
            displayBg.classList.add("fading");

            setTimeout(() => {
                // Update Hero Window Elements
                displayBg.src = data.image;
                displayBg.alt = data.name;
                displayTagline.textContent = data.tagline;
                displayCounter.textContent = `${data.number} / 05`;
                displayCommonName.textContent = data.name;
                displayScientificName.textContent = data.scientific;
                audioBtnText.textContent = `Hear the ${data.name.split(" ").pop()}`;

                // Update Detailed Fact Matrix
                detailsTitle.textContent = `${data.name} Profile`;
                detailsDesc.textContent = data.description;
                factHabitat.textContent = data.habitat;
                factDiet.textContent = data.diet;
                factSocial.textContent = data.social;
                factLookFor.textContent = data.lookFor;

                // Update Did You Know Spotlight Section
                spotlightImg.src = data.spotlightImg;
                spotlightImg.alt = `${data.name} Spotlight`;
                spotlightTitle.textContent = data.factTitle;
                spotlightText.textContent = data.fact;

                displayBg.classList.remove("fading");
            }, 300);
        }

        // Attach Event Listeners to Tabs
        tabButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const animalKey = btn.dataset.animal;
                if (animalKey !== currentAnimalKey) {
                    updateAnimalDisplay(animalKey);
                }
            });
        });

        
        /**
         * SYNTHETIC AUDIO GENERATOR (Web Audio API)
         * Provides acoustic feedback simulating roars and trumpets.
         * 
         * TO REPLACE WITH REAL MP3 AUDIO FILES:
         * Replace this function body with:
         * 
         * const audio = new Audio(animals[currentAnimalKey].soundUrl);
         * audio.play();
         */
        function playAnimalSound(animalKey) {
            try {
                const audio = new Audio("audio/lion.mp3");
audio.play();
                
                

                osc.connect(gain);
                gain.connect(ctx.destination);

                const now = ctx.currentTime;

                if (animalKey === 'lion' || animalKey === 'leopard') {
                    // Deep, resonant roaring pitch drop
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(140, now);
                    osc.frequency.exponentialRampToValueAtTime(40, now + 1.2);

                    gain.gain.setValueAtTime(0.3, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 1.2);

                    osc.start(now);
                    osc.stop(now + 1.2);

                } else if (animalKey === 'elephant') {
                    // High-pitched trumpet slide
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(300, now);
                    osc.frequency.linearRampToValueAtTime(700, now + 0.4);
                    osc.frequency.linearRampToValueAtTime(400, now + 0.9);

                    gain.gain.setValueAtTime(0.2, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.9);

                    osc.start(now);
                    osc.stop(now + 0.9);

                } else {
                    // Low rumble/snort for Rhino & Buffalo
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(80, now);
                    osc.frequency.linearRampToValueAtTime(50, now + 0.7);

                    gain.gain.setValueAtTime(0.25, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);

                    osc.start(now);
                    osc.stop(now + 0.7);
                }

                // Temporary Visual Feedback on Button
                audioBtn.style.transform = "scale(0.95)";
                setTimeout(() => audioBtn.style.transform = "none", 200);

            } catch (e) {
                console.log("Web Audio not supported or blocked by browser user interaction policy.", e);
            }
        }

        audioBtn.addEventListener("click", () => {
            playAnimalSound(currentAnimalKey);
        });

        const hamburgerBtn = document.getElementById("hamburgerBtn");
        const drawerClose = document.getElementById("drawerClose");
        const mobileDrawer = document.getElementById("mobileDrawer");
        const drawerOverlay = document.getElementById("drawerOverlay");

        function openDrawer() {
            mobileDrawer.classList.add("open");
            drawerOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        function closeDrawer() {
            mobileDrawer.classList.remove("open");
            drawerOverlay.classList.remove("active");
            document.body.style.overflow = "auto";
        }

        hamburgerBtn.addEventListener("click", openDrawer);
        drawerClose.addEventListener("click", closeDrawer);
        drawerOverlay.addEventListener("click", closeDrawer);

        // Smooth scroll return to top
        document.getElementById("returnToTopBtn").addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Initialize default view
        updateAnimalDisplay("lion");