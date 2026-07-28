from rest_framework import serializers


class AIConversationSerializer(serializers.Serializer):

    message = serializers.CharField()


class AIConversationHistorySerializer(serializers.Serializer):

    id = serializers.IntegerField()

    message = serializers.CharField()

    response = serializers.CharField()

    created_at = serializers.DateTimeField()