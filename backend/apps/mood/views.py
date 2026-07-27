from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import MoodEntry
from .serializers import MoodSerializer


class MoodListCreateView(generics.ListCreateAPIView):

    serializer_class = MoodSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return MoodEntry.objects.filter(
            user=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user
        )