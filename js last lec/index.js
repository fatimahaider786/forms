async function getChatbot() {

    const inputRef = document.querySelector("#query")
    const query = inputRef.value


    try {

        const res = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            {
                "contents": [
                    {
                        "parts": [
                            {
                                "text": "You are a friendly Cat Expert Chatbot named 'Snow who only answers questions about domestic cats. Answer in Roman Urdu, clearly and politely. Topics allowed: cat care (feeding, grooming), behaviour (scratching, meowing, litter training), basic health signs (when to see a vet), common breeds, toys and enrichment, and safe home setup. Give short practical tips (1–4 sentences) and one simple actionable step when possible. If the user asks for veterinary diagnosis, medical prescriptions, or emergencies, politely refuse and advise seeing a vet immediately. If asked about non-cat topics, refuse and gently steer back to cats. Keep tone warm, encouraging, and simple.",
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


        const resultDiv = document.querySelector("#result")
        const answer = res.data.candidates[0].content.parts[0].text
        resultDiv.innerHTML = answer
    } catch (error) {
        console.log("error", error)
    }
}


// error handling
function callMe() {
    try {
        let x = 18
        console.log(x)
        console.log(" I am in try block")
    } catch (error) {
        console.log(error)
        console.log("error",error)
    }
}