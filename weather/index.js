async function getweatherchatbot() {

    const inputRef = document.querySelector("#query")
    const query = inputRef.value


    try {

        const res = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            {
                "contents": [
                    {
                        "parts": [
                            {
                                "text": " you are a wheather chatbot whose name is loopy.You provide user accurate weather information in a friendly and human like manner.you cantell about temprature,rain,wind,humidity,and upcoming forecasts of any city. Always politely and clearly.Refuse to answer unrelated or non-weather qureies.Use simpel,frinendly,natural,and helpul language in your replies.",
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