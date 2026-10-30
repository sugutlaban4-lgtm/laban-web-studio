/* Reply ideas for any chat app: WhatsApp, Messenger, Instagram, TikTok, X,
   Telegram, SMS. Written in Laban's own voice: short, polite, no fluff. */

window.LSH_REPLIES = [

    /* ------------------------------ parents */

    {
        id: "p-free",
        who: "Parent",
        ask: "Is it really free?",
        options: [
            "Yes, free to start. Every subject opens its first topic, one paper, a few quiz questions and two video lessons without paying anything. Premium only matters once they want the whole shelf.",
            "It is free. No card, no trial that expires. If your child uses the free part alone they will still revise properly. Premium is KSh 50 a week if you ever want the rest."
        ]
    },
    {
        id: "p-price",
        who: "Parent",
        ask: "How much is it?",
        options: [
            "Premium is KSh 50 a week, 150 a month or 400 a term. Paid by M-Pesa, no card. Most parents take the term because it works out cheapest.",
            "KSh 50 for a week, KSh 150 a month, KSh 400 for the whole term. You pay from your phone and it unlocks the same minute I confirm it."
        ]
    },
    {
        id: "p-progress",
        who: "Parent",
        ask: "How is my child doing?",
        options: [
            "Ask them to open Progress on the dashboard and it shows topics done, quizzes taken and best scores. If you send me their number I will look at the same figures and tell you where the gaps are.",
            "Their account records every quiz score and topic opened. It is their own login so I cannot see it without their permission, but I am happy to go through the dashboard with you on a call."
        ]
    },
    {
        id: "p-crash",
        who: "Parent",
        ask: "What is this December course?",
        options: [
            "Two weeks, 7 to 18 December, Maths and Chemistry. A topic in the morning, a quiz at lunch, a past paper question in the evening, and I mark their work and send it back every night. KSh 700 a subject.",
            "It is a small WhatsApp group, not a lecture. Thirty students at most. They get work daily and I mark it myself so you can see exactly where the marks are going missing."
        ]
    },
    {
        id: "p-paid",
        who: "Parent",
        ask: "I paid but nothing unlocked",
        options: [
            "Sorry about that. Send me the M-Pesa code and the number you paid from and I will confirm it now. It usually takes me a few minutes.",
            "Sorry. Forward the confirmation message to me here. I check the Pochi statement and unlock it straight away, usually within ten minutes."
        ]
    },
    {
        id: "p-who",
        who: "Parent",
        ask: "Who are you?",
        options: [
            "My name is Laban. I build and run Learn Smart Hub myself, from Kenya. The WhatsApp number on the site is mine and I answer it.",
            "I am Laban, the founder. I write the notes and mark the work myself. You can call the number on the site any evening after 6."
        ]
    },
    {
        id: "p-worth",
        who: "Parent",
        ask: "What if it does not help?",
        options: [
            "Then stop. KSh 50 is a week, not a year. If the first week does not show you something, do not pay for a second one.",
            "Start with the free part for a week. If the notes and quizzes are not the level your child needs, you have lost nothing."
        ]
    },
    {
        id: "p-swahili",
        who: "Parent",
        ask: "Swahili reply: how much?",
        options: [
            "Habari. Premium ni KSh 50 kwa wiki, 150 kwa mwezi, au 400 kwa term. Unalipa kwa M-Pesa, hakuna kadi.",
            "Asante kwa simu yako. Sehemu ya kwanza ni bure kabisa. Premium ni KSh 400 kwa term moja nzima, na unalipa kwa M-Pesa."
        ]
    },

    /* ------------------------------ students */

    {
        id: "s-down",
        who: "Student",
        ask: "The site is not loading",
        options: [
            "Try pulling the page down to refresh, then close the tab and open it again. If it still refuses, tell me what phone you are on and what the screen says.",
            "Most times it is the bundle. Switch to data, refresh once, and it opens. If it is still blank after that, screenshot it and send it to me."
        ]
    },
    {
        id: "s-locked",
        who: "Student",
        ask: "Why is it asking me to pay?",
        options: [
            "The first topic of each subject is free. The rest is Premium, KSh 50 a week. You do not need it to pass, but it is there if you want the whole shelf.",
            "Because you have finished the free sample. Either keep using the free topics or pay KSh 50, your choice. No pressure."
        ]
    },
    {
        id: "s-notes",
        who: "Student",
        ask: "Send me notes for a topic",
        options: [
            "All the notes are already on the site under your subject, free for the first topic. Open Notes, pick the topic, and it works offline once you have loaded it.",
            "I do not send notes one by one. Open the notes page for that subject and it is all there, with the quiz at the end to test yourself."
        ]
    },
    {
        id: "s-stuck",
        who: "Student",
        ask: "I do not understand this question",
        options: [
            "Tell me the subject and the question number. Try it once on paper first and send me your working, then I know exactly where you went wrong.",
            "Send a photo of your attempt. I will point at the step that broke rather than give you the answer, that is how you actually learn it."
        ]
    },
    {
        id: "s-join",
        who: "Student",
        ask: "Can I join the group?",
        options: [
            "Yes. It is KSh 700 for the two weeks in December, or 1,200 for both Maths and Chemistry. Send me your name, school and the subject and I will add you.",
            "There are thirty places. Pay KSh 700 to the Pochi number on the site, send me the code, and I add you to the group the same day."
        ]
    },
    {
        id: "s-paper",
        who: "Student",
        ask: "Do you have this year's paper?",
        options: [
            "I only put up papers I can stand behind. There are past papers and practice papers on the site, and the practice ones come with full working.",
            "Not the leaked ones, those are fake and they waste your time. What is on the site is real format with worked answers."
        ]
    },
    {
        id: "s-swahili",
        who: "Student",
        ask: "Swahili reply: is it free?",
        options: [
            "Ndio, unaanza bure. Kila somo lina mada ya kwanza bure, karatasi moja na maswali kadhaa. Premium ni KSh 50 kwa wiki.",
            "Habari. Bure kabisa kuanza. Fungua tovuti, chagua somo lako, naanza na mada ya kwanza bila kulipa."
        ]
    },

    /* ------------------------------ web studio clients */

    {
        id: "c-price",
        who: "Client",
        ask: "How much for a website?",
        options: [
            "One page with your prices, photos, location and a WhatsApp button is KSh 6,000. A bigger site with pages for each service is 12,000. A shop where customers tick items and the order lands in your WhatsApp is 20,000.",
            "KSh 6,000 for one strong page, finished in three days. If you want customers to send orders straight to WhatsApp I build that for 20,000."
        ]
    },
    {
        id: "c-expensive",
        who: "Client",
        ask: "That is expensive",
        options: [
            "I understand. The 6,000 page is a one-off, then 500 a month only if you want me keeping it updated. If you get two customers from it, it has paid for itself.",
            "Fair. Compare it to a poster you print every month and throw away. This one stays findable on Google and never runs out."
        ]
    },
    {
        id: "c-time",
        who: "Client",
        ask: "Can you finish this week?",
        options: [
            "Yes, if you send me the photos, prices and location today. Three days is normal once I have those.",
            "I can, but only with your content in hand today. Otherwise it is three days after you send the last photo."
        ]
    },
    {
        id: "c-samples",
        who: "Client",
        ask: "Show me your work",
        options: [
            "Here: sugutlaban4-lgtm.github.io/laban-web-studio. There is a hardware shop sample where you tick items and the order goes to WhatsApp, and a salon sample where customers book.",
            "I will send you the link now. Open the hardware one on your phone, tick a few items and you will see the order arrive the way your customers would send it."
        ]
    },
    {
        id: "c-after",
        who: "Client",
        ask: "Can I pay after it is done?",
        options: [
            "Half to start so I can buy the domain and begin, half when you see it live on your own phone. That way we both carry some risk.",
            "I take half upfront, half on delivery. If it is not what we agreed, you do not pay the second half."
        ]
    },
    {
        id: "c-builder",
        who: "Client",
        ask: "Can I update it myself?",
        options: [
            "Yes. I show you how to change a price or a photo in ten minutes, or you pay the 500 a month and send me the changes instead.",
            "Small changes you do yourself on your phone. I make a short video for you the day we launch."
        ]
    },
    {
        id: "c-swahili",
        who: "Client",
        ask: "Swahili reply: price",
        options: [
            "Habari. Ukurasa mmoja ni KSh 6,000 na namaliza kwa siku tatu. Bei, picha, mahali na kitufe cha WhatsApp viko ndani.",
            "Asante. Tovuti ndogo ni KSh 6,000. Kama unataka wateja waagize bidhaa moja kwa moja kwa WhatsApp ni KSh 20,000."
        ]
    }
];
