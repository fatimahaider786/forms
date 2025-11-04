async function healthchatbot() {
    const inputRef = document.querySelector("#query")
    const query = inputRef.value

    try {
        const res = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            {
                "contents": [
                    {
                        "parts": [
                            {
                                "text": " you are a health chatbot your name is hunny.You help people with wellness and healthy living tips in a warm ,caring,and human-like way-like a supportive friend.You can share simple health advice,daily routinr reminders,and lifestyle ideas(like drink more water or take a short walk daily).don't answer unrealated question.Always reply in a soft ,positive,and encouraging tone ❤ ",
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
                    "Content-Type": "application/json",
                    "x-goog-api-key": "AIzaSyDELYR0SBXEH2Et_FNrEKyMyvYylEK-37s"
                }
            }
        )
    
        const resultDiv = document.querySelector("#result")
        const answer = res.data.candidates[0].content.parts[0].text
        resultDiv.innerHTML = answer
    } catch (error) {
        console.log("error", error)

    }
}