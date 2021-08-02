from flask import Flask, request, render_template
import random

app = Flask(
    __name__,
    template_folder='templates',
    static_folder='static'
)


@app.route('/', methods=['GET', 'POST'])
def main():
    return render_template('main.html')

if __name__ == "__main__": 
    app.run(
        host = "0.0.0.0",
        port = random.randint(2000, 9000),
        debug=True
    )