/* ==========================================================================
   MERIDIAN — CONTENT FILE
   This is the only file you need to edit to run the site day to day.
   - SITE        : your email (newsletter + contact), address, social links
   - TOPICS      : the categories used to file and filter articles
   - COLUMNISTS  : the people shown in the "Columnists" section
   - ARTICLES    : every article on the site (newest first is easiest)
   See GUIDE.md for step-by-step instructions.
   ========================================================================== */

window.SITE = {
    name: "Meridian",

    // Every "Contact" link and every newsletter sign-up goes to this address.
    // Replace it with your real email. The first sign-up sends you a one-time
    // confirmation email from FormSubmit; click it and sign-ups start arriving.
    email: "your-email@example.com",

    address: {
        en: "1st General Lyceum, Corfu Town",
        gr: "1ο Γενικό Λύκειο Κέρκυρας"
    },

    // Paste full links. Leave a link empty ("") to hide it.
    social: {
        facebook: "",
        instagram: "",
        twitter: ""
    }
};

/* Topics: the key on the left is what you write in an article's `topic`. */
window.TOPICS = {
    culture: { en: "Culture",     gr: "Πολιτισμός" },
    school:  { en: "School life", gr: "Σχολική ζωή" },
    science: { en: "Science",     gr: "Επιστήμη" },
    city:    { en: "The city",    gr: "Η πόλη" },
    opinion: { en: "Opinion",     gr: "Γνώμη" }
};

/* Columnists: use the `id` as an article's `author` to link them up.
   `image` is optional; without one the person's initials are shown. */
window.COLUMNISTS = [
    {
        id: "eleni",
        name: { en: "Eleni Markou", gr: "Ελένη Μάρκου" },
        role: { en: "Culture editor", gr: "Υπεύθυνη πολιτισμού" },
        bio:  { en: "Writes about books, music and the people who keep the town's traditions going.",
                gr: "Γράφει για βιβλία, μουσική και τους ανθρώπους που κρατούν ζωντανές τις παραδόσεις της πόλης." },
        image: ""
    },
    {
        id: "nikos",
        name: { en: "Nikos Vlachos", gr: "Νίκος Βλάχος" },
        role: { en: "Science & technology", gr: "Επιστήμη & τεχνολογία" },
        bio:  { en: "Tests the claims so you don't have to. Likes spreadsheets more than he admits.",
                gr: "Ελέγχει τους ισχυρισμούς για να μη χρειάζεται εσείς. Του αρέσουν τα λογιστικά φύλλα περισσότερο απ' όσο παραδέχεται." },
        image: ""
    },
    {
        id: "sofia",
        name: { en: "Sofia Anagnostou", gr: "Σοφία Αναγνώστου" },
        role: { en: "School life", gr: "Σχολική ζωή" },
        bio:  { en: "Covers what happens in classrooms, corridors and the canteen queue.",
                gr: "Καλύπτει ό,τι συμβαίνει στις τάξεις, στους διαδρόμους και στην ουρά του κυλικείου." },
        image: ""
    }
];

/* --------------------------------------------------------------------------
   ARTICLES
   Copy one { ... } block, paste it at the top of the list, and change it.
   Required: id, date, topic, title.
   Optional: author, featured, type: "editorial", quote, image, imageAlt,
             caption, excerpt, body, draft.
   - id       : short, unique, no spaces. It becomes the page address.
   - date     : "YYYY-MM-DD". A future date hides the article until that day.
   - featured : true puts it in the big lead spot on the home page.
   - type     : "editorial" shows it in the Editorial band (with `quote`).
   - draft    : true hides it without deleting it.
   - body     : a list of paragraphs. Start a line with "## " for a
                subheading, or "> " for a quote.
   Greek (gr) is optional for any field; English is used if it's missing.
   -------------------------------------------------------------------------- */
