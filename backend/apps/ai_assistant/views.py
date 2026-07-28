from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from .models import AIConversation
from .serializers import (
    AIConversationSerializer,
    AIConversationHistorySerializer,
)

from .services import get_ai_response


class AIChatView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = AIConversationSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        message = serializer.validated_data["message"]

        try:
            ai_response = get_ai_response(
                message
            )

        except Exception as e:
            return Response(
                {
                    "success": False,
                    "error": str(e)
                },
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

        conversation = AIConversation.objects.create(
            user=request.user,
            message=message,
            response=ai_response
        )

        return Response(
            {
                "success": True,
                "id": conversation.id,
                "message": message,
                "response": ai_response,
                "created_at": conversation.created_at,
            },
            status=status.HTTP_200_OK
        )


class AIHistoryView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        conversations = AIConversation.objects.filter(
            user=request.user
        ).order_by(
            "-created_at"
        )

        serializer = AIConversationHistorySerializer(
            conversations,
            many=True
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK
        )