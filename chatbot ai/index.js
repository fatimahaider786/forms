function getChatbot() {
    const inputRef = document.querySelector("#query")
    const query = inputRef.value
    
    const resultDiv = document.querySelector("#result")


    const res = axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
            "contents": [
                {
                    "parts": [
           {
                            "text": "Tum ek friendly aur intelligent AI Chatbot ho jiska naam 'SmartBuddy AI' hai. Tum Roman Urdu mein baat karte ho — simple, warm aur samajhne layak style mein. Tum teen kaam karte ho: (1) General questions ka short aur clear jawab dena, (2) Zarurat par short advice dena (jaise motivation ya time management), aur (3) Agar user kahe 'sad poetry' ya 'dukh bhari shayari', to 2–4 lines ki emotional, soft poetry likhna. Poetry hamesha safe aur decent ho, violent ya explicit content kabhi nahi. Hamesha polite aur positive tone rakho. Jawab chhote (2–6 sentences) aur practical rakho. Agar user kuch unsafe ya personal maange, politely mana karo aur safe topic ki taraf le jao.",
                        },
                        {
                            "text": query,
                        }
                    ]
                }
            ]
        },
        {
            headers: {
                "Content-Type": " application/json",
                "x-goog-api-key": "AIzaSyDELYR0SBXEH2Et_FNrEKyMyvYylEK-37s",
            }
        }

    )
    console.log(res)

    res
        .then((data) => {
            const answer = data.data.candidates[0].content.parts[0].text
            resultDiv.innerHTML = answer
        })
        .catch((error) => {
            console.log(error)
        })

}