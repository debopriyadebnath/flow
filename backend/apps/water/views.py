from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import WaterIntake
from .serializers import WaterIntakeSerializer


class WaterIntakeListCreateView(generics.ListCreateAPIView):

    serializer_class = WaterIntakeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return WaterIntake.objects.filter(
            user=self.request.user
        ).order_by("-date")

    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user
        )


class WaterIntakeDetailView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = WaterIntakeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return WaterIntake.objects.filter(
            user=self.request.user
        )