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
