from rest_framework import generics
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated

from .models import Cycle, CycleEntry
from .serializers import CycleSerializer, CycleEntrySerializer


class CycleListCreateView(generics.ListCreateAPIView):
    serializer_class = CycleSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Cycle.objects.filter(
            user=self.request.user
        )

    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user
        )


class CycleDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CycleSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Cycle.objects.filter(
            user=self.request.user
        )


class CycleEntryCreateView(generics.CreateAPIView):
    serializer_class = CycleEntrySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        cycle_id = self.kwargs["cycle_id"]

        cycle = get_object_or_404(
    Cycle,
    id=cycle_id,
    user=self.request.user
)

        serializer.save(
            cycle=cycle
        )