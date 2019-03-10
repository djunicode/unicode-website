from rest_framework import serializers
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from projects.models import Project
from profiles.models import UserProfile
from profiles.api.serializers import TeamMemberDetailSerializer

User = get_user_model()


class ProjectDetailSerializer(serializers.ModelSerializer):
    members = serializers.SerializerMethodField()
    technology = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            'id',
            'members',
            'title',
            'description',
            'cover',
            'technology',
            'year',
            'repo_link'
        ]

    def get_technology(self, obj):
        return obj.technologies[0].capitalize()

    def get_year(self, obj):
        return obj.year.year

    def get_members(self, obj):
        project_year = obj.year
        second_year = []
        third_year = []
        fourth_year = []
        for t in obj.team.all():
            member = UserProfile.objects.get(user=t)
            delta1 = member.date_passed - member.date_joined
            delta2 = project_year - member.date_joined
            number_of_days = delta1.days - delta2.days
            if number_of_days < 365:
                fourth_year.append(member)
            elif number_of_days < 365 * 2:
                third_year.append(member)
            else:
                second_year.append(member)
        second_year = TeamMemberDetailSerializer(second_year, many=True).data
        third_year = TeamMemberDetailSerializer(third_year, many=True).data
        fourth_year = TeamMemberDetailSerializer(fourth_year, many=True).data
        members = {
            "second_year": second_year,
            "third_year": third_year,
            "fourth_year": fourth_year,
        }
        return members


class ProjectListSerializer(serializers.ModelSerializer):
    detail = serializers.HyperlinkedIdentityField(view_name='projects-api:detail',
                                                  lookup_field='slug')
    technology = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            'id',
            'detail',
            'title',
            'description',
            'cover',
            'technology',
            'year',
            'repo_link'
        ]

    def get_technology(self, obj):
        return obj.technologies[0].capitalize()

    def get_year(self, obj):
        return obj.year.year
