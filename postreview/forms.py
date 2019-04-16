from django import forms
from .models import Review


class reviewForm(forms.ModelForm):
    text = forms.CharField()

    class Meta:
        model = Review
        fields = [
            "first_name",
            "last_name",
            "photograph",
            "designation",
            "company",
            "department",
            "comments"
        ]
