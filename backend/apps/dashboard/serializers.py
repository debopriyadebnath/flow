from rest_framework import serializers


class DashboardSerializer(serializers.Serializer):

    cycle = serializers.DictField()

    mood = serializers.DictField()

    journal = serializers.DictField()