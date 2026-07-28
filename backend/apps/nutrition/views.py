from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import NutritionEntry
from .serializers import NutritionEntrySerializer


class NutritionEntryListCreateView(generics.ListCreateAPIView):

    serializer_class = NutritionEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return NutritionEntry.objects.filter(
            user=self.request.user
        ).order_by("-date")


    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user
        )


class NutritionEntryDetailView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = NutritionEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return NutritionEntry.objects.filter(
            user=self.request.user
        )