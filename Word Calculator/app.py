from flask import Flask, render_template, request
app = Flask(__name__)
@app.route("/", methods=["GET", "POST"])
def home():
    total_word = None
    text_value = ""
    if request.method == "POST":
        if "count" in request.form:
            text_value = request.form["get_word"]
            total_word = len(text_value.split())
        elif "recalculate" in request.form:
            text_value = ""
            total_word = None
    return render_template("word_count.html",total_word=total_word,text_value=text_value)
if __name__ == "__main__":
    app.run(debug=True)