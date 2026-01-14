from flask import Flask, render_template, request
app = Flask(__name__)

def checkFitness(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif 18.8 <= bmi <= 24.9:
        return "Healthy"
    elif 25 <= bmi <= 29.9:
        return "Overweight"
    else:
        return "Obese"
    
@app.route('/',methods=['GET','POST'])
def BMI_calculator():
    BMI = None
    fitness = None
    if request.method == 'POST':
        weight = float(request.form['Weight'])
        height = float(request.form['Height'])
        BMI = round((weight/height**2),2)
        fitness = checkFitness(BMI)
    return render_template("BMI.html",BMI=BMI,fitness=fitness)

if __name__=="__main__":
    app.run(debug=True)  