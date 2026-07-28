import google.generativeai as genai

from django.conf import settings

print("Gemini Key:", settings.GEMINI_API_KEY)

genai.configure(
    api_key=settings.GEMINI_API_KEY
)



def get_ai_response(message):

    model = genai.GenerativeModel("gemini-2.5-pro")
    prompt = f"""
You are Flow+, an AI women's wellness assistant.

User message:
{message}

Give a helpful, supportive,
health-focused response.

Do not diagnose medical conditions.
Suggest professional help when needed.
"""

    response = model.generate_content(
        prompt
    )

    return response.text