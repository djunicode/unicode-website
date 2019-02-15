from rest_framework import serializers
from profiles.models import UserProfile


class AuthorDetailSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = [
            'username',
            'profile_pic',
        ]

    def get_username(self, obj):
        return obj.user.username


class TeamMemberDetailSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = [
            'username',
            'profile_pic',
            'bio',
            'stack',
            'date_joined',
            'github_link',
            'linkedin_link',
        ]

    def get_username(self, obj):
        return obj.user.username

    def get_stack(self, obj):
        data = []
        for i in obj.stack:
            data.append(i.capitalize())
