from rest_framework import serializers
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from blog.models import Post, Comment
from profiles.api.serializers import AuthorDetailSerializer

User = get_user_model()


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'id',
            'author',
            'text',
            'timestamp'
        ]


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = [
            'post',
            'author',
            'text',
        ]

        # read_only_fields = [
        #     'post'
        # ]

    def create(self, validated_data):
        author = validated_data.get("author")
        text = validated_data.get("text")
        post = validated_data.get("post")
        comment = Comment.objects.create(post=post, author=author, text=text)
        return comment


class PostDetailSerializer(serializers.ModelSerializer):
    author = AuthorDetailSerializer(read_only=True)
    responses = serializers.SerializerMethodField()
    comment = serializers.HyperlinkedIdentityField(view_name='posts-api:comment', lookup_field='slug')

    class Meta:
        model = Post
        fields = [
            'id',
            'author',
            'title',
            'content',
            'cover',
            'technologies',
            'publish',
            'responses',
            'comment'
        ]

    def get_responses(self, obj):
        # print(obj.comments.all())
        # comment_qs = obj.comments.all()
        comment_qs = Comment.objects.all().filter(post=obj)
        comments = CommentSerializer(comment_qs, many=True).data
        return comments

    def get_cover(self, obj):
        try:
            image = obj.cover.url
        # except:
        #     image = None
        finally:
            return image


class PostListSerializer(serializers.ModelSerializer):
    author = AuthorDetailSerializer(read_only=True)
    detail = serializers.HyperlinkedIdentityField(view_name='posts-api:detail',
                                                  lookup_field='slug')
    responses_count = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id',
            'detail',
            'author',
            'title',
            'content',
            'cover',
            'technologies',
            'publish',
            'responses_count'
        ]

    def get_technologies(self, obj):
        return obj.technologies[0]

    def get_responses_count(self, obj):
        responses_count = Comment.objects.all().filter(post=obj).count()
        return responses_count
