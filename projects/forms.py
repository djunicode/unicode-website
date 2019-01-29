from django import forms
from .models import Project


class ProjectForm(forms.ModelForm):
    year = forms.DateField(widget=forms.SelectDateWidget)

    class Meta:
        model = Project
        fields = [
            "team",
            "title",
            "description",
            "cover",
            "technologies",
            "year",
            "repo_link",
        ]
