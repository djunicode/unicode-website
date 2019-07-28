from rest_framework import serializers
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from postreview.models import Review


class ReviewListSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField()
    url = serializers.HyperlinkedIdentityField(view_name='postreview-api:detail')

    class Meta:
        model = Review
        fields = [
            'first_name',
            'url',
            'last_name',
            'photograph',
            'designation',
            'company',
            'department',
            'comments'
        ]

    def get_first_name(self, obj):
        return obj.first_name


class ReviewDetailSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='postreview-api:update')

    class Meta:
        model = Review
        fields = [
            'url',
            'first_name',
            'last_name',
            'photograph',
            'designation',
            'company',
            'department',
            'comments'
        ]


class ReviewCreateSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='postreview-api:list')

    class Meta:
        model = Review
        fields = [
            'url',
            'first_name',
            'last_name',
            'photograph',
            'designation',
            'company',
            'department',
            'comments'
        ]
        read_only_fields = ['user', ]


class ReviewDeleteSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='postreview-api:list')

    class Meta:
        model = Review
        fields = [
            'url',
            'first_name',
            'last_name',
            'photograph',
            'designation',
            'company',
            'department',
            'comments'
        ]
        read_only_fields = ['user', ]


class ReviewUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = [
            'first_name',
            'last_name',
            'photograph',
            'designation',
            'company',
            'department',
            'comments'
        ]
        read_only_fields = ['user', ]
