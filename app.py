
import os
import json

from flask import Flask, request, jsonify, send_from_directory
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()

app = Flask(__name__)

API_KEY = os.getenv("GEMINI_API_KEY")

# Create Gemini client only when the API key is available
client = genai.Client(api_key=API_KEY) if API_KEY else None


@app.route("/")
def home():
    return "MindMate Backend is Running!"


@app.route("/learning")
def learning():
    return send_from_directory(".", "learning.html")


@app.route("/quiz.html")
@app.route("/dashboard.html")
def dashboard():
    return send_from_directory(".", "dashboard.html")


@app.route("/progress.html")
def progress():
    return send_from_directory(".", "progress.html")

@app.route("/feedback.html")
def feedback():
    return send_from_directory(".", "feedback.html")
def quiz():
    return send_from_directory(".", "quiz.html")


@app.route("/api/explain", methods=["POST"])
def explain():
    if client is None:
        return jsonify({
            "error": "Gemini API key is missing. Please check your .env file."
        }), 500

    data = request.get_json(silent=True) or {}

    topic = str(data.get("topic", "")).strip()
    language = str(data.get("language", "English"))
    level = str(data.get("level", "Beginner"))

    if not topic:
        return jsonify({"error": "Please enter a topic"}), 400

    if len(topic) > 300:
        return jsonify({"error": "Topic is too long"}), 400

    if language not in ["English", "Tamil", "Tanglish"]:
        return jsonify({"error": "Invalid language"}), 400

    if level not in ["Beginner", "Intermediate", "Advanced"]:
        return jsonify({"error": "Invalid learning level"}), 400

    prompt = f"""
    You are MindMate, a friendly AI learning assistant for college students.

    Explain the academic topic: {topic}

    Language: {language}
    Learning level: {level}

    Give an accurate, student-friendly explanation.
    Adapt the depth to the selected learning level.
    Use the requested language throughout.

    Return valid JSON with exactly these four string fields:
    title, definition, steps, example.

    In steps, provide a clear step-by-step explanation.
    In example, provide a relevant real-world example.
    Do not include Markdown code fences.
    """

    try:
        response = client.models.generate_content(
            model="gemini-3.5-flash-lite",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema={
                    "type": "OBJECT",
                    "properties": {
                        "title": {"type": "STRING"},
                        "definition": {"type": "STRING"},
                        "steps": {"type": "STRING"},
                        "example": {"type": "STRING"}
                    },
                    "required": [
                        "title", "definition", "steps", "example"
                    ]
                },
                temperature=0.4,
                max_output_tokens=1500
            )
        )

        result = json.loads(response.text)

        return jsonify({
            "title": result["title"],
            "definition": result["definition"],
            "steps": result["steps"],
            "example": result["example"],
            "demo": False
        })

    except Exception as error:
        app.logger.exception("Gemini API request failed")
        return jsonify({
            "error": "Unable to generate an explanation right now. Please try again."
        }), 502

@app.route("/api/quiz", methods=["POST"])
def generate_quiz():

    if client is None:
        return jsonify({
            "error": "Gemini API key is missing"
        }), 500

    data = request.get_json(silent=True) or {}

    topic = str(data.get("topic", "")).strip()

    if not topic:
        return jsonify({"error": "Please enter a topic"}), 400

    if len(topic) > 300:
        return jsonify({"error": "Topic is too long"}), 400

    prompt = f"""
    You are MindMate, an academic quiz generator.

    Create exactly 5 multiple-choice questions about:
    {topic}

    Rules:
    - Each question must have exactly 4 options.
    - Only one option must be correct.
    - Questions should test understanding.
    - Use clear, student-friendly English.
    - Answer must be the correct option index (0, 1, 2, or 3).

    Return valid JSON only.
    """

    try:
        response = client.models.generate_content(
            model="gemini-3.5-flash-lite",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema={
                    "type": "OBJECT",
                    "properties": {
                        "questions": {
                            "type": "ARRAY",
                            "items": {
                                "type": "OBJECT",
                                "properties": {
                                    "question": {"type": "STRING"},
                                    "options": {
                                        "type": "ARRAY",
                                        "items": {"type": "STRING"}
                                    },
                                    "answer": {"type": "INTEGER"}
                                },
                                "required": [
                                    "question", "options", "answer"
                                ]
                            }
                        }
                    },
                    "required": ["questions"]
                },
                temperature=0.4,
                max_output_tokens=2000
            )
        )

        result = json.loads(response.text)
        questions = result["questions"]

        if len(questions) != 5:
            raise ValueError("Expected exactly 5 questions")

        for q in questions:
            if (
                not isinstance(q.get("question"), str)
                or not isinstance(q.get("options"), list)
                or len(q["options"]) != 4
                or not all(isinstance(option, str) for option in q["options"])
                or type(q.get("answer")) is not int
                or not 0 <= q["answer"] < 4
            ):
                raise ValueError("Invalid quiz question format")

        return jsonify({
            "questions": questions,
            "source": "AI"
        })

    except Exception:
        app.logger.exception("Quiz generation failed")
        return jsonify({
            "error": "Unable to generate quiz right now"
        }), 502

if __name__ == "__main__":
    app.run(debug=True)
