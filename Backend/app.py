from flask import Flask ,jsonify,request
from flask_cors import CORS
from data_models import db,Notes
import os

app = Flask(__name__)
CORS(app)
db_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'db', 'notes.sqlite')

app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{db_path}'
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route('/notes', methods=['GET'])
def get_notes():
    notes = Notes.query.all()
    result = [
        {"id": note.id, "text": note.text}for note in notes]
    return jsonify(result)


@app.route('/notes', methods=['POST'])
def add_notes():
    try:
        if request.method == 'POST':
            text = request.json.get('text')

            new_note = Notes(
                text=text
            )

            db.session.add(new_note)
            db.session.commit()
            return jsonify({"message": "Note added", "id": new_note.id}), 201
    except Exception as e:
        print(f"Error in add_author route: {e}")


@app.route('/notes/<int:id>', methods=['DELETE'])
def delete_notes(id):
    try:
            note = Notes.query.get_or_404(id)

            db.session.delete(note)
            db.session.commit()
            return jsonify({"message": "Note deleted", "id": id}), 200

    except Exception as e:
        print(f"Error in delete_book route: {e}")


if __name__ == '__main__':
    app.run(debug=True)


