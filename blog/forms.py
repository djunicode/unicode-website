from django import forms
from .models import Post, Comment


class PostForm(forms.ModelForm):
    publish = forms.DateField(widget=forms.SelectDateWidget)

    class Meta:
        model = Post
        fields = [
            "title",
            "content",
            "cover",
            "technologies",
            "draft",
            "publish",
        ]


class CommentForm(forms.ModelForm):
    text = forms.CharField()

    class Meta:
        model = Comment
        fields = [
            "author",
            "text"
        ]