window.ARTICLES = [
    {
        id: "paper-still-matters",
        date: "2026-11-12",
        topic: "culture",
        author: "eleni",
        featured: true,
        image: "",
        imageAlt: { en: "", gr: "" },
        title: {
            en: "Why we still read on paper",
            gr: "Γιατί διαβάζουμε ακόμα σε χαρτί"
        },
        excerpt: {
            en: "Screens are everywhere, yet the printed page keeps finding readers. We asked them why.",
            gr: "Οι οθόνες είναι παντού, κι όμως η τυπωμένη σελίδα συνεχίζει να βρίσκει αναγνώστες. Τους ρωτήσαμε γιατί."
        },
        body: {
            en: [
                "Walk into the town library on a weekday afternoon and you will find every table taken. Most of the people sitting there own a phone that could hold ten thousand books. They came for one.",
                "When we asked twenty readers why, the answers were remarkably similar. Paper is slower, they said, and that is the point. A book does not send notifications. It does not suggest something else to read halfway through a chapter.",
                "## Remembering what you read",
                "Several readers told us they remember more from paper. They can picture where a sentence sat on the page, or how far through the book a scene happened. That sense of place is harder to hold on to when every page looks the same.",
                "None of them have given up screens. They read the news on their phones and messages on their laptops. But for the things they want to keep, they still reach for something they can hold."
            ],
            gr: [
                "Αν μπείτε στη δημοτική βιβλιοθήκη ένα απόγευμα καθημερινής, θα βρείτε όλα τα τραπέζια πιασμένα. Οι περισσότεροι έχουν ένα κινητό που χωράει δέκα χιλιάδες βιβλία. Ήρθαν για ένα.",
                "Όταν ρωτήσαμε είκοσι αναγνώστες γιατί, οι απαντήσεις έμοιαζαν πολύ. Το χαρτί είναι πιο αργό, είπαν, και αυτό ακριβώς είναι το ζητούμενο. Ένα βιβλίο δεν στέλνει ειδοποιήσεις. Δεν σου προτείνει κάτι άλλο στη μέση του κεφαλαίου.",
                "## Θυμάσαι αυτό που διαβάζεις",
                "Αρκετοί μας είπαν ότι θυμούνται περισσότερα από το χαρτί. Μπορούν να φανταστούν πού βρισκόταν μια φράση στη σελίδα ή πόσο είχαν προχωρήσει όταν συνέβη μια σκηνή. Αυτή η αίσθηση του χώρου χάνεται εύκολα όταν κάθε σελίδα μοιάζει ίδια.",
                "Κανείς τους δεν έχει εγκαταλείψει τις οθόνες. Διαβάζουν ειδήσεις στο κινητό και μηνύματα στον υπολογιστή. Όμως για όσα θέλουν να κρατήσουν, πιάνουν ακόμα κάτι που μπορούν να κρατήσουν στα χέρια τους."
            ]
        }
    },
    {
        id: "week-without-phones",
        date: "2026-11-10",
        topic: "school",
        author: "sofia",
        title: {
            en: "A week without phones: what actually happened",
            gr: "Μια εβδομάδα χωρίς κινητά: τι έγινε στην πράξη"
        },
        excerpt: {
            en: "Thirty students handed in their phones for five school days. The results surprised everyone, including them.",
            gr: "Τριάντα μαθητές παρέδωσαν τα κινητά τους για πέντε σχολικές μέρες. Τα αποτελέσματα εξέπληξαν όλους — και τους ίδιους."
        },
        body: {
            en: [
                "On Monday morning, thirty phones went into a locked box in the staff room. By Monday lunchtime, three students had asked for theirs back. Nobody got one.",
                "The first two days were the hardest. Students described reaching for a pocket that was empty, dozens of times an hour. By Wednesday, the breaks were louder: more talking, more card games, one improvised football tournament.",
                "> I didn't realise how often I checked it until I couldn't.",
                "On Friday, most of the group said they would not repeat the experiment for a whole month. But almost all of them said they would keep one habit: leaving the phone in their bag during lessons."
            ],
            gr: [
                "Τη Δευτέρα το πρωί, τριάντα κινητά μπήκαν σε ένα κλειδωμένο κουτί στο γραφείο των καθηγητών. Μέχρι το μεσημέρι, τρεις μαθητές είχαν ζητήσει πίσω το δικό τους. Κανείς δεν το πήρε.",
                "Οι δύο πρώτες μέρες ήταν οι πιο δύσκολες. Οι μαθητές περιέγραφαν ότι έψαχναν μια άδεια τσέπη δεκάδες φορές την ώρα. Μέχρι την Τετάρτη, τα διαλείμματα είχαν γίνει πιο θορυβώδη: περισσότερη κουβέντα, παιχνίδια με τράπουλα, ένα αυτοσχέδιο τουρνουά ποδοσφαίρου.",
                "> Δεν είχα καταλάβει πόσο συχνά το κοίταζα μέχρι που δεν μπορούσα.",
                "Την Παρασκευή, οι περισσότεροι είπαν ότι δεν θα επαναλάμβαναν το πείραμα για έναν ολόκληρο μήνα. Σχεδόν όλοι, όμως, είπαν ότι θα κρατήσουν μια συνήθεια: το κινητό μένει στην τσάντα κατά τη διάρκεια του μαθήματος."
            ]
        }
    },
    {
        id: "science-fair-notes",
        date: "2026-11-07",
        topic: "science",
        author: "nikos",
        title: {
            en: "Notes from the science fair",
            gr: "Σημειώσεις από την έκθεση επιστημών"
        },
        excerpt: {
            en: "From a solar-powered water filter to a camera that counts bees, the projects that stood out this year.",
            gr: "Από ένα ηλιακό φίλτρο νερού μέχρι μια κάμερα που μετράει μέλισσες: τα έργα που ξεχώρισαν φέτος."
        },
        body: {
            en: [
                "Forty-two projects filled the gym this year, up from thirty last spring. The judges spent most of the morning in front of three of them.",
                "The first was a water filter made from sand, charcoal and a small solar pump, built for under twenty euros. The second used a cheap camera and a few hundred lines of code to count bees leaving a hive. The third asked a simple question — which school corridor is the coldest? — and answered it with a month of careful readings.",
                "What the winners had in common was not expensive equipment. It was a clear question and the patience to measure it properly."
            ],
            gr: [
                "Σαράντα δύο έργα γέμισαν φέτος το γυμναστήριο, από τριάντα την περασμένη άνοιξη. Οι κριτές πέρασαν το μεγαλύτερο μέρος του πρωινού μπροστά σε τρία από αυτά.",
                "Το πρώτο ήταν ένα φίλτρο νερού από άμμο, κάρβουνο και μια μικρή ηλιακή αντλία, με κόστος κάτω από είκοσι ευρώ. Το δεύτερο χρησιμοποιούσε μια φθηνή κάμερα και λίγες εκατοντάδες γραμμές κώδικα για να μετράει τις μέλισσες που βγαίνουν από μια κυψέλη. Το τρίτο έθετε ένα απλό ερώτημα — ποιος διάδρομος του σχολείου είναι ο πιο κρύος; — και το απαντούσε με έναν μήνα προσεκτικών μετρήσεων.",
                "Αυτό που είχαν κοινό οι νικητές δεν ήταν ο ακριβός εξοπλισμός. Ήταν μια σαφής ερώτηση και η υπομονή να τη μετρήσουν σωστά."
            ]
        }
    },
    {
        id: "later-school-mornings",
        date: "2026-11-05",
        topic: "opinion",
        type: "editorial",
        author: { en: "The Editors", gr: "Η Σύνταξη" },
        title: {
            en: "The case for later school mornings",
            gr: "Γιατί το σχολείο πρέπει να ξεκινά αργότερα"
        },
        excerpt: {
            en: "Teenagers are not lazy. Their body clocks run late, and our timetables should take that seriously.",
            gr: "Οι έφηβοι δεν είναι τεμπέληδες. Το βιολογικό τους ρολόι λειτουργεί αργότερα, και τα ωρολόγια προγράμματα πρέπει να το πάρουν στα σοβαρά."
        },
        quote: {
            en: "A timetable is a choice. We can choose one that fits the people who live by it.",
            gr: "Ένα ωρολόγιο πρόγραμμα είναι επιλογή. Μπορούμε να επιλέξουμε ένα που ταιριάζει σε όσους ζουν με αυτό."
        },
        body: {
            en: [
                "Every morning, a few hundred teenagers in this town sit down for a first lesson their bodies are not ready for. Research on adolescent sleep has said the same thing for years: during the teenage years, the body clock shifts later. Falling asleep at eleven is not a lack of discipline.",
                "Starting the day half an hour later would not fix everything. Buses, sports and family schedules would all need to adjust. But schools that have tried it report fewer late arrivals and more alert first lessons.",
                "We are not asking for a lie-in. We are asking for a timetable designed around the people who have to follow it."
            ],
            gr: [
                "Κάθε πρωί, μερικές εκατοντάδες έφηβοι σε αυτή την πόλη κάθονται για μια πρώτη ώρα για την οποία ο οργανισμός τους δεν είναι έτοιμος. Οι έρευνες για τον ύπνο των εφήβων λένε χρόνια το ίδιο: στην εφηβεία, το βιολογικό ρολόι μετατοπίζεται αργότερα. Το να σε παίρνει ο ύπνος στις έντεκα δεν είναι έλλειψη πειθαρχίας.",
                "Μια έναρξη μισή ώρα αργότερα δεν θα έλυνε τα πάντα. Λεωφορεία, αθλητικές δραστηριότητες και οικογενειακά προγράμματα θα έπρεπε να προσαρμοστούν. Όμως τα σχολεία που το δοκίμασαν αναφέρουν λιγότερες καθυστερήσεις και πιο συγκεντρωμένους μαθητές στην πρώτη ώρα.",
                "Δεν ζητάμε να κοιμόμαστε μέχρι αργά. Ζητάμε ένα πρόγραμμα σχεδιασμένο γύρω από τους ανθρώπους που πρέπει να το ακολουθήσουν."
            ]
        }
    },
    {
        id: "librarian-interview",
        date: "2026-11-03",
        topic: "culture",
        author: "eleni",
        title: {
            en: "The librarian who catalogued 4,000 books by hand",
            gr: "Η βιβλιοθηκονόμος που κατέγραψε 4.000 βιβλία με το χέρι"
        },
        excerpt: {
            en: "Forty years, one card index and a firm opinion about folded page corners.",
            gr: "Σαράντα χρόνια, μια καρτελοθήκη και μια σταθερή άποψη για τις τσακισμένες σελίδες."
        },
        body: {
            en: [
                "For most of her career, every book in the school library passed through her hands twice: once when it arrived, and once when she wrote its card. The cards are still there, in a wooden cabinet with brass handles, even though the catalogue moved online years ago.",
                "She keeps them, she says, because they remember things the computer does not: who donated a book, which ones went missing and came back, the pencil notes left by students who borrowed them decades ago.",
                "Her one rule has never changed. Use a bookmark."
            ],
            gr: [
                "Για το μεγαλύτερο μέρος της καριέρας της, κάθε βιβλίο της σχολικής βιβλιοθήκης περνούσε από τα χέρια της δύο φορές: μία όταν έφτανε, και μία όταν έγραφε την καρτέλα του. Οι καρτέλες είναι ακόμα εκεί, σε ένα ξύλινο έπιπλο με μπρούντζινα χερούλια, παρόλο που ο κατάλογος έγινε ηλεκτρονικός εδώ και χρόνια.",
                "Τις κρατάει, λέει, γιατί θυμούνται πράγματα που ο υπολογιστής δεν θυμάται: ποιος δώρισε ένα βιβλίο, ποια χάθηκαν και ξαναγύρισαν, τις σημειώσεις με μολύβι που άφησαν μαθητές πριν από δεκαετίες.",
                "Ο μόνος της κανόνας δεν άλλαξε ποτέ. Χρησιμοποιήστε σελιδοδείκτη."
            ]
        }
    },
    {
        id: "harbour-at-dawn",
        date: "2026-10-30",
        topic: "city",
        author: { en: "Guest writer", gr: "Φιλοξενούμενη πένα" },
        title: {
            en: "What the harbour sounds like at 6 a.m.",
            gr: "Πώς ακούγεται το λιμάνι στις 6 το πρωί"
        },
        excerpt: {
            en: "Fishing boats, ferry horns and the first coffee of the day: a short walk before the town wakes up.",
            gr: "Ψαροκάικα, σφυρίγματα πλοίων και ο πρώτος καφές της ημέρας: μια σύντομη βόλτα πριν ξυπνήσει η πόλη."
        },
        body: {
            en: [
                "Before six, the harbour belongs to the fishermen. Engines cough, ropes slap against wood, and someone is always arguing about the weather.",
                "By half past, the first ferry sounds its horn and the cafés start pulling chairs onto the pavement. The smell changes from diesel and salt to coffee.",
                "By seven it is just a harbour again, busy and ordinary. But for an hour it felt like a town with the volume turned down."
            ],
            gr: [
                "Πριν από τις έξι, το λιμάνι ανήκει στους ψαράδες. Οι μηχανές βήχουν, τα σκοινιά χτυπούν στο ξύλο και κάποιος πάντα διαφωνεί για τον καιρό.",
                "Στις έξι και μισή, το πρώτο πλοίο σφυρίζει και τα καφέ αρχίζουν να βγάζουν καρέκλες στο πεζοδρόμιο. Η μυρωδιά αλλάζει από πετρέλαιο και αλάτι σε καφέ.",
                "Στις επτά είναι πάλι απλώς ένα λιμάνι, πολύβουο και συνηθισμένο. Για μία ώρα, όμως, έμοιαζε με πόλη με χαμηλωμένη την ένταση."
            ]
        }
    },
    {
        id: "ai-homework-test",
        date: "2026-10-27",
        topic: "science",
        author: "nikos",
        title: {
            en: "Is AI doing our homework? We tested it",
            gr: "Κάνει η τεχνητή νοημοσύνη τις εργασίες μας; Το δοκιμάσαμε"
        },
        excerpt: {
            en: "We gave the same essay question to a chatbot and to three students. Teachers graded them without knowing who wrote what.",
            gr: "Δώσαμε την ίδια έκθεση σε ένα chatbot και σε τρεις μαθητές. Οι καθηγητές τις βαθμολόγησαν χωρίς να ξέρουν ποιος έγραψε τι."
        },
        body: {
            en: [
                "The question was simple: should the town ban cars from the old centre? Four essays came back. Three teachers graded them blind.",
                "The chatbot's essay was the tidiest. It was also the only one that did not mention a single street, shop or person in the town. Every teacher spotted it within a minute.",
                "The highest mark went to a student who interviewed her grandmother, who has run a shop in the centre for thirty years. Local detail, it turns out, is hard to fake."
            ],
            gr: [
                "Το θέμα ήταν απλό: πρέπει η πόλη να απαγορεύσει τα αυτοκίνητα στο ιστορικό κέντρο; Επέστρεψαν τέσσερις εκθέσεις. Τρεις καθηγητές τις βαθμολόγησαν χωρίς να γνωρίζουν τον συγγραφέα.",
                "Η έκθεση του chatbot ήταν η πιο τακτοποιημένη. Ήταν επίσης η μόνη που δεν ανέφερε ούτε έναν δρόμο, μαγαζί ή άνθρωπο της πόλης. Όλοι οι καθηγητές την εντόπισαν μέσα σε ένα λεπτό.",
                "Τον υψηλότερο βαθμό πήρε μια μαθήτρια που πήρε συνέντευξη από τη γιαγιά της, η οποία έχει μαγαζί στο κέντρο εδώ και τριάντα χρόνια. Οι τοπικές λεπτομέρειες, απ' ό,τι φαίνεται, δεν πλαστογραφούνται εύκολα."
            ]
        }
    },
    {
        id: "school-garden-harvest",
        date: "2026-10-22",
        topic: "school",
        author: "sofia",
        title: {
            en: "The school garden's first harvest",
            gr: "Η πρώτη σοδειά του σχολικού κήπου"
        },
        excerpt: {
            en: "Tomatoes, basil and one very ambitious pumpkin.",
            gr: "Ντομάτες, βασιλικός και μια πολύ φιλόδοξη κολοκύθα."
        },
        body: {
            en: [
                "Last March the patch behind the gym was gravel. This October it produced eleven kilos of tomatoes, more basil than the canteen could use, and a pumpkin that needed two people to lift.",
                "The garden club now has twenty members and a waiting list. Their next project: a rainwater tank, so the garden survives the summer holidays on its own."
            ],
            gr: [
                "Τον περασμένο Μάρτιο, το κομμάτι πίσω από το γυμναστήριο ήταν χαλίκι. Αυτόν τον Οκτώβριο έβγαλε έντεκα κιλά ντομάτες, περισσότερο βασιλικό απ' όσο μπορούσε να χρησιμοποιήσει το κυλικείο, και μια κολοκύθα που χρειάστηκαν δύο άτομα για να τη σηκώσουν.",
                "Η ομάδα του κήπου έχει πλέον είκοσι μέλη και λίστα αναμονής. Επόμενος στόχος: μια δεξαμενή βρόχινου νερού, ώστε ο κήπος να αντέξει μόνος του τις καλοκαιρινές διακοπές."
            ]
        }
    }
];
