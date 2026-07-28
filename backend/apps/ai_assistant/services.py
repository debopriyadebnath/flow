import os

from google import genai
from google.genai import types


client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def get_ai_response(message):

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=message,
            config=types.GenerateContentConfig(
                temperature=0.7
            )
        )

        return response.text

    except Exception as e:
        return f"AI Error: {str(e)}"