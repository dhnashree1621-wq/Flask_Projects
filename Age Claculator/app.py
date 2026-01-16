from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def calculate_age():
    age = None
    year_up_to = None
    if request.method == "POST":
        birth_year = int(request.form["birth_year"])
        year_up_to = int(request.form["year_up_to"])

        age = 0
        for i in range(birth_year, year_up_to):
            age += 1

    return render_template("index.html", age=age, year_up_to=year_up_to)

if __name__ == "__main__":
    app.run(debug=True)
