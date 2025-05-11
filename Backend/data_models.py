from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Notes(db.Model):
    """
    Represents an Author in the database.
    """
    __tablename__ = 'notes'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    text = db.Column(db.String)
    def __repr__(self):
        """
        Returns a string representation of the Author object.
        """
        return f"Author(id = {self.id}, author_name = {self.text})"


    def __repr__(self):
        """
        Returns a string representation of the Author object.
        """
        return f"Book(id = {self.id}, title = {self.text})"