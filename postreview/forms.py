from django import forms
from .models import review


class reviewForm(forms.ModelForm):
    text = forms.CharField()

    class Meta:
        model = review
        fields = [
            "first_name",
            "last_name",
            "photograph",
            "designation",
            "company",
            "department",
            "comments"
        ]
